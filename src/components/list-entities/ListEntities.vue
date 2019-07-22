<template>
  <div class="custom-component-list-entities-vue">
    <div class="list-entities">
      <div class="row">
      <div class="col-xs-12 col-md-12">
        <vuestic-widget :hidePrimary="hideSearch" :compactSecundary="isCompact" :headerText="titleSearch">
          <div v-if="$slots.headerText" slot="headerText">
            <slot name="headerText"></slot>
          </div>
          <div v-if="searchShow" class="row">
            <div class="col-md-3">
              <vuestic-simple-select
                label="Pesquisar por:"
                v-model="attrSearch"
                option-key="display"
                :options="optionsSearch"
                :clearable="false"
                :editable="false"
                :cancellable="false">
              </vuestic-simple-select>
            </div>
            <div class="col-md-7">
              <div class="form-group">
              <div class="input-group">
                <input
                id="txtsearch"
                name="search"
                v-model="inputSearchValue"
                @keypress="keyHandler($event)"
                ref="txtSearch"/>
                <label class="control-label" for="txtsearch">Buscar:</label><i
                class="bar"></i>
              </div>
            </div>
            </div>
            <div class="col-md-2">
              <button @click.prevent.stop="search(true)" class="btn btn-success option search">Buscar</button>
            </div>
          </div>
          <div slot="secundary">
            <div :class="{row: !isCompact}">
            <div :class="{'col-xs-12 col-md-12': !isCompact}">
              <component :is="componentShowTable" :headerText="titleTable">
                <slot name="beforeTable"></slot>
                <div class="table-responsive">
                  <table class="table table-striped first-td-padding">
                    <thead>
                      <tr>
                        <td v-if="$scopedSlots.check"></td>
                        <td
                          :class="{'pointer': !descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort}"
                          v-show="!descriptorEntity[attr.value] || !descriptorEntity[attr.value].hidden"
                          @click="(!descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort) && onClickHeader(attr.value)"
                          v-for="attr of displayAttrs" :key="attr.value + '_display'"
                        >
                          <span v-show="sort && sort[0] !== '-' && (sort == attr.value || sort.substring(1) == attr.value) && (!descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort)" class="ion ion-ios-arrow-down"></span>
                          <span v-show="sort && sort[0] === '-' && (sort == attr.value || sort.substring(1) == attr.value) && (!descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort)" class="ion ion-ios-arrow-up"></span>
                          {{attr.display}}:
                        </td>
                        <td
                          v-if="!hideLastAttr"
                          :class="{'pointer': !descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort}"
                          @click="(!descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort) && onClickHeader(lastAttr.value)"
                        >
                          <span v-show="sort && sort[0] !== '-' && (sort == lastAttr.value || sort.substring(1) == lastAttr.value) && (!descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort)" class="ion ion-ios-arrow-down"></span>
                          <span v-show="sort && sort[0] === '-' && (sort == lastAttr.value || sort.substring(1) == lastAttr.value) && (!descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort)" class="ion ion-ios-arrow-up"></span>
                          {{lastAttr.display}}:
                        </td>
                        <td class="text-center" v-if="$slots.td_option || optionRemove || optionEdit || optionReport || optionView">{{ tdOptionName }}</td>
                        <td v-for="opt of options" :key="opt + '_thead'">{{ mapTdOption[opt] || '' }}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <slot name="tblpre"></slot>
                      <tr v-for="(entity, index) of entities" :key="entity.id" :class="[classLine, entity.__classLine]"
                          @click="on_click(entity, index)">
                        <td v-if="$scopedSlots.check">
                          <slot name="check" :item="{entity, index}"></slot>
                        </td>
                        <slot :name="`entity_line_${entity.id}`" :item="{entity, index}">
                          <td
                            v-for="attr of displayAttrs" :key="attr.value + '_value'"
                            v-show="!descriptorEntity[attr.value] || !descriptorEntity[attr.value].hidden"
                          >
                            {{ entity | getValue(attr) | parseAttr(attr, descriptorEntity, joinSep) }}
                          </td>
                          <td v-if="!hideLastAttr">{{ entity.__lastAttrValue | parseAttr(lastAttr, descriptorEntity, joinSep) }}</td>
                        </slot>
                        <slot name="td_option" :item="{entity, index}">
                          <td class="text-center" v-if="optionRemove || optionEdit || optionReport || optionView">
                            <button v-if="optionRemove" type="button" class="btn btn-danger option option-excluir" @click.prevent.stop="excluir(entity, index)">Excluir</button>
                            <button v-if="optionEdit" type="button" class="btn btn-success option option-editar" @click.prevent.stop="editar(entity, index)">Editar</button>
                            <button v-if="optionReport" type="button" class="btn btn-info option option-icon" @click.prevent.stop="reportGenerate(entity, index)">
                              <span class="icon ion-md-document"></span>
                            </button>
                            <button v-if="optionView" type="button" class="btn btn-warning option option-icon" @click.prevent.stop="entityView(entity, index)">
                              <span class="fa fa-eye"></span>
                            </button>
                          </td>
                        </slot>
                        <td v-for="opt of options" :key="opt + '_tbody'">
                          <slot :name="opt" :item="{entity, index}"></slot>
                        </td>
                      </tr>
                      <slot name="tblpos"></slot>
                    </tbody>
                  </table>
                </div>
                <b-pagination :limit="limitPagination" :align="alignPagination" :size="sizePagination" :total-rows="totalElements" v-model="currentPage" :per-page="pageSize" />
              </component>
            </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      </div>

      <div class="modals-page">
        <vuestic-modal v-if="isShowModal" :show.sync="showSuccess" :small="true" :force="false" ref="successModal" :cancelClass="'none'"
            :okText="okText">
          <div slot="title">Sucesso!</div>
          <div>
            {{msg_modal}}
          </div>
        </vuestic-modal>

        <vuestic-modal :show.sync="showConfirm" :small="true" :force="false" ref="confirmModal" cancelClass="btn btn-secondary"
            :okText="confirmText" :cancelText="cancelText" @ok="on_ok">
          <div slot="title">Atenção!</div>
          <div>
            {{msg_modal}}
          </div>
        </vuestic-modal>
      </div>

      <modal-entity
        ref="showModalEntity"
        :title="titleModalEntity"
        :okClass="okClassModalEntity"
        :confirmText="confirmTextModalEntity"
        v-model="enityShow"
        :small="smallModalEntity"
        :descriptor="descriptorModalEntity || descriptorEntity"
        :mapProp="mapPropModalEntity"
        :force="forceModalEntity"
      />
    </div>
  </div>
