import listEntities from '../../components/list-entities/list-entities.vue'
import definitionAdapter from '../../adapters/definition-adapter'

export default {
	name: 'list-peoples',

	components: { listEntities },

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
		autoSearch: {
			type: Boolean,
			default: false
		},

		definitions: {
			type: Object,
			default: () => definitionAdapter({
				name: {
					type: String,
					sort: 1,
					modelHeaderText: 'fullname',
					optionSearch: true,
					displayAttr: true
				},
				country: {
					type: String,
					optionSearch: true,
					defaultLastAttr: true
				},
				gender: {
					type: String,
					optionSearch: true
				},
				phones: {
					type: String,
					array: true,
					optionSearch: true,
					displayAttr: true
				}
			})
		},

		request: {
			type: Object,
			default: () => null
		},

		customRemove: {
			type: Boolean,
			default: () => false
		},

		titleTable: {
			type: String,
			default: 'Entities'
		},

		attrAll: {
			type: String,
			default: 'All'
		},

		tdCheckName: {
			type: String,
			default: ''
		},

		searchOperatorsShow: {
			type: Boolean,
			default: false
		},

		stringOperators: {
			type: Object,
			default: () => ({
				contains: 'contains',
				equals: 'equals',
				startsWith: 'startsWith',
				endsWith: 'endsWith'
			})
		},

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

		defaultPattern: {
			type: String,
			default: 'yyyy/MM/dd'
		},

		titleSearch: {
			type: String,
			default: 'Search'
		},

		tdOptionName: {
			type: String,
			default: 'OPTIONS:'
		},

		idAttrName: {
			type: String,
			default: 'id'
		},

		okText: {
			type: String,
			default: 'OK'
		},

		confirmText: {
			type: String,
			default: 'YES'
		},

		cancelText: {
			type: String,
			default: 'NO'
		},

		titleSuccess: {
			type: String,
			default: 'Success!'
		},

		titleConfirm: {
			type: String,
			default: 'Attention!'
		},

		titleModalEntity: {
			type: String,
			default: 'Entity Data'
		},

		confirmTextModalEntity: {
			Type: String,
			default: 'OK'
		},

		removeSuccessMessage: {
			type: String,
			default: 'Successfully deleted entity!'
		},

		removeConfirmMessage: {
			type: String,
			default: 'Are you sure you want to delete this entity?'
		},

		trueStr: {
			type: String,
			default: 'YES'
		},

		falseStr: {
			type: String,
			default: 'NO'
		},

		okClassModalEntity: {
			type: String,
			default: 'btn btn-primary btn-modal btn-ok-modal'
		},

		options: {
			type: Object,
			default: () => ({})
		},

		hideSearch: {
			type: Boolean,
			default: false
		},

		isCompact: {
			type: Boolean,
			default: false
		},

		hideLastAttr: {
			type: Boolean,
			default: false
		},

		classLine: {
			type: Array,
			default: () => []
		},

		optionView: {
			type: Boolean,
			default: true
		},

		optionRemove: {
			type: Boolean,
			default: true
		},

		optionEdit: {
			type: Boolean,
			default: false
		},

		optionReport: {
			type: Boolean,
			default: false
		},

		limitPagination: {
			type: Number | String,
			default: 5
		},

		alignPagination: {
			type: String,
			default: 'left'
		},

		sizePagination: {
			type: String,
			default: ''
		},

		pageSize: {
			type: Number,
			default: 10
		},

		isShowModal: {
			type: Boolean,
			default: false
		},

		smallModalEntity: {
			Type: Boolean,
			default: false
		},

		forceModalEntity: {
			Type: Boolean,
			default: false
		},

		routeNameEdit: {
			type: String,
			default: null
		},

		parseEditParams: {
			type: Function,
			default: (entity, index, idAttrName) => ({ [idAttrName]: entity[idAttrName] })
		},

		paramsRequest: {
			type: Array,
			default: () => []
		},

		joinSep: {
			type: String,
			default: ' / '
		},

		// synchronous properties

		value: {
			type: Array,
			required: true
		},

		totalElements$: {
			type: Number,
			default: 0
		},

		page$: {
			type: Number,
			default: 1
		},

		attrSearch$: {
			type: Object,
			default: () => null
		},

		inputSearch$: {
			type: String,
			default: ''
		}
	}
}
