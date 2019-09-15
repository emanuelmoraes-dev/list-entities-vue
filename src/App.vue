<template>
  <div id="app">
		<list-entities
			v-model="peoples"
			titleTable="Peoples"
			attrAll="All"
			:searchOperatorsShow="true"
			:definitions="definitions"
		/>
  </div>
</template>

<script>
import ListEntities from 'src/components/list-entities/list-entities.vue'
import definitionAdapter from 'src/adapters/definition-adapter'

export default {
	name: 'app',

	components: { ListEntities },

	data () {
		return {
			definitions: definitionAdapter({
				name: {
					type: String,
					sort: 1,
					modelHeaderText: 'fullname',
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
		}
	}
}
</script>
