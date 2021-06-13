import { Ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'

export const getParentIsCard = (compact: Ref<boolean>) => computed(
	() => compact.value
)

export const getChildIsCard = (compact: Ref<boolean>) => computed(
	() => !compact.value
)
