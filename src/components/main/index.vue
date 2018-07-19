<template>
  <div class="main-page">
    <nav-bar></nav-bar>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/2/6.
   */
  import Navbar from '@/components/Navbar';
  export default {
    name: 'main-page',
    components: {
      [Navbar.name]: Navbar
    },
    created() {
      this.$router.push({path: '/Chat'})
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  .main-page {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/theme/skinbox.jpg") no-repeat;
    background-attachment: fixed;
    .nav {
      height: 55px;
      background: blue;
      opacity: 0.5;

    }

    .content {
      height: 545px;
    }
  }

</style>
