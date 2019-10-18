<template>
  <div id="app">
		<list-entities
			v-model="peoples"
			titleTable="Peoples"
			:searchOperatorsShow="true"
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
			definitions: this.$le.def({
				name: {
					type: String,
					sort: 1,
					modalHeaderText: 'fullname',
					optionSearch: true,
					displayAttr: true
				},
				country: {
					type: String,
					optionSearch: true,
					defaultLastAttr: true
				},
				gender: {
					type: String,
					optionSearch: true
				},
				phones: {
					type: String,
					array: true,
					optionSearch: true,
					displayAttr: true
				}
			}),

			peoples: [
				{
					name: 'José Martins',
					country: 'Brazil',
					gender: 'male',
					phones: ['(99) 99999-9999', '(88) 88888-8888']
				},
				{
					name: 'Antônio de Paula',
					country: 'Brazil',
					gender: 'male',
					phones: ['(77) 77777-7777', '(66) 66666-6666']
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
