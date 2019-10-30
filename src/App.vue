<template>
  <div id="app">
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<list-entities
						:autoSearch="true"
						:isCompact="isCompact"
						:useWidget="useWidget"
						:hideSearch="hideSearch"
						:hideLastAttr="hideLastAttr"
						:joinSep="joinSep"
						:defaultPattern="defaultPattern"
						:showSearchOperators="showSearchOperators"
						:idAttrName="idAttrName"
						:okClassModalEntity="okClassModalEntity"
						:btnSearchClass="btnSearchClass"
						:showOptions="showOptions"
						:showConfirmModalOnRemove="showConfirmModalOnRemove"
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
						:localDictionaryModal="localDictionaryModal"
						:definitions="definitions"
						:request="request"
						:options="options"
						@on_error="onError"
					/>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					defining the entity being listed
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-definitions">definitions:</label>
								<textarea v-model="textDefinitions" class="form-control" id="txt-text-definitions" rows="32"></textarea>
							</div>
						</div>
					</div>
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

						<div class="col-md-4 col-sm-4">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-show-confirm-modal-on-remove" v-model="showConfirmModalOnRemove">
									<label class="form-check-label" for="chk-show-confirm-modal-on-remove">showConfirmModalOnRemove</label>
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
									<label for="txt-btn-search-class">btnSearchClass:</label>
									<input
										v-model="btnSearchClass"
										type="text"
										class="form-control"
										id="txt-btn-search-class"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					properties as functions
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-class-input">classInput:</label>
								<textarea v-model="textClassInput" class="form-control" id="txt-text-class-input" rows="5"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					properties as array
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<div class="form-group">
								<div class="element-form fill">
									<label for="txt-text-string-operators">stringOperators:</label>
									<input
										v-model="textStringOperators"
										type="text"
										class="form-control"
										id="txt-text-string-operators"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<div class="element-form fill">
									<label for="txt-text-number-operators">numberOperators:</label>
									<input
										v-model="textNumberOperators"
										type="text"
										class="form-control"
										id="txt-text-number-operators"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<div class="element-form fill">
									<label for="txt-text-date-operators">dateOperators:</label>
									<input
										v-model="textDateOperators"
										type="text"
										class="form-control"
										id="txt-text-date-operators"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-params-request">paramsRequest:</label>
								<textarea v-model="textParamsRequest" class="form-control" id="txt-text-params-request" rows="1"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					local dictionary
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-i18n-args">i18nArgs:</label>
								<textarea v-model="textI18nArgs" class="form-control" id="txt-text-i18n-args" rows="1"></textarea>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-i18n-args-modal">i18nArgsModal:</label>
								<textarea v-model="textI18nArgsModal" class="form-control" id="txt-text-i18n-args-modal" rows="1"></textarea>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-local-dictionary">localDictionary:</label>
								<textarea v-model="textLocalDictionary" class="form-control" id="txt-text-local-dictionary" rows="35"></textarea>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-local-dictionary-modal">localDictionaryModal:</label>
								<textarea v-model="textLocalDictionaryModal" class="form-control" id="txt-text-local-dictionary-modal" rows="1"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					i18n
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-global-dictionaries">defining global dictionary:</label>
								<textarea v-model="textGlobalDictionaries" class="form-control" id="txt-text-global-dictionaries" rows="79"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					conducting research and removals
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-request">request:</label>
								<textarea v-model="textRequest" class="form-control" id="txt-text-request" rows="187"></textarea>
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

const textClassInput = `(existsOptionsSearch, existsOperators) => ({
	'col-md-12': !existsOptionsSearch && !existsOperators,
	'col-md-10': existsOptionsSearch && !existsOperators,
	'col-md-8': existsOptionsSearch && existsOperators
})`

const textDefinitions = `this.$lev.def({
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
})`

