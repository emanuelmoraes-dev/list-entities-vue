/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    'src': '/dist',
    'public': { 'url': '/', static: true, resolve: false }
  },
  plugins: ['@snowpack/plugin-vue'],
  routes: [
    { 'match': 'routes', 'src': '.*', 'dest': '/index.html' }
  ],
  optimize: {
    'bundle': false
  },
  packageOptions: {},
  devOptions: {},
  buildOptions: {}
}
