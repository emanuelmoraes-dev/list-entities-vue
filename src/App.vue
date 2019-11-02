<template>
  <div id="app">
		<div class="container-fluid">
			<div class="d-flex justify-content-between align-items-baseline">
				<h1>list-entities-vue</h1>
				<h2 id="demo">Demo</h2>
			</div>

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
						:modalSlots="modalSlots"
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
									<input class="form-check-input" type="checkbox" id="chk-option-view" v-model="optionView">
									<label class="form-check-label" for="chk-option-view">optionView</label>
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
									<input class="form-check-input" type="checkbox" id="chk-option-report" v-model="optionReport">
									<label class="form-check-label" for="chk-option-report">optionReport</label>
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
					example implementation of searches and removals
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

			<div class="card props">
				<div class="card-header">
					properties not shown in demo
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<table class="table table-striped">
								<thead>
									<tr>
										<th scope="col">prop</th>
										<th scope="col">type</th>
										<th scope="col">default value</th>
										<th scope="col">description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>autoSearch</td>
										<td>Boolean</td>
										<td>false</td>
										<td>if true, the "request.searchAll" method is called automatically upon loading the component</td>
									</tr>
									<tr>
										<td>options</td>
										<td>Object</td>
										<td>{}</td>
										<td>object whose keys are the name of the slots to display after all attributes are displayed. The value of each key is the name to be displayed in the header of each entered option</td>
									</tr>
									<tr>
										<td>routeNameEdit</td>
										<td>String</td>
										<td>null</td>
										<td>name of route containing an entity edit page</td>
									</tr>
									<tr>
										<td>classLine</td>
										<td>Array</td>
										<td>[]</td>
										<td>css class list to use on each table row</td>
									</tr>
									<tr>
										<td>modalSlots</td>
										<td>Array</td>
										<td>[]</td>
										<td>list of slots to place in the "modal-entity"</td>
									</tr>
									<tr>
										<td>parseEditParams</td>
										<td>Function</td>
										<td>
<pre><code class="lang-js">(<span class="hljs-attribute">entity</span>, <span class="hljs-attribute">index</span>, <span class="hljs-attribute">idAttrName</span>) =&gt; ({
    <span class="hljs-attribute">[idAttrName]</span>: entity[idAttrName]
})
</code></pre>
										</td>
										<td>function that takes an entity, its position in the table and the name of the attribute that represents the id and returns the parameters to pass to the edit route</td>
									</tr>
									<tr>
										<td>sync</td>
										<td>Object</td>
										<td>
<pre><code class="lang-js">{
    <span class="hljs-attribute">totalElements</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attribute">page</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attribute">attrSearch</span>: <span class="hljs-keyword">null</span>,
    <span class="hljs-attribute">inputSearch</span>: <span class="hljs-string">''</span>
}
</code></pre>
										</td>
										<td>contains a set of properties that are updated internally by the component</td>
									</tr>
									<tr>
										<td>sync.totalElements</td>
										<td>Number</td>
										<td>0</td>
										<td>total amount of results</td>
									</tr>
									<tr>
										<td>sync.page</td>
										<td>Number</td>
										<td>1</td>
										<td>current page being displayed</td>
									</tr>.
									<tr>
										<td>sync.attrSearch</td>
										<td>Object</td>
										<td>null</td>
										<td>attribute being fetched (example: { display: name, value: 'name' })</td>
									</tr>
									<tr>
										<td>sync.inputSearch</td>
										<td>String</td>
										<td></td>
										<td>value entered in the search field</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="d-flex justify-content-end">
				<h2 id="quick-start">Quick Start</h2>
			</div>

			<div class="card props">
				<div class="card-header">
					<span :style="{ color: 'blue' }">Dependencies</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<ul>
								<li>fontawesome 5.x</li>
								<li>jQuery</li>
								<li>bootstrap-vue</li>
								<li>custom CSS (list-entities-vue/assets/css/style.css)</li>
								<li>Vuestic Admin version 1.x custom CSS (list-entities-vue/lib/vuestic/css/vuestic.css)</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					<span :style="{ color: 'blue' }">Conflicts</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<ul>
								<li>bootstrap 3.x or less</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					importing component (sample code)
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<pre><code class="lang-js"><span class="hljs-keyword">import</span> <span class="hljs-string">'list-entities-vue/lib/vuestic/css/vuestic.css'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'list-entities-vue/lib/fontawesome/css/all.min.css'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'list-entities-vue/assets/css/style.css'</span>
<span class="hljs-keyword">import</span> jQuery <span class="hljs-keyword">from</span> <span class="hljs-string">'jquery'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'bootstrap-vue/dist/bootstrap-vue.css'</span>

