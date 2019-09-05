import isISODate from 'is-iso-date'
import dateUtility from 'datetime-utility'
import VuesticWidget from 'vuestic-components/vuestic-widget/VuesticWidget'
import VSelect from 'vue-select'
import * as util from 'src/services/util'
import Show from './show/show.vue'

export default {
	name: 'list-entities',

	components: { VuesticWidget, VSelect, Show },

	data () {
		return {
			showSuccess: false, // usado para verificar se o modal de sucesso está sendo exibido
			showConfirm: false, // usado para verificar se o modal de confirmação de remoão está sendo exibido
			msg_modal: '', // mensagem a ser exibida no modal
			enityShow: null // entidade que atualmente está sendo exibida no modal de exibição da entidade (modal-entity)
		}
	},

	computed: {
		attrSearch: {
			get () {
				return this.attrSearch$
			},

			set (attrSearch) {
				this.attrSearch$ = attrSearch
				this.$emit('update:attrSearch$', attrSearch)
			}
		},

		inputSearch: {
			get () {
				return this.inputSearch$
			},

			set (inputSearch) {
				this.inputSearch$ = inputSearch
				this.$emit('update:inputSearch$', inputSearch)
			}
		},

		page: {
			get () {
				return this.page$
			},

			set (page) {
				this.page$ = page
				this.$emit('update:page$', page)
			}
		},

		componentShowTable () {
			return this.isCompact ? 'show' : 'vuestic-widget'
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
		 * @param {Object} descriptorEntity - objeto contendo a descrição dos atributos da entidade
		 * @param {string} joinSep - string usada para unir os  valores de um array (se for o caso)
		 * @returns {any}
		 */
		parseAttr (value, attr, descriptorEntity, joinSep) {
			if (!attr) return value
			if (value instanceof Array) return value.join(descriptorEntity && descriptorEntity[attr.value].joinSep || joinSep)
			else if (typeof value === 'boolean') return (value && 'SIM') || 'NÃO'
			else if (value instanceof Date) return dateUtility.dateToStr(value, descriptorEntity && descriptorEntity[attr.value].pattern || 'dd/MM/yyyy')
			else if (isISODate(value)) return dateUtility.dateToStr(new Date(value), descriptorEntity && descriptorEntity[attr.value].pattern || 'dd/MM/yyyy')
			return value
		}
	},

	methods: {
		keyHandler (e) {
		},

		search (startList) {
		},

		onClickHeader (attr) {
		},

		on_click (entity, index) {
		},

		entityView (entity, index) {
		},

		excluir (entity, index) {
		},

		editar (entity, index) {
		},

		reportGenerate (entity, index) {
		},

		on_ok () {
		}
	},

	props: {
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

		/** título para exibir no widget da tabela de resultados */
		titleTable: {
			type: String,
			required: true
		},

		/** título para exibir no widget de busca */
		titleSearch: {
			type: String,
			default: 'Buscar'
		},

		/**
		 * contém todas as informações necessárias sobre a
		 * modelagem da entidade e o comportamento do componente
		 * para com cada atributo da entidade
		 */
		definitions: {
			type: Object,
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

		/** se true, o último atributo da tabel será escondido */
		hideLastAttr: {
			type: Boolean,
			default: false
		},

		/** nome a aparecer acima das opções na tabela */
		tdOptionName: {
			type: String,
			default: 'OPÇÕES:'
		},

		/** nome do atribuo que identifica a entidade (pode ser quaquer atribuo único) */
		idAttrName: {
			type: String,
			default: 'id'
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

		/** quantidade total de entidades (quantidade total de resultados) */
		totalElements: {
			type: Number,
			default: 0
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

		/** texto a ser exibido no botão de "OK" do modal de sucesso */
		okText: {
			type: String,
			default: 'OK'
		},

		/** texto a ser exibido no botão de "confirmação" do modal de confirmação */
		confirmText: {
			type: String,
			default: 'SIM'
		},

		/** texto a ser exibido no botão de "cancelamento" do modal de confirmação */
		cancelText: {
			type: String,
			default: 'NÃO'
		},

		/** títuto do modal de sucesso */
		title_success: {
			type: String,
			default: 'Sucesso!'
		},

		/** título do modal de confirmação */
		title_confirm: {
			type: String,
			default: 'Atenção!'
		},

		/** título do modal de exibição da entidade */
		titleModalEntity: {
			type: String,
			default: 'Dados da Entidade'
		},

		/** classe css do botão "OK" do modal de exibição da entidade */
		okClassModalEntity: {
			type: String,
			default: 'btn btn-primary btn-modal btn-ok-modal'
		},

		/** texto do botão "OK" do modal de exibição da entidade */
		confirmTextModalEntity: {
			Type: String,
			default: 'OK'
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

		// Atributos sincronos

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
