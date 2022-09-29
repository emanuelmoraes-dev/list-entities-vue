import Site from '@site/Site.vue'
import { mount } from '@vue/test-utils'

describe('site/Site.vue', () => {
    it('must have one <h1> with "Welcome to list-entities-vue 3!"', () => {
        const site = mount(Site)
        const h1s = site.findAll('h1')
        expect(h1s?.length).toBe(1)
        expect(h1s[0]?.text()).toBe('Welcome to list-entities-vue 3!')
    })
})
