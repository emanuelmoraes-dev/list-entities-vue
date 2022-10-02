import TestCard from '../../util/TestCard.vue'
import { Wrapper } from '@list-entities-vue/components'
import { shallowMount, mount } from '@vue/test-utils'
import { isVisible } from '../../util/utility'

describe('lib/components/wrapper', () => {
    it('MUST have one .lev-wrapper ' +
        'WHEN no property is passed', () => {
            const wrapper = shallowMount(Wrapper)
            expect(wrapper.findAll('.lev-wrapper').length).toBe(1)
        })

    it('MUST only render "content" in `.lev-wrapper .wrapper-content.test-card .content` AND "header" in `.lev-wrapper .wrapper-content.test-card .header` ' +
        'WHEN the `TestCard` component is defined as global AND `customCardName` is "test-card" AND `useCard` is true AND `default` slot is "content" AND `bindCard.header` is "header" or `header` slot is "header"', () => {
            const header = 'header'
            const content = 'content'

            const w1 = mount(Wrapper, {
                slots: {
                    default: content
                },
                props: {
                    useCard: true,
                    customCardName: 'test-card',
                    bindCard: {
                        header: header
                    }
                },
                global: {
                    components: { TestCard }
                }
            })

            const w2 = mount(Wrapper, {
                slots: {
                    default: content,
                    header: header
                },
                props: {
                    useCard: true,
                    customCardName: 'test-card',
                    cardSlots: ['header']
                },
                global: { components: { TestCard } }
            })

            for (const wrapper of [w1, w2]) {
                expect(wrapper.find('.lev-wrapper .wrapper-content.test-card .content').text()).toBe(content)
                expect(wrapper.find('.lev-wrapper .wrapper-content.test-card .header').text()).toBe(header)
                expect(isVisible(wrapper, '.el-card')).toBe(false)
                expect(isVisible(wrapper, '.lev-echo')).toBe(false)
            }
        })

    it('MUST only render "content" in `.lev-wrapper .wrapper-content.el-card .el-card__body` ' +
        'WHEN `default` slot is "content" AND no property is passed or `useCard` is true or `customCardName` is null', () => {
            const content = 'content'

            const w1 = mount(Wrapper, {
                slots: {
                    default: content
                }
            })

            const w2 = mount(Wrapper, {
                slots: {
                    default: content
                },
                props: {
                    useCard: true
                }
            })

            const w3 = mount(Wrapper, {
                slots: {
                    default: content
                },
                props: {
                    customCardName: null
                }
            })

            const w4 = mount(Wrapper, {
                slots: {
                    default: content
                },
                props: {
                    useCard: true,
                    customCardName: null
                }
            })

            for (const wrapper of [w1, w2, w3, w4]) {
                expect(wrapper.find('.lev-wrapper .wrapper-content.el-card .el-card__body').text()).toBe(content)
                expect(isVisible(wrapper, '.lev-echo')).toBe(false)
                expect(isVisible(wrapper, '.wrapper-custom-card')).toBe(false)
            }
        })

    it('MUST only render "content" in `.lev-wrapper .wrapper-content.el-card .el-card__body` AND "header" in `.lev-wrapper .wrapper-content.el-card .el-card__header` ' +
        'WHEN `default` slot is "content" AND `useCard` is true AND `customCardName` is null AND `bindCard.header` is "header" or `cardSlots` has "header" with `header` slot equals "header"', () => {
            const header = 'header'
            const content = 'content'

            const w1 = mount(Wrapper, {
                slots: {
                    default: content
                },
                props: {
                    bindCard: {
                        useCard: true,
                        customCardName: null,
                        header: header
                    }
                }
            })

            const w2 = mount(Wrapper, {
                slots: {
                    default: content,
                    header: header
                },
                props: {
                    useCard: true,
                    customCardName: null,
                    cardSlots: ['header']
                }
            })

            for (const wrapper of [w1, w2]) {
                expect(wrapper.find('.lev-wrapper .wrapper-content.el-card .el-card__body').text()).toBe(content)
                expect(wrapper.find('.lev-wrapper .wrapper-content.el-card .el-card__header').text()).toBe(header)
                expect(isVisible(wrapper, '.lev-echo')).toBe(false)
                expect(isVisible(wrapper, '.wrapper-custom-card')).toBe(false)
            }
        })

    it('MUST only render "content" in `.lev-wrapper .wrapper-content.lev-echo` ' +
        'WHEN `default` slot is "content" and useCard is false', () => {
            const content = 'content'

            const w1 = mount(Wrapper, {
                slots: {
                    default: content
                },
                props: {
                    useCard: false
                }
            })

            const w2 = mount(Wrapper, {
                slots: {
                    default: content
                },
                props: {
                    useCard: false,
                    customCardName: null
                }
            })

            const w3 = mount(Wrapper, {
                slots: {
                    default: content
                },
                props: {
                    useCard: false,
                    customCardName: 'text-card'
                },
                global: {
                    components: { TestCard }
                }
            })

            for (const wrapper of [w1, w2, w3]) {
                expect(wrapper.find('.lev-wrapper .wrapper-content.lev-echo').text()).toBe(content)
                expect(isVisible(wrapper, '.wrapper-custom-card')).toBe(false)
                expect(isVisible(wrapper, '.test-card')).toBe(false)
                expect(isVisible(wrapper, '.el-card')).toBe(false)
            }
        })
    
    it('MUST render "first" before .wrapper-content and "last" after .wrapper-content ' +
        'WHEN `begin` slot is "first" and `end` slot is last', () => {
            const first = 'first'
            const last = 'last'
            const begin = `<div class="first">${first}</div>`
            const end = `<div class="last">${last}</div>`

            const w1 = mount(Wrapper, {
                slots: { begin, end },
                props: {
                    useCard: true
                }
            })

            const w2 = mount(Wrapper, {
                slots: { begin, end },
                props: {
                    useCard: true,
                    customCardName: 'test-card'
                },
                global: { components: { TestCard } }
            })

            const w3 = mount(Wrapper, {
                slots: { begin, end },
                props: {
                    useCard: false
                }
            })

            for (const wrapper of [w1, w2, w3]) {
                expect(wrapper.find('.lev-wrapper .first').text()).toBe(first)
                expect(isVisible(wrapper, '.first ~ .wrapper-content')).toBe(true)

                expect(wrapper.find('.lev-wrapper .last').text()).toBe(last)
                expect(isVisible(wrapper, '.wrapper-content ~ .last')).toBe(true)
            }
        })
})
