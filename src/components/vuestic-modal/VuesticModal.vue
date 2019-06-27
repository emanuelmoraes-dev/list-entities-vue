<template>
  <div class="custom-component-list-entities-vue">
    <div class="vuestic-modal">
      <transition name="modal" :duration="duration">
        <div v-show="show" class="modal-container">
          <div class="modal" @click.self="clickMask">
            <div class="modal-dialog" :class="modalClass">
              <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                  <slot name="header">
                    <div class="modal-title">
                      <slot name="title"></slot>
                    </div>

                    <i
                      class="ion ion-md-close close-modal"
                      v-if="closeIconShown"
                      @click.prevent="cancel"
                    />
                  </slot>
                </div>
                <!--Container-->
                <div class="modal-body">
                  <slot></slot>
                </div>
                <!--Footer-->
                <div class="modal-footer">
                  <slot name="footer">
                    <button type="button" v-if="!noButtons" :class="okClass"
                            @click="ok" :disabled="okDisabled">
                      {{ okText }}
                    </button>
                    <button type="button" v-if="!noButtons" :class="cancelClass"
                            @click="cancel" :disabled="cancelDisabled">
                      {{ cancelText }}
                    </button>
                  </slot>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-backdrop"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import '../../../assets/css/ionicons/css/ionicons.min.css'
import '../../../assets/css/app.css'

export default {
  name: 'vuestic-modal',
  props: {
    transition: {
      type: String,
      default: 'modal',
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    force: {
      type: Boolean,
      default: false,
    },
    okText: {
      type: String,
      default: 'CONFIRM',
    },
    cancelText: {
      type: String,
      default: 'CANCEL',
    },
    okClass: {
      type: String,
      default: 'btn btn-primary',
    },
    cancelClass: {
      type: String,
      default: 'btn btn-secondary',
    },
    closeIconShown: {
      type: Boolean,
      default: true,
    },
    okDisabled: {
      type: Boolean,
      default: false,
    },
    cancelDisabled: {
      type: Boolean,
      default: false,
    },
    noButtons: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      show: false,
      duration: 500,
    }
  },
  computed: {
    modalClass () {
      return {
        'modal-lg': this.large,
        'modal-sm': this.small,
      }
    },
  },
  created () {
    if (this.show) {
      document.body.className += ' modal-open'
    }
  },
  beforeDestroy () {
    document.body.className = document.body.className.replace(/\s?modal-open/, '')
  },
  watch: {
    show (value) {
      if (value) {
        document.body.className += ' modal-open'
      } else {
        window.setTimeout(() => {
          document.body.className = document.body.className.replace(/\s?modal-open/, '')
        }, this.duration)
      }
    },
  },
  methods: {
    listenKeyUp (event) {
      if (event.key === 'Escape') {
        this.cancel()
      }
    },
    ok () {
      this.$emit('ok')
      this.show = false
      window.removeEventListener('keyup', this.listenKeyUp)
    },
    cancel () {
      this.$emit('cancel')
      this.show = false
      window.removeEventListener('keyup', this.listenKeyUp)
    },
    clickMask () {
      if (!this.force) {
        this.cancel()
      }
    },
    open () {
      this.show = true
      window.addEventListener('keyup', this.listenKeyUp)
    },
    close () {
      this.show = false
      window.removeEventListener('keyup', this.listenKeyUp)
    },
  },
}
</script>

<style lang="css">
.vuestic-modal {
	 height: 0;
	 width: 0;
}
 .vuestic-modal .modal {
	 display: block;
}
 .vuestic-modal .modal-dialog, .vuestic-modal .modal-backdrop {
	 transition: all 0.5s ease;
}
 .vuestic-modal .modal-enter .modal-dialog, .vuestic-modal .modal-leave-active .modal-dialog {
	 opacity: 0;
	 transform: translateY(-30%);
}
 .vuestic-modal .modal-enter .modal-backdrop, .vuestic-modal .modal-leave-active .modal-backdrop {
	 opacity: 0;
}
 .vuestic-modal .modal-backdrop {
	 opacity: 0.5;
}
 .vuestic-modal .modal-header {
	 height: 55px;
	 padding: 0 1.5625rem;
	 border-bottom: 2px solid #eee;
	 font-size: 1.2rem;
	 display: flex;
	 align-items: center;
}
 .vuestic-modal .close-modal {
	 margin-left: 1rem;
	 font-size: 1.5rem;
	 line-height: 1.5rem;
	 cursor: pointer;
}
 .vuestic-modal .modal-content {
	 border-radius: 0;
}
 .vuestic-modal .modal-footer {
	 justify-content: center;
	 padding: 0 25px;
	 padding-bottom: calc(25px - 20px);
	 flex-wrap: wrap;
}
 .vuestic-modal .modal-footer .btn {
	 margin: 0 10px 20px 10px;
}
 .vuestic-modal .modal-dialog {
	 box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .5);
}
</style>