<span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
<span class="hljs-keyword">import</span> ListEntities <span class="hljs-keyword">from</span> <span class="hljs-string">'list-entities-vue'</span>
<span class="hljs-keyword">import</span> BootstrapVue <span class="hljs-keyword">from</span> <span class="hljs-string">'bootstrap-vue'</span>

<span class="hljs-built_in">global</span>.jQuery = jQuery
<span class="hljs-built_in">global</span>.$ = jQuery

Vue.use(ListEntities)
Vue.use(BootstrapVue)
</code></pre>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					<span :style="{ color: 'blue' }">exported</span> by list-entities-vue
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<table class="table table-striped">
								<thead>
									<tr>
										<th scope="col">name</th>
										<th scope="col">description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td :style="{ color: 'blue' }">default</td>
										<td>plugin to use with "Vue.use"</td>
									</tr>
									<tr>
										<td>ListEntities</td>
										<td>Entity Listing Component</td>
									</tr>
									<tr>
										<td>ModalEntity</td>
										<td>Modal for displaying details of an entity</td>
									</tr>
									<tr>
										<td>def</td>
										<td>function to define the modeling of the entity being displayed (also available in "this[ctxName].def" (by default, this.$lev.def))</td>
									</tr>
									<tr>
										<td>InvalidDateFormatError</td>
										<td>Error thrown if text entered in search field cannot be used to search for a Date field</td>
									</tr>
									<tr>
										<td>dictionaries</td>
										<td>dictionaries used by DEFAULT to define the global dictionary based on the "lang" and "use" properties. The global dictionary will merge all dictionaries with the correct language and the "use" function returning true. Reading occurs from first to last</td>
									</tr>
									<tr>
										<td>en</td>
										<td>English language dictionary used by DEFAULT to define the global English language dictionary</td>
									</tr>
									<tr>
										<td>pt</td>
										<td>Portuguese language dictionary used by DEFAULT to define the global Portuguese language dictionary</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					<span :style="{ color: 'blue' }">plugin options</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<table class="table table-striped">
								<thead>
									<tr>
										<th scope="col">option</th>
										<th scope="col">type</th>
										<th scope="col">default value</th>
										<th scope="col">description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>nameListEntities</td>
										<td>String</td>
										<td>list-entities</td>
										<td>entity list component name</td>
									</tr>
									<tr>
										<td>nameModalEntity</td>
										<td>String</td>
										<td>modal-entity</td>
										<td>modal name that displays entity details</td>
									</tr>
									<tr>
										<td>ctxName</td>
										<td>String | Symbol</td>
										<td>$lev</td>
										<td>property name that each instance of Vue will have containing the function "def", the array "dictionaries" and the string "lang"</td>
									</tr>
									<tr>
										<td>lang</td>
										<td>String</td>
										<td>en</td>
										<td>language that will define which dictionaries will be used</td>
									</tr>
									<tr>
										<td>dictionaries</td>
										<td>Array</td>
										<td>
