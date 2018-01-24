<template>
  <div class="login">
    <div class="head-wrapper">
      <div class="head">
        <v-head size="is-auto" shape="is-round" :src="defaultHead"></v-head>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/1/24.
   */
  import Head from '@/components/Common/Head';
  export default {
    name: 'login',
    data() {
      return {
        defaultHead: require('../../assets/images/common/logo.png')
      }
    },
    components: {
      [Head.name]: Head
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .login {
    width: 280px;
    height: 330px;
    background-color: white;
    border-radius: 8px;
    .head-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin: -57px auto;
      height: 114px;
      width: 114px;
      border-radius: 50%;
      background-color: white;
      .head {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        box-shadow: 0 0 10px #e7e7e7;
      }
    }
  }
</style>
