module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/standard',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		quotes: ['error', 'single', { avoidEscape: true }], // com aspas simples
		'spaced-comment': ['error', 'always'], // espaço depois de comentário
		'space-before-blocks': ['error', 'always'], // espaço antes de bloco de código
		indent: ['error', 'tab'], // identação por tabulação
		semi: ['error', 'never'], // sem ponto e vírgula
		'no-tabs': 0, // com tabulação
		curly: 'off', // if de somente 1 (um) comando pode não ter chaves
		'no-mixed-operators': 'off', // permite que os operadores '&&' e '||' possam ser usados misturados sem parênteses
		'no-mixed-spaces-and-tabs': ['error'], // não permite que espaços e tabulações sejam misturados
		'no-irregular-whitespace': ['error'], // não permite que qualquer tipo de espaço em branco ocorra em conjunto com outros
		'object-curly-newline': 'off', // permite a utilização de 'formatação' mais livre na criação de objetos literiais
		'object-curly-spacing': 'off', // permite a não existência de espaço antes de fechar chaves
		'padded-blocks': 'off', // permite que linhas vazias sejam colocadas antes e depois de escopos
		'no-useless-constructor': 'off', // permite construtores não usados
		'promise/param-names': 'off', // permite que parâmetros de Promise tenham qualquer nome
		'no-eval': 'error', // não permite a utilização do eval
		'linebreak-style': ['error', 'unix'], // define a quebra de linha para LF
		'no-unused-vars': ['error', { args: 'none' }], // variáveis declaradas precisam necessariamente ser usadas, exceto argumentos de funções

		// TypeScript
		'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }], // variáveis declaradas precisam necessariamente ser usadas, exceto argumentos de funções
		'@typescript-eslint/no-explicit-any': 'off', // permite o uso do any
		'@typescript-eslint/interface-name-prefix': 'off' // permite que interfaces comecem com I
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
