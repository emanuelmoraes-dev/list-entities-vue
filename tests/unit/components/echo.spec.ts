import Echo from '@/components/echo/Echo.vue'
import { mount } from '@vue/test-utils'

describe('components/echo', () => {
	it('needs to have one div.lev-echo when no property is passed', () => {
		const component = mount(Echo)
		expect(component.findAll('div.lev-echo').length).toBe(1)
	})

	it('cannot have one div.lev-echo when the wrapper is "span"', () => {
		const component = mount(Echo, {
			props: {
				wrapper: 'span'
			}
		})
		expect(component.findAll('div.lev-echo').length).not.toBe(1)
	})

	it('needs to have one span.lev-echo when the wrapper is "span"', () => {
		const component = mount(Echo, {
			props: {
				wrapper: 'span'
			}
		})
		expect(component.findAll('span.lev-echo').length).toBe(1)
	})

	it('render "text content" when the default slot is "text content"', () => {
		const component = mount(Echo, {
			slots: {
				default: 'text content'
			}
		})
		expect(component.find('div.lev-echo').text()).toBe('text content')
	})
})
