#!/usr/bin/env node
/* eslint-disable quotes */
/* eslint-disable indent */

const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

let src
let configFile
let name
let folderName

const args = process.argv.slice(2)

for (let i = 0; i < args.length; i += 2) {
	let prop = args[i]
	let value = args[i + 1] || ''

	if (prop === '--src')
		src = value
	else if (prop === '--config-file')
		configFile = value
	else if (prop === '--name')
		name = value
	else if (prop === '--foldername')
		folderName = value
}

if (!name)
	name = 'list-entities'

if (!folderName)
	folderName = name

if (!src)
	src = '.'

src = path.resolve(src)

if (!configFile)
	configFile = '.list-entities.config.js'

let file = path.join(src, configFile)

let config

if (fs.existsSync(file))
	config = require(file)
else
	config = {}

if (typeof config !== 'object' || !config) {
	console.error('config file not is object')
	process.exit(1)
}

let srcFolder = config.srcFolder || src
let separateFiles = config.separateFiles || true
let createFolder = config.createFolder || true

if (!config.props)
	config.props = {}

let autoSearch = config.props.autoSearch || 'false'
let definitions = config.props.definitions || null
let request = config.props.request || null
let customRemove = config.props.customRemove || 'false'
let titleTable = config.props.titleTable || 'Entities'
let attrAll = config.props.attrAll || 'All'
let tdCheckName = config.props.tdCheckName || ''
let searchOperatorsShow = config.props.searchOperatorsShow || 'false'
let stringOperators = config.props.stringOperators || `{
				contains: 'contains',
				equals: 'equals',
				startsWith: 'startsWith',
				endsWith: 'endsWith'
			}`
let numberOperators = config.props.numberOperators || `{
				equals: 'equals',
				greaterThan: 'greaterThan',
				lessThan: 'lessThan',
				greaterOrEqualThan: 'greaterOrEqualThan',
				lessOrEqualThan: 'lessOrEqualThan'
			}`
let dateOperators = config.props.dateOperators || `{
				equals: 'equals',
				greaterThan: 'greaterThan',
				lessThan: 'lessThan',
				greaterOrEqualThan: 'greaterOrEqualThan',
				lessOrEqualThan: 'lessOrEqualThan'
			}`
let defaultPattern = config.props.defaultPattern || 'yyyy/MM/dd'
let titleSearch = config.props.titleSearch || 'Search'
let tdOptionName = config.props.tdOptionName || 'OPTIONS:'
let idAttrName = config.props.idAttrName || 'id'
let okText = config.props.okText || 'OK'
let confirmText = config.props.confirmText || 'YES'
let cancelText = config.props.cancelText || 'NO'
let titleSuccess = config.props.titleSuccess || 'Success!'
let titleConfirm = config.props.titleConfirm || 'Attention!'
let titleModalEntity = config.props.titleModalEntity || 'Entity Data'
let confirmTextModalEntity = config.props.confirmTextModalEntity || 'OK'
let removeSuccessMessage = config.props.removeSuccessMessage || 'Successfully deleted entity!'
let removeConfirmMessage = config.props.removeConfirmMessage || 'Are you sure you want to delete this entity?'
let trueStr = config.props.trueStr || 'YES'
let falseStr = config.props.falseStr || 'NO'
let okClassModalEntity = config.props.okClassModalEntity || 'btn btn-primary btn-modal btn-ok-modal'
let options = config.props.options || '{}'
let hideSearch = config.props.hideSearch || 'false'
let isCompact = config.props.isCompact || 'false'
let hideLastAttr = config.props.hideLastAttr || 'false'
let classLine = config.props.classLine || '[]'
let optionView = config.props.optionView || 'true'
let optionRemove = config.props.optionRemove || 'true'
let optionEdit = config.props.optionEdit || 'false'
let optionReport = config.props.optionReport || 'false'
let limitPagination = config.props.limitPagination || '5'
let alignPagination = config.props.alignPagination || 'left'
let sizePagination = config.props.sizePagination || ''
let pageSize = config.props.pageSize || '10'
let isShowModal = config.props.isShowModal || 'false'
let smallModalEntity = config.props.smallModalEntity || 'false'
let forceModalEntity = config.props.forceModalEntity || 'false'
let routeNameEdit = config.props.routeNameEdit || null
let parseEditParams = config.props.parseEditParams || '{ [idAttrName]: entity[idAttrName] }'
let paramsRequest = config.props.paramsRequest || '[]'
let joinSep = config.props.joinSep || ' / '

