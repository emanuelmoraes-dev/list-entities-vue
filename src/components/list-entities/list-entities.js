import isISODate from 'is-iso-date'
import dateUtility from 'datetime-utility'
import VuesticWidget from 'vuestic-components/vuestic-widget/VuesticWidget'
import VuesticModal from 'vuestic-components/vuestic-modal/VuesticModal'
import ModalEntity from 'src/components/modal-entity/modal-entity.vue'
import Show from './show/show.vue'
import * as util from 'src/services/util'

export default {
	name: 'list-entities',

	components: {
		VuesticWidget, // componente de widget do vuestic (com algumas customizações)
		VuesticModal, // componente de modal do vuestic (com algumas cusomizações)
		ModalEntity, // componente personalizado para a exibição de entidades
		Show // componente responsável por exibir todo o conteúdo dentro dele ignorando o parâmetro headerText
	},

	data () {
		return {
			entities: [], // entidades a serem listadas
			totalElements: 0,
			attrSearch: null,
			inputSearch: '',
			page: 1,

			showSuccess: false, // usado para verificar se o modal de sucesso está sendo exibido
			showConfirm: false, // usado para verificar se o modal de confirmação de remoão está sendo exibido
			enityShow: null, // entidade que atualmente está sendo exibida no modal de exibição da entidade (modal-entity)
			entityRemove: null, // entidade selecionada para remoção
			indexEntityRemove: null, // index da entidade selecionada para remoção
			isUpdateLastAttr: true, // se true, quando value (v-model) for atualizado o último atributo a ser exibido na tabela será atualizado também
			descriptorEntity: null, // 'defitions.descriptor' refatorado
			searchOperator: null // operador selecionado para busca
		}
	},

	created () {
		this.entities = this.value
		this.prepareDescriptor()
		this.attrSearch = this.attrSearch$

		if (this.attrSearch === null)
			this.attrSearch = this.optionsSearch[0].value // inicialmente busca-se por todos os atributos

		if (this.autoSearch) this.search() // se autoSearch for true busca-se ao inciar o componente
	},

	methods: {
		/**
		 * evento lançado ao clicar em qualquer tecla no campo de pesquisa
		 * @param {Event} e - evento do DOM
		 */
		keyHandler (e) {
			if (event.keyCode === 13) // Se precionado enter
				this.search(true) // busca-se resetando a paginação
		},

		/**
		 * evento lançado ao clicar em algum header na tabela.
		 * Define o atribuo de ordenação da tabela com a ordem.
		 * @param {String} atribute - nome do atributo a ser ordenado
		 */
		onClickHeader (atribute) {
			if (!atribute) return

			let order
			let attrSort

			if (this.definitions.sort[0] === '-') {
				order = '-'
				attrSort = this.definitions.sort.substring(1)
			} else if (this.definitions.sort[0] === '+') {
				order = '+'
				attrSort = this.definitions.sort.substring(1)
			} else {
				order = '+'
				attrSort = this.definitions.sort
			}

			if (atribute === attrSort) // Se o atributo a ser ordenado for o mesmo que o anterior
				this.definitions.sort = `${order === '-' ? '+' : '-'}${atribute}` // ordena-se pelo mesmo atributo invertendo a ordem
			else
				this.definitions.sort = `+${atribute}` // ordena-se o atributo informado em ordem crescente
		},

		/**
		 * responsável por chamar o modal que irá exibir os atributos da entidade
		 * @param {Object} entity - wntidade a ser visualizada
		 * @param {number} index - posição da entidade a ser visualizada
		 */
		entityView (entity, index) {
			this.enityShow = entity
			const showModalEntity = this.$refs.showModalEntity
			showModalEntity.open()
		},

		/**
		 * chama o modal de confirmação da remoção de uma entidade
		 * @param {Object} entity - entidade a ser removida
		 * @param {number} index - posição da entidade a ser removida na tabela
		 */
		remove (entity, index) {
			if (!this.customRemove) {
				this.entityRemove = entity
				this.indexEntityRemove = index
				this.msg_modal = this.confirmMessage
				this.$refs.confirmModal.open()
			} else {
				this.$emit('on_remove', entity, index)
			}
		},

		/**
		 * chama a rota responsável por exibir a tela de edição de uma entidade
		 * @param {Object} entity - entidade a ser editada
		 * @param {number} index - posição da entidade a ser editada
		 */
		edit (entity, index) {
			this.$emit('on_edit', entity, index)
			if (!this.customEdit)
				this.$router.push({ name: this.routeEditName, params: this.parseEditParams(entity, index, this.idAttrName) })
		},

		/** evento executado ao se confirmar a remoção de uma entidade */
		onRemove () {
			if (!this.request)
				throw new Error('a propriedade "request" não foi definida')

			this.request.delete(this.entityRemove[this.idAttrName])
				.then(res => {
					this.$emit('on_remove', this.entityRemove, this.indexEntityRemove)

					if (this.isShowModal)
						this.$refs.successModal.open()

					this.search(false)
				}).catch(err => {
					this.$emit('on_error', err)
					this.$emit('on_error_remove', err)
				})
		},

		/**
		 * atualiza o atributo '__lastAttrValue' de todas as entidades exibidas
		 * para o valor do atributo presente em 'lastAttr'
		 * @param {Object[]=} entities - entidades a terem o atributo '__lastAttrValue' atualizado
		 */
		updateLastAttr (entities) {
			this.isUpdateLastAttr = false // flag para evitar recursão infinita ativada
			if (!entities) entities = this.entities.slice()

			for (let entity of entities) {
				entity.__lastAttrValue = util.getAttr(this.lastAttr.value, entity, true)
				if (entity.__lastAttrValue instanceof Array)
					entity.__lastAttrValue = util.extractValuesByArray(entity.__lastAttrValue)
			}

			this.$emit('input', entities)
		},

		/** transcreve em 'descriptorEntity' o 'definitions.descriptor' para estar pronto para o uso */
		prepareDescriptor (descriptor) {
			this.descriptorEntity = { ...(descriptor || this.definitions.descriptor) }

			for (let key of Object.keys(this.descriptorEntity)) {
				let descriptorValue = this.descriptorEntity[key]

				if (!descriptorValue)
					continue

				if (descriptorValue === String)
					descriptorValue = { type: String }
				else if (descriptorValue === Number)
					descriptorValue = { type: Number }
				else if (descriptorValue === Boolean)
					descriptorValue = { type: Boolean }
				else if (descriptorValue === Date)
					descriptorValue = { type: Date, pattern: this.defaultPattern }
				else
					descriptorValue = { ...descriptorValue }

				if (descriptorValue.display === undefined)
					descriptorValue.display = `${key} :`

				if (
					descriptorValue &&
          descriptorValue.type === Date &&
          descriptorValue.pattern === undefined
				) {
					descriptorValue.pattern = this.defaultPattern
				}

				this.$set(this.descriptorEntity, key, descriptorValue)
			}
		},

		search (startList) {
			let attr = this.attrSearch.value
			let type

			if (this.attrSearch.value === this.attrAll)
				type = null
			else
				type = this.descriptorEntity[attr].type

			let inputSearch = this.inputSearch
			inputSearch = inputSearch.trim()

			let operatorName = this.searchOperator

			let params = {}

			if (attr && type) {
				if (type === Boolean)
					params = this.getParamsByBoolean(attr, inputSearch)
				else if (type === Date)
					params = this.getParamsByDate(attr, inputSearch, operatorName)
				else if (type === Number)
					params = this.getParamsByNumber(attr, inputSearch, operatorName)
				else
					params = this.getParamsByString(attr, inputSearch, operatorName)
			}

			if (startList)
				this.page = 1

			params = [
				...params,
				...this.paramsRequest
			]

			this.$emit('on_search', params, type, attr, inputSearch)

			if (!this.request)
				return

			if (!type || this.attrSearch.value === this.attrAll)
				this.searchDefault(params, attr, inputSearch).catch(err => {
					this.$emit('on_error', err)
					this.$emit('on_error_search_default', err)
				})
			else if (params instanceof Array && params.length === 0)
				this.searchAll(params, attr, inputSearch, type).catch(err => {
					this.$emit('on_error', err)
					this.$emit('on_error_search_all', err)
				})
			else
				this.searchAttr(params, attr, inputSearch, type).catch(err => {
					this.$emit('on_error', err)
					this.$emit('on_error_search_attr', err)
				})
		},

		async searchDefault (params, attr, inputSearch) {
			let { count, entities } = await this.request.searchDefault(params, attr, inputSearch, this.page, this.pageSize, this.definitions.sort)

			this.totalElements = count
			this.entities = entities
			this.updateLastAttr(entities)
			this.$emit('on_search_success', params, attr, inputSearch)
			this.$emit('on_search_default_success', params, attr, inputSearch)
		},

		async searchAll (params, attr, inputSearch, type) {
			let { count, entities } = await this.request.searchAll(params, attr, inputSearch, type, this.page, this.pageSize, this.definitions.sort)

			this.totalElements = count
			this.entities = entities
			this.updateLastAttr(entities)
			this.$emit('on_search_success', params, attr, inputSearch)
			this.$emit('on_search_all_success', params, attr, inputSearch)
		},

		async searchAttr (params, attr, inputSearch, type) {
			let { count, entities } = await this.request.searchAttr(params, attr, inputSearch, type, this.page, this.pageSize, this.definitions.sort)

			this.totalElements = count
			this.entities = entities
			this.updateLastAttr(entities)
			this.$emit('on_search_success', params, attr, inputSearch)
			this.$emit('on_search_attr_success', params, attr, inputSearch)
		},

		getParamsByBoolean (attr, inputSearch) {
			if (!inputSearch)
				return []

			if (inputSearch.toLowerCase() === this.trueStr.toLowerCase()) {
				let params = {}
				params[attr] = {
					value: 1,
					operator: 'default'
				}
				return [params]
			}

			let params = {}
			params[attr] = {
				value: 0,
				operator: 'default',
				descriptor: this.descriptorEntity[attr]
			}
			return [params]
		},

		getParamsByDate (attr, inputSearch, operatorName) {
			if (!inputSearch)
				return []

			let operator

			if (operatorName === 'default')
				operator = 'default'
			else
				operator = this.dateOperators[operatorName]

			let descriptorValue = this.descriptorEntity[attr]
			let date = dateUtility.toDate(inputSearch, descriptorValue.pattern)
			let pattern = dateUtility.getMinPattern(inputSearch, descriptorValue.pattern)

			let cmpDate1 = new Date(2019, 7, 7, 7, 7, 7, 7)
			let cmpDate2 = dateUtility.toDate(
				dateUtility.dateToStr(cmpDate1, pattern),
				pattern
			)

			if (operator.toLowerCase() !== 'equals') {
				let params = {}
				params[attr] = {
					value: date,
					operator,
					descriptor: this.descriptorEntity[attr]
				}
				return [params]
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2)) {
				let params = {}
				params[attr] = {
					value: date,
					operator: 'equals',
					descriptor: this.descriptorEntity[attr]
				}
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2, 6)) {
				let date2 = dateUtility.plus(date, dateUtility.PERIODS.SECOND, 1)

				let param1 = {}
				param1[attr] = {
					value: date,
					operator: 'greaterOrEqualThan',
					descriptor: this.descriptorEntity[attr]
				}

				let param2 = {}
				param2[attr] = {
					value: date2,
					operator: 'lessThan',
					descriptor: this.descriptorEntity[attr]
				}

				return [param1, param2]
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2, 5)) {
				let date2 = dateUtility.plus(date, dateUtility.PERIODS.MINUTE, 1)

				let param1 = {}
				param1[attr] = {
					value: date,
					operator: 'greaterOrEqualThan',
					descriptor: this.descriptorEntity[attr]
				}

				let param2 = {}
				param2[attr] = {
					value: date2,
					operator: 'lessThan',
					descriptor: this.descriptorEntity[attr]
				}

				return [param1, param2]
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2, 4)) {
				let date2 = dateUtility.plus(date, dateUtility.PERIODS.HOUR, 1)

				let param1 = {}
				param1[attr] = {
					value: date,
					operator: 'greaterOrEqualThan',
					descriptor: this.descriptorEntity[attr]
				}

				let param2 = {}
				param2[attr] = {
					value: date2,
					operator: 'lessThan',
					descriptor: this.descriptorEntity[attr]
				}

				return [param1, param2]
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2, 3)) {
				let date2 = dateUtility.plus(date, dateUtility.PERIODS.DAY, 1)

				let param1 = {}
				param1[attr] = {
					value: date,
					operator: 'greaterOrEqualThan',
					descriptor: this.descriptorEntity[attr]
				}

				let param2 = {}
				param2[attr] = {
					value: date2,
					operator: 'lessThan',
					descriptor: this.descriptorEntity[attr]
				}

				return [param1, param2]
			} else {
				let date2 = dateUtility.plus(date, dateUtility.PERIODS.MONTH, 1)

				let param1 = {}
				param1[attr] = {
					value: date,
					operator: 'greaterOrEqualThan',
					descriptor: this.descriptorEntity[attr]
				}

				let param2 = {}
				param2[attr] = {
					value: date2,
					operator: 'lessThan',
					descriptor: this.descriptorEntity[attr]
				}

				return [param1, param2]
			}
		},

		getParamsByNumber (attr, inputSearch, operatorName) {
			if (!inputSearch)
				return []

			let operator

			if (operatorName === 'default')
				operator = 'default'
			else
				operator = this.numberOperators[operatorName]

			let param = {}
			param[attr] = {
				value: parseFloat(inputSearch),
				operator,
				descriptor: this.descriptorEntity[attr]
			}
			return [param]
		},

		getParamsByString (attr, inputSearch, operatorName) {
			if (!inputSearch)
				return []

			let operator

			if (operatorName === 'default')
				operator = 'default'
			else
				operator = this.stringOperators[operatorName]

			let param = {}
			param[attr] = {
				value: inputSearch,
				operator,
				descriptor: this.descriptorEntity[attr]
			}
			return [param]
		}
	},

	watch: {
		/**
		 * ao atualizar a lista de entidades atualiza-se o atributo '__lastAttrValue' de todas as entidades
		 * @param {Object[]} value - entidades sendo exibidas na tabela
		 */
		entities (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('input', newValue)

			if (this.isUpdateLastAttr) this.updateLastAttr()
			else this.isUpdateLastAttr = true // flag para evitar recursão infinita desativada
		},

		value (newValue, oldValue) {
			if (newValue !== oldValue)
				this.entities = newValue
		},

		/** ao mudar a quantidade total de elementos da pesquisa */
		totalElements (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:totalElements$', newValue)
		},

		totalElements$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.totalElements = newValue
		},

		/** ao mudar o atributo de ordenação, realiza-se a pesquisa novamente na mésma página */
		'definitions.sort' (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:sort$', newValue)
			this.search(false)
		},

		sort$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.definitions.sort = newValue
		},

		/**
		 * ao mudar o atributo a ser filtrado, verifica-se se
		 * o primeiro atribuo deve ser aquele a qual deve ser
		 * usado para ordenar as entidades
		 * @param {Object} newValue - novo atributo a ser filtrado
		 * @param {object} oldValue - valor antigo que foi selecionado
		 *     para filtragem
		 */
		attrSearch (newValue, oldValue) {
			if (newValue !== oldValue && this.searchOperatorsShow && this.operators && this.operators.length)
				this.searchOperator = this.operators[0]

			if (newValue !== oldValue)
				this.$emit('update:attrSearch$', newValue)

			if (!newValue) { // se novo valor for "vazio"
				this.attrSearch = oldValue // atribui-se o valor antigo
			} else {
				oldValue = oldValue || newValue

				this.updateLastAttr() // atualiza-se o '__lastAttrValue' de todas as entidades

				let attrSort

				if (this.definitions.sort[0] === '-')
					attrSort = this.definitions.sort.substring(1)
				else if (this.definitions.sort[0] === '+')
					attrSort = this.definitions.sort.substring(1)
				else
					attrSort = this.definitions.sort

				// se o novo atributo a ser filtrado escondeu o aributo que anteriormente estava sendo usado na ordenação
				if (!this.definitions.displayAttrs.find(a => a.value === attrSort) && newValue.value !== oldValue.value &&
            (![...this.definitions.displayAttrs, this.definitions.defaultLastAttr, { value: this.attrAll }].find(a => a.value === newValue.value) ||
                ![...this.definitions.displayAttrs, this.definitions.defaultLastAttr, { value: this.attrAll }].find(a => a.value === oldValue.value))) {
					this.onClickHeader(`+${this.definitions.displayAttrs[0].value}`) // ordena-se as entidades pelo primeiro atributo de maneira crecente
				}
			}
		},

		attrSearch$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.attrSearch = newValue
		},

		/** ao mudar a página da tabela busca-se novamente as entidades da tabela */
		page (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:page$', newValue)

			this.search(false) // busca-se na página atual
		},

		page$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.page = newValue
		},

		// quando o usuário mudar o 'descriptor', recria-se no 'descriptorEntity'
		'definitions.descriptor' (descriptor) {
			this.prepareDescriptor(descriptor)
		},

		inputSearch (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:inputSearch$', newValue)
		},

		inputSearch$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.inputSearch = newValue
		}
	},

	computed: {
		/** nome do componente que irá envolver a tabela */
		componentShowTable () {
			return this.isCompact ? 'show' : 'vuestic-widget'
		},

		/** retorna o atributo a ser exebido por último na tabela */
		lastAttr () {
			let v = this.attrSearch.value

			if (
				v === this.attrAll ||
				this.definitions.displayAttrs.find(attr => attr.value === v)
			) return this.definitions.defaultLastAttr

			return this.attrSearch
		},

		/** lista de operadores a serem usados na pesquisa */
		operators () {
			const descriptorValue = this.descriptorEntity[this.attrSearch.value]

			if (!descriptorValue)
				return []

			if (descriptorValue.type === String)
				return Object.keys(this.stringOperators)
			else if (descriptorValue.type === Number)
				return Object.keys(this.numberOperators)
			else if (descriptorValue.type === Date)
				return Object.keys(this.dateOperators)
			else
				return []
		},

		optionsSearch () {
			let options = this.definitions.optionsSearch.map(opt => ({
				text: opt.display,
				value: opt
			}))

			return [
				{
					value: {
						display: this.attrAll,
						value: this.attrAll
					},
					text: this.attrAll
				},
				...options
			]
		}
	},

	filters: {
		/**
		 * Obtém o valor (ou valores) de um objeto por meio da especificação de uma propriedade.
		 * @param {Object} obj - objeto a ter o valor de sua propriedade retornada
		 * @param {string} property - especificação do caminho usado para acessar uma determinada propriedade.
		 *     Ao ser encontrado um ponto (.) em 'property' tenta-se acessar as propriedades
		 *     de dentro deste objeto especificadas após o ponto (.), realizando este procedimento
		 *     de maneira recursiva
		 * @returns {any}
		 */
		getValue (entity, attr) {
			let value = util.getAttr(attr.value, entity, true)
			if (value instanceof Array) { value = util.extractValuesByArray(value) }
			return value
		},

		/**
		 * prepara valor para ser exibido em uma célula da tabela
		 * @param {any} value - valor para ser exibido em uma célula da tabela
		 * @param {string} attr - atributo usado para acessar essa propriedade na entidade
		 * @param {Object} descriptor - objeto contendo a descrição dos atributos da entidade
		 * @param {string} joinSep - string usada para unir os  valores de um array (se for o caso)
		 * @returns {any}
		 */
		parseAttr (value, attr, descriptor, joinSep) {
			if (!attr) return value

			if (value instanceof Array) {
				if (descriptor[attr.value].adapter)
					value = value.map(descriptor[attr.value].adapter)
				else if (descriptor[attr.value].numberAdapter && typeof descriptor[attr.value].fixed === 'number')
					value = value.map(v => parseFloat(v).toFixed(descriptor[attr.value].fixed))
				else if (descriptor[attr.value].numberAdapter)
					value = value.map(v => (parseFloat(v) && parseFloat(v).toString()) || v)
				return value.join(descriptor && descriptor[attr.value].joinSep || joinSep)
				// eslint-disable-next-line brace-style
			}

			else if (typeof value === 'boolean') return (value && 'SIM') || 'NÃO'
			else if (value instanceof Date) return dateUtility.dateToStr(value, descriptor && descriptor[attr.value].pattern || this.defaultPattern)
			else if (isISODate(value)) return dateUtility.dateToStr(new Date(value), descriptor && descriptor[attr.value].pattern || this.defaultPattern)
			return value
		}
	},

	props: {
		/** se true, chama-se automaticamente o método search */
		autoSearch: {
			type: Boolean,
			default: false
		},

		/**
		 * contém todas as informações necessárias sobre a
		 * modelagem da entidade e o comportamento do componente
		 * para com cada atributo da entidade
		 */
		definitions: {
			validator (value) {
				if (typeof value !== 'object' || !value) {
					console.error('definitions not is object')
					return false
				}

				if (typeof value.sort !== 'string') {
					console.error('definitions.sort not is string')
					return false
				}

				if (typeof value.descriptor !== 'object' || !value.descriptor) {
					console.error('definitions.descroptor not is object')
					return false
				}

				if (value.descriptorModal && typeof value.descriptorModal !== 'object') {
					console.error('definitions.descriptorModal not is object')
					return false
				}

				if (value.mapPropModalEntity && typeof value.mapPropModalEntity !== 'object') {
					console.error('definitions.mapPropModalEntity not is object')
					return false
				}

				if (typeof value.defaultLastAttr !== 'object' ||
						!value.defaultLastAttr ||
						typeof value.defaultLastAttr.display !== 'string' ||
						typeof value.defaultLastAttr.value !== 'string'
				) {
					console.error('definitions.defaultLastAttr not is object with string props display and value')
					return false
				}

				if (
					value.modalSlots &&
					(
						!(value.modalSlots instanceof Array) ||
						value.modalSlots.length !== 0 &&
						value.modalSlots.find(s => typeof s !== 'string')
					)
				) {
					console.error('definitions.modalSlots not is string[]')
					return false
				}

				value.modalSlots = value.modalSlots || []

				if (!(value.optionsSearch instanceof Array)) {
					console.error('definitions.optionsSearch not is array<{ display: string, value: string }>')
					return false
				}

				let optionsSearchValid = true

				for (let key of Object.keys(value.optionsSearch)) {
					let v = value.optionsSearch[key]
					if (typeof v.display !== 'string' || typeof v.value !== 'string') {
						optionsSearchValid = false
						break
					}
				}

				if (!optionsSearchValid) {
					console.error('definitions.optionsSearchValid not is array<{ display: string, value: string }>')
					return false
				}

				if (!(value.displayAttrs instanceof Array)) {
					console.error('definitions.displayAttrs not is array<{ display: string, value: string }>')
					return false
				}

				let optionsDisplayAttrs = true

				for (let key of Object.keys(value.displayAttrs)) {
					let v = value.displayAttrs[key]
					if (typeof v.display !== 'string' || typeof v.value !== 'string') {
						optionsDisplayAttrs = false
						break
					}
				}

				if (!optionsDisplayAttrs) {
					console.error('definitions.displayAttrs not is array<{ display: string, value: string }>')
					return false
				}

				let cvalue = { ...value }

				delete cvalue.descriptor
				delete cvalue.optionsSearch
				delete cvalue.displayAttrs
				delete cvalue.sort
				delete cvalue.descriptorModal
				delete cvalue.mapPropModalEntity
				delete cvalue.defaultLastAttr
				delete cvalue.modalSlots

				if (Object.keys(cvalue).length) {
					console.error(Object.keys(cvalue).join(',') + ' invalid in definitions')
					return false
				}

				return true
			},

			required: true
		},

		/**
		 * contém todas as funões e informações para que o
		 * componente possa realizar as requisições para o servidor
		 */
		request: {
			validator (value) {
				if (value === null) return true

				if (typeof value !== 'object' || !value) {
					console.error('request not is null or object')
					return false
				}

				if (typeof value.searchDefault !== 'function') {
					console.error('request.searchDefault not is a function')
					return false
				}

				if (typeof value.searchAll !== 'function') {
					console.error('request.searchAll not is a function')
					return false
				}

				if (typeof value.searchAttr !== 'function') {
					console.error('request.searchAttr not is a function')
					return false
				}

				let cvalue = { ...value }

				delete cvalue.searchDefault
				delete cvalue.searchAll
				delete cvalue.searchAttr

				if (Object.keys(cvalue).length) {
					console.error(Object.keys(cvalue).join(',') + ' invalid in request')
					return false
				}

				return true
			},

			default: () => null
		},

		/** título para exibir no widget da tabela de resultados */
		titleTable: {
			type: String,
			required: true
		},

		/**
		 * opção de busca (objeto com 'display' e 'value') representando
		 * a opção de pesquisa por todos os atributos
		 */
		attrAll: {
			type: String,
			required: true
		},

		/**
		 * contém o texto a ser exibido no header da tabela
		 * acima do conteúdo presentte no slot 'check'
		 */
		tdCheckName: {
			type: String,
			default: ''
		},

		/** true para mostrar operadores de comparação a serem usados na pesquisa */
		searchOperatorsShow: {
			type: Boolean,
			default: false
		},

		/**
		 * mapeia as operações disponíveis para busca de atributos textuais.
		 * A chave é o valor do texto a aparecer nas opções de operações e o
		 * valor é o tipo de operação
		 */
		stringOperators: {
			type: Object,
			default: () => ({
				contains: 'contains',
				equals: 'equals',
				startsWith: 'startsWith',
				endsWith: 'endsWith'
			})
		},

		/**
		 * mapeia as operações disponíveis para busca de atributos numéricos.
		 * A chave é o valor do texto a aparecer nas opções de operações e o
		 * valor é o tipo de operação
		 */
		numberOperators: {
			type: Object,
			default: () => ({
				equals: 'equals',
				greaterThan: 'greaterThan',
				lessThan: 'lessThan',
				greaterOrEqualThan: 'greaterOrEqualThan',
				lessOrEqualThan: 'lessOrEqualThan'
			})
		},

		/**
		 * mapeia as operações disponpiveis para busca de atributos temporais.
		 * A chave é o valor do texto a aparecer nas opções de operações e o
		 * valor é o tipo de operação
		 */
		dateOperators: {
			type: Object,
			default: () => ({
				equals: 'equals',
				greaterThan: 'greaterThan',
				lessThan: 'lessThan',
				greaterOrEqualThan: 'greaterOrEqualThan',
				lessOrEqualThan: 'lessOrEqualThan'
			})
		},

		/** título para exibir no widget de busca */
		titleSearch: {
			type: String,
			default: 'Search'
		},

		/** nome a aparecer acima das opções na tabela */
		tdOptionName: {
			type: String,
			default: 'OPTIONS:'
		},

		/** nome do atribuo que identifica a entidade (pode ser quaquer atribuo único) */
		idAttrName: {
			type: String,
			default: 'id'
		},

		/** texto a ser exibido no botão de "OK" do modal de sucesso */
		okText: {
			type: String,
			default: 'OK'
		},

		/** texto a ser exibido no botão de "confirmação" do modal de confirmação */
		confirmText: {
			type: String,
			default: 'YES'
		},

		/** texto a ser exibido no botão de "cancelamento" do modal de confirmação */
		cancelText: {
			type: String,
			default: 'NO'
		},

		/** títuto do modal de sucesso */
		titleSuccess: {
			type: String,
			default: 'Success!'
		},

		/** título do modal de confirmação */
		titleConfirm: {
			type: String,
			default: 'Attention!'
		},

		/** título do modal de exibição da entidade */
		titleModalEntity: {
			type: String,
			default: 'Entity Data'
		},

		/** texto do botão "OK" do modal de exibição da entidade */
		confirmTextModalEntity: {
			Type: String,
			default: 'OK'
		},

		/** mensagem a ser exibida no modal de sucesso exibido ao remover uma entidade com sucesso */
		removeSuccessMessage: {
			type: String,
			default: 'Successfully deleted entity!'
		},

		/** mensagem a ser exibida no modal de confirmação de remoção de entidade */
		removeConfirmMessage: {
			type: String,
			default: 'Are you sure you want to delete this entity?'
		},

		/** string que representa o valor 'true' para ser usado nas buscas */
		trueStr: {
			type: String,
			default: 'YES'
		},

		/** string que representa o valor 'false' para ser usado nas buscas */
		falseStr: {
			type: String,
			default: 'NO'
		},

		/** string que representa o padrão de exibição de datas */
		defaultPattern: {
			type: String,
			default: 'yyyy/MM/dd'
		},

		/** classe css do botão "OK" do modal de exibição da entidade */
		okClassModalEntity: {
			type: String,
			default: 'btn btn-primary btn-modal btn-ok-modal'
		},

		/**
		 * objeto cuja as chaves são o nome dos slots a serem exibidos após a exibição de todos os atributos.
		 * O valor de cada chave é o nome a ser exibido no header para cada opção informada
		 */
		options: {
			type: Object,
			default: () => ({})
		},

		/** true para ocultar o widget de busca */
		hideSearch: {
			type: Boolean,
			default: false
		},

		/** true para unir o widget de busca com o widget com a tabela de resultados */
		isCompact: {
			type: Boolean,
			default: false
		},

		/** se true, o último atributo da tabel será escondido */
		hideLastAttr: {
			type: Boolean,
			default: false
		},

		/** lista de classes css a serem usadas em cada linha da tabela */
		classLine: {
			type: Array,
			default: () => []
		},

		/** true para exibir a opção de visualizar os dados da entidade em um modal */
		optionView: {
			type: Boolean,
			default: true
		},

		/** true para exibir a opção de remover uma entidade */
		optionRemove: {
			type: Boolean,
			default: true
		},

		/** true para exibir a opção de editar uma entidade */
		optionEdit: {
			type: Boolean,
			default: false
		},

		/** true para exibir a opção de gerar e baixar um relatório das informações da entidade */
		optionReport: {
			type: Boolean,
			default: false
		},

		/** quantidade máxima de numeros (botões) de páginas a serem na paginação */
		limitPagination: {
			type: Number | String,
			default: 5
		},

		/** alinhamento da paginação */
		alignPagination: {
			type: String,
			default: 'left'
		},

		/** tamanho dos botões das páginas */
		sizePagination: {
			type: String,
			default: ''
		},

		/** quantidade de linhas máximas a serem exibidas por págna */
		pageSize: {
			type: Number,
			default: 10
		},

		/** true para que um modal de sucesso seja exibdo ao remover uma entidade */
		isShowModal: {
			type: Boolean,
			default: false
		},

		/** true para que o modal de exibição da entidade seja pequeno */
		smallModalEntity: {
			Type: Boolean,
			default: false
		},

		/** true para que o modal de exibição da entidade NÃO seja fechado ao clicar no fundo */
		forceModalEntity: {
			Type: Boolean,
			default: false
		},

		/** nome da rota contendo a página de edição da entidade */
		routeNameEdit: {
			type: String,
			default: () => null
		},

		/**
		 * função que recebe uma entidade e sua posição na tabela e
		 * retorna os parâmetros a passar para a rota de edição
		 */
		parseEditParams: {
			type: Function,
			default: (entity, index, idAttrName) => ({ [idAttrName]: entity[idAttrName] })
		},

		/** parâmetros padrão a serem inserodos na busca */
		paramsRequest: {
			type: Array,
			default: () => []
		},

		/** usado para unir valores de um array a ser exibido na tabela */
		joinSep: {
			type: String,
			default: '/'
		},

		// propriedades sincronas

		value: {
			type: Array,
			required: true
		},

		/** quantidade total de entidades (quantidade total de resultados) */
		totalElements$: {
			type: Number,
			default: 0
		},

		/** página atual sendo exibida */
		page$: {
			type: Number,
			default: 1
		},

		/** atributo que está sendo buscado */
		attrSearch$: {
			type: Object,
			default: () => null
		},

		/** valor que está sendo buscado */
		inputSearch$: {
			type: String,
			default: ''
		}
	}
}
