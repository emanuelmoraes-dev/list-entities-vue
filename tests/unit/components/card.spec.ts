import Card from '@/components/card/Card.vue'
import { shallowMount } from '@vue/test-utils'

describe('components/card', () => {
	it('needs to have one .lev-card', () => {
		const component = shallowMount(Card)
		expect(component.findAll('.lev-card').length).toBe(1)
	})
})
