<template>
  <div class="custom-component-list-entities-vue">
    <div class="modal-entity">
      <vuestic-modal
        :show.sync="show"
        :small="small"
        :force="force"
        ref="modal"
        :okClass="okClass"
        :okText="confirmText"
        @ok="() => $emit('ok')"
        :cancelClass="'none'"
      >
        <div slot="title">{{ title }}</div>
        <div>
          <div
            v-for="(property, index) of Object.keys(descriptorEntity)"
            :key="property + '_' + index"
          >
            <div v-if="$scopedSlots[`${property}_slot`]">
              <slot :name="property" :property="descriptorEntity[property]"></slot>
            </div>
            <div v-else class="line-modal-property">
              <div class="property-name">{{ mapPropEntity[property] }} :</div>
              <div class="property-value">
                <span v-if="descriptorEntity[property].sep === '\n'">
                  <span
                    v-for="(item, index) of $options.filters.getAttr(value, property)"
                    :key="index"
                  >
                    {{ item | parseItem(descriptorEntity[property]) }}
                    <br v-if="index < $options.filters.getAttr(value, property).length">
                  </span>
                </span>
                <span v-else>{{ value | getAttr(property) | parseValue(descriptorEntity[property]) }}</span>
              </div>
            </div>
          </div>
        </div>
      </vuestic-modal>
    </div>
  </div>
</template>

<script>
import '../../../assets/css/ionicons/css/ionicons.min.css'
import '../../../assets/css/app.css'

import VuesticModal from '../vuestic-modal/VuesticModal'

import utils from '../../services/utils'
import * as dateUtility from 'datetime-utility'

export default {
  name: 'modal-entity',
  components: {
    VuesticModal
  },
  filters: {
    getAttr (obj, property) {
      let value = utils.getAttr(property, obj, true)
      if (value instanceof Array) {
        value = utils.extractValuesByArray(value)
      }
      return value
    },
    parseValue (value, descriptorValue) {
      if (value === undefined || value === null) {
        return ''
      }
      if (descriptorValue.type === Boolean) {
        return value ? 'SIM' : 'NÃO'
      } else if (descriptorValue.type === Date) {
        return dateUtility.dateToStr(
          value,
          descriptorValue.pattern ? descriptorValue.pattern : 'dd/MM/yyyy'
        )
      } else if (descriptorValue.type === Array) {
        if (descriptorValue.adapter) {
          return value
            .map(descriptorValue.adapter)
            .join(descriptorValue.sep ? descriptorValue.sep : ' ')
        } else {
          return value.join(descriptorValue.sep ? descriptorValue.sep : ' ')
        }
      } else {
        return value
      }
    },
    parseItem (value, descriptorValue) {
      if (value === undefined || value === null) {
        return ''
      }
      if (typeof descriptorValue.adapter === 'function') {
        return descriptorValue.adapter(value)
      } else {
        return value
      }
    }
  },
  methods: {
    formatDate (pattern, date) {
      return dateUtility.dateToStr(date, pattern)
    },
    open () {
      this.updateViews()
      this.$refs.modal.open()
    },
    updateViews () {
      for (let key of Object.keys(this.descriptorEntity)) {
        let descriptorValue = this.descriptorEntity[key]

        if (this.mapPropEntity[key] === undefined) {
          this.mapPropEntity[key] = key
        }

        if (descriptorValue === String) {
          this.descriptorEntity[key] = { type: String, placeholder: '' }
        } else if (descriptorValue === Number) {
          this.descriptorEntity[key] = { type: Number }
        } else if (descriptorValue === Boolean) {
          this.descriptorEntity[key] = { type: Boolean, rad: false }
        } else if (descriptorValue === Date) {
          this.descriptorEntity[key] = { type: Date, pattern: 'dd/MM/yyyy' }
        } else if (descriptorValue === Array) {
          this.descriptorEntity[key] = { type: Array, source: [] }
        }

        if (typeof descriptorValue === 'string') {
          this.descriptorEntity[key] = {
            type: String,
            placeholder: descriptorValue
          }
        } else if (typeof descriptorValue === 'number') {
          this.descriptorEntity[key] = { type: Number, min: descriptorValue }
        } else if (typeof descriptorValue === 'boolean') {
          this.descriptorEntity[key] = { type: Boolean, rad: descriptorValue }
        } else if (descriptorValue instanceof Date) {
          this.descriptorEntity[key] = { type: Date, pattern: 'dd/MM/yyyy' }
        } else if (this.descriptorEntity[key] instanceof Array) {
          this.descriptorEntity[key] = { type: Array, source: descriptorValue }
        }

        descriptorValue = this.descriptorEntity[key]

        if (
          descriptorValue &&
          descriptorValue.type === String &&
          descriptorValue.placeholder === undefined
        ) {
          this.descriptorEntity[key].placeholder = ''
        }
        if (
          descriptorValue &&
          descriptorValue.type === Boolean &&
          descriptorValue.rad === undefined
        ) {
          this.descriptorEntity[key].rad = false
        }
        if (
          descriptorValue &&
          descriptorValue.type === Array &&
          descriptorValue.source === undefined
        ) {
          this.descriptorEntity[key].source = []
        }
        if (
          descriptorValue &&
          descriptorValue.type === Array &&
          descriptorValue.source === undefined
        ) {
          this.descriptorEntity[key].pattern = 'dd/MM/yyyy'
        }

        this.$set(this.descriptorEntity, key, this.descriptorEntity[key])
      }
    }
  },
  data () {
    return {
      show: false,
      descriptorEntity: {},
      mapPropEntity: {}
    }
  },
  watch: {
    descriptor (newValue, oldValue) {
      this.descriptorEntity = newValue
      this.updateViews()
    },
    mapProp (newValue, oldValue) {
      this.mapPropEntity = newValue
      this.updateViews()
    }
  },
  created () {
    this.descriptorEntity = this.descriptor
    this.mapPropEntity = this.mapProp
    this.updateViews()
  },
  props: {
    value: {
      Type: Object,
      default: () => ({})
    },
    descriptor: {
      Type: Object,
      required: true
    },
    mapProp: {
      Type: Object,
      default: () => ({})
    },
    confirmText: {
      Type: String,
      default: 'OK'
    },
    title: {
      Type: String,
      default: 'Informe os dados'
    },
    force: {
      Type: Boolean,
      default: false
    },
    small: {
      Type: Boolean,
      default: true
    },
    okClass: {
      Type: String,
      default: 'btn btn-primary btn-modal btn-ok-modal'
    }
  }
}
</script>

<style lang="css">

.btn-modal {
	 padding: 0.6rem 0.4rem;
	 font-size: 0.9rem;
	 border-radius: 5px;
}
 .line-modal-property {
	 display: flex;
}
 .property-value {
	 flex: 1;
	 text-align: right;
}
 .modal-entity .modal-title {
	 flex: 1;
	 text-align: center;
}
 

</style>
