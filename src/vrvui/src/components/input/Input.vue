<template>
  <div class="control" :class="[iconPosition, {
        'is-expanded': expanded,
        'is-loading': loading,
        'is-clearfix': !hasMessage
       }]">
    <input
      ref="input"
      class="input"
      :class="[statusType, size]"
      :type="newType"
      :autocomplete="newAutocomplete"
      :maxlength="maxlength"
      :value="newValue"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus">
    <span class="is-right icon is-clickable" v-if="$slots.expand">
      <slot name="expand"></slot>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
/**
 * Created by lpy on 2017/10/24.
 */
import config from '../../utils/config'
import FormElementMixin from '../../utils/FormElementMixin'

export default {
  name: 'vInput',
  inheritAttrs: false,
  mixins: [FormElementMixin],
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    passwordReveal: Boolean,
    hasCounter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      newValue: this.value,
      newType: this.type,
      newAutocomplete: this.autocomplete || config.defaultInputAutocomplete,
      isPasswordVisible: false
    }
  },
  computed: {
    hasIconRight() {
      return this.passwordReveal || this.loading || this.statusType
    },

    iconPosition() {
      //        if (this.icon && this.hasIconRight) {
      //          return 'has-icons-left has-icons-right';
      //        } else if (!this.icon && this.hasIconRight) {
      //          return 'has-icons-right';
      //        } else if (this.icon) {
      //          return 'has-icons-left';
      //        }
      return 'has-icons-right'
    },

    statusTypeIcon() {
      switch (this.statusType) {
        case 'is-success':
          return 'done'
        case 'is-danger':
          return 'error'
        case 'is-info':
          return 'info'
        case 'is-warning':
          return 'warning'
      }
    },

    hasMessage() {
      return this.$parent.$data._isField && this.$parent.newMessage
    },

    passwordVisibleIcon() {
      return !this.isPasswordVisible ? 'visibility' : 'visibility_off'
    },

    valueLength() {
      return this.newValue ? this.newValue.length : 0
    }
  },
  watch: {
    /**
       * When v-model is changed:
       *   1. Set internal value.
       *   2. If it's invalid, validate again.
       */
    value(value) {
      this.newValue = value
    },

    /**
       * Update user's v-model and validate again whenever
       * internal value is changed.
       */
    newValue(value) {
      this.$emit('input', value)
      !this.isValid && this.checkHtml5Validity()
    }
  },
  methods: {
    togglePasswordVisibility() {
      console.log('in icon click')
      this.isPasswordVisible = !this.isPasswordVisible
      this.newType = this.isPasswordVisible ? 'text' : 'password'

      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },

    onIconClick() {
      this.$emit('onIconClick')
    },
    onBlur(event) {
      this.$emit('blur', event)
    },
    onFocus(event) {
      this.$emit('focus', event)
    },
    onInput(event) {
      this.$nextTick(() => {
        this.newValue = event.target.value
      })
    }
  }
}
</script>