<pre><code class="lang-js">[
    {
        <span class="hljs-keyword">lang:</span><span class="hljs-variable"></span> <span class="hljs-string">'en'</span>,
        // ...
    },
    {
        <span class="hljs-keyword">lang:</span><span class="hljs-variable"></span> <span class="hljs-string">'pt'</span>,
        // ...
    }
]
</code></pre>
										</td>
										<td>dictionaries that will be used to define the global dictionary based on the "lang" and "use" properties. The global dictionary will merge all dictionaries with the correct language and the "use" function returning true. Reading occurs from first to last</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					most basic example of use
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<pre><code class="lang-html"><span class="hljs-keyword">&lt;template&gt;</span>
    <span class="hljs-keyword">&lt;list-entities</span>
        :definitions=<span class="hljs-comment">"$lev.def</span>({
            <span class="hljs-built_in">name</span>: String,
            <span class="hljs-built_in">brand</span>: String,
            <span class="hljs-built_in">price</span>: String,
            <span class="hljs-built_in">perishable</span>: Boolean,
            <span class="hljs-built_in">expiration</span>: Date
        })<span class="hljs-comment">"</span>
        v-model=<span class="hljs-comment">"products"</span>
    <span class="hljs-keyword">/&gt;</span>
<span class="hljs-keyword">&lt;/template&gt;</span>

<span class="hljs-keyword">&lt;script&gt;</span>
    <span class="lang-js"><span class="hljs-title">export</span> <span class="hljs-keyword">default</span> {
        <span class="hljs-class"><span class="hljs-keyword">data</span> () {
            <span class="hljs-title">products</span>: [
                {
                    <span class="hljs-title">id</span>: <span class="hljs-number">1</span>,
                    <span class="hljs-title">name</span>: <span class="hljs-string">'Coca Cola'</span>,
                    <span class="hljs-title">brand</span>: <span class="hljs-string">'The Coca-Cola Company'</span>,
                    <span class="hljs-title">price</span>: <span class="hljs-number">4</span>,
                    <span class="hljs-title">perishable</span>: <span class="hljs-keyword">false</span>,
                    <span class="hljs-title">expiration</span>: <span class="hljs-keyword">new</span> Date(2019, 10, 18)
                }</span>
            ]
        }
    }
