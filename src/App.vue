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
						id="list-entities"
						:autoSearch="true"
						:isCompact="isCompact"
						:useWidget="useWidget"
						:hideSearch="hideSearch"
						:hideLastAttr="hideLastAttr"
						:joinSep="joinSep"
						:modalJoinSep="modalJoinSep"
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

						<div class="col-md-9 col-sm-9">
							<div class="form-group">
								<div class="form-check form-check-inline prop">
									<input class="form-check-input" type="checkbox" id="chk-show-confirm-modal-on-remove" v-model="showConfirmModalOnRemove">
									<label class="form-check-label" for="chk-show-confirm-modal-on-remove">showConfirmModalOnRemove</label>
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
								<div class="element-form thin">
									<label for="txt-modal-join-sep">modalJoinSep:</label>
									<input
										v-model="textModalJoinSep"
										type="text"
										class="form-control"
										id="txt-modal-join-sep"
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
								( For more details about this property click <a href="#definitions">here</a> )
								<textarea v-model="textDefinitions" class="form-control" id="txt-text-definitions" rows="39"></textarea>
								<a href="#list-entities">
									<button type="button" class="btn btn-primary btn-compile" @click="compile('definitions')">Compile</button>
								</a>
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
								<a href="#list-entities">
									<button type="button" class="btn btn-primary btn-compile" @click="compile('classInput')">Compile</button>
								</a>
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
									<a href="#list-entities">
										<button type="button" class="btn btn-primary btn-compile" @click="compile('stringOperators')">Compile</button>
									</a>
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
									<a href="#list-entities">
										<button type="button" class="btn btn-primary btn-compile" @click="compile('numberOperators')">Compile</button>
									</a>
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
									<a href="#list-entities">
										<button type="button" class="btn btn-primary btn-compile" @click="compile('dateOperators')">Compile</button>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-params-request">paramsRequest:</label>
								<textarea v-model="textParamsRequest" class="form-control" id="txt-text-params-request" rows="1"></textarea>
								<a href="#list-entities">
									<button type="button" class="btn btn-primary btn-compile" @click="compile('paramsRequest')">Compile</button>
								</a>
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
								<a href="#list-entities">
									<button type="button" class="btn btn-primary btn-compile" @click="compile('i18nArgs')">Compile</button>
								</a>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-i18n-args-modal">i18nArgsModal:</label>
								<textarea v-model="textI18nArgsModal" class="form-control" id="txt-text-i18n-args-modal" rows="1"></textarea>
								<a href="#list-entities">
									<button type="button" class="btn btn-primary btn-compile" @click="compile('i18nArgsModal')">Compile</button>
								</a>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-local-dictionary">localDictionary:</label>
								<textarea v-model="textLocalDictionary" class="form-control" id="txt-text-local-dictionary" rows="35"></textarea>
								<a href="#list-entities">
									<button type="button" class="btn btn-primary btn-compile" @click="compile('localDictionary')">Compile</button>
								</a>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<div class="form-group">
								<label for="txt-text-local-dictionary-modal">localDictionaryModal:</label>
								<textarea v-model="textLocalDictionaryModal" class="form-control" id="txt-text-local-dictionary-modal" rows="1"></textarea>
								<a href="#list-entities">
									<button type="button" class="btn btn-primary btn-compile" @click="compile('localDictionaryModal')">Compile</button>
								</a>
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
								<a href="#list-entities">
									<button type="button" class="btn btn-primary btn-compile" @click="compileGlobalDictionaries">Compile</button>
								</a>
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
								<textarea v-model="textRequest" class="form-control" id="txt-text-request" rows="200"></textarea>
								<a href="#list-entities">
									<button type="button" class="btn btn-primary btn-compile" @click="compile('request')">Compile</button>
								</a>
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
						<div class="col table-responsive">
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
					<span :style="{ color: 'blue' }">Install</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