const textLocalDictionary = `{
	operators: {
			$in: 'in',
			$nin: 'not in',
			$eq: 'equals',
			$neq: 'not equals',
			$sw: 'starts with',
			$nsw: 'not starts with',
			$ew: 'ends with',
			$new: 'not ends with',
			$gt: 'greater than',
			$gte: 'greater than or equal to',
			$lt: 'less than',
			$lte: 'less than or equal to'
		},
		btnSearch: 'Search',
		labelSearch: 'Search',
		attrAll: 'All',
		titleSearch: 'Search',
		titleTable: 'Entities',
		tdOptionName: 'OPTIONS:',
		titleSuccessModal: 'Success!',
		titleConfirmModal: 'Attention!',
		titleModalEntity: 'Entity Data',
		confirmTextModalEntity: 'OK',
		removeSuccessMessage: 'Successfully deleted entity!',
		removeConfirmMessage: 'Are you sure you want to delete this entity?',
		okTextModal: 'OK',
		confirmTextModal: 'YES',
		cancelTextModal: 'NO',
		trueStr: 'YES',
		falseStr: 'NO',
		attrs: { /* name: 'fullname' */ },
		patterns: { /* 'dd/MM/yyyy': 'yyyy/dd/MM' */ }
}`

const textGlobalDictionaries = `this.$lev.lang = 'en'

this.$lev.dictionaries = [
	{
		use: () => true,
		lang: 'en',
		translate: {
			operators: {
				$in: (i18nArgs, ctx) => 'in',
				$nin: (i18nArgs, ctx) => 'not in',
				$eq: (i18nArgs, ctx) => 'equals',
				$neq: (i18nArgs, ctx) => 'not equals',
				$sw: (i18nArgs, ctx) => 'starts with',
				$nsw: (i18nArgs, ctx) => 'not starts with',
				$ew: (i18nArgs, ctx) => 'ends with',
				$new: (i18nArgs, ctx) => 'not ends with',
				$gt: (i18nArgs, ctx) => 'greater than',
				$gte: (i18nArgs, ctx) => 'greater than or equal to',
				$lt: (i18nArgs, ctx) => 'less than',
				$lte: (i18nArgs, ctx) => 'less than or equal to'
			},
			btnSearch: (i18nArgs, ctx) => 'Search',
			labelSearch: (i18nArgs, ctx) => 'Search',
			attrAll: (i18nArgs, ctx) => 'All',
			titleSearch: (i18nArgs, ctx) => 'Search',
			titleTable: (i18nArgs, ctx) => 'Entities',
			tdOptionName: (i18nArgs, ctx) => 'OPTIONS:',
			titleSuccessModal: (i18nArgs, ctx) => 'Success!',
			titleConfirmModal: (i18nArgs, ctx) => 'Attention!',
			titleModalEntity: (i18nArgs, ctx) => 'Entity Data',
			confirmTextModalEntity: (i18nArgs, ctx) => 'OK',
			removeSuccessMessage: (i18nArgs, ctx) => 'Successfully deleted entity!',
			removeConfirmMessage: (i18nArgs, ctx) => 'Are you sure you want to delete this entity?',
			okTextModal: (i18nArgs, ctx) => 'OK',
			confirmTextModal: (i18nArgs, ctx) => 'YES',
			cancelTextModal: (i18nArgs, ctx) => 'NO',
			trueStr: (i18nArgs, ctx) => 'YES',
			falseStr: (i18nArgs, ctx) => 'NO'
		}
	},

	{
		use: () => true,
		lang: 'pt',
		translate: {
			operators: {
				$in: (i18nArgs, ctx) => 'contém',
				$nin: (i18nArgs, ctx) => 'não contém',
				$eq: (i18nArgs, ctx) => 'igual',
				$neq: (i18nArgs, ctx) => 'não igual',
				$sw: (i18nArgs, ctx) => 'inicia com',
				$nsw: (i18nArgs, ctx) => 'não inicia com',
				$ew: (i18nArgs, ctx) => 'termina com',
				$new: (i18nArgs, ctx) => 'não termina com',
				$gt: (i18nArgs, ctx) => 'maior que',
				$gte: (i18nArgs, ctx) => 'maior ou igual que',
				$lt: (i18nArgs, ctx) => 'menor que',
				$lte: (i18nArgs, ctx) => 'menor ou igual que'
			},
			btnSearch: (i18nArgs, ctx) => 'Buscar',
			labelSearch: (i18nArgs, ctx) => 'Buscar',
			attrAll: (i18nArgs, ctx) => 'Todos',
			titleSearch: (i18nArgs, ctx) => 'Buscar',
			titleTable: (i18nArgs, ctx) => 'Entidades',
			tdOptionName: (i18nArgs, ctx) => 'OPÇÕES:',
			titleSuccessModal: (i18nArgs, ctx) => 'Sucesso!',
			titleConfirmModal: (i18nArgs, ctx) => 'Atenção!',
			titleModalEntity: (i18nArgs, ctx) => 'Dados da Entidade',
			confirmTextModalEntity: (i18nArgs, ctx) => 'OK',
			removeSuccessMessage: (i18nArgs, ctx) => 'Entidade removida com sucesso!',
			removeConfirmMessage: (i18nArgs, ctx) => 'Você tem certeza que deseja remover esta entidade?',
			okTextModal: (i18nArgs, ctx) => 'OK',
			confirmTextModal: (i18nArgs, ctx) => 'SIM',
			cancelTextModal: (i18nArgs, ctx) => 'NÃO',
			trueStr: (i18nArgs, ctx) => 'SIM',
			falseStr: (i18nArgs, ctx) => 'NÃO'
		}
	}
]`

