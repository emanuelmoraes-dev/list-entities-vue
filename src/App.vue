<template>
  <div id="app">
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<list-entities
						:isCompact="isCompact"
						:useWidget="useWidget"
						:autoSearch="autoSearch"
						:hideSearch="hideSearch"
						:hideLastAttr="hideLastAttr"
						:joinSep="joinSep"
						:defaultPattern="defaultPattern"
						:showSearchOperators="showSearchOperators"
						:idAttrName="idAttrName"
						:okClassModalEntity="okClassModalEntity"
						:showOptions="showOptions"
						:customRemove="customRemove"
						:optionRemove="optionRemove"
						:optionView="optionView"
						:optionReport="optionReport"
						:optionEdit="optionEdit"
						:routeNameEdit="routeNameEdit"
						:limitPagination="limitPagination"
						:alignPagination="alignPagination"
						:sizePagination="sizePagination"
						:pageSize="pageSize"
						:isShowModal="isShowModal"
						:smallModalEntity="smallModalEntity"
						:forceModalEntity="forceModalEntity"
						:sync="sync"
						:stringOperators="stringOperators"
						:numberOperators="numberOperators"
						:dateOperators="dateOperators"
						:classLine="classLine"
						:paramsRequest="paramsRequest"
						:parseEditParams="parseEditParams"
						:classOptionsSearch="classOptionsSearch"
						:classOperators="classOperators"
						:classInput="classInput"
						:i18nArgs="i18nArgs"
						:i18nArgsModal="i18nArgsModal"
						:localDictionary="localDictionary"
						:definitions="definitions"
						:request="request"
						:options="options"
						v-model="products"
						@on_error="onError"
					/>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import listEntities from './components/list-entities/list-entities.vue'

export default {
	name: 'app',

	data () {
		return {
			isCompact: false,
			useWidget: true,
			autoSearch: false,
			hideSearch: false,
			hideLastAttr: false,
			joinSep: '/',
			defaultPattern: 'dd/MM/yyyy',
			showSearchOperators: false,
			idAttrName: 'id',
			okClassModalEntity: 'btn btn-primary btn-modal btn-ok-modal',
			showOptions: true,
			customRemove: false,
			optionRemove: true,
			optionView: true,
			optionReport: false,
			optionEdit: false,
			routeNameEdit: null,
			limitPagination: 5,
			alignPagination: 'left',
			sizePagination: '',
			pageSize: 10,
			isShowModal: false,
			smallModalEntity: false,
			forceModalEntity: false,
			sync: {
				/** quantidade total de entidades (quantidade total de resultados) */
				totalElements: 0,

				/** página atual sendo exibida */
				page: 1,

				/** atributo que está sendo buscado */
				attrSearch: null,

				/** valor que está sendo buscado */
				inputSearch: ''
			},
			stringOperators: ['$in', '$nin', '$eq', '$neq', '$sw', '$nsw', '$ew', '$new'],
			numberOperators: ['$eq', '$neq', '$gt', '$gte', '$lt', '$lte'],
			dateOperators: ['$eq', '$neq', '$gt', '$gte', '$lt', '$lte'],
			classLine: [],
			paramsRequest: [],
			parseEditParams: (entity, index, idAttrName) => ({ [idAttrName]: entity[idAttrName] }),
			classOptionsSearch: 'col-md-2',
			classOperators: 'col-md-2',
			classInput: (existsOptionsSearch, existsOperators) => ({
				'col-md-12': !existsOptionsSearch && !existsOperators,
				'col-md-10': existsOptionsSearch && !existsOperators,
				'col-md-8': existsOptionsSearch && existsOperators
			}),
			i18nArgs: {},
			i18nArgsModal: {},
			localDictionary: {},
			definitions: this.$lev.def({
				name: {
					type: String,
					sort: 1,
					displayModal: true,
					optionSearch: true,
					displayAttr: true
				},
				brand: {
					type: String,
					displayModal: true,
					optionSearch: true,
					displayAttr: true
				},
				price: {
					type: Number,
					displayModal: true,
					optionSearch: true,
					displayAttr: true
				},
				perishable: {
					type: Boolean,
					displayModal: true,
					optionSearch: true,
					defaultLastAttr: true
				},
				expiration: {
					type: Date,
					displayModal: true,
					optionSearch: true
				}
			}),
			request: null,
			options: {},

			products: [
				{
					name: 'Coca Cola',
					brand: 'The Coca-Cola Company',
					price: 4,
					perishable: false,
					expiration: new Date(2019, 10, 18)
				}
			]
		}
	},

	methods: {
		showModal () {
			this.$refs.modal.open()
		},

		onError (err) {
			console.error(err)
		}
	}
}
</script>

<style>
#app {
	margin-top: 1rem;
}
</style>
