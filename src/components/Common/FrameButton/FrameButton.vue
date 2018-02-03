<template>
  <div class="frame-button">
    <div class="mini"></div>
    <div class="max"></div>
    <div class="close"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/1/31.
   */
  export default {
    name: 'frame-button'
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .frame-button {
    background-color: #292929;
    display: flex;
    .mini {
      flex: 1;
      background-color: blue;
    }
    .max {
      flex: 1;
      background-color: red;
    }
    .close {
      flex: 1;
      background-color: green;
    }
  }
</style>