const textRequest = `{
	/** used by list-entities */
	async searchAll (page, pageSize, sort, inputSearch) {
		this._orderBy(this._products, sort)
		let products = this._paginate(this._products, page, pageSize)
		return {
			count: products.length,
			entities: products
		}
	},

	/** used by list-entities */
	async searchAttr (page, pageSize, sort, inputSearch, paramsRequest, params) {
		params = params.slice()
		params.push.apply(params, paramsRequest)
		let products = this._filter(this._products, params)
		this._orderBy(products, sort)
		products = this._paginate(products, page, pageSize)
		return {
			count: products.length,
			entities: products
		}
	},

	/** used by list-entities */
	async searchDefault (page, pageSize, sort, inputSearch, paramsRequest, params) {
		let products = this._filter(this._products, paramsRequest)
		products = this._filterOr(products, params)
		this._orderBy(products, sort)
		products = this._paginate(products, page, pageSize)
		return {
			count: products.length,
			entities: products
		}
	},

	/** used by list-entities */
	async delete (id, entity, index, entities) {
		this._products.splice(index, 1)
	},

	/** NOT used by list-entities */
	_products: [
		{
			id: 1,
			name: 'Coca Cola',
			brand: 'The Coca-Cola Company',
			price: 4,
			perishable: false,
			expiration: new Date(2019, 10, 18)
		}
	],

	/** NOT used by list-entities */
	_orderBy (products, sort) {
		let signal
		let attr

		if (sort[0] === '-' || sort[0] === '+') {
			signal = sort[0]
			attr = sort.substring(1)
		} else {
			signal = '+'
			attr = sort
		}

		if (signal === '+')
			signal = 1
		else
			signal = -1

		products.sort((a, b) => (a[attr] < b[attr]) ? -1 * signal : 1 * signal)
	},

	/** NOT used by list-entities */
	_paginate (products, page, pageSize) {
		return products.slice((page - 1) * pageSize, (page - 1) * pageSize + (pageSize-1))
	},

	/** NOT used by list-entities */
	_filter (products, params) {
		return products.filter(product => this._productVerify(product, params))
	},

	/** NOT used by list-entities */
	_filterOr (products, params) {
		return products.filter(product => this._productVerifyOr(product, params))
	},

	/** NOT used by list-entities */
	_productVerifyOr (product, params) {
		return params.reduce((valid, and) => {
			if (valid) return true
			return this._productVerify(product, and)
		}, false)
	},

	/** NOT used by list-entities */
	_productVerify (product, params) {
		return params.reduce((valid, param) => {
			if (!valid)
				return false

			if (param.descriptor.searchSep) {
				let values = param.value.split(param.descriptor.searchSep)
					.map(value => this._verify(product[param.attr], param.operator, value))

				return values.reduce((p, valid) => p && valid, true)
			}

			return this._verify(product[param.attr], param.operator, param.value)
		}, true)
	},

	/** NOT used by list-entities */
	_verify (value, operator, inputSearch) {
		if (value instanceof Date)
			value = value.getTime()

		if (inputSearch instanceof Date)
			inputSearch = inputSearch.getTime()

		if (operator === '$') // if an operator has not been selected
			operator = '$eq'

		switch (operator) {
			case '$in': return value.match(new RegExp(this._scape(inputSearch)))
			case '$nin': return !value.match(new RegExp(this._scape(inputSearch)))
			case '$eq': return \`\${value}\` === \`\${inputSearch}\`
			case '$neq': return \`\${value}\` !== \`\${inputSearch}\`
			case '$sw': return value.startsWith(inputSearch)
			case '$nsw': return !value.startsWith(inputSearch)
			case '$ew': return value.endsWith(inputSearch)
			case '$new': return !value.endsWith(inputSearch)
			case '$gt': {
				if (typeof value === 'number' || typeof inputSearch === 'number') {
					value = parseFloat(value)
					inputSearch = parseFloat(inputSearch)
				}

				if (Number.isNaN(value) || Number.isNaN(inputSearch))
					return false

				return value > inputSearch
			}
			case '$gte': {
				if (typeof value === 'number' || typeof inputSearch === 'number') {
					value = parseFloat(value)
					inputSearch = parseFloat(inputSearch)
				}

				if (Number.isNaN(value) || Number.isNaN(inputSearch))
					return false

				return value >= inputSearch
			}
			case '$lt': {
				if (typeof value === 'number' || typeof inputSearch === 'number') {
					value = parseFloat(value)
					inputSearch = parseFloat(inputSearch)
				}

				if (Number.isNaN(value) || Number.isNaN(inputSearch))
					return false

				return value < inputSearch
			}
			case '$lte': {
				if (typeof value === 'number' || typeof inputSearch === 'number') {
					value = parseFloat(value)
					inputSearch = parseFloat(inputSearch)
				}

				if (Number.isNaN(value) || Number.isNaN(inputSearch))
					return false

				return value <= inputSearch
			}
			default: return false
		}
	},

	/** NOT used by list-entities */
	_scape(str) {
		return str.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&')
	}
}`

