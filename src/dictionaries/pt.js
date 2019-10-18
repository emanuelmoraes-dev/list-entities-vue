export default () => ({
	use: () => true,
	lang: 'pt',
	translate: {
		operators: {
			$in: 'contém',
			$nin: 'não contém',
			$eq: 'igual',
			$neq: 'não igual',
			$sw: 'inicia com',
			$nsw: 'não inicia com',
			$ew: 'termina com',
			$new: 'não termina com',
			$gt: 'maior que',
			$gte: 'maior ou igual que',
			$lt: 'menor que',
			$lte: 'menor ou igual que'
		},
		attrAll: 'Todos',
		titleSearch: 'Buscar',
		titleTable: 'Entidades',
		tdOptionName: 'OPÇÕES:',
		titleSuccessModal: 'Sucesso!',
		titleConfirmModal: 'Atenção!',
		titleModalEntity: 'Dados da Entidade',
		confirmTextModalEntity: 'OK',
		removeSuccessMessage: 'Entidade removida com sucesso!',
		removeConfirmMessage: 'Você tem certeza que deseja remover esta entidade?',
		okTextModal: 'OK',
		confirmTextModal: 'SIM',
		cancelTextModal: 'NÃO',
		trueStr: 'SIM',
		falseStr: 'NÃO'
	}
})
