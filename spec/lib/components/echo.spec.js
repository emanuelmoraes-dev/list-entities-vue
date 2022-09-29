import { Echo } from '@lib/components/echo/Echo.vue'
import { mount } from '@vue/test-utils'

describe('lib/components/Echo', () => {
    it('must have one div.lev-echo when no property is passed', () => {
        const echo = mount(Echo)
        expect(echo.findAll('.lev-echo').length).toBe(1)
    })

    it('must render "text content" when the default slot is "text content"', () => {
        const echo = mount(Echo, {
            slots: {
                default: 'text content'
            }
        })
        expect(echo.find('.lev-echo').text()).toBe('text content')
    })
})