const textLocalDictionaryModal = 'null'
const textStringOperators = "['$in', '$nin', '$eq', '$neq', '$sw', '$nsw', '$ew', '$new']"
const textNumberOperators = "['$eq', '$neq', '$gt', '$gte', '$lt', '$lte']"
const textDateOperators = "['$eq', '$neq', '$gt', '$gte', '$lt', '$lte']"
const textParamsRequest = '[]'
const textI18nArgs = '{}'
const textI18nArgsModal = '{}'

export default {
	name: 'app',

	data () {
		const vm = this
		return {
			isCompact: false,
			useWidget: true,
			hideSearch: false,
			hideLastAttr: false,
			showSearchOperators: false,
			showOptions: true,
			showConfirmModalOnRemove: true,
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
			btnSearchClass: 'btn btn-success option search',
			idAttrName: 'id',
			classOptionsSearch: 'col-md-2',
			classOperators: 'col-md-2',

			textClassInput,
			textStringOperators,
			textNumberOperators,
			textDateOperators,
			textParamsRequest,
			textDefinitions,
			textLocalDictionary,
			textLocalDictionaryModal,
			textI18nArgs,
			textI18nArgsModal,
			textGlobalDictionaries,
			textRequest,

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
			parseEditParams: (entity, index, idAttrName) => ({ [idAttrName]: entity[idAttrName] }),
			options: {},
			autoSearch: false,
			routeNameEdit: null,
			classLine: []
		}
	},

	watch: {
		textGlobalDictionaries (textGlobalDictionaries) {
			this.textLocalDictionary = '{}'
			eval(`(() => {${textGlobalDictionaries}})()`)
		}
	},

	computed: {
		classInput () {
			return eval(`(${this.textClassInput})`)
		},

		definitions () {
			return eval(`(${this.textDefinitions})`)
		},

		stringOperators () {
			return eval(`(${this.textStringOperators})`)
		},

		numberOperators () {
			return eval(`(${this.textNumberOperators})`)
		},

		dateOperators () {
			return eval(`(${this.textDateOperators})`)
		},

		paramsRequest () {
			return eval(`(${this.textParamsRequest})`)
		},

		localDictionary () {
			return eval(`(${this.textLocalDictionary})`)
		},

		localDictionaryModal () {
			return eval(`(${this.textLocalDictionaryModal})`)
		},

		i18nArgs () {
			return eval(`(${this.textI18nArgs})`)
		},

		i18nArgsModal () {
			return eval(`(${this.textI18nArgsModal})`)
		},

		request () {
			return eval(`(${this.textRequest})`)
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

#app .props .form-group .element-form.fill {
	display: flex;
	align-items: baseline;
}

#app .props .form-group .element-form.fill input[type="text"] {
	flex: 1;
	/* min-width: 4.5rem;
	max-width: 6.3rem; */
	margin-left: .1rem;
	/* padding: 0px; */
	text-align: left;
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
