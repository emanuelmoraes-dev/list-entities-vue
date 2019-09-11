<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'show',
	props: {
		headerText: String
	}
}
</script>
