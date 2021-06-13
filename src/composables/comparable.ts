import { Ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'

export const and = (c1: Ref<boolean>, c2: Ref<boolean>) => computed(
	() => c1.value && c2.value
)

export const or = (c1: Ref<boolean>, c2: Ref<boolean>) => computed(
	() => c1.value || c2.value
)
