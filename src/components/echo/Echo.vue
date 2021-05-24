<script lang="ts">
import { FunctionalComponent, h } from '@vue/runtime-core'

const Echo: FunctionalComponent = (props, context) =>
	h('div', { class: 'lev-echo' }, context.slots)

export default Echo
</script>
