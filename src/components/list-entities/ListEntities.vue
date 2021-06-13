<template>
	<wrapper class="lev-list-entities">
	</wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Wrapper from '@/components/wrapper/Wrapper.vue'

export default defineComponent({
	components: { Wrapper },

	setup () {
		return {}
	}
})
</script>

<style lang="less" scoped> // local style
@import url('../../styles/common');

.lev-list-entities {
	.default-fonts();
}
</style>
