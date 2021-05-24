import ListEntitiesVue from '@/components/list-entities/ListEntities.vue'
import { shallowMount } from '@vue/test-utils'

describe('components/list-entities', () => {
	it('needs to have one .lev-list-entities', () => {
		const component = shallowMount(ListEntitiesVue)
		expect(component.findAll('.lev-list-entities').length).toBe(1)
	})
})
