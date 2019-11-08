<template>
  <div class="custom-component-vuestic-widget">
    <div v-if="compactSecundary || !$slots.secundary" class="vuestic-widget" :class="{'no-header': !headerText}">
      <div v-if="!$slots.headerText && headerText" class="vuestic-widget-header">
        {{headerText}}
      </div>
      <div v-if="$slots.headerText" class="vuestic-widget-header">
        <slot name="headerText"></slot>
      </div>
      <div class="vuestic-widget-body" v-if="hasSlotData">
        <slot></slot>
        <slot v-if="$slots.secundary" name="secundary"></slot>
      </div>
    </div>
    <div v-else>
      <div v-show="!hidePrimary" class="vuestic-widget first-content" :class="{'no-header': !headerText}">
        <div v-if="!$slots.headerText && headerText" class="vuestic-widget-header">
          {{headerText}}
        </div>
        <div v-if="$slots.headerText" class="vuestic-widget-header">
          <slot name="headerText"></slot>
        </div>
        <div class="vuestic-widget-body" v-if="hasSlotData">
          <slot></slot>
        </div>
      </div>
      <slot v-if="$slots.secundary" name="secundary"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vuestic-widget',

  props: {
    'headerText': {
      default: null
    },
    'compactSecundary': {
      Type: Boolean,
      default: false
    },
    'hidePrimary': {
      Type: Boolean,
      default: false
    }
  },

  computed: {
    hasSlotData () {
      return this.$slots.default
    },
  },
}
</script>

<style lang="css">
.custom-component-vuestic-widget .vuestic-widget.larger-padding .vuestic-widget-body {
	 padding: 45px;
}
.custom-component-vuestic-widget .vuestic-widget.no-h-padding .vuestic-widget-body {
	 padding-left: 0;
	 padding-right: 0;
}
.custom-component-vuestic-widget .vuestic-widget.no-v-padding .vuestic-widget-body {
	 padding-top: 0;
	 padding-bottom: 0;
}
.custom-component-vuestic-widget .vuestic-widget.brand-info {
	 background-color: #4ab2e3;
	 color: #fff;
	 box-shadow: 0px 4px 70px -16px #4ab2e3;
}
.custom-component-vuestic-widget .vuestic-widget.brand-danger {
	 background-color: #e34a4a;
	 color: #fff;
	 box-shadow: 0px 4px 70px -16px #e34a4a;
}
.custom-component-vuestic-widget .vuestic-widget.info-widget {
	 border-top: 0.5rem solid #e34a4a;
}
.custom-component-vuestic-widget .vuestic-widget.info-widget.brand-info {
	 border-top-color: #4ab2e3;
}
.custom-component-vuestic-widget .vuestic-widget.info-widget.brand-danger {
	 border-top-color: #e34a4a;
}
.custom-component-vuestic-widget .vuestic-widget .vuestic-widget-body {
	 padding: 1.5625rem;
}
.custom-component-vuestic-widget .vuestic-widget .vuestic-widget-header {
	 height: 55px;
	 padding: 0 1.5625rem;
	 border-bottom: 2px solid #eee;
	 font-size: 1.375rem;
	 font-weight: 600;
	 display: flex;
	 align-items: center;
}
</style>
