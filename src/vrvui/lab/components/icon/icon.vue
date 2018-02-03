<template>
  <span class="icon" :class="`v-icon-${name}`" @click="onclick"></span>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/1/29.
   */
  export default {
    name: 'vIcon',
    props: {
      name: String
    },
    methods: {
      onclick() {
        this.$emit('click');
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/_icon.css";
  .icon {
    line-height: 100%;
  }
</style>
