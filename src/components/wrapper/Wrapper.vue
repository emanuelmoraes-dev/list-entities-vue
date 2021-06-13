<template>
	<div class="lev-wrapper">
		<component v-bind="bindCardArgs" v-if="useCard && customCardName !== null" :is="customCardName" class="wrapper-content wrapper-custom-card">
			<slot></slot>

			<template v-for="slot of cardSlots" :key="slot" v-slot:[slot]>
				<slot :name="slot"></slot>
			</template>

			<slot name="in"></slot>
		</component>

		<el-card v-bind="bindCardArgs" v-else-if="useCard" class="wrapper-content">
			<slot></slot>

			<template v-for="slot of cardSlots" :key="slot" v-slot:[slot]>
				<slot :name="slot"></slot>
			</template>

			<slot name="in"></slot>
		</el-card>

		<echo v-else class="wrapper-content">
			<slot></slot>
			<slot name="in"></slot>
		</echo>

		<slot name="out"></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElCard } from 'element-plus'
import Echo from '@/components/echo/Echo.vue'

export default defineComponent({
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
		bindCardArgs: {
			type: Object,
			default: () => ({})
		},
		cardSlots: {
			type: Array,
			default: () => []
		}
	},

	setup (props) {
		return {}
	}
})
</script>

<style lang="less" scoped> // local style
@import url('../../styles/common');

.lev-wrapper {
	.default-fonts();
}
</style>

<style lang="less"> // extern style
.lev-wrapper {
	.el-card {
		&.is-always-shadow, &.is-hover-shadow:focus, &.is-hover-shadow:hover {
			box-shadow: 0 2px 12px 0 fade(rgb(0, 0, 0), 20%);
		}

		.el-card__header {
			border-bottom: 1px solid #DBDEE5;
		}
	}
}
</style>
