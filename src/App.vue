<template>
  <div id="app">
		<list-entities
			v-model="peoples"
			titleTable="Pessoas"
			attrAll="Todos"
			:searchOperatorsShow="true"
			:definitions="{
				sort: 'name',

				descriptor: {
					name: String,
					country: String,
					phones: { type: String, array: true }
				},

				descriptorModal: {
					name: String,
					country: String,
					phones: Array
				},

				mapPropModalEntity: {
					name: 'fullname'
				},

				optionsSearch: [
					{ display: 'name', value: 'name' },
					{ display: 'country', value: 'country' },
					{ display: 'phone', value: 'phones' }
				],

				displayAttrs: [
					{ display: 'name', value: 'name' },
					{ display: 'phones', value: 'phones' }
				],

				defaultLastAttr: { display: 'country', value: 'country' }
			}"
		/>
  </div>
</template>

<script>
import ListEntities from 'src/components/list-entities/list-entities.vue'

export default {
	name: 'app',

	components: { ListEntities },

	data () {
		return {
			peoples: [{
				name: 'José Martins',
				country: 'Brazil',
				phones: ['(99) 99999-9999', '(88) 88888-8888']
			}]
		}
	},

	methods: {
		showModal () {
			this.$refs.modal.open()
		}
	}
}
</script>