<pre><code class="lang-sh"><span class="hljs-program">npm</span> install <span class="hljs-named_args">--save</span> <span class="hljs-built_in">list-entities-vue</span>
</code></pre>
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
						<div class="col table-responsive">
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
						<div class="col table-responsive">
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

			<div id="definitions" class="card props">
				<div class="card-header">
					How does the <span :style="{ color: 'blue' }">definitions</span> property work?
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<p>
								The "definitions" property is responsible for defining the modeling of the entity being listed.
								This modeling tells the component how the entity is structured, which attributes can be
								individually filtered, and how the component will assemble the filters that will be used to
								perform searches. In addition, there are several functions that can be applied individually to a
								specific property by simply entering the correct options for each property.
							</p>
							<p>
								The property "definitions" is of type Object with unfriendly syntax. To resolve this issue, we
								recommend that you use a helper function to assemble this object. The helper function takes a
								friendlier syntax object and returns an object that the component can understand. There is
								already a default helper function that can be accessed through an instance of Vue (by default,
								this.$lev.def) or the "def" variable exported by "list-entity-vue".
							</p>
							<p>
								The following is an explanation of how the object syntax that this helper function receives
								works.
							</p>
							<p>
								The key of this object represents a property that the entity owns. The value associated with
								this key is also an object whose keys are a set of options with their respective values. If
								an entity attribute is bound to a function (String, Number, Boolean, or Date) instead of an
								object, it is the same as creating an object that has only the "type" option, having the
								given function as its value. The options available for a specific attribute will be shown
								below:
							</p>
						</div>
					</div>

					<div class="row">
						<div class="col table-responsive">
							<table class="table table-striped">
								<thead>
									<tr>
										<th scope="col">option</th>
										<th scope="col">required?</th>
										<th scope="col">type</th>
										<th scope="col">default value</th>
										<th scope="col">description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>type</td>
										<td>YES</td>
										<td>String | Number | Boolean | Date</td>
										<td></td>
										<td>data type stored by this property</td>
									</tr>
									<tr>
										<td>array</td>
										<td>NO</td>
										<td>Boolean</td>
										<td><span :style="{ color: 'blue' }">false</span></td>
										<td><span :style="{ color: 'blue' }">true</span> if the property is an array</td>
									</tr>
									<tr>
										<td>displayAttr</td>
										<td>NO</td>
										<td>Boolean</td>
										<td><span :style="{ color: 'blue' }">true</span></td>
										<td>if <span :style="{ color: 'blue' }">false</span>, the attribute by default will NOT be displayed in the table</td>
									</tr>
									<tr>
										<td>headerText</td>
										<td>NO</td>
										<td>String</td>
										<td>(same attribute name will be displayed)</td>
										<td>attribute name to be shown in table header</td>
									</tr>
									<tr>
										<td>displayAttrOrder</td>
										<td>NO</td>
										<td>Number</td>
										<td></td>
										<td>changes the default order of attributes that will be displayed in the table (of 1)</td>
									</tr>
									<tr>
										<td>defaultLastAttr</td>
										<td>NO</td>
										<td>Boolean</td>
										<td><span :style="{ color: 'blue' }">false</span></td>
										<td>
											<p>
												it is very common for the number of properties the entity has to be greater than the number of properties that can be displayed in a table. For this reason, it makes sense to have properties with the "displayAttr" option set to <span :style="{ color: 'blue' }">false</span> so that this property is not displayed by default in the table, but imagine the following situation:
											</p>
											<p>
												Let's say you want to list products by "name", "brand", "price", and "category" list, but only three of these attributes should be shown in the table. To solve this situation, imagine that only the "categories" property has the "displayAttr" option equal to <span :style="{ color: 'blue' }">false</span>. In this case, only the "categories" attribute would not be displayed by default.
											</p>
											<p>
												In this scenario, what would happen if the user clicked to filter products by category? Products would be searched based on their categories, but the user could not see each product's categories without having to display the details mode.
											</p>
											<p>
												To solve this problem, you can set, for example, the property "brand" to "defaultLastAttr". In this case, the "brand" would reach the end of the table row, and if the user clicked to filter by "categories", the last attribute would no longer be the "brand" and would be "categories". If the user clicks on any other type of filtering, then the last attribute would be the "brand" again.
											</p>
										</td>
									</tr>
									<tr>
										<td>displayModal</td>
										<td>NO</td>
										<td>String | Boolean</td>
										<td><span :style="{ color: 'blue' }">true</span></td>
										<td>attribute name to display in <span :style="{ color: 'blue' }">&lt;modal-entity&gt;</span> (if true, same attribute name will be displayed)</td>
									</tr>
									<tr>
										<td>optionSearch</td>
										<td>NO</td>
										<td>String | Boolean</td>
										<td><span :style="{ color: 'blue' }">false</span></td>
										<td>attribute name to display in <span :style="{ color: 'blue' }">&lt;select&gt;</span> attributes in search widget (if true, same attribute name will be displayed)</td>
									</tr>
									<tr>
										<td>optionSearchOrder</td>
										<td>NO</td>
										<td>Number</td>
										<td></td>
										<td>changes the default order of attributes that will be displayed for filtering (from 1)</td>
									</tr>
									<tr>
										<td>disableSort</td>
										<td>NO</td>
										<td>Boolean</td>
										<td><span :style="{ color: 'blue' }">false</span></td>
										<td>if <span :style="{ color: 'blue' }">true</span>, the property cannot be used to order</td>
									</tr>
									<tr>
										<td>sort</td>
										<td>NO</td>
										<td>Number</td>
										<td></td>
										<td>if it is a negative number, entities are initially sorted by this attribute in descending order. Otherwise, it will be sorted in ascending order. If no property has this option, the first property that does not have the "disableSort" option (or that has the value <span :style="{ color: 'blue' }">false</span>) will be used to sort in ascending order</td>
									</tr>
									<tr>
										<td>adapter</td>
										<td>NO</td>
										<td>Function</td>
										<td></td>
										<td>
											<p>
												if the attribute is an array and the "adapter" option is set, this function is used to override what will be displayed at each array position.
											</p>
											<p>
												If the attribute is not an array, its value will be replaced by the return of this function
											</p>
										</td>
									</tr>
									<tr>
										<td>numberAdapter</td>
										<td>NO</td>
										<td>Boolean</td>
										<td><span :style="{ color: 'blue' }">false</span></td>
										<td>if <span :style="{ color: 'blue' }">true</span> and the property is an array, each element will try to be converted to number (via parseFloat) and if the "fixed" option is set, each number will be overridden by calling the method "Number.prototype.toFixed"</td>
									</tr>
									<tr>
										<td>fixed</td>
										<td>NO</td>
										<td>Number</td>
										<td></td>
										<td>option to be used in conjunction with the "numberAdapter" option to replace each array element with the "Number.prototype.toFixed" method call</td>
									</tr>
									<tr>
										<td>pattern</td>
										<td>NO</td>
										<td>String</td>
										<td></td>
										<td>if the attribute is of type "Date", "pattern" sets the default to be displayed for this date. This default is the same as that provided by the <a target="_blank" href="https://www.npmjs.com/package/datetime-utility">datetime-utility</a> package.</td>
									</tr>
									<tr>
										<td>hidden</td>
										<td>NO</td>
										<td>Boolean</td>
										<td><span :style="{ color: 'blue' }">false</span></td>
										<td>if the property does not have the "defaultLastAttr" option and has the "hidden" option equal to true, this property will not be displayed in the table</td>
									</tr>
									<tr>
										<td>searchSepOr</td>
										<td>NO</td>
										<td>String | Regexp</td>
										<td></td>
										<td>
											<p>
												if the property is an array, the content of "searchSepOr" tells how the search field text will be divided (using String.prototype.split) into several parts; therefore, filtering for this attribute requires comparison with only one of these parts.
											</p>
											<p>
												Example: Let's say the attribute has the following values: ['food', 'drinks'].
											</p>
											<p>
												Let's say the value of "searchSepOr" is: '|'
											</p>
											<p>
												Let's also say that the user entered in the search field the following value: 'foods|cleanliness'.
											</p>
											<p>
												In this scenario, the filtering for this attribute would be true because 'food' is one of the values present in this matrix.
											</p>
											<p>
												<span :style="{ color: 'red' }">IMPORTANT:</span> The implementation of this functionality must be done externally, through the functions present in the "request" property or through the capture of search events.
											</p>
										</td>
									</tr>
									<tr>
										<td>searchSepAnd</td>
										<td>NO</td>
										<td>String | Regexp</td>
										<td></td>
										<td>
											<p>
												if the property is an array, the content of "searchSepAnd" tells how the search field text will be divided (using String.prototype.split) into several parts; therefore, filtering for this attribute requires comparison with ALL these parts.
											</p>
											<p>
												Example: Let's say the attribute has the following values: ['food', 'drinks'].
											</p>
											<p>
												Let's say the value of "searchSepAnd" is: '|'
											</p>
											<p>
												Let's also say that the user entered in the search field the following value: 'foods|cleaning'.
											</p>
											<p>
												In this scenario, the filtering for this attribute would be false because 'cleaning' is not one of the values present in this array.
											</p>
											<p>
												<span :style="{ color: 'red' }">IMPORTANT:</span> The implementation of this functionality must be done externally, through the functions present in the "request" property or through the capture of search events.
											</p>
										</td>
									</tr>
									<tr>
										<td>joinSep</td>
										<td>NO</td>
										<td>String</td>
										<td></td>
										<td>if the property is an array, "joinSep" will contain the text that will be used to join the values of that array. If this option is not entered, the array is joined using the value contained in the "joinSep" property present in the component</td>
									</tr>
									<tr>
										<td>modalJoinSep</td>
										<td>NO</td>
										<td>String</td>
										<td></td>
										<td>if the property is an array, "modalJoinSep" will contain the text that will be used to merge the values of that array into <span :style="{ color: 'blue' }">&lt;modal-entity&gt;</span> (modal responsible for displaying entity details). If this option is not entered, the array is joined using the value contained in the "modalJoinSep" property present in the component</td>
									</tr>
									<tr>
										<td>disableOperators</td>
										<td>NO</td>
										<td>Array</td>
										<td>
											<p>[]</p>
											<p>or</p>
											<p>
												[<br />
													<span class="tab-1"></span>'$gt',<br />
													<span class="tab-1"></span>'$gte',<br />
													<span class="tab-1"></span>'$lt',<br />
													<span class="tab-1"></span>'$lte'<br />
												]
											</p>
										</td>
										<td>contains a list of operators that will be ignored for this property. If the property is an array, by default the ignored operators will be ['$gt', '$gte', '$lt', '$lte']. If the property is not an array, by default no operation is ignored.</td>
									</tr>
									<tr>
										<td>args</td>
										<td>NO</td>
										<td><span :style="{ color: 'blue' }">any</span></td>
										<td></td>
										<td>auxiliary value that is NOT used internally by <span :style="{ color: 'blue' }">&lt;list-entities&gt;</span>. This value is intended to pass extra information to the functions that will implement the search functions</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div id="definitions" class="card props">
				<div class="card-header">
					<span :style="{ color: 'blue' }">Definitions</span> property <span :style="{ color: 'red' }">reactivity</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<p>
								The object sent to the "definitions" property can have any of its properties or subproperties
								reactively changed except the "descriptor" property. If you want to create a reactivity in
								the "descriptor" property, create a new object for "descriptor" with a new reference with the
								values you want to reactively change.
							</p>
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
						<div class="col table-responsive">
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
						<div class="col table-responsive">
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
										<td>beforeSearch</td>
										<td>NO</td>
										<td>NO</td>
										<td></td>
										<td>content to be shown before search fields</td>
									</tr>
									<tr>
										<td>afterSearch</td>
										<td>NO</td>
										<td>NO</td>
										<td></td>
										<td>content to show after search fields</td>
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
										<td>slot to send to <span :style="{ color: 'red' }">modal-entity</span> (responsible for displaying a modal with entity details). "slotName" is the name of the slot that <span :style="{ color: 'red' }">modal-entity</span> will receive. The slots that the <span :style="{ color: 'red' }">modal-entity</span> receives will be described later. Thus, if <span :style="{ color: 'red' }">modal-entity</span> receives, for example, the slot "name_slot", then you should send to <span :style="{ color: 'red' }">list-entities</span> the slot "modal_name_slot". For "slotName" can be used, you must add "slotName" in "modalSlots" property</td>
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
						<div class="col table-responsive">
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
<!--
			<div class="card props">
				<div class="card-header">
					all <span :style="{ color: 'blue' }">properties</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col table-responsive">
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
			</div> -->

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
	title: {
		type: String,
		optionSearch: true
	},
	'genres.name': {
		type: String,
		array: true,
		searchSepOr: /\\s*\\|\\s*/,
		optionSearch: 'genres',
		displayModal: 'genres',
		headerText: 'genres',
		disableSort: true
	},
	adult: {
		type: Boolean,
		optionSearch: true,
		defaultLastAttr: true
	},
	original_language: {
		type: String,
		optionSearch: 'language',
		displayModal: 'original language',
		headerText: 'original language',
		displayAttr: false
	},
	release_date: {
		type: Date,
		optionSearch: 'release date',
		displayModal: 'release date',
		headerText: 'release date',
		displayAttr: false
	},
	overview: {
		type: String,
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
		tdOptionName: 'options:',
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
		attrs: { /* 'release date': 'date' */ },
		patterns: { /* 'dd/MM/yyyy': 'yyyy/dd/MM' */ }
}`

const textGlobalDictionaries = `this.$lev.lang = 'en'

