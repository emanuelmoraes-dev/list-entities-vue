import { createApp } from 'vue'
import Site from './Site.vue'

createApp(Site).mount('#web')

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        app.unmount();
    });
}
