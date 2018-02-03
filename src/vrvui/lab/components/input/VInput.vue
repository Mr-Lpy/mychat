<template>
  <div class="v-input"
       :class="[{'v-input-focus':isFocus},borderStyle,{'v-input-shadow':boxshadow}]">
    <div class="v-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="v-input-inner"
      :value="newValue"
      :type="newType"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
      @input="handleInput"
    >
    <div class="v-input-append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/1/24.
   */
  export default {
    name: 'labInput',
    props: {
      value: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      },
      border: {
        type: String,
        default: 'normal'
      },
      placeholder: String,
      noneBorder: Boolean,
      lineBorder: Boolean,
      boxshadow: Boolean,
      focus: Boolean
    },
    computed: {
      borderStyle() {
        if (this.noneBorder) return 'none-border';
        if (this.lineBorder) return 'line-border';
        return 'normal'
      }
    },
    data() {
      return {
        newValue: this.value,
        newType: this.type,
        isFocus: false
      }
    },
    methods: {
      onFocus() {
        console.log('in focus');
        this.isFocus = true;
      },
      onBlur() {
        console.log('in blur');
        this.isFocus = false;
      },
      setFocus() {
        this.$refs.user.focus();
      },
      handleInput() {
        this.newValue = event.target.value;
        console.log(this.newValue);
      }
    },
    mounted() {
      if (this.focus) {
        this.setFocus();
      }
    },
    watch: {
      newValue(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/_input.scss";

</style>
