import ListEntitiesVue from '@/components/list-entities-vue/ListEntitiesVue.vue'
import { shallowMount } from '@vue/test-utils'

describe('components/list-entities-vue', () => {
	it('needs to have one div.list-entities-vue', async () => {
		const component = shallowMount(ListEntitiesVue)
		expect(component.findAll('.lev-list-entities').length).toBe(1)
	})
})
