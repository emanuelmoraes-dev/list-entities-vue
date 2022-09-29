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
  plugins: ['@snowpack/plugin-vue', 'snowpack-plugin-less'],
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
    '@lib': './src/lib',
    '@site': './src/site'
  }
}
