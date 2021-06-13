<template>
	<wrapper class="lev-list-entities" :useCard="parentIsCard">
		<wrapper class="search-panel" :useCard="childIsCard">
		</wrapper>

		<wrapper class="table" :useCard="childIsCard">
		</wrapper>
	</wrapper>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import Wrapper from '@/components/wrapper/Wrapper.vue'
import { and } from '@/composables/comparable'
import * as compactable from './composables/compactable'

export default defineComponent({
	components: { Wrapper },

	props: {
		compact: {
			type: Boolean,
			default: true
		},
		useCard: {
			type: Boolean,
			default: true
		}
	},

	setup (props) {
		const { compact, useCard } = toRefs(props)

		const parentIsCard = and(useCard, compactable.getParentIsCard(compact))
		const childIsCard = and(useCard, compactable.getChildIsCard(compact))

		return {
			parentIsCard,
			childIsCard
		}
	}
})
</script>

<style lang="less" scoped> // local style
@import url('../../styles/common');

.lev-list-entities {
	.default-fonts();

	.search-panel {
		margin-bottom: .5rem;
	}
}
</style>
