/** @type {import("snowpack").SnowpackUserConfig} */
export default {
  mount: {
    'src/export': {
      url: '/dist/export',
      resolve: true,
      static: false
    },
    'src/lib': {
      url: '/dist/lib',
      resolve: false,
      static: false
    },
    'pkg': {
      url: '/',
      resolve: false,
      static: true
    }
  },
  plugins: [
    'snowpack-plugin-less',
    '@snowpack/plugin-vue',
    ['@snowpack/plugin-babel', { input: ['.js'] }]
  ],
  routes: [
    { 'match': 'routes', 'src': '.*', 'dest': '/index.html' }
  ],
  optimize: {
    bundle: false
  },
  devOptions: {},
  packageOptions: {},
  buildOptions: {
    out: 'build/npm'
  },
  alias: {
    '@list-entities-vue': './src/export'
  }
}
