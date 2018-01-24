<template>
  <div class="button" :class="[buttonClass,type]"  @click="handleClick">
    <span class="button-label" :class="labelClass" v-if="label && labelPosition === 'before'">{{label}}</span>
    <icon v-if="icon"></icon>
    <slot></slot>
    <span class="button-label" :class="labelClass" v-if="label && labelPosition === 'after'">{{label}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
/**
   * Created by lpy on 2017/10/25.
   */
export default {
  name: 'vButton',
  props: {
    type: {
      type: [String, Array, Object],
      default: 'is-primary'
    },
    label: {
      type: String
    },
    labelPosition: {
      type: String,
      default: 'after'
    },
    labelClass: {
      type: [String, Array, Object],
      default: ''
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return {
        'label-before': this.labelPosition === 'before',
        'no-label': !this.label
      }
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  &.label-before {
    padding-right: 8px;
    icon {
      margin-right: 4px;
      margin-left: 0;
    }
    .button-label {
      padding-right: 8px;
    }
  }
}
</style>