</span><span class="hljs-keyword">&lt;/script&gt;</span>
</code></pre>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					all <span :style="{ color: 'blue' }">events</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<table class="table table-striped">
								<thead>
									<tr>
										<th scope="col">event</th>
										<th scope="col">parameters</th>
										<th scope="col">description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>input</td>
										<td>(entities)</td>
										<td>this event issues the list of entities when there are changes to the entities. (Note: When there are more attributes to search than attributes to display, the last attribute changes when selecting to search for an attribute not displayed. The value of this attribute is stored in the property "__lastAttrValue")</td>
									</tr>
									<tr>
										<td>on_change_sort</td>
										<td>(sort)</td>
										<td>this event issues the attribute in which the listing will be sorted, preceded by '+' (ascending) or '-' (descending), if the sorting is changed</td>
									</tr>
									<tr>
										<td>on_edit</td>
										<td>(entity, index)</td>
										<td>this event issues the entity and its position in the listing when the EDIT option is clicked</td>
									</tr>
									<tr>
										<td>on_remove</td>
										<td>(entity, index)</td>
										<td>this event issues the entity and its position in the listing when the DELETE option is clicked</td>
									</tr>
									<tr>
										<td>on_search</td>
										<td>
											(<br />
												<span class="tab-1"></span>inputSearch,<br />
												<span class="tab-1"></span>paramsRequest,<br />
												<span class="tab-1"></span>params,<br />
												<span class="tab-1"></span>attr,<br />
												<span class="tab-1"></span>isAttrAll,<br />
												<span class="tab-1"></span>type<br />
											)
										</td>
										<td>
											this event is started before a new search is performed with the following parameters:<br /> <br />

											inputSearch: Text entered in the search field with spaces taken from the beginning and end of the sequence (trim). <br /><br />

											paramsRequest: List of fixed parameters, passed by the property to the component, to filter all searches.<br /><br />

											params: List of automatically generated parameters (which form an "and" clause) based on the selected attribute, selected operation, and "inputSearch" content. These parameters set the filtering for this particular search.<br /><br />

											attr: name of the attribute selected for the search. If all attributes are selected, the value is '__#$all$#__'.<br /><br />

											isAttrAll: this happens if "attr" equals '__#$all$#__'.<br /><br />

											type: type of the attribute. If the attribute is '__#$all$#__' then the type is null.<br /><br />

											(Note: If "isAttrAll" is true, "params" is an array of arrays, with each "params" element being the list of parameters that would be generated for a specific attribute.)<br /><br />

											(Note: Each params element has the name of the attribute to be filtered (attr), the value to be compared (value), the comparison perator (operator), and an object (descriptor) that contains relevant information present in "definitions" passed as a property, such as the "type" containing the type of this attribute)
										</td>
									</tr>
									<tr>
										<td>on_search_success</td>
										<td>
											(<br />
												<span class="tab-1"></span>entities,<br />
												<span class="tab-1"></span>count,<br />
												<span class="tab-1"></span>inputSearch<br />
											)
										</td>
										<td>this event emit the list of entities, the total number of entities, and the search field text when any search is successful</td>
									</tr>
									<tr>
										<td>on_search_default_success</td>
										<td>
											(<br />
												<span class="tab-1"></span>entities,<br />
												<span class="tab-1"></span>count,<br />
												<span class="tab-1"></span>inputSearch,<br />
												<span class="tab-1"></span>paramsRequest,<br />
												<span class="tab-1"></span>params<br />
											)</td>
										<td>this event emit the list of entities, total number of entities, search field text, "paramsRequest" and "params" when the search for all attributes is successful</td>
									</tr>
									<tr>
										<td>on_search_all_success</td>
										<td>
											(<br />
												<span class="tab-1"></span>entities,<br />
												<span class="tab-1"></span>count,<br />
												<span class="tab-1"></span>inputSearch<br />
											)
										</td>
										<td>this event emit the list of entities, the total number of entities, and the search field text when the search for all (unfiltered) entities completes successfully</td>
									</tr>
									<tr>
										<td>on_search_attr_success</td>
										<td>
											(<br />
												<span class="tab-1"></span>entities,<br />
												<span class="tab-1"></span>count,<br />
												<span class="tab-1"></span>inputSearch,<br />
												<span class="tab-1"></span>paramsRequest,<br />
												<span class="tab-1"></span>params<br />
											)</td>
										<td>this event emit the list of entities, total number of entities, search field text, "paramsRequest" and "params" when the search for a specific attribute completes successfully</td>
									</tr>
									<tr>
										<td>on_error</td>
										<td>(err)</td>
										<td>this event throws an error thrown within the component</td>
									</tr>
									<tr>
										<td>on_error_remove</td>
										<td>(err)</td>
										<td>this event throws an error thrown when trying to remove an entity</td>
									</tr>
									<tr>
										<td>on_error_search</td>
										<td>(err)</td>
										<td>this event throws an error when trying to perform a search</td>
									</tr>
									<tr>
										<td>on_error_search_default</td>
										<td>(err)</td>
										<td>this event throws an error while trying to perform a search for all attributes</td>
									</tr>
									<tr>
										<td>on_error_search_all</td>
										<td>(err)</td>
										<td>this event throws an error when trying to perform a search for all entities (no filtering)</td>
									</tr>
									<tr>
										<td>on_error_search_attr</td>
										<td>(err)</td>
										<td>this event throws an error when trying to perform a search for a specific attribute</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					all <span :style="{ color: 'red' }">list-entities </span><span :style="{ color: 'blue' }">slots</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<table class="table table-striped">
								<thead>
									<tr>
										<th scope="col">slot</th>
										<th scope="col">scoped?</th>
										<th>dynamic?</th>
										<th scope="col">parameters</th>
										<th scope="col">description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>titleSearch</td>
										<td>NO</td>
										<td>NO</td>
										<td></td>
										<td>content to display in search widget title</td>
									</tr>
									<tr>
										<td>titleTable</td>
										<td>NO</td>
										<td>NO</td>
										<td></td>
										<td>content to display in table title</td>
									</tr>
									<tr>
										<td>beforeTable</td>
										<td>NO</td>
										<td>NO</td>
										<td></td>
										<td>content to be displayed before anything</td>
									</tr>
									<tr>
										<td>afterTable</td>
										<td>NO</td>
										<td>NO</td>
										<td></td>
										<td>content to be displayed after pagination</td>
									</tr>
									<tr>
										<td>tblpre</td>
										<td>NO</td>
										<td>NO</td>
										<td></td>
										<td>content to display before entity table and after search widget</td>
									</tr>
									<tr>
										<td>tblpos</td>
										<td>NO</td>
										<td>NO</td>
										<td></td>
										<td>content to display after entity table and before pagination</td>
									</tr>
									<tr>
										<td>pagination</td>
										<td>NO</td>
										<td>NO</td>
										<td></td>
										<td>content to override the default bootstrap-vue pagination</td>
									</tr>
									<tr>
										<td>check</td>
										<td>YES</td>
										<td>NO</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>content to display before any attribute on the same table row</td>
									</tr>
									<tr>
										<td>entity_line</td>
										<td>YES</td>
										<td>NO</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>content to replace each entire row of the table</td>
									</tr>
									<tr>
										<td>td_option</td>
										<td>YES</td>
										<td>NO</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>content to override default options displayed after all attributes in a table row</td>
									</tr>
									<tr>
										<td>beforeDefaultOptions</td>
										<td>YES</td>
										<td>NO</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>options to display before default options (view, edit, report, remove)</td>
									</tr>
									<tr>
										<td>optionView</td>
										<td>YES</td>
										<td>NO</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>content to replace the entity details view button</td>
									</tr>
									<tr>
										<td>optionEdit</td>
										<td>YES</td>
										<td>NO</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>content to replace entity edit button</td>
									</tr>
									<tr>
										<td>optionReport</td>
										<td>YES</td>
										<td>NO</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>content to replace entity reporting button</td>
									</tr>
									<tr>
										<td>optionRemove</td>
										<td>YES</td>
										<td>NO</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>content to replace the remove entity button</td>
									</tr>
									<tr>
										<td>afterDefaultOptions</td>
										<td>YES</td>
										<td>NO</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>options to display after default options (view, edit, report, remove)</td>
									</tr>
									<tr>
										<td>${attr}_slot</td>
										<td>YES</td>
										<td>YES</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>content to override the display of the value of a specific attribute, with "attr" as the attribute name</td>
									</tr>
									<tr>
										<td>${opt}</td>
										<td>YES</td>
										<td>YES</td>
										<td>
											{<br />
												<span class="tab-1"></span>entity,<br />
												<span class="tab-1"></span>index<br />
											}
										</td>
										<td>option to display with its own header in the table, where "opt" is a key of the "options" property and the value linked to that key the content to display in the header</td>
									</tr>
									<tr>
										<td>modal_${slotName}</td>
										<td>YES</td>
										<td>YES</td>
										<td>
											{<br />
												<span class="tab-1"></span>property,<br />
												<span class="tab-1"></span>index,<br />
												<span class="tab-1"></span>descriptorValue<br />
											}
										</td>
										<td>slot to send to <span :style="{ color: 'red' }">modal-entity</span> (responsible for displaying a modal with entity details). "slotName" is the name of the slot that <span :style="{ color: 'red' }">modal-entity</span> will receive. The slots that the <span :style="{ color: 'red' }">modal-entity</span> receives will be described later. Thus, if <span :style="{ color: 'red' }">modal-entity</span> receives, for example, the slot "name_slot", then you should send to <span :style="{ color: 'red' }">list-entitites</span> the slot "modal_name_slot". For "slotName" can be used, you must add "slotName" in "modalSlots" property</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					all <span :style="{ color: 'red' }">modal-entity </span><span :style="{ color: 'blue' }">slots</span> (component used to view the details of an entity)
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<table class="table table-striped">
								<thead>
									<tr>
										<th scope="col">slot</th>
										<th scope="col">scoped?</th>
										<th>dynamic?</th>
										<th scope="col">parameters</th>
										<th scope="col">description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>${property}_before</td>
										<td>YES</td>
										<td>YES</td>
										<td>
											{<br />
												<span class="tab-1"></span>property,<br />
												<span class="tab-1"></span>index,<br />
												<span class="tab-1"></span>descriptorValue<br />
											}
										</td>
										<td>content to be displayed before displaying the content of a given attribute, with "property" being the name of that attribute</td>
									</tr>
									<tr>
										<td>${property}_slot</td>
										<td>YES</td>
										<td>YES</td>
										<td>
											{<br />
												<span class="tab-1"></span>property,<br />
												<span class="tab-1"></span>index,<br />
												<span class="tab-1"></span>descriptorValue<br />
											}
										</td>
										<td>content to override the display of the value of a given attribute, with "property" being the name of that attribute</td>
									</tr>
									<tr>
										<td>${property}_after</td>
										<td>YES</td>
										<td>YES</td>
										<td>
											{<br />
												<span class="tab-1"></span>property,<br />
												<span class="tab-1"></span>index,<br />
												<span class="tab-1"></span>descriptorValue<br />
											}
										</td>
										<td>content to be displayed after displaying the content of a given attribute, with "property" being the name of that attribute</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="card props">
				<div class="card-header">
					all <span :style="{ color: 'blue' }">properties</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<table class="table table-striped">
								<thead>
									<tr>
										<th scope="col">prop</th>
										<th scope="col">type</th>
										<th scope="col">default value</th>
										<th scope="col">description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>isCompact</td>
										<td>Boolean</td>
										<td>false</td>
										<td>true to join the two component parts (the search widget and the table widget)</td>
									</tr>
									<tr>
										<td>useWidget</td>
										<td>Boolean</td>
										<td>true</td>
										<td>true to use a widget to wrap the component</td>
									</tr>
									<tr>
										<td>autoSearch</td>
										<td>Boolean</td>
										<td>false</td>
										<td>if true, the "request.searchAll" method is called automatically upon loading the component</td>
									</tr>
									<tr>
										<td>options</td>
										<td>Object</td>
										<td>{}</td>
										<td>object whose keys are the name of the slots to display after all attributes are displayed. The value of each key is the name to be displayed in the header of each entered option</td>
									</tr>
									<tr>
										<td>routeNameEdit</td>
										<td>String</td>
										<td>null</td>
										<td>name of route containing an entity edit page</td>
									</tr>
									<tr>
										<td>classLine</td>
										<td>Array</td>
										<td>[]</td>
										<td>css class list to use on each table row</td>
									</tr>
									<tr>
										<td>modalSlots</td>
										<td>Array</td>
										<td>[]</td>
										<td>list of slots to place in the "modal-entity"</td>
									</tr>
									<tr>
										<td>parseEditParams</td>
										<td>Function</td>
										<td>
