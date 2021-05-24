import Echo from '@/components/echo/Echo.vue'
import { mount } from '@vue/test-utils'

describe('components/echo', () => {
	it('needs to have one div.lev-echo when no property is passed', () => {
		const component = mount(Echo)
		expect(component.findAll('.lev-echo').length).toBe(1)
	})

	it('render "text content" when the default slot is "text content"', () => {
		const component = mount(Echo, {
			slots: {
				default: 'text content'
			}
		})
		expect(component.find('.lev-echo').text()).toBe('text content')
	})
})
