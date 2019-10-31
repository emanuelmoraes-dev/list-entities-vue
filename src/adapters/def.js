export default function definitionAdapter (def) {
	if (typeof def !== 'object' || !def) {
		console.error('"def" not is object')
		return null
	}

	let descriptor = {}
	let descriptorModal = {}
	let modalSlots = []
	let optionsSearch = []
	let displayAttrs = []
	let defaultLastAttr = null
	let sort

	let index = -1
	for (let attr of Object.keys(def)) {
		index++

		let defValue = def[attr]

		if (typeof defValue === 'function')
			defValue = { type: defValue, displayModal: true, displayAttr: true }

		descriptor[attr] = { type: defValue.type }
		descriptorModal[attr] = {}

		if (defValue.array) {
			descriptor[attr].array = defValue.array
			descriptorModal[attr].type = Array
		} else {
			descriptorModal[attr].type = defValue.type
		}

		if ('adapter' in defValue)
			descriptor[attr].adapter = descriptorModal[attr].adapter = defValue.adapter

		if ('numberAdapter' in defValue)
			descriptor[attr].numberAdapter = descriptorModal[attr].numberAdapter = true

		if (typeof defValue.fixed === 'number')
			descriptor[attr].fixed = descriptorModal[attr].fixed = defValue.fixed

		if ('pattern' in defValue)
			descriptor[attr].pattern = descriptorModal[attr].pattern = defValue.pattern

		if ('hidden' in defValue)
			descriptor[attr].hidden = defValue.hidden

		if ('disableSort' in defValue)
			descriptor[attr].disableSort = defValue.disableSort

		if ('searchSep' in defValue)
			descriptor[attr].searchSep = defValue.searchSep

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

		const displayModal = defValue.displayModal

		if (typeof displayModal === 'string' && displayModal)
			descriptorModal[attr].display = displayModal
		else if (displayModal)
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

		if (defValue.modalSlot)
			modalSlots.push(`${attr}_slot`)

		if ('displayAttr' in defValue && defValue.displayAttr !== false) {
			let disA = { display: attr, value: attr }

			if (typeof defValue.displayAttr === 'string')
				disA.display = defValue.displayAttr

			disA.order = defValue.displayAttrOrder || (index + 1)

			displayAttrs.push(disA)
		}

		if ('defaultLastAttr' in defValue && defValue.defaultLastAttr !== false) {
			if (!defaultLastAttr) defaultLastAttr = {}

			defaultLastAttr.display = attr
			defaultLastAttr.value = attr

			if (typeof defValue.defaultLastAttr === 'string')
				defaultLastAttr.display = defValue.defaultLastAttr
		}

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
		modalSlots,
		optionsSearch,
		displayAttrs,
		defaultLastAttr
	}

	if (sort)
		rt.sort = sort

	return rt
}
