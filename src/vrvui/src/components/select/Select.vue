<template>
    <div class="control"
        :class="{ 'is-expanded': expanded, 'has-icons-left': icon }">
        <span class="select"
            :class="[size, statusType, {
                'is-fullwidth': expanded,
                'is-loading': loading,
                'is-empty': selected === null
            }]">

            <select v-model="selected"
                ref="select"
                :disabled="disabled"
                :readonly="readonly"
                :name="name"
                :required="required"
                @focus="$emit('focus', $event)"
                @blur="blur">

                <option
                    v-if="placeholder"
                    :value="null"
                    selected
                    disabled
                    hidden>
                    {{ placeholder }}
                </option>
                <slot></slot>

            </select>
        </span>
    </div>
</template>

<script>
import FormElementMixin from '../../utils/FormElementMixin'

export default {
  name: 'vSelect',
  mixins: [FormElementMixin],
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      default: null
    }
  },
  data() {
    return {
      selected: this.value
    }
  },
  watch: {
    value(value) {
      this.selected = value
      !this.isValid && this.checkHtml5Validity()
    },

    selected(value) {
      this.$emit('input', value)
      this.$emit('change', value)
      !this.isValid && this.checkHtml5Validity()
    }
  },
  methods: {
    blur(event) {
      this.$emit('blur', event)
      this.checkHtml5Validity()
    }
  }
}
</script>
