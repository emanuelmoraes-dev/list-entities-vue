export default () => ({
	use: () => true,
	lang: 'en',
	translate: {
		operators: {
			$in: 'in',
			$nin: 'not in',
			$eq: 'equals',
			$neq: 'not equals',
			$sw: 'starts with',
			$nsw: 'not starts with',
			$ew: 'ends with',
			$new: 'not ends with',
			$gt: 'greater than',
			$gte: 'greater than or equal to',
			$lt: 'less than',
			$lte: 'less than or equal to'
		},
		btnSearch: 'Search',
		attrAll: 'All',
		titleSearch: 'Search',
		titleTable: 'Entities',
		tdOptionName: 'OPTIONS:',
		titleSuccessModal: 'Success!',
		titleConfirmModal: 'Attention!',
		titleModalEntity: 'Entity Data',
		confirmTextModalEntity: 'OK',
		removeSuccessMessage: 'Successfully deleted entity!',
		removeConfirmMessage: 'Are you sure you want to delete this entity?',
		okTextModal: 'OK',
		confirmTextModal: 'YES',
		cancelTextModal: 'NO',
		trueStr: 'YES',
		falseStr: 'NO'
	}
})
