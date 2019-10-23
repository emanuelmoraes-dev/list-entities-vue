<template>
	<div>
		<slot></slot>
		<slot name="secundary"></slot>
	</div>
</template>

<script>
export default {
	name: 'show',
	props: ['headerText', 'hidePrimary', 'compactSecundary']
}
</script>
