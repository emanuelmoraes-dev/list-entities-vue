<template>
	<div>
		<div :class="{ 'first-content': $slots.secundary }">
			<slot></slot>
		</div>
		<slot name="secundary"></slot>
	</div>
</template>

<script>
export default {
	name: 'show',
	props: ['headerText', 'hidePrimary', 'compactSecundary']
}
</script>
