import Vue from 'vue'
import { ExtendedVue } from 'vue/types/vue'

declare type VueComponent = ExtendedVue<Vue, any, any, any, any>

declare interface LEVDictionary {
	btnSearch?: string;
	labelSearch?: string;
	attrAll?: string;
	titleSearch?: string;
	titleTable?: string;
	tdOptionName?: string;
	titleSuccessModal?: string;
	titleConfirmModal?: string;
	titleModalEntity?: string;
	confirmTextModalEntity?: string;
	removeSuccessMessage?: string;
	removeConfirmMessage?: string;
	okTextModal?: string;
	confirmTextModal?: string;
	cancelTextModal?: string;
	trueStr?: string;
	falseStr?: string;
	attrs?: { [key: string]: string };
	patterns?: { [key: string]: string };
}

declare type LEVDefValueType = typeof String | typeof Number | typeof Boolean | typeof Date

declare interface LEVDefValueObj {
	type: LEVDefValueType;
	array?: boolean;
	displayAttr?: boolean;
	headerText?: string;
	displayAttrOrder?: number;
	defaultLastAttr?: boolean;
	displayModal?: string | boolean;
	optionSearch?: string | boolean;
	optionSearchOrder?: number;
	disableSort?: boolean;
	sort?: number;
	adapter?: (value: Array<any>, entity: any) => any;
	numberAdapter?: boolean;
	fixed?: number;
	pattern?: string;
	hidden?: boolean;
	searchSepOr?: string | RegExp;
	searchSepAnd?: string | RegExp;
	joinSep?: string;
	modalJoinSep?: string;
	disableOperators?: Array<string>;
	args?: any;
}

declare type LEVDefValue = LEVDefValueType | LEVDefValueObj
declare type LEVDefObj = { [key: string]: LEVDefValue }

declare interface LEVDefDescriptor {
	type: LEVDefValueType;
	array?: boolean;
	disableSort?: boolean;
	adapter?: (value: Array<any>, entity: any) => any;
	numberAdapter?: boolean;
	fixed?: number;
	pattern?: string;
	hidden?: boolean;
	searchSepOr?: string | RegExp;
	searchSepAnd?: string | RegExp;
	joinSep?: string;
	disableOperators?: Array<string>;
	args?: any;
}

declare interface LEVDefDescriptorModal {
	type: LEVDefValueType;
	array?: boolean;
	adapter?: (value: Array<any>, entity: any) => any;
	numberAdapter?: boolean;
	fixed?: number;
	pattern?: string;
	joinSep?: string;
	display?: string | boolean;
}

declare interface LEVDefDefaultLastAttr {
	headerText: string;
	attr: string;
}

declare interface LEVDefOptionSearch {
	display: string;
	value: string;
	headerText: string;
	order: number;
}

declare interface LEVDefDisplayAttr {
	display: string;
	value: string;
	order: number;
}

declare interface LEVDefDefinitionsValue {
	descriptor: LEVDefDescriptor;
	optionsSearch: Array<LEVDefOptionSearch>;
	displayAttrs: Array<LEVDefDisplayAttr>;
	descriptorModal?: LEVDefDescriptorModal;
	defaultLastAttr?: LEVDefDefaultLastAttr;
	sort?: string;
}

declare type LEVDefDefinitions = { [key: string]: LEVDefDefinitionsValue }
declare type LEVDef = (defObj: LEVDefObj) => LEVDefDefinitions
declare type LEVDictionaries = Array<LEVDictionary>

declare interface LEVPluginOptions {
	nameListEntities?: string;
	nameModalEntity?: string;
	dictionaries?: LEVDictionaries;
	ctxName?: string;
	lang?: string;
}

declare class LEVInvalidDateFormatError extends Error {
	constructor (inputSearch: string, message: string);
	inputSearch: string;
}

declare interface LEVCtx {
	def: LEVDef;
	dictionaries: LEVDictionaries;
	lang: string;
}

export {
	LEVPluginOptions,
	VueComponent,
	LEVDef,
	LEVDictionaries,
	LEVInvalidDateFormatError,
	LEVDictionary,
	LEVCtx
}
