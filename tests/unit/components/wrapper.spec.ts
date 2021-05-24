import Wrapper from '@/components/wrapper/Wrapper.vue'
import { shallowMount } from '@vue/test-utils'

describe('components/list-entities-vue', () => {
	it('needs to have one div.list-entities-vue', async () => {
		const component = shallowMount(Wrapper)
		expect(component.findAll('.lev-wrapper').length).toBe(1)
	})
})
