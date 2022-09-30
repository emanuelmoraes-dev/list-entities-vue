import { Wrapper } from '@list-entities-vue/components'
import { shallowMount } from '@vue/test-utils'

describe('lib/components/wrapper', () => {
    it('must have one .lev-wrapper when no property is passed', () => {
        const wrapper = shallowMount(Wrapper)
        expect(wrapper.findAll('.lev-wrapper').length).toBe(1)
    })
})
