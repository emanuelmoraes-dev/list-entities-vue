/** @type {import("snowpack").SnowpackUserConfig} */
export default {
  mount: {
    'src': {
      url: '/dist',
      resolve: true,
      static: false
    },
    'public': {
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
    bundle: true
  },
  devOptions: {},
  packageOptions: {},
  buildOptions: {
    out: 'build/web'
  },
  alias: {
    '@list-entities-vue/lib': './src/lib',
    '@list-entities-vue': './src/export',
    '@site': './src/site'
  }
}
