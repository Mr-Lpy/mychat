<template>
  <div class="head" :class="[size, shape]">
    <img :src="_src">
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/1/24.
   */
  export default {
    name: 'v-head',
    props: {
      size: {
        type: String,
        default: 'is-medium'
      },
      shape: {
        type: String,
        default: 'is-round'
      },
      src: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        defaulthead: require('../../assets/images/common/user.png')
      }
    },
    computed: {
      _src() {
        console.log('in _src');
        console.log(this.src);
        return this.src ? `${this.src}` : this.defaulthead;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .head {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    user-select: none;
    img {
      width: 100%;
      height: 100%;
      -webkit-user-drag: none;
    }
    &.is-small {
      width: 40px;
      height: 40px;
    }
    &.is-medium {
      width: 50px;
      height: 50px;
    }
    &.is-large {
      width: 100px;
      height: 100px;
    }
    &.is-auto {
      width: 100%;
      height: 100%;
    }

    &.is-round {
      border-radius: 50%;
    }
    &.is-square {
      border-radius: 4px;
    }
  }
</style>
