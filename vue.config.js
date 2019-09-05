const path = require('path')

module.exports = {
	pluginOptions: {
		'resolve-alias': {
			alias: {
				src: path.join(__dirname, './src'),
				'vuestic-components': path.join(__dirname, './lib/vuestic/components')
			}
		}
	}
}
