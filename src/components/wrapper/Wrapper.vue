<template>
	<div class="lev-wrapper">
		<component v-if="useCard && customCardName !== null" :is="customCardName" class="wrapper-content wrapper-custom-card">
			<slot></slot>
		</component>

		<card v-else-if="useCard" class="wrapper-content">
			<slot></slot>
		</card>

		<echo v-else class="wrapper-content">
			<slot></slot>
		</echo>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Echo from '@/components/echo/Echo.vue'
import Card from '@/components/card/Card.vue'

export default defineComponent({
	components: { Echo, Card },

	props: {
		useCard: {
			type: Boolean,
			default: true
		},
		customCardName: {
			type: String,
			default: null
		}
	},

	setup (props) {
		return {}
	}
})
</script>

<style lang="less" scoped>
@import url('../../styles/common');

.lev-wrapper {
	.default-fonts();
}
</style>
