import { Echo } from '@list-entities-vue/components'
import { mount } from '@vue/test-utils'

describe('lib/components/echo', () => {
    it('MUST have one .lev-echo ' +
        'WHEN no property is passed', () => {
            const echo = mount(Echo)
            expect(echo.findAll('.lev-echo').length).toBe(1)
        })

    it('MUST render "content" ' +
        'WHEN the default slot is "content"', () => {
            const content = 'content'
            const echo = mount(Echo, {
                slots: {
                    default: content
                }
            })
            expect(echo.find('.lev-echo').text()).toBe(content)
        })
})
