export default function definitionAdapter (def) {
	if (typeof def !== 'object' || !def) {
		console.error('"def" not is object')
		return null
	}

	let descriptor = {}
	let descriptorModal = {}
	let mapPropModalEntity = {}
	let optionsSearch = []
	let displayAttrs = []
	let defaultLastAttr = {}
	let sort

	let index = -1
	for (let attr of Object.keys(def)) {
		index++

		let defValue = def[attr]

		if (typeof defValue === 'function')
			defValue = { type: defValue }

		descriptor[attr] = { type: defValue.type }
		descriptorModal[attr] = {}

		if (defValue.array) {
			descriptor[attr].array = defValue.array
			descriptorModal[attr].type = { type: Array }
		} else {
			descriptorModal[attr].type = { type: defValue.type }
		}

		if ('adapter' in defValue)
			descriptor[attr].numberAdapter = descriptorModal[attr].numberAdapter = defValue.adapter

		if ('numberAdapter' in defValue)
			descriptor[attr].numberAdapter = descriptorModal[attr].numberAdapter = true

		if (typeof defValue.fixed === 'number')
			descriptor[attr].numberAdapter = descriptorModal[attr].numberAdapter = defValue.fixed

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

		if (!('modalJoinSep' in defValue) && 'joinSep' in defValue)
			descriptorModal[attr].joinSep = defValue.joinSep
		else if ('modalJoinSep' in defValue)
			descriptorModal[attr].joinSep = defValue.modalJoinSep

		if ('modelHeaderText' in defValue)
			mapPropModalEntity[attr] = defValue.modelHeaderText

		if (defValue.optionSearch) {
			let optS = { display: attr, value: attr }

			if (typeof defValue.optionSearch === 'string')
				optS.display = defValue.optionSearch

			optS.order = defValue.optionSearchOrder || (index + 1)

			optionsSearch.push(optS)
		}

		if ('displayAttr' in defValue && defValue.displayAttr !== false) {
			let disA = { display: attr, value: attr }

			if (typeof defValue.displayAttr === 'string')
				disA.display = defValue.displayAttr

			disA.order = defValue.displayAttrOrder || (index + 1)

			displayAttrs.push(disA)
		}

		if ('defaultLastAttr' in defValue && defValue.defaultLastAttr !== false) {
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
		mapPropModalEntity,
		optionsSearch,
		displayAttrs,
		defaultLastAttr
	}

	if (sort)
		rt.sort = sort

	return rt
}