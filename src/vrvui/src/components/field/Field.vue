<template>
    <div class="field" :class="[fieldType, addonsPosition, { 'is-expanded': expanded }]">
        <label class="label" :class="labelClass" v-if="label">{{ label }}</label>
        <slot></slot>
        <p class="help" :class="newType" v-if="newMessage">{{ newMessage }}</p>
    </div>
</template>

<script>
export default {
  name: 'vField',
  props: {
    type: String,
    label: String,
    message: String,
    grouped: Boolean,
    position: String,
    expanded: Boolean,
    labelClass: {
      type: String,
      default: 'is-left'
    },
    addons: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      newType: this.type,
      newMessage: this.message
    }
  },
  watch: {
    type(value) {
      this.newType = value
    },
    message(value) {
      this.newMessage = value
    }
  },
  computed: {
    /**
     * Correct Bulma class for the side of the addon.
     *
     * This is not kept like the others (is-small, etc.),
     * because since 'has-addons' is set automatically it
     * doesn't make sense to teach users what addons are exactly.
     */
    addonsPosition() {
      if (this.position === undefined) return

      const position = this.position.split('-')
      if (position.length < 1) return

      if (this.position) return 'has-addons-' + position[1]
    },

    /**
     * Field has addons if there are more than one slot
     * (element / component) in the Field.
     * Or is grouped when prop is set.
     */
    fieldType() {
      if (this.grouped) {
        return 'is-grouped'
      } else if (
        this.$slots.default !== undefined &&
        this.$slots.default.length > 1 &&
        this.addons
      ) {
        return 'has-addons'
      }
    }
  }
}
</script>
