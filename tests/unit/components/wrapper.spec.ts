import Wrapper from '@/components/wrapper/Wrapper.vue'
import { defineComponent, h } from '@vue/runtime-core'
import { mount, shallowMount, VueWrapper } from '@vue/test-utils'

const CardDiv = defineComponent({
	render () {
		return h('div', { class: 'card-div' }, this.$slots)
	}
})

function expectClassContain (component: VueWrapper<any>, className: string, content: string) {
	expect(component.find(className).text()).toContain(content)
}

function expectClassNotVisible (component: VueWrapper<any>, className: string) {
	const child = component.find(className)
	if (child.exists())
		expect(child.isVisible()).toBe(false)
}

describe('components/wrapper', () => {
	it('needs to have one .lev-wrapper', () => {
		const component = shallowMount(Wrapper)
		expect(component.findAll('.lev-wrapper').length).toBe(1)
	})

	it('only render "text content" on .lev-card when no property is passed', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			}
		})

		expectClassContain(component, '.lev-card', 'text content')
		expectClassNotVisible(component, '.custom-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .lev-card when useCard is true', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: true
			}
		})

		expectClassContain(component, '.lev-card', 'text content')
		expectClassNotVisible(component, '.custom-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .lev-card when customCardName is null', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				customCardName: null
			}
		})

		expectClassContain(component, '.lev-card', 'text content')
		expectClassNotVisible(component, '.custom-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .lev-card when useCard is true and customCardName is null', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: true,
				customCardName: null
			}
		})

		expectClassContain(component, '.lev-card', 'text content')
		expectClassNotVisible(component, '.custom-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .content.custom-card.card-div when customCardName is "card-div"', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				customCardName: 'card-div'
			},
			global: {
				components: { CardDiv }
			}
		})

		expectClassContain(component, '.content.custom-card.card-div', 'text content')
		expectClassNotVisible(component, '.lev-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .content.custom-card.card-div when useCard is true and customCardName is "card-div"', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: true,
				customCardName: 'card-div'
			},
			global: {
				components: { CardDiv }
			}
		})

		expectClassContain(component, '.content.custom-card.card-div', 'text content')
		expectClassNotVisible(component, '.lev-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .lev-echo when useCard is false', () => {
		let component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: false
			}
		})

		expectClassContain(component, '.lev-echo', 'text content')
		expectClassNotVisible(component, '.custom-card')
		expectClassNotVisible(component, '.lev-card')

		component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: false,
				customCardName: null
			}
		})

		expectClassContain(component, '.lev-echo', 'text content')
		expectClassNotVisible(component, '.custom-card')
		expectClassNotVisible(component, '.lev-card')

		component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: false,
				customCardName: 'card-div'
			},
			global: {
				components: { CardDiv }
			}
		})

		expectClassContain(component, '.lev-echo', 'text content')
		expectClassNotVisible(component, '.custom-card')
		expectClassNotVisible(component, '.lev-card')
	})
})
