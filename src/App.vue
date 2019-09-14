<template>
  <div id="app">
		<!-- <list-entities
			v-model="peoples"
			titleTable="Peoples"
			attrAll="All"
			:searchOperatorsShow="true"
			:definitions="{
				sort: 'name',

				descriptor: {
					name: String,
					country: String,
					gender: String,
					phones: { type: String, array: true }
				},

				descriptorModal: {
					name: String,
					country: String,
					gender: String,
					phones: Array
				},

				mapPropModalEntity: {
					name: 'fullname'
				},

				optionsSearch: [
					{ display: 'name', value: 'name' },
					{ display: 'country', value: 'country' },
					{ display: 'gender', value: 'gender' },
					{ display: 'phone', value: 'phones' }
				],

				displayAttrs: [
					{ display: 'name', value: 'name' },
					{ display: 'phones', value: 'phones' }
				],

				defaultLastAttr: { display: 'country', value: 'country' }
			}"
		/> -->

		<list-peoples v-model="peoples"></list-peoples>
  </div>
</template>

<script>
// import ListEntities from 'src/components/list-entities/list-entities.vue'
import ListPeoples from 'src/examples/list-peoples/list-peoples.vue'

export default {
	name: 'app',

	components: {
		// ListEntities,
		ListPeoples
	},

	data () {
		return {
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
