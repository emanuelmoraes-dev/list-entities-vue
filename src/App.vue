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
						:okClassBtnSearch="okClassBtnSearch"
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
						:isShowSuccessModalRemove="isShowSuccessModalRemove"
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

			<div class="card props">
				<div class="card-header">
					boolean properties
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-is-compact" v-model="isCompact">
									<label class="form-check-label" for="chk-is-compact">isCompact</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-use-widget" v-model="useWidget">
									<label class="form-check-label" for="chk-use-widget">useWidget</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-hide-search" v-model="hideSearch">
									<label class="form-check-label" for="chk-hide-search">hideSearch</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-hide-last-attr" v-model="hideLastAttr">
									<label class="form-check-label" for="chk-hide-last-attr">hideLastAttr</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-show-search-operators" v-model="showSearchOperators">
									<label class="form-check-label" for="chk-show-search-operators">showSearchOperators</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-show-options" v-model="showOptions">
									<label class="form-check-label" for="chk-show-options">showOptions</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-custom-remove" v-model="customRemove">
									<label class="form-check-label" for="chk-custom-remove">customRemove</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-option-remove" v-model="optionRemove">
									<label class="form-check-label" for="chk-option-remove">optionRemove</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-option-view" v-model="optionView">
									<label class="form-check-label" for="chk-option-view">optionView</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-option-report" v-model="optionReport">
									<label class="form-check-label" for="chk-option-report">optionReport</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-option-edit" v-model="optionEdit">
									<label class="form-check-label" for="chk-option-edit">optionEdit</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-small-modal-entity" v-model="smallModalEntity">
									<label class="form-check-label" for="chk-small-modal-entity">smallModalEntity</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-force-modal-entity" v-model="forceModalEntity">
									<label class="form-check-label" for="chk-force-modal-entity">forceModalEntity</label>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-is-show-success-modal-remove" v-model="isShowSuccessModalRemove">
									<label class="form-check-label" for="chk-is-show-success-modal-remove">isShowSuccessModalRemove</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					numeric and textual properties
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-md-4">
							<div class="form-group">
								<div class="element-form">
									<label for="txt-page-size">pageSize:</label>
									<input
										v-model="pageSize"
										min="1"
										type="number"
										class="form-control"
										id="txt-page-size"
									/>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">
								<div class="element-form">
									<label for="txt-limit-pagination">limitPagination:</label>
									<input
										v-model="limitPagination"
										min="1"
										type="number"
										class="form-control"
										id="txt-limit-pagination"
									/>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">
								<div class="element-form thin">
									<label for="txt-join-sep">joinSep:</label>
									<input
										v-model="joinSep"
										type="text"
										class="form-control"
										id="txt-join-sep"
									/>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">
								<div class="element-form medium">
									<label for="txt-default-pattern">defaultPattern:</label>
									<input
										v-model="defaultPattern"
										type="text"
										class="form-control"
										id="txt-default-pattern"
									/>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">
								<div class="element-form">
									<label for="txt-align-pagination">alignPagination:</label>
									<b-form-select v-model="alignPagination" class="col-md-4">
										<option value="left">left</option>
										<option value="center">center</option>
										<option value="right">right</option>
										<option value="fill">fill</option>
									</b-form-select>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">
								<div class="element-form">
									<label for="txt-align-pagination">sizePagination:</label>
									<b-form-select v-model="sizePagination" class="col-md-4">
										<option value="sm">sm</option>
										<option value="md">md</option>
										<option value="lg">lg</option>
									</b-form-select>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">
								<div class="element-form thin">
									<label for="txt-id-attr-name">idAttrName:</label>
									<input
										v-model="idAttrName"
										type="text"
										class="form-control"
										id="txt-id-attr-name"
									/>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">
								<div class="element-form medium">
									<label for="txt-class-options-search">classOptionsSearch:</label>
									<input
										v-model="classOptionsSearch"
										type="text"
										class="form-control"
										id="txt-class-options-search"
									/>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">
								<div class="element-form medium">
									<label for="txt-class-operators">classOperators:</label>
									<input
										v-model="classOperators"
										type="text"
										class="form-control"
										id="txt-class-operators"
									/>
								</div>
							</div>
						</div>

						<div class="col-12">
							<div class="form-group">
								<div class="element-form large">
									<label for="txt-ok-class-modal-entity">okClassModalEntity:</label>
									<input
										v-model="okClassModalEntity"
										type="text"
										class="form-control"
										id="txt-ok-class-modal-entity"
									/>
								</div>
							</div>
						</div>

						<div class="col-12">
							<div class="form-group">
								<div class="element-form large">
									<label for="txt-ok-class-btn-search">okClassBtnSearch:</label>
									<input
										v-model="okClassBtnSearch"
										type="text"
										class="form-control"
										id="txt-ok-class-btn-search"
									/>
								</div>
							</div>
						</div>
					</div>
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
			hideSearch: false,
			hideLastAttr: false,
			showSearchOperators: false,
			showOptions: true,
			customRemove: false,
			optionRemove: true,
			optionView: true,
			optionReport: false,
			optionEdit: false,
			smallModalEntity: false,
			forceModalEntity: false,
			isShowSuccessModalRemove: false,
			pageSize: 10,
			limitPagination: 5,
			joinSep: '/',
			defaultPattern: 'dd/MM/yyyy',
			alignPagination: 'left',
			sizePagination: 'md',
			okClassModalEntity: 'btn btn-primary btn-modal btn-ok-modal',
			okClassBtnSearch: 'btn btn-success option search',
			idAttrName: 'id',
			classOptionsSearch: 'col-md-2',
			classOperators: 'col-md-2',
			classInput: (existsOptionsSearch, existsOperators) => ({
				'col-md-12': !existsOptionsSearch && !existsOperators,
				'col-md-10': existsOptionsSearch && !existsOperators,
				'col-md-8': existsOptionsSearch && existsOperators
			}),
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
			paramsRequest: [],
			parseEditParams: (entity, index, idAttrName) => ({ [idAttrName]: entity[idAttrName] }),
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
			autoSearch: false,
			routeNameEdit: null,
			classLine: [],

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

#app .props {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
}

#app .props .form-group .element-form.medium {
	display: flex;
	align-items: baseline;
}

#app .props .form-group .element-form.medium input[type="text"] {
	flex: 1;
	min-width: 4.5rem;
	max-width: 6.3rem;
	margin-left: .1rem;
	padding: 0px;
	text-align: center;
}

/* #app .props .form-group .element-form.large {
	display: flex;
	align-items: baseline;
} */

#app .props .form-group .element-form.large input {
	/* flex: 1; */
	/* min-width: 18.5rem;
	max-width: 22rem; */
	width: 22rem;
	margin-left: .1rem;
	padding: 0px;
	text-align: center;
}

#app .props .form-group .element-form.thin input {
	width: 3rem;
	margin-left: .1rem;
	padding: 0px;
	text-align: center;
}

#app .props .form-group .element-form .custom-select {
	width: 6.3rem;
	margin-left: .1rem;
	text-align: center;
}

#app .props .form-group .element-form input[type="number"] {
	width: 3rem;
	margin-left: .1rem;
	padding: 0px;
	text-align: center;
}

#app .props .form-group .element-form input[type="number"]::-webkit-inner-spin-button {
	opacity: 1;
}

#app .props .form-group .element-form input[type="number"]::-webkit-outer-spin-button {
	opacity: 1;
}

#app .props .form-group .element-form label, #app .props .form-group .element-form input {
	display: inline;
}
</style>