let totalElements$ = config.props.totalElements$ || '0'
let page$ = config.props.page$ || '1'
let attrSearch$ = config.props.attrSearch$ || null
let inputSearch$ = config.props.inputSearch$ || ''

if (!config.styleConfig)
	config.styleConfig = {}

let lang = config.styleConfig.lang || 'css'
let scoped = config.styleConfig.scoped || false

let quotesSingle = typeof config.quotesSingle === 'boolean' ? config.quotesSingle : true
let q = quotesSingle ? "'" : '"'
let style = config.style || ''
let template = config.template || `
<div class="wrapper-\${name}">
	<list-entities
		ref="listEntities"
		:autoSearch="autoSearch"
		:definitions="definitions"
		:request="request"
		:customRemove="customRemove"
		:titleTable="titleTable"
		:attrAll="attrAll"
		:tdCheckName="tdCheckName"
		:searchOperatorsShow="searchOperatorsShow"
		:stringOperators="stringOperators"
		:numberOperators="numberOperators"
		:dateOperators="dateOperators"
		:defaultPattern="defaultPattern"
		:titleSearch="titleSearch"
		:tdOptionName="tdOptionName"
		:idAttrName="idAttrName"
		:okText="okText"
		:confirmText="confirmText"
		:cancelText="cancelText"
		:titleSuccess="titleSuccess"
		:titleConfirm="titleConfirm"
		:titleModalEntity="titleModalEntity"
		:confirmTextModalEntity="confirmTextModalEntity"
		:removeSuccessMessage="removeSuccessMessage"
		:removeConfirmMessage="removeConfirmMessage"
		:trueStr="trueStr"
		:falseStr="falseStr"
		:okClassModalEntity="okClassModalEntity"
		:options="options"
		:hideSearch="hideSearch"
		:isCompact="isCompact"
		:hideLastAttr="hideLastAttr"
		:classLine="classLine"
		:optionView="optionView"
		:optionRemove="optionRemove"
		:optionEdit="optionEdit"
		:optionReport="optionReport"
		:limitPagination="limitPagination"
		:alignPagination="alignPagination"
		:sizePagination="sizePagination"
		:pageSize="pageSize"
		:isShowModal="isShowModal"
		:smallModalEntity="smallModalEntity"
		:forceModalEntity="forceModalEntity"
		:routeNameEdit="routeNameEdit"
		:parseEditParams="parseEditParams"
		:paramsRequest="paramsRequest"
		:joinSep="joinSep"

		v-model="entities"
		:totalElements$.sync="totalElements"
		:page$.sync="page"
		:attrSearch$.sync="attrSearch"
		:inputSearch$.sync="inputSearch"

		@on_error="err => $emit('on_error', err)"
		@on_error_remove="err => $emit('on_error_remove', err)"
		@on_error_search_default="err => $emit('on_error_search_default', err)"
		@on_error_search_all="err => $emit('on_error_search_all', err)"
		@on_error_search_attr="err => $emit('on_error_search_attr', err)"

		@on_remove="(entity, index) => $emit('on_remove', entity, index)"
		@on_edit="(entity, index) => $emit('on_edit', entity, index)"
		@on_search="(params, type, attr, inputSearch) => $emit('on_search', params, type, attr, inputSearch)"
		@on_search_default_success="(params, attr, inputSearch) => $emit('on_search_default_success', params, attr, inputSearch)"
		@on_search_all_success="(params, attr, inputSearch) => $emit('on_search_all_success', params, attr, inputSearch)"
		@on_search_attr_success="(params, attr, inputSearch) => $emit('on_search_attr_success', params, attr, inputSearch)"
	>
		<template v-if="$slots.headerText" slot="headerText">
			<slot name="headerText"></slot>
		</template>

		<template v-if="$slots.beforeTable" slot="beforeTable">
			<slot name="beforeTable"></slot>
		</template>

		<template v-if="$slots.tblpre" slot="tblpre">
			<slot name="tblpre"></slot>
		</template>

		<template v-if="$scopedSlots.check" slot="check" slot-scope="{ entity, index }">
			<slot name="check" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.entity_line" slot="entity_line" slot-scope="{ entity, index }">
			<slot name="entity_line" :entity="entity" :index="index"></slot>
		</template>

		<template v-for="attr of Object.keys(definitions.descriptor)">
			<span :key="attr" v-if="$scopedSlots[\`\${attr}_slot\`]" :slot="\`\${attr}_slot\`" slot-scope="{ entity, index }">
				<slot :name="\`\${attr}_slot\`" :entity="entity" :index="index"></slot>
			</span>
		</template>

		<template v-for="opt of Object.keys(options)">
			<span :key="opt" v-if="$scopedSlots[opt]" :slot="opt" slot-scope="{ entity, index }">
				<slot :name="opt" :entity="entity" :index="index"></slot>
			</span>
		</template>

		<template v-if="$scopedSlots.td_option" slot="td_option" slot-scope="{ entity, index }">
			<slot name="td_option" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.optionView" slot="optionView" slot-scope="{ entity, index }">
			<slot name="optionView" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.optionRemove" slot="optionRemove" slot-scope="{ entity, index }">
			<slot name="optionRemove" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.optionEdit" slot="optionEdit" slot-scope="{ entity, index }">
			<slot name="optionEdit" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.optionReport" slot="optionReport" slot-scope="{ entity, index }">
			<slot name="optionReport" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$slots.tblpos" slot="tblpos">
			<slot name="tblpos"></slot>
		</template>

		<template v-if="$slots.pagination" slot="pagination">
			<slot name="pagination"></slot>
		</template>

		<template v-for="slotName of definitions.modalSlots">
			<div :key="slotName" v-if="$scopedSlots[\`modal_\${slotName}\`]" :slot="\`modal_\${slotName}\`" slot-scope="{ property }">
				<slot :name="\`modal_\${slotName}\`" :property="property"></slot>
			</div>
		</template>
	</list-entities>
</div>
`

