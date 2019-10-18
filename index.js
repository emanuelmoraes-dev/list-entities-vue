
import _listEntities from './src/components/list-entities/list-entities.vue'
import _modalEntity from './src/components/modal-entity/modal-entity.vue'
import _def from './src/adapters/def'
import _dictionaries from './src/dictionaries'

export default {
	install (Vue, {
		nameListEntities = 'list-entities',
		nameModalEntity = 'modal-entity',
		dictionaries = _dictionaries,
		ctxName = '$lev',
		lang = 'en'
	} = {}) {
		if (nameListEntities)
			Vue.component(nameListEntities, _listEntities)

		if (nameModalEntity)
			Vue.component(nameModalEntity, _modalEntity)

		Vue.prototype.$getListEntitiesCtxName = function () {
			if (!ctxName || (typeof ctxName !== 'string' && typeof ctxName !== 'symbol'))
				throw new Error('"ctxName" possui valor inválido')
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

export const listEntities = _listEntities
export const modalEntity = _modalEntity
export const def = _def
export const dictionaries = _dictionaries
export * from './src/dictionaries'
