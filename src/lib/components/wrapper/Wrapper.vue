<template>
    <div class="lev-wrapper">
        <slot name="begin"></slot>

        <component
            v-if="useCard && customCardName != null"
            :is="customCardName"
            v-bind="bindCard"
            class="wrapper-content wrapper-custom-card"
        >
            <slot></slot>

            <template v-for="slot of cardSlots" v-slot:[slot]>
                <slot :name="slot"></slot>
            </template>
        </component>

        <el-card v-else-if="useCard" v-bind="bindCard" class="wrapper-content">
            <slot></slot>

            <template v-for="slot of cardSlots" v-slot:[slot]>
                <slot :name="slot"></slot>
            </template>
        </el-card>

        <echo v-else class="wrapper-content">
            <slot></slot>
        </echo>

        <slot name="end"></slot>
    </div>
</template>

<script>
    import { Echo } from '@list-entities-vue/components'
    import { ElCard } from 'element-plus'
    export default {
        components: { Echo, ElCard },

        props: {
            useCard: {
                type: Boolean,
                default: true
            },
            customCardName: {
                type: String,
                default: null
            },
            bindCard: {
                type: Object,
                default: () => ({})
            },
            cardSlots: {
                type: Array,
                default: () => []
            }
        },

        setup () {
            return {}
        }
    }
</script>
