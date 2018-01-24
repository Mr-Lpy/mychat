<template>
  <div class="checkbox-group" v-if="$slots.default">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'vCheckboxGroup',
    props: {
      value: Array
    },
    methods: {
      updateValue(value, isChecked) {
        this.$emit('change', value, isChecked);
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .checkbox-group {
    display: flex;
  }
</style>