template = template.replace(/wrapper-\${name}/, `wrapper-${name}`)

let imports = config.imports || ''
if (imports) imports = imports + '\n'

if (definitions)
	imports = `import { definitionAdapter, listEntities } from ${q}list-entities-vue${q}
${imports}`
else
	imports = `import { listEntities } from ${q}list-entities-vue${q}
${imports}`

let script = `
${imports}
export default {
	name: '${name}',

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
			default: ${autoSearch}
		},

		definitions: {
			type: Object,
			${definitions ? `default: () => definitionAdapter(${definitions})` : 'required: true'}
		},

		request: {
			type: Object,
			default: () => ${request === null ? 'null' : request}
		},

		customRemove: {
			type: Boolean,
			default: () => ${customRemove}
		},

		titleTable: {
			type: String,
			default: ${q}${titleTable}${q}
		},

		attrAll: {
			type: String,
			default: ${q}${attrAll}${q}
		},

		tdCheckName: {
			type: String,
			default: ${q}${tdCheckName}${q}
		},

		searchOperatorsShow: {
			type: Boolean,
			default: ${searchOperatorsShow}
		},

		stringOperators: {
			type: Object,
			default: () => (${stringOperators})
		},

		numberOperators: {
			type: Object,
			default: () => (${numberOperators})
		},

		dateOperators: {
			type: Object,
			default: () => (${dateOperators})
		},

		defaultPattern: {
			type: String,
			default: ${q}${defaultPattern}${q}
		},

		titleSearch: {
			type: String,
			default: ${q}${titleSearch}${q}
		},

		tdOptionName: {
			type: String,
			default: ${q}${tdOptionName}${q}
		},

		idAttrName: {
			type: String,
			default: ${q}${idAttrName}${q}
		},

		okText: {
			type: String,
			default: ${q}${okText}${q}
		},

		confirmText: {
			type: String,
			default: ${q}${confirmText}${q}
		},

		cancelText: {
			type: String,
			default: ${q}${cancelText}${q}
		},

		titleSuccess: {
			type: String,
			default: ${q}${titleSuccess}${q}
		},

		titleConfirm: {
			type: String,
			default: ${q}${titleConfirm}${q}
		},

		titleModalEntity: {
			type: String,
			default: ${q}${titleModalEntity}${q}
		},

		confirmTextModalEntity: {
			Type: String,
			default: ${q}${confirmTextModalEntity}${q}
		},

		removeSuccessMessage: {
			type: String,
			default: ${q}${removeSuccessMessage}${q}
		},

		removeConfirmMessage: {
			type: String,
			default: ${q}${removeConfirmMessage}${q}
		},

		trueStr: {
			type: String,
			default: ${q}${trueStr}${q}
		},

		falseStr: {
			type: String,
			default: ${q}${falseStr}${q}
		},

		okClassModalEntity: {
			type: String,
			default: ${q}${okClassModalEntity}${q}
		},

		options: {
			type: Object,
			default: () => (${options})
		},

		hideSearch: {
			type: Boolean,
			default: ${hideSearch}
		},

		isCompact: {
			type: Boolean,
			default: ${isCompact}
		},

		hideLastAttr: {
			type: Boolean,
			default: ${hideLastAttr}
		},

		classLine: {
			type: Array,
			default: () => ${classLine}
		},

		optionView: {
			type: Boolean,
			default: ${optionView}
		},

		optionRemove: {
			type: Boolean,
			default: ${optionRemove}
		},

		optionEdit: {
			type: Boolean,
			default: ${optionEdit}
		},

		optionReport: {
			type: Boolean,
			default: ${optionReport}
		},

		limitPagination: {
			type: Number | String,
			default: ${limitPagination}
		},

		alignPagination: {
			type: String,
			default: ${q}${alignPagination}${q}
		},

		sizePagination: {
			type: String,
			default: ${q}${sizePagination}${q}
		},

		pageSize: {
			type: Number,
			default: ${pageSize}
		},

		isShowModal: {
			type: Boolean,
			default: ${isShowModal}
		},

		smallModalEntity: {
			Type: Boolean,
			default: ${smallModalEntity}
		},

		forceModalEntity: {
			Type: Boolean,
			default: ${forceModalEntity}
		},

		routeNameEdit: {
			type: String,
			default: ${routeNameEdit === null ? 'null' : `${q}${routeNameEdit}${q}`}
		},

		parseEditParams: {
			type: Function,
			default: (entity, index, idAttrName) => (${parseEditParams})
		},

		paramsRequest: {
			type: Array,
			default: () => ${paramsRequest}
		},

		joinSep: {
			type: String,
			default: ${q}${joinSep}${q}
		},

		// synchronous properties

		value: {
			type: Array,
			required: true
		},

		totalElements$: {
			type: Number,
			default: ${totalElements$}
		},

		page$: {
			type: Number,
			default: ${page$}
		},

		attrSearch$: {
			type: Object,
			default: () => ${attrSearch$}
		},

		inputSearch$: {
			type: String,
			default: ${q}${inputSearch$}${q}
		}
	}
}
`

