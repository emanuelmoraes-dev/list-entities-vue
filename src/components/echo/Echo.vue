<script lang="ts">
import { FunctionalComponent, h } from '@vue/runtime-core'

type Props = { wrapper: string }

const Echo: FunctionalComponent<Props> = (props, context) =>
	h(props.wrapper, { class: 'lev-echo' }, context.slots)

Echo.props = {
	wrapper: {
		type: String,
		default: 'div'
	}
}

export default Echo
</script>
