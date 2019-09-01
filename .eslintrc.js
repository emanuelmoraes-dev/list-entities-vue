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
		'strict': process.env.NODE_ENV === 'production' ? 'off' : 'error',
		'linebreak-style': process.env.NODE_ENV === 'production' ? 'off' : 'error',
		'quotes': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'single'],
		'spaced-comment': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'always'],
		'space-before-blocks': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'always'],
		'indent': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'tab'],
		'indent-size': process.env.NODE_ENV === 'production' ? 'off' : [true, 2],
		'no-tabs': 0
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