this.$lev.dictionaries = [
	{
		use: (i18nArgs, ctx) => true,
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
			tdOptionName: (i18nArgs, ctx) => 'options:',
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
		use: (i18nArgs, ctx) => true,
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
			tdOptionName: (i18nArgs, ctx) => 'opções:',
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
	/** used by list-entities. Returns all entities with order and pagination */
	async searchAll (page, pageSize, sort, inputSearch) {
		this._orderBy(this._movies, sort)
		let movies = this._paginate(this._movies, page, pageSize)
		return {
			count: this._movies.length,
			entities: movies
		}
	},

	/** used by list-entities. Returns entities filtered by a specific attribute */
	async searchAttr (page, pageSize, sort, inputSearch, paramsRequest, params) {
		params = params.slice()
		params.push.apply(params, paramsRequest)
		let movies = this._filter(this._movies, params)
		this._orderBy(movies, sort)
		movies = this._paginate(movies, page, pageSize)
		return {
			count: movies.length,
			entities: movies
		}
	},

	/** used by list-entities. Returns filtered entities based on all attributes */
	async searchDefault (page, pageSize, sort, inputSearch, paramsRequest, params) {
		let movies = this._filter(this._movies, paramsRequest)
		movies = this._filterOr(movies, params)
		this._orderBy(movies, sort)
		movies = this._paginate(movies, page, pageSize)
		return {
			count: movies.length,
			entities: movies
		}
	},

	/** used by list-entities. Remove a specific entity */
	async delete (id, entity, index, entities) {
		this._movies.splice(index, 1)
	},

	/** NOT used by list-entities. Sort a movie list by an attribute (+\${attr} or -\${attr}) */
	_orderBy (movies, sort) {
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

		movies.sort((a, b) => (a[attr] < b[attr]) ? -1 * signal : 1 * signal)
	},

	/** NOT used by list-entities. Returns a list of movies on the correct page */
	_paginate (movies, page, pageSize) {
		return movies.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
	},

	/** NOT used by list-entities. Search for movies that match user filters */
	_filter (movies, params) {
		return movies.filter(movie => this._movieVerify(movie, params))
	},

	/** NOT used by list-entities. Search for movies that match any of the filters */
	_filterOr (movies, params) {
		return movies.filter(movie => this._movieVerifyOr(movie, params))
	},

	/** NOT used by list-entities. Returns true if the movie matches any of the filters */
	_movieVerifyOr (movie, params) {
		return params.reduce((valid, and) => {
			if (valid) return true
			return this._movieVerify(movie, and)
		}, false)
	},

	/** NOT used by list-entities. Returns true if the movie matches the filters provided */
	_movieVerify (movie, params) {
		return params.reduce((valid, param) => {
			if (!valid)
				return false

			if (param.operator === '$' && param.descriptor.type === String)
				param.operator = '$in'

			let attrValue

			if (param.attr === 'genres.name')
				attrValue = movie.genres.map(g => g.name)
			else
				attrValue = movie[param.attr]

			if (param.descriptor.searchSepAnd) {
				let values = param.value.split(param.descriptor.searchSepAnd)
					.map(value => this._verify(attrValue, param.operator, value))

				return values.reduce((p, valid) => p && valid, true)
			} else if (param.descriptor.searchSepOr) {
				let values = param.value.split(param.descriptor.searchSepOr)
					.map(value => this._verify(attrValue, param.operator, value))

				return values.reduce((p, valid) => p || valid, false)
			}

			return this._verify(attrValue, param.operator, param.value)
		}, true)
	},

	/** NOT used by list-entities. Performs a logical comparison between two values through an operator */
	_verify (value1, operator, value2) {
		if (value1 instanceof Array)
			return value1.map(v => this._verify(v, operator, value2))
				.reduce((p, n) => p || n, false)

		if (value1 instanceof Date)
			value1 = value1.getTime()

		if (value2 instanceof Date)
			value2 = value2.getTime()

		if (operator === '$') // if an operator has not been selected
			operator = '$eq'

		switch (operator) {
			case '$in': return value1.match(new RegExp(this._scape(value2), 'i'))
			case '$nin': return !value1.match(new RegExp(this._scape(value2), 'i'))
			case '$eq': return \`\${value1}\` === \`\${value2}\`
			case '$neq': return \`\${value1}\` !== \`\${value2}\`
			case '$sw': return value1.startsWith(value2)
			case '$nsw': return !value1.startsWith(value2)
			case '$ew': return value1.endsWith(value2)
			case '$new': return !value1.endsWith(value2)
			case '$gt': {
				if (typeof value1 === 'number' || typeof value2 === 'number') {
					value1 = parseFloat(value1)
					value2 = parseFloat(value2)
				}

				if (Object.is(value1, NaN) || Object.is(value2, NaN))
					return false

				return value1 > value2
			}
			case '$gte': {
				if (typeof value1 === 'number' || typeof value2 === 'number') {
					value1 = parseFloat(value1)
					value2 = parseFloat(value2)
				}

				if (Object.is(value1, NaN) || Object.is(value2, NaN))
					return false

				return value1 >= value2
			}
			case '$lt': {
				if (typeof value1 === 'number' || typeof value2 === 'number') {
					value1 = parseFloat(value1)
					value2 = parseFloat(value2)
				}

				if (Object.is(value1, NaN) || Object.is(value2, NaN))
					return false

				return value1 < value2
			}
			case '$lte': {
				if (typeof value1 === 'number' || typeof value2 === 'number') {
					value1 = parseFloat(value1)
					value2 = parseFloat(value2)
				}

				if (Object.is(value1, NaN) || Object.is(value2, NaN))
					return false

				return value1 <= value2
			}
			default: return false
		}
	},

	/** NOT used by list-entities. Returns string with special regular expression characters with escape */
	_scape(str) {
		return str.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&')
	},

	/** NOT used by list-entities. Movie list */
	_movies: [
		{
			"adult": false,
			"genres": [
					{
							"id": 80,
							"name": "Crime"
					},
					{
							"id": 53,
							"name": "Thriller"
					},
					{
							"id": 18,
							"name": "Drama"
					}
			],
			"id": 475557,
			"original_language": "en",
			"title": "Joker",
			"overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
			"release_date": new Date(2019, 9, 2)
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 28,
							"name": "Action"
					},
					{
							"id": 878,
							"name": "Science Fiction"
					}
			],
			"id": 290859,
			"original_language": "en",
			"title": "Terminator: Dark Fate",
			"overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
			"release_date": new Date(2019, 9, 23)
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 14,
							"name": "Fantasy"
					},
					{
							"id": 12,
							"name": "Adventure"
					},
					{
							"id": 10751,
							"name": "Family"
					}
			],
			"id": 420809,
			"original_language": "en",
			"title": "Maleficent: Mistress of Evil",
			"overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
			"release_date": new Date(2019, 9, 16)
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 16,
							"name": "Animation"
					},
					{
							"id": 12,
							"name": "Adventure"
					},
					{
							"id": 35,
							"name": "Comedy"
					},
					{
							"id": 10751,
							"name": "Family"
					}
			],
			"id": 920,
			"original_language": "en",
			"title": "Cars",
			"overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
			"release_date": new Date(2006, 5, 8)
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 80,
							"name": "Crime"
					},
					{
							"id": 18,
							"name": "Drama"
					},
					{
							"id": 53,
							"name": "Thriller"
					}
			],
			"id": 559969,
			"original_language": "en",
			"title": "El Camino: A Breaking Bad Movie",
			"overview": "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
			"release_date": new Date(2019, 9, 11)
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 27,
							"name": "Horror"
					},
					{
							"id": 28,
							"name": "Action"
					},
					{
							"id": 35,
							"name": "Comedy"
					}
			],
			"id": 338967,
			"original_language": "en",
			"title": "Zombieland: Double Tap",
			"overview": "Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.",
			"release_date": new Date(2019, 9, 9)
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 35,
							"name": "Comedy"
					}
			],
			"id": 521777,
			"original_language": "en",
			"title": "Good Boys",
			"overview": "A group of young boys on the cusp of becoming teenagers embark on an epic quest to fix their broken drone before their parents get home.",
			"release_date": new Date(2019, 7, 14)
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 53,
							"name": "Thriller"
					},
					{
							"id": 27,
							"name": "Horror"
					},
					{
							"id": 12,
							"name": "Adventure"
					},
					{
							"id": 18,
							"name": "Drama"
					}
			],
			"id": 480105,
			"original_language": "en",
			"title": "47 Meters Down: Uncaged",
			"overview": "A group of backpackers diving in a ruined underwater city discover that they have stumbled into the territory of the ocean's deadliest shark species.",
			"release_date": new Date(2019, 7, 15),
			"tagline": "The Next Chapter",
			"title": "47 Meters Down: Uncaged",
			"video": false,
			"vote_average": 5.1,
			"vote_count": 144
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 12,
							"name": "Adventure"
					},
					{
							"id": 16,
							"name": "Animation"
					},
					{
							"id": 18,
							"name": "Drama"
					}
			],
			"id": 420818,
			"original_language": "en",
			"title": "The Lion King",
			"overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
			"release_date": new Date(2019, 6, 12)
		},
		{
			"adult": false,
			"genres": [
				{
						"id": 28,
						"name": "Action"
				},
				{
						"id": 18,
						"name": "Drama"
				},
        {
            "id": 36,
            "name": "History"
        }
			],
			"id": 449924,
			"original_language": "cn",
			"overview": "Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.",
			"release_date": new Date(2019, 11, 20),
			"title": "Ip Man 4: The Finale",
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 16,
							"name": "Animation"
					},
					{
							"id": 28,
							"name": "Action"
					},
					{
							"id": 12,
							"name": "Adventure"
					}
			],
			"id": 568012,
			"original_language": "ja",
			"overview": \`One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the "One Piece" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.\`,
			"release_date": new Date(2019, 7, 9),
			"title": "One Piece: Stampede"
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 28,
							"name": "Action"
					},
					{
							"id": 12,
							"name": "Adventure"
					},
					{
							"id": 878,
							"name": "Science Fiction"
					}
			],
			"id": 429617,
			"original_language": "en",
			"original_title": "Spider-Man: Far from Home",
			"overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
			"release_date": new Date(2019, 5, 28),
			"title": "Spider-Man: Far from Home"
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 27,
							"name": "Horror"
					}
			],
			"id": 501170,
			"original_language": "en",
			"overview": \`A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to "shine." He tries to protect her from the True Knot, a cult whose goal is to feed off people like them in order to remain immortal.\`,
			"release_date": new Date(2019, 10, 30),
			"title": "Doctor Sleep"
		},
		{
			"adult": false,
			"genres": [
					{
							"id": 28,
							"name": "Action"
					},
					{
							"id": 12,
							"name": "Adventure"
					},
					{
							"id": 878,
							"name": "Science Fiction"
					},
					{
							"id": 80,
							"name": "Crime"
					}
			],
			"id": 566057,
			"original_language": "ja",
			"overview": \`"Lupinranger VS Patranger VS Kyuranger" is an upcoming V-Cinext film between Kaitou Sentai Lupinranger VS Keisatsu Sentai Patranger and Uchu Sentai Kyuranger. The story begins when the Lupinrangers, Kairi, Touma, and Umika, are kidnapped by someone mysterious. The Patrangers are then tasked with an Abduction Case to find the missing thieves, where they run into the Kyuranger team as they pass through space. Just who exactly kidnapped them? And why did the 12 Kyurangers return to space?\`,
			"release_date": new Date(2019, 4, 3),
			"title": "Lupinranger VS Patranger VS Kyuranger"
		}
	]
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
			joinSep: ' | ',
			textModalJoinSep: '\\n',
			modalJoinSep: '\n',
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

			classInput: null,
			stringOperators: null,
			numberOperators: null,
			dateOperators: null,
			paramsRequest: null,
			definitions: null,
			localDictionary: null,
			localDictionaryModal: null,
			i18nArgs: null,
			i18nArgsModal: null,
			globalDictionaries: null,
			request: null,

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

	created () {
		this.complieAll()
	},

	watch: {
		textModalJoinSep () {
			this.modalJoinSep = this.textModalJoinSep.replace(/\\n/g, '\n')
		}
	},

	methods: {
		showModal () {
			this.$refs.modal.open()
		},

		onError (err) {
			console.error(err)
		},

		compile (prop, code = null) {
			if (!code) {
				const Prop = prop[0].toUpperCase() + prop.substring(1)
				code = this[`text${Prop}`]
			}

			this[prop] = eval(`(${code})`)
		},

		compileGlobalDictionaries () {
			this.textLocalDictionary = '{}'
			this.compile('localDictionary')
			eval(`(() => {${this.textGlobalDictionaries}})()`)
		},

		complieAll () {
			[
				'classInput',
				'definitions',
				'stringOperators',
				'numberOperators',
				'dateOperators',
				'paramsRequest',
				'localDictionary',
				'localDictionaryModal',
				'i18nArgs',
				'i18nArgsModal',
				'request'
			].forEach(prop => this.compile(prop))
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

#app .btn-compile {
	margin-top: 1rem;
}

#app .props {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
}

#app .props .form-group .element-form .btn-compile {
	margin-top: 0px;
	margin-bottom: .3rem;
	margin-left: .3rem;
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

#app .lang-sh .hljs-program {
	color: rgb(179, 156, 28);
}

#app .lang-sh .hljs-named_args {
	color: rgb(75, 71, 71);
}

#app .lang-sh .hljs-built_in {
	color: blue;
}
</style>
