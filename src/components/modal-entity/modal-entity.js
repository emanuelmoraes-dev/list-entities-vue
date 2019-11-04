import VuesticModal from '../../../lib/vuestic/components/vuestic-modal/VuesticModal' // modal do template vuestic
import * as util from '../../services/util' // utilitários
import * as dateUtility from 'datetime-utility' // lib para manipulação de datas

export default {
	components: { 'vuestic-modal': VuesticModal },

	data () {
		return {
			ctxLev: {},
			dictionary: null, // dicionário mesclado com as definições globais e locais
			descriptorEntity: {}, // descriptor adaptado para a utilização interna deste componente
			show: false // Usado para descobrir se o modal está aberto
		}
	},

	created () {
		this.loadDictionary()
		this.adapterDescriptor()
	},

	methods: {
		translatePattern (pattern) {
			if (!this.dictionary || !this.dictionary.patterns || !(pattern in this.dictionary.patterns))
				return pattern
			return this.dictionary.patterns[pattern]
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

		/**
		 * retorna o valor do filtro 'getAttr' usando otimização
		 * @param {Object} entity - entidade que está sendo exibida no modal
		 * @param {string} property - nome da propriedade presente dentro da entidade
		 * @returns {any}
		 */
		getPropertyValue (entity, property) {
			return this.$options.filters.getAttr(entity, property) // retorna o resultado do filtro 'getAttr'
		},

		/**
		 * transcreve em 'descriptorEntity' o 'descriptor' para estar pronto para o uso
		 * @param {Object=} descriptor - 'descriptor' passado pelo usuário. Parâmetro opcional
		 */
		adapterDescriptor (descriptor) {
			this.descriptorEntity = { ...(descriptor || this.descriptor) }

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
					descriptorValue = { type: Date }
				else
					descriptorValue = { ...descriptorValue }

				if (descriptorValue.display === undefined)
					descriptorValue.display = `${key} :`

				this.$set(this.descriptorEntity, key, descriptorValue)
			}
		},

		/** mostra o modal */
		open () {
			this.adapterDescriptor()
			this.$refs.modal.open()
		}
	},

	watch: {
		'ctxLev.lang' () {
			this.loadDictionary()
		},

		descriptor (descriptor) {
			this.adapterDescriptor(descriptor)
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
		 * Obtém o valor (ou valores) de um objeto por meio da especificação de uma propriedade.
		 * @param {Object} obj - objeto a ter o valor de sua propriedade retornada
		 * @param {String} property - especificação do caminho usado para acessar uma determinada propriedade.
		 *     Ao ser encontrado um ponto (.) em 'property' tenta-se acessar as propriedades
		 *     de dentro deste objeto especificadas após o ponto (.), realizando este procedimento
		 *     de maneira recursiva
		 * @returns {any}
		 */
		getAttr (obj, property) {
			let value = util.getAttr(property, obj, true)
			if (value instanceof Array)
				value = util.extractValuesByArray(value)
			return value
		},

		/**
		 * retorna o valor seguindo o tipo e as especificações presentes no 'descriptor' para esta entidade
		 * @param {any} value - valor presente dentro de uma propriedade de 'entity'
		 * @param {Object} descriptorValue - valor do 'descriptor' para esta entidade
		 * @param {string} trueStr - valor textual que representa o valor booleano true
		 * @param {string} falseStr - valor textual que representa o valor booleano false
		 * @returns {any}
		 */
		parseValue (value, descriptorValue, trueStr, falseStr, translatePattern, defaultPattern, joinSep) {
			if (value === undefined || value === null) {
				return ''
			}

			if (!descriptorValue.array && descriptorValue.adapter) {
				value = descriptorValue.adapter(value)
			} else if (descriptorValue.numberAdapter && typeof descriptorValue.fixed === 'number') {
				value = parseFloat(value) && parseFloat(value).toFixed(descriptorValue.fixed) || value
			} else if (descriptorValue.numberAdapter) {
				value = parseFloat(value) && parseFloat(value).toString() || value
			}

			if (descriptorValue.array) {
				if (descriptorValue.adapter) {
					return value
						.map(descriptorValue.adapter)
						.join(descriptorValue.joinSep ? descriptorValue.joinSep : joinSep)
				} else {
					return value.map(v => {
						if (descriptorValue.type === Date)
							return dateUtility.dateToStr(
								v,
								translatePattern(
									descriptorValue.pattern || defaultPattern
								)
							)
						else if (descriptorValue.type === Boolean)
							return v ? trueStr : falseStr
						else if (descriptorValue.numberAdapter && typeof descriptorValue.fixed === 'number')
							return parseFloat(v) && parseFloat(v).toFixed(descriptorValue.fixed) || v
						else if (descriptorValue.numberAdapter)
							return parseFloat(v) && parseFloat(v).toString() || v
						return v
					}).join(descriptorValue.joinSep ? descriptorValue.joinSep : joinSep)
				}
			} else if (descriptorValue.type === Boolean) {
				return value ? trueStr : falseStr
			} else if (descriptorValue.type === Date) {
				return dateUtility.dateToStr(
					value,
					translatePattern(
						descriptorValue.pattern || defaultPattern
					)
				)
			} else if (descriptorValue.type === Number) {
				if (typeof descriptorValue.fixed === 'number')
					return parseFloat(value).toFixed(descriptorValue.fixed)
				return (parseFloat(value) && parseFloat(value).toString()) || value
			} else {
				return value
			}
		},

		/**
		 * retorna o valor presente dentro de um array seguindo as especificações de 'descriptor'
		 * para os valores do array desta propriedade
		 * @param {any} value - valor que está dentro do array presente dentro desta propriedade
		 * @param {Object} descriptorValue - 'descriptor' para os valores do array desta propriedade
		 * @returns {any}
		 */
		parseItem (value, descriptorValue, trueStr, falseStr, translatePattern, defaultPattern) {
			if (value === undefined || value === null) {
				return ''
			}
			if (typeof descriptorValue.adapter === 'function') {
				return descriptorValue.adapter(value)
			} else {
				if (descriptorValue.type === Date)
					return dateUtility.dateToStr(
						value,
						translatePattern(
							descriptorValue.pattern || defaultPattern
						)
					)
				else if (descriptorValue.type === Boolean)
					return value ? trueStr : falseStr
				else if (descriptorValue.numberAdapter && typeof descriptorValue.fixed === 'number')
					return parseFloat(value) && parseFloat(value).toFixed(descriptorValue.fixed) || value
				else if (descriptorValue.numberAdapter)
					return parseFloat(value) && parseFloat(value).toString() || value
				return value
			}
		}
	},

	props: {

		/** entidade a ser exibida no modal */
		entity: {
			type: Object,
			default: () => ({})
		},

		/** objeto cuja chave é uma propriedade  */
		descriptor: {
			type: Object,
			required: true
		},

		/** false para o modal ser largo */
		small: {
			type: Boolean,
			default: false
		},

		/** false para que o modal possa ser fechado ao clicar no fundo */
		force: {
			type: Boolean,
			default: false
		},

		/** string que representa o padrão de exibição de datas */
		defaultPattern: {
			type: String,
			default: 'yyyy/MM/dd'
		},

		/** string usada para unir os valores de um array */
		joinSep: {
			type: String,
			default: '\n'
		},

		/** classe a ser atribuído no bitão de fechar o modal */
		okClass: {
			type: String,
			default: 'btn btn-primary btn-modal btn-ok-modal'
		},

		i18nArgs: {
			type: Object,
			default: () => ({})
		},

		localDictionary: {
			type: Object,
			default: () => ({})
		}
	}
}
