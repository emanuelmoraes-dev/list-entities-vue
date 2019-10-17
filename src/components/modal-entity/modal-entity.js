import VuesticModal from '../../../lib/vuestic/components/vuestic-modal/VuesticModal' // modal do template vuestic
import * as util from '../../services/util' // utilitários
import * as dateUtility from 'datetime-utility' // lib para manipulação de datas

export default {
	components: { 'vuestic-modal': VuesticModal },

	data () {
		return {
			optimizer: { // otimização de funções
				getPropertyValue: { // otimização da função getPropertyValue
					dymanicProgramming: { // otimização por programação dinâmica
						memo: new Map() // mapeia o resultada da função pelos seus parâmetros
					}
				}
			},

			show: false, // Usado para descobrir se o modal está aberto
			descriptorEntity: {} // descriptor adaptado para a utilização interna deste componente
		}
	},

	created () {
		this.adapterDescriptor()
	},

	methods: {
		/**
		 * retorna o valor do filtro 'getAttr' usando otimização
		 * @param {Object} entity - entidade que está sendo exibida no modal
		 * @param {string} property - nome da propriedade presente dentro da entidade
		 * @returns {any}
		 */
		getPropertyValue (entity, property) {
			const memo = this.optimizer.getPropertyValue.dymanicProgramming.memo // mapeia o resultada da função pelos seus parâmetros

			if (memo.has(entity) && memo.get(entity).hasOwnProperty(property)) // se essa função já foi chamada antes com estes mesmo parâmetros
				return memo.get(entity)[property] // retorna o valor que esta função retorou anteriormente

			if (!memo.has(entity))
				memo.set(entity, {})

			// registra o resultado do filtro 'getAttr'
			let rt = (memo.get(entity)[property] = this.$options.filters.getAttr(entity, property))

			return rt // retorna o resultado do filtro 'getAttr'
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
					descriptorValue = { type: Date, pattern: this.defaultPattern }
				else if (descriptorValue === Array)
					descriptorValue = { type: Array }
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

		/** mostra o modal */
		open () {
			this.adapterDescriptor()
			this.$refs.modal.open()
		}
	},

	watch: {
		descriptor (descriptor) {
			this.adapterDescriptor(descriptor)
		},

		entity (entity) {
			this.optimizer.getPropertyValue.dymanicProgramming.memo = new Map()
		}
	},

	filters: {
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
		parseValue (value, descriptorValue, trueStr, falseStr) {
			if (value === undefined || value === null) {
				return ''
			}
			if (descriptorValue.type === Boolean) {
				return value ? trueStr : falseStr
			} else if (descriptorValue.type === Date) {
				return dateUtility.dateToStr(
					value,
					descriptorValue.pattern
				)
			} else if (descriptorValue.type === Array) {
				if (descriptorValue.adapter) {
					return value
						.map(descriptorValue.adapter)
						.join(descriptorValue.joinSep ? descriptorValue.joinSep : ' ')
				} else {
					return value.map(v => {
						if (descriptorValue.numberAdapter && typeof descriptorValue.fixed === 'number')
							return parseFloat(v).toFixed(descriptorValue.fixed)
						else if (descriptorValue.numberAdapter)
							return (parseFloat(v) && parseFloat(v).toString()) || v
						return v
					}).join(descriptorValue.joinSep ? descriptorValue.joinSep : ' ')
				}
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
		parseItem (value, descriptorValue) {
			if (value === undefined || value === null) {
				return ''
			}
			if (typeof descriptorValue.adapter === 'function') {
				return descriptorValue.adapter(value)
			} else {
				if (descriptorValue.numberAdapter && typeof descriptorValue.fixed === 'number')
					return parseFloat(value).toFixed(descriptorValue.fixed)
				else if (descriptorValue.numberAdapter)
					return (parseFloat(value) && parseFloat(value).toString()) || value
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

		/** título a ser exibido no modal */
		title: {
			type: String,
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

		/** texto a ser exibido no botão de fechar o modal */
		okText: {
			type: String,
			default: 'OK'
		},

		/** string que representa o valor 'true' para ser exibido */
		trueStr: {
			type: String,
			default: 'YES'
		},

		/** string que representa o valor 'false' para ser exibido */
		falseStr: {
			type: String,
			default: 'NO'
		},

		/** string que representa o padrão de exibição de datas */
		defaultPattern: {
			type: String,
			default: 'yyyy/MM/dd'
		},

		/** classe a ser atribuído no bitão de fechar o modal */
		okClass: {
			type: String,
			default: 'btn btn-primary btn-modal btn-ok-modal'
		}
	}
}
