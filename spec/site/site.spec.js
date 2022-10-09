import Site from '@site/Site.vue'
import { mount } from '@vue/test-utils'
import { isVisible } from '../util/utility'

describe('site/Site.vue', () => {
    it('must have `.lev-list-entities`', () => {
        const site = mount(Site)
        expect(isVisible(site, '.lev-list-entities')).toBe(true)
    })
})
