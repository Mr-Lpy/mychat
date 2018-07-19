<template>
  <div class="chat-page">
    <div class="list">I am chat-list</div>
    <div class="content">I am chat-content</div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/2/6.
   */
  export default {
    name: 'chat-page'
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .chat-page {
    width: 100%;
    height: 100%;
    display: flex;

    .list {
      width: 100px;
    }
    .content {
      flex: 1;
    }
  }
</style>
