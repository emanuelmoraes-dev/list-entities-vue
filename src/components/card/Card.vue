<template>
	<div class="lev-card">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup () {
		return {}
	}
})
</script>

<style lang="less" scoped>
@import url('../../styles/common');

.lev-card {
	.default-fonts();
}
</style>
