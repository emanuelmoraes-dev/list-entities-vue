<template>
	<list-entities></list-entities>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListEntities from '@/components/list-entities/ListEntities.vue'

export default defineComponent({
	name: 'Doc',

	components: { ListEntities }
})
</script>

<style lang="less">
@import url('../styles/common');

#doc {
	.default-fonts();
}
</style>
