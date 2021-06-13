import Wrapper from '@/components/wrapper/Wrapper.vue'
import { defineComponent, h } from '@vue/runtime-core'
import { mount, shallowMount, VueWrapper } from '@vue/test-utils'
import { isVisibleClass } from '../util'

const TestCard = defineComponent({
	render () {
		return h('div', { class: 'test-card' }, this.$slots)
	}
})

describe('components/wrapper', () => {
	it('needs to have one .lev-wrapper', () => {
		const component = shallowMount(Wrapper)
		expect(component.findAll('.lev-wrapper').length).toBe(1)
	})

	it('only render "text content" on .wrapper-content.el-card when default slot is "text content" and no property is passed', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			}
		})

		expect(component.find('.wrapper-content.el-card').text()).toContain('text content')
		expect(isVisibleClass(component, '.wrapper-custom-card')).toBe(false)
		expect(isVisibleClass(component, '.lev-echo')).toBe(false)
	})

	it('only render "text content" on .wrapper-content.el-card when default slot is "text content" and useCard is true', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: true
			}
		})

		expect(component.find('.wrapper-content.el-card').text()).toContain('text content')
		expect(isVisibleClass(component, '.wrapper-custom-card')).toBe(false)
		expect(isVisibleClass(component, '.lev-echo')).toBe(false)
	})

	it('only render "text content" on .wrapper-content.el-card when default slot is "text content" and customCardName is null', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				customCardName: null
			}
		})

		expect(component.find('.wrapper-content.el-card').text()).toContain('text content')
		expect(isVisibleClass(component, '.wrapper-custom-card')).toBe(false)
		expect(isVisibleClass(component, '.lev-echo')).toBe(false)
	})

	it('only render "text content" on .wrapper-content.el-card when default slot is "text content" and useCard is true and customCardName is null', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: true,
				customCardName: null
			}
		})

		expect(component.find('.wrapper-content.el-card').text()).toContain('text content')
		expect(isVisibleClass(component, '.wrapper-custom-card')).toBe(false)
		expect(isVisibleClass(component, '.lev-echo')).toBe(false)
	})

	it('only render "text content" on .wrapper-content.wrapper-custom-card.test-card when default slot is "text content" and customCardName is "test-card"', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				customCardName: 'test-card'
			},
			global: {
				components: { TestCard }
			}
		})

		expect(component.find('.wrapper-content.wrapper-custom-card.test-card').text()).toContain('text content')
		expect(isVisibleClass(component, '.el-card')).toBe(false)
		expect(isVisibleClass(component, '.lev-echo')).toBe(false)
	})

	it('only render "text content" on .wrapper-content.wrapper-custom-card.test-card when default slot is "text content" and useCard is true and customCardName is "test-card"', () => {
		const component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: true,
				customCardName: 'test-card'
			},
			global: {
				components: { TestCard }
			}
		})

		expect(component.find('.wrapper-content.wrapper-custom-card.test-card').text()).toContain('text content')
		expect(isVisibleClass(component, '.el-card')).toBe(false)
		expect(isVisibleClass(component, '.lev-echo')).toBe(false)
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

		expect(component.find('.wrapper-content.lev-echo').text()).toContain('text content')
		expect(isVisibleClass(component, '.wrapper-custom-card')).toBe(false)
		expect(isVisibleClass(component, '.el-card')).toBe(false)

		component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: false,
				customCardName: null
			}
		})

		expect(component.find('.wrapper-content.lev-echo').text()).toContain('text content')
		expect(isVisibleClass(component, '.wrapper-custom-card')).toBe(false)
		expect(isVisibleClass(component, '.el-card')).toBe(false)

		component = mount(Wrapper, {
			slots: {
				default: 'text content'
			},
			props: {
				useCard: false,
				customCardName: 'test-card'
			},
			global: {
				components: { TestCard }
			}
		})

		expect(component.find('.wrapper-content.lev-echo').text()).toContain('text content')
		expect(isVisibleClass(component, '.wrapper-custom-card')).toBe(false)
		expect(isVisibleClass(component, '.el-card')).toBe(false)
	})

	it('render "text content" on .test-card when `out slot` is TestCard which `default slot` equals "text content"', () => {
		const component = mount(Wrapper, {
			slots: {
				out: () => h(TestCard, {}, () => 'text content')
			}
		})

		expect(component.find('.test-card').text()).toContain('text content')
	})

	it('cannot be have `.wrapper-content .test-card` when `out slot` is TestCard', () => {
		let component = mount(Wrapper, {
			slots: {
				out: () => h(TestCard, {}, () => 'text content')
			},
			props: {
				useCard: true,
				customCardName: null
			}
		})

		expect(isVisibleClass(component, '.wrapper-content .test-card')).toBe(false)

		component = mount(Wrapper, {
			slots: {
				out: () => h(TestCard, {}, () => 'text content')
			},
			props: {
				useCard: true,
				customCardName: 'test-card'
			},
			global: {
				components: { TestCard }
			}
		})

		expect(isVisibleClass(component, '.wrapper-content .test-card')).toBe(false)

		component = mount(Wrapper, {
			slots: {
				out: () => h(TestCard, {}, () => 'text content')
			},
			props: {
				useCard: false
			}
		})

		expect(isVisibleClass(component, '.wrapper-content .test-card')).toBe(false)
	})
})
