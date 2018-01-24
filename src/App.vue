<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="app-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './assets/style/reset.scss';

#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .app-wrapper {
    border-radius: 4px;
    box-shadow: 0 0 10px #292929;
  }
</style>