let struct = `<template>${template}</template>

<script src="./${name}.js"></script>
`

if (style) struct = struct + `
<style lang="${lang}"${scoped ? ' scoped' : ''}>
	@import url("./${name}.${lang}");
</style>
`

let fullComponent = `<template>${template}</template>

<script>${script}</script>
`

if (style) fullComponent = fullComponent + `
<style lang="${lang}"${scoped ? ' scoped' : ''}>${style}</style>
`

let folder = srcFolder

if (createFolder)
	folder = path.join(srcFolder, folderName)

mkdirp.sync(folder)

if (separateFiles) {
	let vue = path.join(folder, `${name}.vue`)
	let js = path.join(folder, `${name}.js`)
	let css = path.join(folder, `${name}.${lang}`)

	if (fs.existsSync(vue)) {
		console.error(`file "${vue}" already exists`)
		process.exit(2)
	}

	if (fs.existsSync(js)) {
		console.error(`file "${js}" already exists`)
		process.exit(2)
	}

	if (style && fs.existsSync(css)) {
		console.error(`file "${css}" already exists`)
		process.exit(2)
	}

	fs.writeFileSync(vue, struct)
	fs.writeFileSync(js, script)

	if (style)
		fs.writeFileSync(css, style)
} else {
	let vue = path.join(folder, `${name}.vue`)

	if (fs.existsSync(vue)) {
		console.error(`file "${vue}" already exists`)
		process.exit(2)
	}

	fs.writeFileSync(vue, fullComponent)
}
