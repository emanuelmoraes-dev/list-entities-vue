import Wrapper from '@/components/wrapper/Wrapper.vue'
import { defineComponent, h } from '@vue/runtime-core'
import { mount, shallowMount, VueWrapper } from '@vue/test-utils'

const CustomCard = defineComponent({
	render () {
		return h('div', { class: 'custom-card' }, this.$slots)
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

	it('only render "text content" on .wrapper-content.lev-card when default slot is "text content" and no property is passed', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			}
		})

		expectClassContain(component, '.wrapper-content.lev-card', 'text content')
		expectClassNotVisible(component, '.wrapper-custom-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .wrapper-content.lev-card when default slot is "text content" and useCard is true', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: true
			}
		})

		expectClassContain(component, '.wrapper-content.lev-card', 'text content')
		expectClassNotVisible(component, '.wrapper-custom-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .wrapper-content.lev-card when default slot is "text content" and customCardName is null', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				customCardName: null
			}
		})

		expectClassContain(component, '.wrapper-content.lev-card', 'text content')
		expectClassNotVisible(component, '.wrapper-custom-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .wrapper-content.lev-card when default slot is "text content" and useCard is true and customCardName is null', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: true,
				customCardName: null
			}
		})

		expectClassContain(component, '.wrapper-content.lev-card', 'text content')
		expectClassNotVisible(component, '.wrapper-custom-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .wrapper-content.wrapper-custom-card.custom-card when default slot is "text content" and customCardName is "custom-card"', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				customCardName: 'custom-card'
			},
			global: {
				components: { CustomCard }
			}
		})

		expectClassContain(component, '.wrapper-content.wrapper-custom-card.custom-card', 'text content')
		expectClassNotVisible(component, '.lev-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .wrapper-content.wrapper-custom-card.custom-card when default slot is "text content" and useCard is true and customCardName is "custom-card"', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: true,
				customCardName: 'custom-card'
			},
			global: {
				components: { CustomCard }
			}
		})

		expectClassContain(component, '.wrapper-content.wrapper-custom-card.custom-card', 'text content')
		expectClassNotVisible(component, '.lev-card')
		expectClassNotVisible(component, '.lev-echo')
	})

	it('only render "text content" on .wrapper-content.lev-echo when default slot is "text content" and useCard is false', () => {
		let component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: false
			}
		})

		expectClassContain(component, '.wrapper-content.lev-echo', 'text content')
		expectClassNotVisible(component, '.wrapper-custom-card')
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

		expectClassContain(component, '.wrapper-content.lev-echo', 'text content')
		expectClassNotVisible(component, '.wrapper-custom-card')
		expectClassNotVisible(component, '.lev-card')

		component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: false,
				customCardName: 'custom-card'
			},
			global: {
				components: { CustomCard }
			}
		})

		expectClassContain(component, '.wrapper-content.lev-echo', 'text content')
		expectClassNotVisible(component, '.wrapper-custom-card')
		expectClassNotVisible(component, '.lev-card')
	})

	it('render "text content" on `.wrapper-content.lev-card .custom-card` when `in slot` is CustomCard which `default slot` equals "text content"', () => {
		const component = mount(Wrapper, {
			slots: {
				in: () => h(CustomCard, {}, () => 'text content')
			}
		})

		expectClassContain(component, '.wrapper-content.lev-card .custom-card', 'text content')
	})

	it('cannot be have `.lev-wrapper > .custom-card` when customCardName is null and `in slot` is CustomCard', () => {
		const component = mount(Wrapper, {
			slots: {
				in: () => h(CustomCard, {}, () => 'text content')
			},
			props: {
				customCardName: null
			}
		})

		expectClassNotVisible(component, '.lev-wrapper > .custom-card')
	})

	it('render "text content" on `.wrapper-content.lev-echo .custom-card` when useCard is false and `in slot` is CustomCard which `default slot` equals "text content"', () => {
		const component = mount(Wrapper, {
			slots: {
				in: () => h(CustomCard, {}, () => 'text content')
			},
			props: {
				useCard: false
			}
		})

		expectClassContain(component, '.wrapper-content.lev-echo .custom-card', 'text content')
	})

	it('render "text content" on `.wrapper-content.wrapper-custom-card.custom-card .custom-card` when customCardName is "custom-card" and `in slot` is CustomCard which `default slot` equals "text content"', () => {
		const component = mount(Wrapper, {
			slots: {
				in: () => h(CustomCard, {}, () => 'text content')
			},
			props: {
				customCardName: 'custom-card'
			},
			global: {
				components: { CustomCard }
			}
		})

		expectClassContain(component, '.wrapper-content.wrapper-custom-card.custom-card .custom-card', 'text content')
	})

	it('render "text content" on .custom-card when `out slot` is CustomCard which `default slot` equals "text content"', () => {
		const component = mount(Wrapper, {
			slots: {
				out: () => h(CustomCard, {}, () => 'text content')
			}
		})

		expectClassContain(component, '.custom-card', 'text content')
	})

	it('cannot be have `.wrapper-content .custom-card` when `out slot` is CustomCard', () => {
		let component = mount(Wrapper, {
			slots: {
				out: () => h(CustomCard, {}, () => 'text content')
			},
			props: {
				useCard: true,
				customCardName: null
			}
		})

		expectClassNotVisible(component, '.wrapper-content .custom-card')

		component = mount(Wrapper, {
			slots: {
				out: () => h(CustomCard, {}, () => 'text content')
			},
			props: {
				useCard: true,
				customCardName: 'custom-card'
			},
			global: {
				components: { CustomCard }
			}
		})

		expectClassNotVisible(component, '.wrapper-content .custom-card')

		component = mount(Wrapper, {
			slots: {
				out: () => h(CustomCard, {}, () => 'text content')
			},
			props: {
				useCard: false
			}
		})

		expectClassNotVisible(component, '.wrapper-content .custom-card')
	})
})
