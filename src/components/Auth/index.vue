<template>
  <div class="auth">
    <login/>
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
  }
</style>
