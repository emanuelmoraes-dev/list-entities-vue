<template>
  <div id="app">
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<list-entities
						v-model="products"
						:definitions="definitions"
						:optionEdit="true"
						:optionReport="true"
						@on_error="onError"
					/>
				</div>
			</div>
		</div>
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
					displayModal: true,
					optionSearch: true,
					displayAttr: true
				},
				brand: {
					type: String,
					displayModal: true,
					optionSearch: true,
					displayAttr: true
				},
				price: {
					type: Number,
					displayModal: true,
					optionSearch: true,
					displayAttr: true
				},
				perishable: {
					type: Boolean,
					displayModal: true,
					optionSearch: true,
					defaultLastAttr: true
				},
				expiration: {
					type: Date,
					displayModal: true,
					optionSearch: true
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

<style>
#app {
	margin-top: 1rem;
}
</style>
