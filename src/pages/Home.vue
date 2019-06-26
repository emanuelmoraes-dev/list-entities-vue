<template>
  <div class="full-width center-content">
    <list-entities
          @on_error="on_error"
          v-model="entidades"
          titleTable="List Entity"
          :displayAttrs="[
            {
              display: 'NOME',
              value: 'nome'
            },
            {
              display: 'SOBRENOME',
              value: 'info.sobrenome'
            }
          ]"
          :defaultLastAttr="{
            display: 'IDADE',
            value: 'info.idade'
          }"
          :optionsSearch="[
            {
              display: 'Todos',
              value: 'Todos'
            },
            {
              display: 'Nome',
              value: 'nome'
            },
            {
              display: 'Sobrenome',
              value: 'info.sobrenome'
            },
            {
              display: 'Idade',
              value: 'info.idade'
            },
            {
              display: 'Rua',
              value: 'endereco.rua'
            },
            {
              display: 'Número',
              value: 'endereco.numero'
            }
          ]"
          :descriptorEntity="{
            nome: String,
            'info.sobrenome': String,
            'info.idade': Number,
            'endereco.rua': String,
            'endereco.numero': Number
          }"
          :mapPropModalEntity="{
            nome: 'Nome',
            'info.sobrenome': 'Sobrenome',
            'info.idade': 'Idade',
            'endereco.rua': 'Rua',
            'endereco.numero': 'Número'
          }"
          :request="request"
          routeEditName="pessoaEdit"
          sort="nome"
        >

        </list-entities>
  </div>
</template>

<script>
// Custom Components
import ListEntities from '../components/list-entities/ListEntities'

export default {
  methods: {
    request(that) {
      /*
        return promise that is instance of HttpRequest;
        'that' is instance of ListEntities
      */
     return new HttpRequest()
    },
    on_error (err) {
      console.error(err)
    }
  },
  data () {
    return {
      entidades: [
        {
          nome: 'Emanuel',
          info: {
            sobrenome: 'Moraes',
            idade: 21,
          },
          endereco: {
            rua: 'Avenida Jardim Paraíso',
            numero: 27
          }
        }
      ]
    }
  },
  components: {
    ListEntities
  }
}
</script>
