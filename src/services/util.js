/**
 * converte um objeto em um objeto pronto para ser enviado em requisição
 * @param {Object} ob - objeto a ser preparado para requisição
 * @returns {Object}
 */
export function prepareJson (ob) {
	let keys = Object.keys(ob)
	for (let key of keys) {
		if (typeof (ob[key]) === 'function') { delete ob[key] }
	}
	ob = JSON.parse(JSON.stringify(ob))
	for (let key in ob) {
		if (key.startsWith('__') && key !== '__v') {
			delete ob[key]
		}
	}
	return ob
}

/**
 * Returns string with special regular expression characters with escape
 * @param {string} str - string to have its special RegExp characters with escape
 * @returns {string} string with special regular expression characters with escape
 * @example
 * scape('ab.*+?^${c}()|d[]\\ef') // ab\.\*\+\?\^\$\{c\}\(\)\|d\[\]\\ef
 */
export function scape (str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Gets the value of an object through its path
 * @param {string} pathAttr - Attribute path containing desired value
 * @param {Object} obj - Object containing desired attribute
 * @param {boolean} [searchArray] - If true, the attributes that are array will recursively call this function at each value present in the array and throw the result of each position into another array that will be returned. If false, arrays are considered objects and their positions are considered attributes. Default value: false
 * @returns {any} Value of an object through its path
 *
 * @example
 * let obj = {
 *     a: {
 *         b: 1,
 *         c: 2
 *     },
 *
 *     b: [
 *         { d: 3, e: 4 },
 *         { d: 5, e: 6 },
 *         { f: 7, g: 8, z: [{ info: '123' }] }
 *     ]
 * }
 *
 * getAttr('a.b', obj) // 1
 * getAttr('a.c', obj) // 2
 * getAttr('b.2.f', obj) // 7
 * getAttr('b.2.g', obj) // 8
 *
 * getAttr('b.d', obj, true) // [3,5,undefined]
 * getAttr('b.e', obj, true) // [4,6,undefined]
 * getAttr('b.z.info', obj, true) // [undefined, undefined, ['123']]
 */
export function getAttr (pathAttr, obj, searchArray = false) {
	if (!obj) {
		return obj
	}

	if (!pathAttr) {
		return null
	}

	if (searchArray && obj instanceof Array) {
		let rt = []

		for (let v of obj) {
			rt.push(getAttr(pathAttr, v, searchArray))
		}

		return rt
	}

	if (pathAttr.match(/\./)) {
		let pathAttrArray = pathAttr.split('.')
		let pathRemaning = pathAttrArray.slice(1).join('.')
		let attr = pathAttrArray[0]
		let value = obj[attr]

		if (searchArray && value instanceof Array) {
			let rt = []
			for (let v of value) {
				rt.push(getAttr(pathRemaning, v, searchArray))
			}
			return rt
		} else {
			return getAttr(pathRemaning, value, searchArray)
		}
	} else {
		let value = obj[pathAttr]

		if (searchArray && value instanceof Array) {
			let rt = []
			for (let v of value) {
				rt.push(v)
			}
			return rt
		} else {
			return value
		}
	}
}

/**
	* Allows you to easily concatenate all subarray elements of an array
	* @param {array} array - Array that will have all of its subarray concatenated with itself
	* @param {boolean} [ignoreNull] - If true, Ignore all null and undefined values. Default value: false
	* @returns {array} Result of concatenation matrix of all subarrays
	*
	* @example
	* let a = [null, 1, 2, [3, undefined, 4, [5, 6], 7], 8, [null]]
	*
	* extractValuesByArray(a) // [null, 1, 2, 3, undefined, 4, 5, 6, 7, 8, null]
	* extractValuesByArray(a, true) // [1, 2, 3, 4, 5, 6, 7, 8]
	*/
export function extractValuesByArray (array, ignoreNull = false) {
	if (array instanceof Array) {
		return array.reduce((p, n, i) => {
			if (n instanceof Array) {
				return [...p, ...extractValuesByArray(n)]
			} else if (!ignoreNull || (n !== null && n !== undefined)) {
				return [...p, n]
			} else {
				return p
			}
		}, [])
	} else {
		return [array]
	}
}