<pre><code class="lang-js">(<span class="hljs-attribute">entity</span>, <span class="hljs-attribute">index</span>, <span class="hljs-attribute">idAttrName</span>) =&gt; ({
    <span class="hljs-attribute">[idAttrName]</span>: entity[idAttrName]
})
</code></pre>
										</td>
										<td>function that takes an entity, its position in the table and the name of the attribute that represents the id and returns the parameters to pass to the edit route</td>
									</tr>
									<tr>
										<td>sync</td>
										<td>Object</td>
										<td>
<pre><code class="lang-js">{
    <span class="hljs-attribute">totalElements</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attribute">page</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attribute">attrSearch</span>: <span class="hljs-keyword">null</span>,
    <span class="hljs-attribute">inputSearch</span>: <span class="hljs-string">''</span>
}
</code></pre>
										</td>
										<td>contains a set of properties that are updated internally by the component</td>
									</tr>
									<tr>
										<td>sync.totalElements</td>
										<td>Number</td>
										<td>0</td>
										<td>total amount of results</td>
									</tr>
									<tr>
										<td>sync.page</td>
										<td>Number</td>
										<td>1</td>
										<td>current page being displayed</td>
									</tr>.
									<tr>
										<td>sync.attrSearch</td>
										<td>Object</td>
										<td>null</td>
										<td>attribute being fetched (example: { display: name, value: 'name' })</td>
									</tr>
									<tr>
										<td>sync.inputSearch</td>
										<td>String</td>
										<td></td>
										<td>value entered in the search field</td>
									</tr>
								</tbody>
							</table>
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
		optionSearch: true,
	},
	brand: {
		type: String,
		optionSearch: true
	},
	price: {
		type: Number,
		optionSearch: true
	},
	perishable: {
		type: Boolean,
		optionSearch: true,
		defaultLastAttr: true
	},
	expiration: {
		type: Date,
		optionSearch: true,
		displayAttr: false
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

				if (Object.is(value, NaN) || Object.is(inputSearch, NaN))
					return false

				return value > inputSearch
			}
			case '$gte': {
				if (typeof value === 'number' || typeof inputSearch === 'number') {
					value = parseFloat(value)
					inputSearch = parseFloat(inputSearch)
				}

				if (Object.is(value, NaN) || Object.is(inputSearch, NaN))
					return falseW

				return value >= inputSearch
			}
			case '$lt': {
				if (typeof value === 'number' || typeof inputSearch === 'number') {
					value = parseFloat(value)
					inputSearch = parseFloat(inputSearch)
				}

				if (Object.is(value, NaN) || Object.is(inputSearch, NaN))
					return false

				return value < inputSearch
			}
			case '$lte': {
				if (typeof value === 'number' || typeof inputSearch === 'number') {
					value = parseFloat(value)
					inputSearch = parseFloat(inputSearch)
				}

				if (Object.is(value, NaN) || Object.is(inputSearch, NaN))
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
			optionRemove: false,
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

			parseEditParams: (entity, index, idAttrName) => ({ [idAttrName]: entity[idAttrName] }),
			options: {},
			autoSearch: false,
			routeNameEdit: null,
			classLine: [],
			modalSlots: [],
			sync: {
				/** quantidade total de entidades (quantidade total de resultados) */
				totalElements: 0,

				/** página atual sendo exibida */
				page: 1,

				/** atributo que está sendo buscado */
				attrSearch: null,

				/** valor que está sendo buscado */
				inputSearch: ''
			}
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

#app h1 {
	font-size: 2.3rem;
	margin-bottom: 1rem;
}

#app h2 {
	font-size: 2rem;
}

#app .tab-1 {
	margin-left: 4ch;
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

#app .card-header {
	font-weight: bold;
	color: darkslategray;
}

#app .card-header::first-letter {
	text-transform: uppercase;
}

#app .lang-js .hljs-keyword {
	color: blue;
}

#app .lang-js .hljs-built_in {
	color: darkcyan;
}

#app .lang-js .hljs-string {
	color: crimson;
}

#app .lang-js .hljs-number {
	color: crimson;
}

#app .lang-js .hljs-title {
	color: darkcyan;
}

#app .lang-js .hljs-attribute {
	color: darkcyan;
}

#app .lang-html .hljs-keyword {
	color: blue;
}

#app .lang-html .hljs-built_in {
	color: darkcyan;
}

#app .lang-html .hljs-comment {
	color: crimson;
}

#app .lang-html .hljs-string {
	color: crimson;
}

#app .lang-html .hljs-number {
	color: crimson;
}
</style>
