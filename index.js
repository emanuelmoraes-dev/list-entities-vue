
import _listEntities from './src/components/list-entities/list-entities.vue'
import _modalEntity from './src/components/modal-entity/modal-entity.vue'
import _def from './src/adapters/def'

export default {
	install (Vue, {
		nameListEntities = 'list-entities',
		nameModalEntity = 'modal-entity',
		lang = 'en',
		dictionaries = [],
		ctxName = '$lev',
		ctxNameDef = 'def',
		ctxNameDictionaries = 'dictionaries',
		ctxNameLang = 'lang'
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

			if (ctxNameDef)
				Vue.prototype[ctxName][ctxNameDef] = _def

			if (ctxNameDictionaries)
				Vue.prototype[ctxName][ctxNameDictionaries] = dictionaries

			if (ctxNameLang)
				Vue.prototype[ctxName][ctxNameLang] = lang

			Vue.prototype[ctxName].getDef = function () {
				if (!ctxNameDef || (typeof ctxNameDef !== 'string' && typeof ctxNameDef !== 'symbol'))
					throw new Error('"ctxNameDef" possui valor inválido')
				return Vue.prototype[ctxName][ctxNameDef]
			}

			Vue.prototype[ctxName].setLang = function (lang) {
				if (!ctxNameLang || (typeof ctxNameLang !== 'string' && typeof ctxNameLang !== 'symbol'))
					throw new Error('"ctxNameLang" possui valor inválido')
				Vue.prototype[ctxName][ctxNameLang] = lang
			}

			Vue.prototype[ctxName].getLang = function () {
				if (!ctxNameLang || (typeof ctxNameLang !== 'string' && typeof ctxNameLang !== 'symbol'))
					throw new Error('"ctxNameLang" possui valor inválido')
				return Vue.prototype[ctxName][ctxNameLang]
			}

			Vue.prototype[ctxName].setDictionaries = function (dictionaries) {
				if (!ctxNameDictionaries || (typeof ctxNameDictionaries !== 'string' && typeof ctxNameDictionaries !== 'symbol'))
					throw new Error('"ctxNameDictionaries" possui valor inválido')
				Vue.prototype[ctxName][ctxNameDictionaries] = dictionaries
			}

			Vue.prototype[ctxName].getDictionaries = function () {
				if (!ctxNameDictionaries || (typeof ctxNameDictionaries !== 'string' && typeof ctxNameDictionaries !== 'symbol'))
					throw new Error('"ctxNameDictionaries" possui valor inválido')
				return Vue.prototype[ctxName][ctxNameDictionaries]
			}

			Vue.prototype[ctxName].addDictionary = function (dictionary, index = null) {
				if (!ctxNameDictionaries || (typeof ctxNameDictionaries !== 'string' && typeof ctxNameDictionaries !== 'symbol'))
					throw new Error('"ctxNameDictionaries" possui valor inválido')
				if (index === null || index === undefined)
					Vue.prototype[ctxName][ctxNameDictionaries].push(dictionary)
				else
					Vue.prototype[ctxName][ctxNameDictionaries].splice(index, 0, dictionary)
			}
		}
	}
}

export const listEntities = _listEntities
export const modalEntity = _modalEntity
export const def = _def
