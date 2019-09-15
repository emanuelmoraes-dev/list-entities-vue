import _listEntities from './src/components/list-entities/list-entities.vue'
import _modalEntity from './src/components/modal-entity/modal-entity.vue'
import _definitionAdapter from './src/adapters/definition-adapter'

export default {
	install (Vue, options) {
		Vue.component('list-entities', _listEntities)
		Vue.component('modal-entity', _modalEntity)
	}
}

export const listEntities = _listEntities
export const modalEntity = _modalEntity
export const definitionAdapter = _definitionAdapter
