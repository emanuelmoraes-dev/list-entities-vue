module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'strict': process.env.NODE_ENV === 'production' ? 'off' : 'error', // com strict mode
		'linebreak-style': process.env.NODE_ENV === 'production' ? 'off' : 'error', // sem ponto e vígula
		'quotes': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'single'], // com aspas simples
		'spaced-comment': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'always'], // espaço depois de comentário
		'space-before-blocks': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'always'], // espaço antes de bloco de código
		'indent': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'tab'], // identação por tabulação
		'no-tabs': 0, // com tabulação
		'curly': 'off', // if de um comando pode não ter chaves
		'no-mixed-operators': 'off', // desabilita bloqueio de uso de operações como '&&' e '||'
		'no-unused-vars': 'off', // variáveis declaradas não precisam necessariamente ser usadas
		'require-atomic-updates': 'off',
		'no-mixed-spaces-and-tabs': 'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
