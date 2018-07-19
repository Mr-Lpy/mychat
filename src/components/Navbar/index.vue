<template>
  <div class="nav-bar">
    <div class="item-left">
      <v-head class="avatar" size="is-small"></v-head>
      <lab-input class="search"></lab-input>
    </div>
    <div class="item-content">i am content</div>
    <div class="item-right">i am right</div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/3/15.
   */
  import Head from '@/components/Common/Head';
  import VInput from '@/vrvui/lab/components/input';
  export default {
    name: 'nav-bar',
    components: {
      [Head.name]: Head,
      [VInput.name]: VInput
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .nav-bar {
    height: 55px;
    width: 100%;
    background: blue;
    display: flex;
    justify-content: center;
    .item-left {
      flex: 1;
      display: flex;
      align-items: center;
      height: 100%;
      background: green;

      .avatar {
        margin-left: 8px;
      }
      .search {
        width: 100px;
        height: 24px;
        margin-left: 20px;
      }
    }

    .item-content {
      flex: 1;
      height: 100%;
      background: yellow;
    }

    .item-right {
      flex: 1;
      height: 100%;
      background: red;
    }
  }
</style>
