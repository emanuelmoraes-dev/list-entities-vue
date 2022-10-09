<template>
    <wrapper class="lev-list-entities" :useCard="parentIsCard">
        <wrapper class="list-entities-search" :useCard="childIdCard">
        </wrapper>

        <wrapper class="list-entities-table" :useCard="childIdCard">
        </wrapper>
    </wrapper>
</template>

<script>
    import { Wrapper } from '@list-entities-vue/components'
    import { not, and } from '@list-entities-vue/lib/composables/logic.js'
    import { toRefs } from 'vue'

    export default {
        components: { Wrapper },

        props: {
            useCard: {
                type: Boolean,
                default: false
            },
            isCompact: {
                type: Boolean,
                default: true
            }
        },

        setup (props) {
            const { useCard, isCompact } = toRefs(props)

            const parentIsCard = and(useCard, isCompact)
            const childIdCard = and(useCard, not(isCompact))

            return {
                parentIsCard,
                childIdCard
            }
        }
    }
</script>
