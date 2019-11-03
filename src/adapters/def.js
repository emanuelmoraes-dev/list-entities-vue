export default function definitionAdapter (def) {
	if (typeof def !== 'object' || !def) {
		console.error('"def" not is object')
		return null
	}

	let descriptor = {}
	let descriptorModal = {}
	let optionsSearch = []
	let displayAttrs = []
	let defaultLastAttr = null
	let sort

	let index = -1
	for (let attr of Object.keys(def)) {
		index++

		let defValue = def[attr]

		if (typeof defValue === 'function')
			defValue = { type: defValue }

		descriptor[attr] = { type: defValue.type }
		descriptorModal[attr] = { type: defValue.type }

		if ('array' in defValue) {
			descriptor[attr].array = defValue.array
			descriptorModal[attr].array = defValue.array
		}

		if ('adapter' in defValue)
			descriptor[attr].adapter = descriptorModal[attr].adapter = defValue.adapter

		if ('numberAdapter' in defValue)
			descriptor[attr].numberAdapter = descriptorModal[attr].numberAdapter = defValue.numberAdapter

		if (typeof defValue.fixed === 'number')
			descriptor[attr].fixed = descriptorModal[attr].fixed = defValue.fixed

		if ('pattern' in defValue)
			descriptor[attr].pattern = descriptorModal[attr].pattern = defValue.pattern

		if ('hidden' in defValue)
			descriptor[attr].hidden = defValue.hidden

		if ('disableSort' in defValue)
			descriptor[attr].disableSort = defValue.disableSort

		if ('searchSepOr' in defValue)
			descriptor[attr].searchSepOr = defValue.searchSepOr

		if ('searchSepAnd' in defValue)
			descriptor[attr].searchSepAnd = defValue.searchSepAnd

		if ('joinSep' in defValue)
			descriptor[attr].joinSep = defValue.joinSep

		// if ('contains' in defValue)
		// 	descriptor[attr].contains = defValue.contains

		// if ('startsWith' in defValue)
		// 	descriptor[attr].startsWith = defValue.startsWith

		// if ('endsWith' in defValue)
		// 	descriptor[attr].endsWith = defValue.endsWith

		// if ('equals' in defValue)
		// 	descriptor[attr].equals = defValue.equals
		// else if (defValue.array)
		// 	descriptor[attr].equals = false

		// if ('greaterThan' in defValue)
		// 	descriptor[attr].greaterThan = defValue.greaterThan
		// else if (defValue.array)
		// 	descriptor[attr].greaterThan = false

		// if ('lessThan' in defValue)
		// 	descriptor[attr].lessThan = defValue.lessThan
		// else if (defValue.array)
		// 	descriptor[attr].lessThan = false

		// if ('greaterOrEqualThan' in defValue)
		// 	descriptor[attr].greaterOrEqualThan = defValue.greaterOrEqualThan
		// else if (defValue.array)
		// 	descriptor[attr].greaterOrEqualThan = false

		// if ('lessOrEqualThan' in defValue)
		// 	descriptor[attr].lessOrEqualThan = defValue.lessOrEqualThan
		// else if (defValue.array)
		// 	descriptor[attr].lessOrEqualThan = false

		if ('disableOperators' in defValue)
			descriptor[attr].disableOperators = def.disableOperators
		else if (defValue.array)
			descriptor[attr].disableOperators = ['$gt', '$gte', '$lt', '$lte']

		if (!('modalJoinSep' in defValue) && 'joinSep' in defValue)
			descriptorModal[attr].joinSep = defValue.joinSep
		else if ('modalJoinSep' in defValue)
			descriptorModal[attr].joinSep = defValue.modalJoinSep

		if (typeof defValue.displayModal === 'string' && defValue.displayModal)
			descriptorModal[attr].display = defValue.displayModal
		else if (!('displayModal' in defValue) || defValue.displayModal)
			descriptorModal[attr].display = `${attr}:`
		else
			delete descriptorModal[attr]

		if (defValue.optionSearch) {
			let optS = { display: attr, value: attr }

			if (typeof defValue.optionSearch === 'string')
				optS.display = defValue.optionSearch

			optS.order = defValue.optionSearchOrder || (index + 1)

			optionsSearch.push(optS)
		}

		let disA = null

		if ('displayAttr' in defValue && defValue.displayAttr !== false) {
			disA = { display: attr, value: attr }

			if (typeof defValue.displayAttr === 'string')
				disA.display = defValue.displayAttr

			disA.order = defValue.displayAttrOrder || (index + 1)

			displayAttrs.push(disA)
		} else if (!('displayAttr' in defValue)) {
			disA = { display: attr, value: attr }
			disA.order = defValue.displayAttrOrder || (index + 1)
			displayAttrs.push(disA)
		}

		if ('defaultLastAttr' in defValue && defValue.defaultLastAttr !== false) {
			if (disA) {
				let index = displayAttrs.indexOf(disA)
				if (index >= 0) displayAttrs.splice(index, 1)
			}

			if (!defaultLastAttr) defaultLastAttr = {}

			defaultLastAttr.display = attr
			defaultLastAttr.value = attr

			if (typeof defValue.defaultLastAttr === 'string')
				defaultLastAttr.display = defValue.defaultLastAttr
		}

		if ('args' in defValue)
			descriptor[attr].args = defValue.args

		if (typeof defValue.sort === 'number' && defValue < 0)
			sort = '-' + attr
		else if (typeof defValue.sort === 'number')
			sort = '+' + attr
	}

	optionsSearch.sort((a, b) => a.order - b.order)
	displayAttrs.sort((a, b) => a.order - b.order)

	let rt = {
		descriptor,
		descriptorModal,
		optionsSearch,
		displayAttrs,
		defaultLastAttr
	}

	if (sort)
		rt.sort = sort

	return rt
}
