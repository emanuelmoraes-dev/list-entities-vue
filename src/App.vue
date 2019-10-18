<template>
  <div id="app">
		<list-entities
			v-model="products"
			:definitions="definitions"
			:optionEdit="true"
			:optionReport="true"
			@on_error="onError"
		/>
  </div>
</template>

<script>
import listEntities from './components/list-entities/list-entities.vue'

export default {
	name: 'app',

	data () {
		return {
			definitions: this.$lev.def({
				name: {
					type: String,
					sort: 1,
					modalHeaderText: true,
					optionSearch: true,
					displayAttr: true
				},
				brand: {
					type: String,
					modalHeaderText: true,
					optionSearch: true,
					displayAttr: true
				},
				price: {
					type: Number,
					modalHeaderText: true,
					optionSearch: true,
					displayAttr: true,
					defaultLastAttr: true
				},
				perishable: {
					type: Boolean,
					modalHeaderText: true,
					optionSearch: true,
					displayAttr: true
				},
				expiration: {
					type: Date,
					modalHeaderText: true,
					optionSearch: true,
					displayAttr: true
				}
			}),

			products: [
				{
					name: 'Coca Cola',
					brand: 'The Coca-Cola Company',
					price: 4,
					perishable: false,
					expiration: new Date(2019, 10, 18)
				}
			]
		}
	},

	methods: {
		showModal () {
			this.$refs.modal.open()
		},

		onError (err) {
			console.error(err)
		}
	}
}
</script>
