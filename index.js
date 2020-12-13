import ListEntities from './src/components/list-entities/list-entities.vue'
import ModalEntity from './src/components/modal-entity/modal-entity.vue'
import def from './src/adapters/def'
import _dictionaries, { en, pt } from './src/dictionaries'
import InvalidDateFormatError from './src/components/list-entities/err/invalid-date-format-error'
import VuesticModal from './lib/vuestic/components/vuestic-modal/VuesticModal.vue'
import VuesticWidget from './lib/vuestic/components/vuestic-widget/VuesticWidget.vue'

export default {
	install (Vue, {
		nameListEntities = 'list-entities',
		nameModalEntity = 'modal-entity',
		dictionaries = _dictionaries,
		ctxName = '$lev',
		lang = 'en'
	} = {}) {
		if (nameListEntities)
			Vue.component(nameListEntities, ListEntities)

		if (nameModalEntity)
			Vue.component(nameModalEntity, ModalEntity)

		Vue.prototype.$getListEntitiesCtxName = function () {
			if (!ctxName || (typeof ctxName !== 'string' && typeof ctxName !== 'symbol'))
				throw new Error('"ctxName" has invalid value')
			return ctxName
		}

		if (ctxName) {
			Vue.prototype[ctxName] = {}
			Vue.prototype[ctxName].def = def
			Vue.prototype[ctxName].dictionaries = dictionaries
			Vue.prototype[ctxName].lang = lang
		}
	}
}

export {
	ListEntities,
	ModalEntity,
	def,
	_dictionaries as dictionaries,
	InvalidDateFormatError,
	en,
	pt,
	VuesticModal,
	VuesticWidget
}
