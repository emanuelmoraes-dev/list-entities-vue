<template>
  <div id="app">
		<button type="button" @click="showModal">Show Modal</button>
		<modal-entity
			ref="modal"
			title="Exibindo pessoa"

			:entity="people"
			:descriptor="{
				name: {
					type: String,
					display: 'nome :'
				},
				phones: {
					type: Array,
					sep: '\n',
					display: 'telefones :'
				}
			}"
		/>
  </div>
</template>

<script>
import ModalEntity from './components/modal-entity/modal-entity.vue'

export default {
	name: 'app',

	components: { ModalEntity },

	data () {
		return {
			people: {
				name: 'José Martins',
				phones: ['(99) 99999-9999', '(88) 88888-8888']
			}
		}
	},

	methods: {
		showModal () {
			this.$refs.modal.open()
		}
	}
}
</script>
