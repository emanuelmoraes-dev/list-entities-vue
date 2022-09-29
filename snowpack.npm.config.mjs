/** @type {import("snowpack").SnowpackUserConfig} */
export default {
  mount: {
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
  plugins: ['@snowpack/plugin-vue', 'snowpack-plugin-less'],
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
    '@lib': './src/lib'
  }
}
