import ListEntities from 'src/components/list-entities/list-entities.vue'

export default {
	name: 'list-peoples',

	components: { ListEntities },

	data () {
		return {
			entities: null,
			totalElements: null,
			page: null,
			attrSearch: null,
			inputSearch: null
		}
	},

	created () {
		this.entities = this.value
		this.totalElements = this.totalElements$
		this.attrSearch = this.attrSearch$
		this.page = this.page$
		this.inputSearch = this.inputSearch$
	},

	methods: {
		getListEntities () {
			return this.$refs.listEntities
		}
	},

	watch: {
		entities (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('input', newValue)
		},

		value (newValue, oldValue) {
			if (newValue !== oldValue)
				this.entities = newValue
		},

		totalElements (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:totalElements$', newValue)
		},

		totalElements$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.totalElements = newValue
		},

		page (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:page$', newValue)
		},

		page$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.page = newValue
		},

		attrSearch (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:attrSearch$', newValue)
		},

		attrSearch$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.attrSearch = newValue
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
			type: Object,
			default: () => ({
				sort: 'name',

				descriptor: {
					name: String,
					country: String,
					gender: String,
					phones: { type: String, array: true }
				},

				descriptorModal: {
					name: String,
					country: String,
					gender: String,
					phones: Array
				},

				mapPropModalEntity: {
					name: 'fullname'
				},

				optionsSearch: [
					{ display: 'name', value: 'name' },
					{ display: 'country', value: 'country' },
					{ display: 'gender', value: 'gender' },
					{ display: 'phone', value: 'phones' }
				],

				displayAttrs: [
					{ display: 'name', value: 'name' },
					{ display: 'phones', value: 'phones' }
				],

				defaultLastAttr: { display: 'country', value: 'country' }
			})
		},

		/**
		 * contém todas as funões e informações para que o
		 * componente possa realizar as requisições para o servidor
		 */
		request: {
			type: Object,
			default: () => null
		},

		/** título para exibir no widget da tabela de resultados */
		titleTable: {
			type: String,
			default: 'Entities'
		},

		/**
		 * opção de busca (objeto com 'display' e 'value') representando
		 * a opção de pesquisa por todos os atributos
		 */
		attrAll: {
			type: String,
			default: 'All'
		},

		/**
		 * contém o texto a ser exibido no header da tabela
		 * acima do conteúdo presentte no slot 'check'
		 */
		tdCheckName: {
			type: String,
			default: ''
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

		/** string que representa o padrão de exibição de datas */
		defaultPattern: {
			type: String,
			default: 'yyyy/MM/dd'
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

		/** true para mostrar operadores de comparação a serem usados na pesquisa */
		searchOperatorsShow: {
			type: Boolean,
			default: false
		},

		/** parâmetros padrão a serem inserodos na busca */
		paramsRequest: {
			type: Array,
			default: () => []
		},

		/** usado para unir valores de um array a ser exibido na tabela */
		joinSep: {
			type: String,
			default: ' / '
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
