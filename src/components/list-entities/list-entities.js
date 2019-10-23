import isISODate from 'is-iso-date'
import * as dateUtility from 'datetime-utility'
import VuesticWidget from '../../../lib/vuestic/components/vuestic-widget/VuesticWidget'
import VuesticModal from '../../../lib/vuestic/components/vuestic-modal/VuesticModal'
import ModalEntity from '../modal-entity/modal-entity.vue'
import Show from './show/show.vue'
import * as util from '../../services/util'

export default {
	components: {
		VuesticWidget, // componente de widget do vuestic (com algumas customizações)
		VuesticModal, // componente de modal do vuestic (com algumas cusomizações)
		'modal-entity': ModalEntity, // componente personalizado para a exibição de entidades
		Show // componente responsável por exibir todo o conteúdo dentro dele ignorando o parâmetro headerText
	},

	data () {
		return {
			ctxLev: {},

			dictionary: null, // dicionário mesclado com as definições globais e locais
			descriptorEntity: null, // 'defitions.descriptor' refatorado
			entities: [], // entidades a serem listadas

			showSuccess: false, // usado para verificar se o modal de sucesso está sendo exibido
			showConfirm: false, // usado para verificar se o modal de confirmação de remoão está sendo exibido
			enityShow: null, // entidade que atualmente está sendo exibida no modal de exibição da entidade (modal-entity)
			entityRemove: null, // entidade selecionada para remoção
			indexEntityRemove: null, // index da entidade selecionada para remoção
			isUpdateLastAttr: true, // se true, quando value (v-model) for atualizado o último atributo a ser exibido na tabela será atualizado também
			searchOperator: null // operador selecionado para busca
		}
	},

	created () {
		this.initSync()
		this.loadDictionary()
		this.entities = this.value
		this.prepareDescriptor()

		if (this.sync.attrSearch === null && this.optionsSearch && this.optionsSearch.length)
			this.sync.attrSearch = this.optionsSearch[0].value // inicialmente busca-se por todos os atributos
		else if (this.sync.attrSearch === null)
			this.sync.attrSearch = { display: '', value: '' }

		if (this.autoSearch) this.search() // se autoSearch for true busca-se ao inciar o componente
	},

	methods: {
		/**
		 * inicializa a propriedade sync com pelo menos com os valores padrão
		 */
		initSync () {
			this.sync.totalElements = this.sync.totalElements !== undefined ? this.sync.totalElements : 0
			this.sync.page = this.sync.page !== undefined ? this.sync.page : 1
			this.sync.attrSearch = this.sync.attrSearch !== undefined ? this.sync.attrSearch : null
			this.sync.inputSearch = this.sync.inputSearch !== undefined ? this.sync.inputSearch : ''
		},

		/**
		 * inicializa o dictionary mesclando as definições globais e locais
		 */
		loadDictionary () {
			let localDictionary = this.localDictionary

			if (!localDictionary)
				localDictionary = {}

			const ctxName = this.$getListEntitiesCtxName()
			const ctx = this[ctxName]
			this.ctxLev = ctx

			let globalDictionary = util.getResultDictionary(this.i18nArgs, this, ctx.lang, ctx.dictionaries)
			globalDictionary = globalDictionary.translate
			this.dictionary = util.patchUpdate(globalDictionary, localDictionary, this.i18nArgs, this)
		},

		translatePattern (pattern) {
			if (!this.dictionary || !this.dictionary.patterns || !(pattern in this.dictionary.patterns))
				return pattern
			return this.dictionary.patterns[pattern]
		},

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
			if (this.routeNameEdit && this.parseEditParams && this.parseEditParams(entity, index, this.idAttrName))
				this.$router.push({ name: this.routeNameEdit, params: this.parseEditParams(entity, index, this.idAttrName) })
			else if (this.routeNameEdit)
				this.$router.push({ name: this.routeNameEdit })
		},

		/** evento executado ao se confirmar a remoção de uma entidade */
		onRemove () {
			if (!this.request)
				throw new Error('a propriedade "request" não foi definida')

			this.request.delete(this.entityRemove[this.idAttrName], this.entityRemove, this.indexEntityRemove, this.entities)
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
			if (!this.optionsSearch || !this.optionsSearch.length) {
				this.$emit('on_search', this.sync.inputSearch, this.paramsRequest, null, null)
				return
			}

			let attr = this.sync.attrSearch.value
			let type

			if (this.sync.attrSearch.value === this.dictionary.attrAll)
				type = null
			else
				type = this.descriptorEntity[attr].type

			let inputSearch = this.sync.inputSearch
			inputSearch = inputSearch.trim()

			let operator = this.searchOperator

			let params = []

			if (attr && type) {
				if (type === Boolean)
					params = this.getParamsByBoolean(attr, inputSearch)
				else if (type === Date)
					params = this.getParamsByDate(attr, inputSearch, operator)
				else if (type === Number)
					params = this.getParamsByNumber(attr, inputSearch, operator)
				else
					params = this.getParamsByString(attr, inputSearch, operator)
			}

			if (startList)
				this.sync.page = 1

			params = [
				...params,
				...this.paramsRequest
			]

			this.$emit('on_search', inputSearch, params, attr, type)

			if (!this.request)
				return

			if (!type && inputSearch)
				this.searchDefault(inputSearch, params).catch(err => {
					this.$emit('on_error', err)
					this.$emit('on_error_search', err)
					this.$emit('on_error_search_default', err)
				})
			else if (!params || !params.length)
				this.searchAll().catch(err => {
					this.$emit('on_error', err)
					this.$emit('on_error_search', err)
					this.$emit('on_error_search_all', err)
				})
			else
				this.searchAttr(inputSearch, params).catch(err => {
					this.$emit('on_error', err)
					this.$emit('on_error_search', err)
					this.$emit('on_error_search_attr', err)
				})
		},

		async searchDefault (inputSearch, params) {
			let { count, entities } = await this.request.searchDefault(this.sync.page, this.pageSize, this.definitions.sort, inputSearch, params)

			this.sync.totalElements = count
			this.entities = entities
			this.updateLastAttr(entities)
			this.$emit('on_search_success', entities, count)
			this.$emit('on_search_default_success', entities, count, inputSearch, params)
		},

		async searchAll () {
			let { count, entities } = await this.request.searchAll(this.sync.page, this.pageSize, this.definitions.sort)

			this.sync.totalElements = count
			this.entities = entities
			this.updateLastAttr(entities)
			this.$emit('on_search_success', entities, count)
			this.$emit('on_search_all_success', entities, count)
		},

		async searchAttr (inputSearch, params) {
			let { count, entities } = await this.request.searchAttr(this.sync.page, this.pageSize, this.definitions.sort, inputSearch, params)

			this.sync.totalElements = count
			this.entities = entities
			this.updateLastAttr(entities)
			this.$emit('on_search_success', entities, count)
			this.$emit('on_search_attr_success', entities, count, inputSearch, params)
		},

		getParamsByBoolean (attr, inputSearch) {
			if (!inputSearch)
				return []

			inputSearch = inputSearch.trim()

			return [{
				value: inputSearch.toLowerCase() === this.dictionary.trueStr.toLowerCase(),
				attr,
				operator: '$eq',
				descriptor: this.descriptorEntity[attr]
			}]
		},

		getParamsByDate (attr, inputSearch, operator) {
			if (!inputSearch)
				return []

			let descriptorValue = this.descriptorEntity[attr]
			let date = dateUtility.toDate(inputSearch, this.translatePattern(descriptorValue.pattern))
			let pattern = dateUtility.getMinPattern(inputSearch, this.translatePattern(descriptorValue.pattern))

			let cmpDate1 = new Date(2019, 7, 7, 7, 7, 7, 7)
			let cmpDate2 = dateUtility.toDate(
				dateUtility.dateToStr(cmpDate1, pattern),
				pattern
			)

			let utilPeriod
			let utilPlus

			if (dateUtility.dateEquals(cmpDate1, cmpDate2)) {
				utilPeriod = dateUtility.PERIODS.MILLISECOND
				utilPlus = 0
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2, 6)) {
				utilPeriod = dateUtility.PERIODS.SECOND
				utilPlus = 1
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2, 5)) {
				utilPeriod = dateUtility.PERIODS.MINUTE
				utilPlus = 1
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2, 4)) {
				utilPeriod = dateUtility.PERIODS.HOUR
				utilPlus = 1
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2, 3)) {
				utilPeriod = dateUtility.PERIODS.DAY
				utilPlus = 1
			} else if (dateUtility.dateEquals(cmpDate1, cmpDate2, 2)) {
				utilPeriod = dateUtility.PERIODS.MONTH
				utilPlus = 1
			} else {
				utilPeriod = dateUtility.PERIODS.YEAR
				utilPlus = 1
			}

			if (utilPlus === 0) {
				return [{
					value: date,
					attr,
					operator,
					descriptor: this.descriptorEntity[attr]
				}]
			} else if (operator === '$eq') {
				let date2 = dateUtility.plus(date, utilPeriod, utilPlus)

				let param1 = {
					value: date,
					attr,
					operator: '$gte',
					descriptor: this.descriptorEntity[attr]
				}

				let param2 = {
					value: date2,
					attr,
					operator: '$lt',
					descriptor: this.descriptorEntity[attr]
				}

				return [param1, param2]
			} else if (operator === '$gt') {
				let date2 = dateUtility.plus(date, utilPeriod, utilPlus)

				return [{
					value: date2,
					attr,
					operator: '$gte',
					descriptor: this.descriptorEntity[attr]
				}]
			} else if (operator === '$lt') {
				return [{
					value: date,
					attr,
					operator: '$lt',
					descriptor: this.descriptorEntity[attr]
				}]
			} else if (operator === '$gte') {
				return [{
					value: date,
					attr,
					operator: '$gte',
					descriptor: this.descriptorEntity[attr]
				}]
			} else if (operator === '$lte') {
				let date2 = dateUtility.plus(date, utilPeriod, utilPlus)

				return [{
					value: date2,
					attr,
					operator: '$lt',
					descriptor: this.descriptorEntity[attr]
				}]
			} else {
				return [{
					value: date,
					attr,
					operator,
					descriptor: this.descriptorEntity[attr]
				}]
			}
		},

		getParamsByNumber (attr, inputSearch, operator) {
			if (!inputSearch)
				return []

			return [{
				value: parseFloat(inputSearch),
				attr,
				operator,
				descriptor: this.descriptorEntity[attr]
			}]
		},

		getParamsByString (attr, inputSearch, operator) {
			if (!inputSearch)
				return []

			return [{
				value: inputSearch,
				attr,
				operator,
				descriptor: this.descriptorEntity[attr]
			}]
		}
	},

	watch: {
		'ctxLev.lang' () {
			this.loadDictionary()
		},

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

		/** ao mudar o atributo de ordenação, realiza-se a pesquisa novamente na mesma página */
		'definitions.sort' (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('on_change_sort', newValue)
			this.search(false)
		},

		/**
		 * ao mudar o atributo a ser filtrado, verifica-se se
		 * o primeiro atribuo deve ser aquele a qual deve ser
		 * usado para ordenar as entidades
		 * @param {Object} newValue - novo atributo a ser filtrado
		 * @param {object} oldValue - valor antigo que foi selecionado
		 *     para filtragem
		 */
		'sync.attrSearch' (newValue, oldValue) {
			if (newValue !== oldValue && this.searchOperatorsShow && this.operators && this.operators.length) {
				this.searchOperator = this.operators[0].value
			}

			if (!newValue) { // se novo valor for "vazio"
				this.sync.attrSearch = oldValue // atribui-se o valor antigo
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

				// se o novo atributo a ser filtrado escondeu o atributo que anteriormente estava sendo usado na ordenação
				if (!this.definitions.displayAttrs.find(a => a.value === attrSort) && newValue.value !== oldValue.value &&
            (![...this.definitions.displayAttrs, this.definitions.defaultLastAttr, { value: this.dictionary.attrAll }].find(a => a.value === newValue.value) ||
                ![...this.definitions.displayAttrs, this.definitions.defaultLastAttr, { value: this.dictionary.attrAll }].find(a => a.value === oldValue.value))) {
					this.onClickHeader(`+${this.definitions.displayAttrs[0].value}`) // ordena-se as entidades pelo primeiro atributo de maneira crecente
				}
			}
		},

		/** ao mudar a página da tabela busca-se novamente as entidades da tabela */
		'sync.page' () {
			this.search(false) // busca-se na página atual
		},

		/** Ao mudar paramsRequest busca-se novamente */
		paramsRequest () {
			this.search(false) // busca-se na página atual
		},

		/** quando o usuário mudar o 'descriptor', recria-se no 'descriptorEntity' */
		'definitions.descriptor' (descriptor) {
			this.prepareDescriptor(descriptor)
		}
	},

	computed: {
		/** nome do componente que irá envolver a tabela */
		componentShowTable () {
			return this.isCompact || !this.useWidget ? 'show' : 'vuestic-widget'
		},

		/** nome do componente que irá envolver todo o list-entities */
		rootComponent () {
			return this.useWidget ? 'vuestic-widget' : 'show'
		},

		/** retorna o atributo a ser exebido por último na tabela */
		lastAttr () {
			let v = this.sync.attrSearch.value

			if (
				v === this.dictionary.attrAll ||
				this.definitions.displayAttrs.find(attr => attr.value === v)
			) return this.definitions.defaultLastAttr

			return this.sync.attrSearch
		},

		/** lista de operadores a serem usados na pesquisa */
		operators () {
			const descriptorValue = this.descriptorEntity[this.sync.attrSearch.value]
			if (!descriptorValue) return []

			let operators = []

			if (descriptorValue.type === String)
				operators = this.stringOperators
			else if (descriptorValue.type === Number)
				operators = this.numberOperators
			else if (descriptorValue.type === Date)
				operators = this.dateOperators
			else
				return []

			return operators.filter(o => !descriptorValue.disableOperators || !descriptorValue.disableOperators.find(dop => dop === o))
				.map(value => ({ value, text: this.dictionary.operators[value] }))
		},

		optionsSearch () {
			if (!this.definitions.optionsSearch)
				return []

			let options = this.definitions.optionsSearch.map(opt => ({
				text: this.$options.filters.translate(opt.display, this.dictionary),
				value: opt
			}))

			if (this.dictionary.attrAll && options.length)
				options.splice(0, 0, {
					value: {
						display: this.dictionary.attrAll,
						value: this.dictionary.attrAll
					},
					text: this.dictionary.attrAll
				})

			return options
		},

		existsOptionsSearch () {
			return (this.optionsSearch && this.optionsSearch.length)
		},

		existsOperators () {
			return (this.searchOperatorsShow && this.operators && this.operators.length)
		}
	},

	filters: {
		/**
		 * traduz a exibição de um valor mediante um dicionário
		 * @param {string|number} value - valor a ser traduzido
		 * @param {Object} dictionary - dicionário contendo a tradução para o termo informado
		 * @return {string|number} valor traduzido
		 */
		translate (value, dictionary) {
			if (!dictionary || !dictionary.attrs || !(value in dictionary.attrs))
				return value
			return dictionary.attrs[value]
		},

		/**
		 * obtém a classe da div que envolve o input de texto usado para realizar pesquisas
		 * @param {Array} c - array de classes predefinidas para a div que envolve o input de texto usado para realizar pesquisas
		 * @param {boolean} existsOptionsSearch - true caso exista o select dos atributos a serem buscados
		 * @param {boolean} existsOperators  - true caso exista o select das operações a serem realizadas
		 * @param {function} classInput - função que recebe 'existsOptionsSearch' e 'existsOperators' respectivamente como argumentos e retorna
		 * 	aquilo que esta função retorna
		 * @returns {Array} a mesma coisa retornada pela função 'classInput' recebida como argumento. Se a função 'classInput' não retorna um array,
		 * 	seu retorno é encapsulado em um array
		 */
		getClassInput (c, existsOptionsSearch, existsOperators, classInput) {
			let cs = classInput(existsOptionsSearch, existsOperators)

			if (!(cs instanceof Array))
				cs = [cs]

			return [
				...c,
				...cs
			]
		},

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
		parseAttr (value, attr, descriptor, joinSep, trueStr, falseStr, translatePattern) {
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

			else if (typeof value === 'boolean') return (value && trueStr) || falseStr
			else if (value instanceof Date) return dateUtility.dateToStr(value, translatePattern(descriptor[attr.value].pattern))
			else if (isISODate(value)) return dateUtility.dateToStr(new Date(value), translatePattern(descriptor[attr.value].pattern))
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

				if (value.searchDefault && typeof value.searchDefault !== 'function') {
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

				if (value.delete && typeof value.delete !== 'function') {
					console.error('request.delete not is a function')
					return false
				}

				let cvalue = { ...value }

				delete cvalue.searchDefault
				delete cvalue.searchAll
				delete cvalue.searchAttr
				delete cvalue.delete

				if (Object.keys(cvalue).length) {
					console.error(Object.keys(cvalue).join(',') + ' invalid in request')
					return false
				}

				return true
			},

			default: () => null
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

		/** parâmetros padrão a serem inseridos na busca */
		paramsRequest: {
			type: Array,
			default: () => []
		},

		/** usado para unir valores de um array a ser exibido na tabela */
		joinSep: {
			type: String,
			default: '/'
		},

		/** string que representa o padrão de exibição de datas */
		defaultPattern: {
			type: String,
			default: 'yyyy/MM/dd'
		},

		/** true para mostrar operadores de comparação a serem usados na pesquisa */
		searchOperatorsShow: {
			type: Boolean,
			default: false
		},

		/**
		 * mapeia as operações disponíveis para busca de atributos textuais.
		 */
		stringOperators: {
			type: Array,
			default: () => ['$in', '$nin', '$eq', '$neq', '$sw', '$nsw', '$ew', '$new']
		},

		/**
		 * mapeia as operações disponíveis para busca de atributos numéricos.
		 */
		numberOperators: {
			type: Array,
			default: () => ['$eq', '$neq', '$gt', '$gte', '$lt', '$lte']
		},

		/**
		 * mapeia as operações disponpiveis para busca de atributos temporais.
		 */
		dateOperators: {
			type: Array,
			default: () => ['$eq', '$neq', '$gt', '$gte', '$lt', '$lte']
		},

		/**
		 * contém o texto a ser exibido no header da tabela
		 * acima do conteúdo presentte no slot 'check'
		 */
		tdCheckName: {
			type: String,
			default: ''
		},

		/** nome do atribuo que identifica a entidade (pode ser quaquer atribuo único) */
		idAttrName: {
			type: String,
			default: 'id'
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

		/** se false, o componente tentará remover automaticamente a entidade ao clicar na opção de remover */
		customRemove: {
			type: Boolean,
			default: false
		},

		/** se false, o componente não irá exibir as opções padrão na listagem */
		showOptions: {
			type: Boolean,
			default: true
		},

		/** true para exibir a opção de remover uma entidade */
		optionRemove: {
			type: Boolean,
			default: true
		},

		/** true para exibir a opção de visualizar os dados da entidade em um modal */
		optionView: {
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
			type: Boolean,
			default: false
		},

		/** true para que o modal de exibição da entidade NÃO seja fechado ao clicar no fundo */
		forceModalEntity: {
			type: Boolean,
			default: false
		},

		classOptionsSearch: {
			type: String | Array | Object,
			default: () => 'col-md-2'
		},

		classOperators: {
			type: String | Array | Object,
			default: () => 'col-md-2'
		},

		classInput: {
			type: Function,
			default: (existsOptionsSearch, existsOperators) => ({
				'col-md-12': !existsOptionsSearch && !existsOperators,
				'col-md-10': existsOptionsSearch && !existsOperators,
				'col-md-8': existsOptionsSearch && existsOperators
			})
		},

		i18nArgs: {
			type: Object,
			default: () => ({})
		},

		i18nArgsModal: {
			type: Object,
			default: () => ({})
		},

		localDictionary: {
			type: Object,
			default: () => ({})
		},

		useWidget: {
			type: Boolean,
			default: true
		},

		// propriedades sincronas

		value: {
			type: Array,
			required: true
		},

		sync: {
			type: Object,
			default: () => ({
				/** quantidade total de entidades (quantidade total de resultados) */
				totalElements: 0,

				/** página atual sendo exibida */
				page: 1,

				/** atributo que está sendo buscado */
				attrSearch: null,

				/** valor que está sendo buscado */
				inputSearch: ''
			})
		}
	}
}
