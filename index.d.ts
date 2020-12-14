import LEVPlugin, {
	ListEntities,
	ModalEntity,
	LEVDef,
	LEVDictionaries,
	InvalidDateFormatError,
	LEVDictionary,
	VuesticModal,
	VuesticWidget
} from './types'

declare module 'vue/types/vue' {
	interface Vue {
		$getListEntitiesCtxName: () => string;
	}
}

export default LEVPlugin
export {
	ListEntities,
	ModalEntity,
	LEVDef as def,
	LEVDictionaries as dictionaries,
	InvalidDateFormatError,
	LEVDictionary as en,
	LEVDictionary as pt,
	VuesticModal,
	VuesticWidget
}
