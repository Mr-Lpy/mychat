<template>
  <div class="auth">
    <div class="frame-wrapper">
      <div class="frame"></div>
    </div>
    <login/>
    <div class="setting-wrapper">
      <div class="more"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/1/24.
   */
  import Login from './Login.vue';
  export default {
    name: 'auth-page',
    components: {
      [Login.name]: Login
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .auth {
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 960px;
    height: 600px;
    background: url("../../assets/images/auth/background.png") no-repeat;
    position: relative;

    .frame-wrapper {
      position: absolute;
      width: auto;
      height: auto;
      top: 0;
      right: 0;
      .frame {
        width: 100px;
        height: 20px;
        background-color: green;
      }
    }

    .setting-wrapper {
      position: absolute;
      width: 100%;
      height: auto;
      bottom: 0;
      padding-left: 32px;
      padding-bottom: 32px;
      .more {
        width: 100px;
        height: 20px;
        background-color: red;
      }
    }
  }
</style>
