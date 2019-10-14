import _listEntities from './src/components/list-entities/list-entities.vue'
import _modalEntity from './src/components/modal-entity/modal-entity.vue'
import _def from './src/adapters/def'

export default {
	install (Vue, {
		listEntitiesIsGlobal = true,
		modalEntityIsGlobal = true,
		nameCtx='$listEntities',
		defCtx='def'
	} = {}) {
		if (listEntitiesIsGlobal)
			Vue.component('list-entities', _listEntities)
		if (modalEntityIsGlobal)
			Vue.component('modal-entity', _modalEntity)
		if (nameCtx) {
			Vue.prototype[nameCtx] = {}
			if (defCtx) Vue.prototype[nameCtx][defCtx] = _def
		}
	}
}

export const listEntities = _listEntities
export const modalEntity = _modalEntity
export const def = _def
