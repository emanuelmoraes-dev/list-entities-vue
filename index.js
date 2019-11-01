
import _ListEntities from './src/components/list-entities/list-entities.vue'
import _ModalEntity from './src/components/modal-entity/modal-entity.vue'
import _def from './src/adapters/def'
import _dictionaries from './src/dictionaries'
import _InvalidDateFormatError from './src/components/list-entities/err/invalid-date-format-error'

export default {
	install (Vue, {
		nameListEntities = 'list-entities',
		nameModalEntity = 'modal-entity',
		dictionaries = _dictionaries,
		ctxName = '$lev',
		lang = 'en'
	} = {}) {
		if (nameListEntities)
			Vue.component(nameListEntities, _ListEntities)

		if (nameModalEntity)
			Vue.component(nameModalEntity, _ModalEntity)

		Vue.prototype.$getListEntitiesCtxName = function () {
			if (!ctxName || (typeof ctxName !== 'string' && typeof ctxName !== 'symbol'))
				throw new Error('"ctxName" has invalid value')
			return ctxName
		}

		if (ctxName) {
			Vue.prototype[ctxName] = {}
			Vue.prototype[ctxName].def = _def
			Vue.prototype[ctxName].dictionaries = dictionaries
			Vue.prototype[ctxName].lang = lang
		}
	}
}

export const ListEntities = _ListEntities
export const ModalEntity = _ModalEntity
export const def = _def
export const dictionaries = _dictionaries
export const InvalidDateFormatError = _InvalidDateFormatError
export * from './src/dictionaries'
