import { PluginFunction } from 'vue'
import {
	LEVPluginOptions,
	VueComponent,
	LEVDef,
	LEVDictionaries,
	InvalidDateFormatError,
	LEVDictionary
} from './types'

declare module 'vue/types/vue' {
	interface Vue {
		$getListEntitiesCtxName: () => string;
	}
}

declare class LEVPlugin {
	static install: PluginFunction<LEVPluginOptions>;
}

export let ListEntities: VueComponent
export let ModalEntity: VueComponent
export let VuesticModal: VueComponent
export let VuesticWidget: VueComponent
export let def: LEVDef
export let dictionaries: LEVDictionaries
export let en: LEVDictionary
export let pt: LEVDictionary
export { InvalidDateFormatError }

export default LEVPlugin