</template>

<script>
import '../../../assets/css/ionicons/css/ionicons.min.css'
import '../../../assets/css/font-awesome/css/font-awesome.min.css'
import '../../../assets/css/app.css'

import VuesticModal from '../vuestic-modal/VuesticModal'
import VuesticWidget from '../vuestic-widget/VuesticWidget'
import VuesticSimpleSelect from '../vuestic-simple-select/VuesticSimpleSelect'
import show from './Show'

import ModalEntity from "../modal-entity/ModalEntity"

import utils from '../../services/utils'
import * as dateUtility from 'datetime-utility'
import isISODate from 'is-iso-date'

export default {
  name: 'list-entities',
  components: {
    VuesticModal,
    VuesticWidget,
    VuesticSimpleSelect,
    ModalEntity,
    show
  },
  mounted () {
    // this.$refs.txtSearch.focus()
  },
  data () {
    return {
      enityShow: null,
      inputSearchValue: '',
      currentPage: 1,
      attrSearch: null, // Atributo a se pesquisar
      showSuccess: true, // Exigido pelo modal de sucesso
      showConfirm: true, // Exigido pelo modal de confirmação
      msg_modal: '', // Mensagem a ser exibida no modal
      entityRemove: null, // Entidade selecionada para remoção
      indexEntityRemove: null, // Index da entidade selecionada para remoção
      entities: [],
      isUpdateLastAttr: true
    }
  },
  created () {
    this.prepareDescriptorEntity()
    this.attrSearch = this.optionsSearch[0]
    this.inputSearchValue = this.$props.searchValue

    if (this.$props.autoSearch) { this.search() }
  },
  methods: {
    entityView (entity, index) {
      this.enityShow = entity
      const showModalEntity = this.$refs.showModalEntity
      showModalEntity.open()
    },
    reportGenerate (entity, index) {
      this.$emit('on_report', entity, index)
    },
    onClickHeader (atribute) {
      if (!atribute) { return }

      let order
      let attrSort

      if (this.sort[0] === '-') {
        order = '-'
        attrSort = this.sort.substring(1)
      } else {
        order = ''
        attrSort = this.sort
      }

      if (atribute === attrSort) { this.$emit('update:sort', `${order ? '' : '-'}${atribute}`) } else { this.$emit('update:sort', atribute) }
    },
    keyHandler (event) {
      if (event.keyCode === 13) {
        this.search(true)
      }
    },
    search (startList) {
      let attr = this.attrSearch.value
      let type

      if (this.attrSearch.value === this.attrAll) {
        type = null
      } else {
        type = this.descriptorEntity[attr].type
      }

      let valor = this.inputSearchValue
      let params = {}
    
      valor = valor.trim()

      if (attr && type && (type !== Boolean || valor)) {
        if (type === Boolean) {
          params[attr] = valor.toLowerCase() === 'sim' ? 1 : 0
        } else if (type === Date) {

          const regexpCmpDate = /^\s*(>|>=|<|<=|=)\s*(\d{1,2}\/\d{1,2}\/\d{4})\s*$/g
          const regexpCmpDateTime = /^\s*(>|>=|<|<=|=)\s*(\d{1,2}\/\d{1,2}\/\d{4}\s+(\d{1,2}(:\d{1,2}(:\d{1,2}(:\d{1,2})?)?)?)?)\s*$/g

          const regexpDateTime = /^\s*\d{1,2}\/\d{1,2}\/\d{4}\s+(\d{1,2}(:\d{1,2}(:\d{1,2}(:\d{1,2}))))\s*$/g
          const regexpDateHoraMinutoSegundo = /^\s*\d{1,2}\/\d{1,2}\/\d{4}\s+(\d{1,2}(:\d{1,2}(:\d{1,2})))\s*$/g
          const regexpDateHoraMinuto = /^\s*\d{1,2}\/\d{1,2}\/\d{4}\s+(\d{1,2}(:\d{1,2}))\s*$/g
          const regexpDateHora = /^\s*\d{1,2}\/\d{1,2}\/\d{4}\s+(\d{1,2})\s*$/g
          const regexpDate = /^\s*\d{1,2}\/\d{1,2}\/\d{4}\s*$/g

          if (valor.match(regexpCmpDate) && valor) {

            let cmp = valor.match(/(>|>=|<|<=|=)/)[0]
            valor = valor.match(/\d{1,2}\/\d{1,2}\/\d{4}/)[0]

            switch (cmp) {
              case '>': cmp = '$gt'; break
              case '>=': cmp = '$gte'; break
              case '<': cmp = '$lt'; break
              case '<=': cmp = '$lte'; break
              case '=': cmp = '$eq'; break
            }

            let date = dateUtility.toDate(valor, 'dd/MM/yyyy h:m:s:l')
            if (date) { params[`${attr}__${cmp}`] = date.toISOString() }
          } else if (valor.match(regexpCmpDateTime) && valor) {
            let cmp = valor.match(/(>|>=|<|<=|=)/)[0]
            valor = valor.match(/(\d{1,2}\/\d{1,2}\/\d{4}\s+(\d{1,2}(:\d{1,2}(:\d{1,2}(:\d{1,2})?)?)?)?)/)[0]

            switch (cmp) {
              case '>': cmp = '$gt'; break
              case '>=': cmp = '$gte'; break
              case '<': cmp = '$lt'; break
              case '<=': cmp = '$lte'; break
              case '=': cmp = '$eq'; break
            }

            let date = dateUtility.toDate(valor, 'dd/MM/yyyy h:m:s:l')
            if (date) { params[`${attr}__${cmp}`] = date.toISOString() }
          } else if (valor.match(regexpDate) && valor) {
            valor = valor.trim()

            const dateBegin = dateUtility.toDate(valor, 'dd/MM/yyyy h:m:s:l')
            const dateEnd = dateUtility.plus(dateBegin, dateUtility.PERIODS.DAY, 1)

            params[`${attr}__$gte`] = dateBegin.toISOString()
            params[`${attr}__$lt`] = dateEnd.toISOString()

          } else if (valor.match(regexpDateHora) && valor) {
            valor = valor.trim()
            const dateBegin = dateUtility.toDate(valor, 'dd/MM/yyyy h:m:s:l')
            const dateEnd = dateUtility.plus(dateBegin, dateUtility.PERIODS.HOUR, 1)

            params[`${attr}__$gte`] = dateBegin.toISOString()
            params[`${attr}__$lt`] = dateEnd.toISOString()

          }  else if (valor.match(regexpDateHoraMinuto) && valor) {
            valor = valor.trim()
            const dateBegin = dateUtility.toDate(valor, 'dd/MM/yyyy h:m:s:l')
            const dateEnd = dateUtility.plus(dateBegin, dateUtility.PERIODS.MINUTE, 1)

            params[`${attr}__$gte`] = dateBegin.toISOString()
            params[`${attr}__$lt`] = dateEnd.toISOString()

          } else if (valor.match(regexpDateHoraMinutoSegundo) && valor) {
            valor = valor.trim()
            const dateBegin = dateUtility.toDate(valor, 'dd/MM/yyyy h:m:s:l')
            const dateEnd = dateUtility.plus(dateBegin, dateUtility.PERIODS.SECOND, 1)

            params[`${attr}__$gte`] = dateBegin.toISOString()
            params[`${attr}__$lt`] = dateEnd.toISOString()

          } else if (valor.match(regexpDateTime) && valor) {
            valor = valor.trim()
            let date = dateUtility.toDate(valor, 'dd/MM/yyyy h:m:s:l')
            if (date) { params[attr] = date.toISOString() }
          } else if(valor) {
            this.$emit('on_error', new Error('Valor inválido para representação de uma data!'))
          } else {
            type = null
          }
        } else if (type === Array) {
          params[`${attr}__regex`] = `/${utils.scape(valor)
            .split(this.descriptorEntity[attr].sep || this.sep)
            .join('|')}/${this.searchCaseSensitive ? '' : 'i'}`
        } else if (type === Number) {
          valor = valor.trim()

          const regexp = /(>|>=|<|<=|=)(\d+([.,]\d+)?)/g
          const regexpSpace = /(>|>=|<|<=|=)\s+(\d+([.,]\d+)?)/g

          if (valor.match(regexp)) {
            let cmp = valor.match(/>|>=|<|<=|=/)[0]
            valor = valor.match(/\d+([.,]\d+)?/)[0]

            switch (cmp) {
              case '>': cmp = '$gt'; break
              case '>=': cmp = '$gte'; break
              case '<': cmp = '$lt'; break
              case '<=': cmp = '$lte'; break
              case '=': cmp = '$eq'; break
            }

            params[`${attr}__${cmp}`] = valor
          } else if (valor.match(regexpSpace)) {
            let valorArray = valor.split(/\s+/)
            let cmp = valorArray[0]
            valor = valorArray[1]

            switch (cmp) {
              case '>': cmp = '$gt'; break
              case '>=': cmp = '$gte'; break
              case '<': cmp = '$lt'; break
              case '<=': cmp = '$lte'; break
              case '=': cmp = '$eq'; break
            }

            params[`${attr}__${cmp}`] = valor
          } else if (valor) {
            params[attr] = valor
          } else {
            type = null
          }
        } else {
          params[`${attr}__regex`] = `/${utils.scape(valor)}/${this.searchCaseSensitive ? '' : 'i'}`
        }
      } else if(type === Boolean && !valor) {
        type = null
      }

			if (startList)
				this.currentPage = 1

			params = {
				...params,
				...this.paramsRequest
      }
      
      this.$emit('on_search', params, type)

      if (!this.customSearch) {
        let totalElements = this.totalElements

        if (!type) {
          this.request(this)
            .requestGet(this.routeSearchAllCount, {
              params: {
                search: valor,
								...this.paramsRequest
              }
            })
            .then(res => {
              totalElements = res.count

              return this.request(this)
                .requestGet(this.routeSearchAll, {
                  params: {
                    search: valor,
                    limit: this.pageSize,
                    skip: (this.currentPage - 1) * this.pageSize,
                    sort: this.sort,
										...this.paramsRequest
                  }
                })
            })
            .then(entities => {
							this.$emit('update:totalElements', totalElements)
              this.updateLastAttr(entities)
              this.$emit('on_search_success', entities)
            })
            .catch(err => this.$emit('on_error', err))
        } else {
          this.request(this)
            .requestGet({
              params: {
                ...params,
                selectCount: 'true'
              }
            })
            .then(res => {
              totalElements = res.count

              return this.request(this)
                .requestGet({
                  params: {
                    ...params,
                    limit: this.pageSize,
                    skip: (this.currentPage - 1) * this.pageSize,
                    sort: this.sort
                  }
                })
            })
            .then(entities => {
							this.$emit('update:totalElements', totalElements)
              this.updateLastAttr(entities)
              this.$emit('on_search_success', entities)
            })
            .catch(err => this.$emit('on_error', err))
        }
      }
    },
    updateLastAttr (entities) {
      this.isUpdateLastAttr = false
      if (!entities) entities = this.value.slice()

      for (let entity of entities) {
        entity.__lastAttrValue = utils.getAttr(this.lastAttr.value, entity, true)
        if (entity.__lastAttrValue instanceof Array) { entity.__lastAttrValue = utils.extractValuesByArray(entity.__lastAttrValue) }
      }

      this.entities = entities
      this.$emit('input', entities)
    },
    on_click (entity, index) {
      this.$emit('on_click', entity, index)
    },
    on_ok () {
      this.request(this).delete(this.entityRemove.id).then(res => {
        this.$emit('on_excluir', this.entityRemove, this.indexEntityRemove)
        this.msg_modal = this.successMessage

        if (this.isShowModal) { this.$refs.successModal.open() }

        if (!this.customSearch) { this.search(false) }
      }).catch(err => this.$emit('on_error', err))
    },
    excluir (entity, index) {
			if (!this.customRemove) {
	      this.entityRemove = entity
	      this.indexEntityRemove = index
	      this.msg_modal = this.confirmMessage
	      this.$refs.confirmModal.open()
			} else {
				this.$emit('on_excluir', entity, index)
			}
    },
    editar (entity, index) {
      this.$emit('on_editar', entity, index)
			if (!this.customEdit)
      	this.$router.push({ name: this.routeEditName, params: { id: entity.id } })
    },
    prepareDescriptorEntity () {
      for (let key of Object.keys(this.descriptorEntity)) {
        let descriptorValue = this.descriptorEntity[key]

        if (this.mapPropModalEntity[key] === undefined) { this.mapPropModalEntity[key] = key }

        if (descriptorValue === String) {
           this.descriptorEntity[key] = {
              type: String, placeholder: ''
            }
        } else if (descriptorValue === Number) {
          this.descriptorEntity[key] = { type: Number }
        } else if (descriptorValue === Boolean) {
          this.descriptorEntity[key] = {
            type: Boolean, rad: false
          }
        } else if (descriptorValue === Date) {
          this.descriptorEntity[key] = {
            type: Date, pattern: 'dd/MM/yyyy'
          }
        } else if (descriptorValue === Array) {
          this.descriptorEntity[key] = {
            type: Array, source: []
          }
        }

        if (typeof descriptorValue === 'string') {
          this.descriptorEntity[key] = {
            type: String,
            placeholder: descriptorValue
          }
        } else if (typeof descriptorValue === 'number') {
          this.descriptorEntity[key] = {
             type: Number,
             min: descriptorValue
          }
        } else if (typeof descriptorValue === 'boolean') {
          this.descriptorEntity[key] = {
            type: Boolean,
            rad: descriptorValue
          }
        } else if (descriptorValue instanceof Date) {
          this.descriptorEntity[key] = {
            type: Date,
            pattern: 'dd/MM/yyyy'
          }
        } else if (this.descriptorEntity[key] instanceof Array) {
          this.descriptorEntity[key] = {
            type: Array, source: descriptorValue
          }
        }

        descriptorValue = this.descriptorEntity[key]

        if (
          descriptorValue &&
          descriptorValue.type === String &&
          descriptorValue.placeholder === undefined
        ) { this.descriptorEntity[key].placeholder = '' }
        if (
          descriptorValue &&
          descriptorValue.type === Boolean &&
          descriptorValue.rad === undefined
        ) { this.descriptorEntity[key].rad = false }
        if (
          descriptorValue &&
          descriptorValue.type === Array &&
          descriptorValue.source === undefined
        ) { this.descriptorEntity[key].source = [] }
        if (
          descriptorValue &&
          descriptorValue.type === Array &&
          descriptorValue.source === undefined
        ) { this.descriptorEntity[key].pattern = 'dd/MM/yyyy' }

        this.$set(this.descriptorEntity, key, this.descriptorEntity[key])
      }
    }
  },
  filters: {
    getValue (entity, attr) {
      let value = utils.getAttr(attr.value, entity, true)
      if (value instanceof Array) { value = utils.extractValuesByArray(value) }
      return value
    },
    parseAttr (value, attr, descriptorEntity, joinSep) {
      if (value instanceof Array) return value.join(descriptorEntity && descriptorEntity[attr.value].joinSep || joinSep)
      else if (typeof value === 'boolean') return (value && 'SIM') || 'NÃO'
      else if (value instanceof Date) return dateUtility.dateToStr(value, descriptorEntity && descriptorEntity[attr.value].pattern || 'dd/MM/yyyy')
      else if (isISODate(value)) return dateUtility.dateToStr(new Date(value), descriptorEntity && descriptorEntity[attr.value].pattern || 'dd/MM/yyyy')
      return value
    }
  },
  computed: {
    lastAttr () {
      let v = this.attrSearch.value
      if (
        v === this.attrAll ||
        this.displayAttrs.find(attr => attr.value === v)
      ) { return this.defaultLastAttr }
      return this.attrSearch
    },
    componentShowTable () {
      if (this.$props.isCompact) return 'show'
      else return 'vuestic-widget'
    }
  },
  watch: {
    sort () {
      this.search(false)
    },
    attrSearch (newValue, oldValue) {
      if (!newValue) {
        this.attrSearch = oldValue
      } else {
        this.$emit('attrSearch', newValue)

        oldValue = oldValue || newValue

        this.updateLastAttr()

        let attrSort

        if (this.sort[0] === '-') { attrSort = this.sort.substring(1) } else { attrSort = this.sort }

        if (!this.displayAttrs.find(a => a.value === attrSort) && newValue.value !== oldValue.value &&
            (![...this.displayAttrs, this.defaultLastAttr, { value: this.attrAll }].find(a => a.value === newValue.value) ||
                ![...this.displayAttrs, this.defaultLastAttr, { value: this.attrAll }].find(a => a.value === oldValue.value))) {
          this.onClickHeader(this.displayAttrs[0].value)
        }
      }
    },
    value () {
      if (this.isUpdateLastAttr) this.updateLastAttr()
      else this.isUpdateLastAttr = true
    },
    currentPage () {
      if (!this.customSearch) { this.search(false) }

      this.$emit('update:page', this.currentPage)
    },
    page (p) {
      this.currentPage = p
    },
    inputSearchValue (isv) {
      this.$emit('update:searchValue', isv)
    },
    searchValue (sv) {
      this.inputSearchValue = sv
    }
  },
  props: {
    value: {
      default: () => []
    },
    isCompact: {
      Type: Boolean,
      default: false
    },
    customSearch: {
      Type: Boolean,
      default: false
    },
    searchShow: {
      Type: Boolean,
      default: true
    },
    titleSearch: {
      default: 'Busca'
    },
    titleTable: {
      default: 'Entidades'
    },
    isShowModal: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: 'OK'
    },
    confirmText: {
      type: String,
      default: 'SIM'
    },
    cancelText: {
      type: String,
      default: 'NÃO'
    },
    successMessage: {
      type: String,
      default: 'Entidade excluida com sucesso!'
    },
    confirmMessage: {
      type: String,
      default: 'Você tem certeza que deseja excluir esta entidade?'
    },
    optionRemove: {
      Type: Boolean,
      default: true
    },
		customRemove: {
			Type: Boolean,
			default: false
		},
    optionEdit: {
      Type: Boolean,
      default: true
    },
		customEdit: {
			Type: Boolean,
			default: false
		},
    classLine: {
      default: ''
    },
    options: {
      Type: Array,
      default: () => []
    },
    displayAttrs: {
      Type: Array,
      required: true
    },
    defaultLastAttr: {
      Type: Object,
      required: true
    },
    optionsSearch: {
      Type: Array,
      required: true
    },
    descriptorEntity: {
      Type: Object,
      required: true
    },
    descriptorModalEntity: {
      Type: Object,
      default: null
    },
    request: {
      Type: Function,
      required: true
    },
    routeEditName: {
      Type: String,
      required: true
    },
    pageSize: {
      Type: Number,
      default: 10
    },
    totalElements: {
      Type: Number,
      default: 0
    },
    limitPagination: {
      Type: Number,
      default: 5
    },
    sort: {
      Type: String,
      required: true
    },
    searchValue: {
      Type: String,
      default: ''
    },
    autoSearch: {
      Type: Boolean,
      default: false
    },
    page: {
      Type: Number,
      default: 1
    },
    optionReport: {
      Type: Boolean,
      default: false
    },
    optionView: {
      Type: Boolean,
      default: true
    },
    sep: {
      Type: String,
      default: null
    },
    alignPagination: {
      Type: String,
      default: 'align'
    },
    sizePagination: {
      Type: String,
      default: 'size'
    },
    attrAll: {
      Type: String,
      default: 'Todos'
    },
    searchCaseSensitive: {
      Type: Boolean,
      default: false
    },
    routeSearchAll: {
      Type: String,
      default: 'searchAll'
    },
    routeSearchAllCount: {
      Type: String,
      default: 'searchAll/count'
    },
    joinSep: {
      Type: String,
      default: ','
    },
    mapPropModalEntity: {
      Type: Object,
      default: () => ({})
    },
    titleModalEntity: {
      Type: String,
      default: 'Dados'
    },
    okClassModalEntity: {
      Type: String,
      default: 'btn btn-primary btn-modal btn-ok-modal'
    },
    confirmTextModalEntity: {
      Type: String,
      default: 'OK'
    },
    smallModalEntity: {
      Type: Boolean,
      default: false
    },
    forceModalEntity: {
      Type: Boolean,
      default: false
    },
    tdOptionName: {
      Type: String,
      default: 'OPÇÕES:'
    },
		mapTdOption: {
			Type: Object,
			default: () => ({})
		},
		hideSearch: {
			Type: Boolean,
			default: false
		},
		hideLastAttr: {
			Type: Boolean,
			default: false
		},
		paramsRequest: {
			Type: Object,
			default: () => ({})
		}
  }
}
</script>

<style lang="css">

.color-icon-label-table td:first-child {
	 width: 1rem;
}
 button.option {
	 padding: 0.3rem 0.2rem;
	 font-size: 0.9rem;
	 border-radius: 5px;
	 margin-left: 0.5rem;
}
 button.option-icon {
	 padding: 0.2rem 0.3rem 0.2rem 0.45rem;
	 font-size: 0.9rem;
	 border-radius: 5px;
}
 button.excluir {
	 box-shadow: 0 4px 9.6px 0.4px rgba(247, 53, 19, 0.35) !important;
}
 button.aceitar button.search {
	 box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5) !important;
}
 button.search {
	 padding: 0.5rem 0.4rem;
	 margin: 6px 0 0 20px;
}
 .list-entities .vuestic-widget-header {
	 justify-content: center;
}

</style>
