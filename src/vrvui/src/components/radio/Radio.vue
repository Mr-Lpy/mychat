<template>
  <div class="container">
    <label class="radio">
      <span class="radio_inner" :style="value==lable? activeStyle : null"></span>
      <input type="radio" @click="handleChange">{{lable}}
    </label>
  </div>
</template>
<script>
export default {
  name: 'vRadio',
  props: {
    lable: String,
    fill: String,
    value: String
  },
  computed: {
    activeStyle() {
      return {
        backgroundColor: this.fill || '#6021dc',
        borderColor: this.fill || '#6021dc',
        color: this.textColor || ''
      }
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.lable)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  flex: 1;
  .radio {
    font-size: 14px;
    input {
      margin-right: 6px;
      display: none;
    }
    .radio_inner {
      border: 1px solid #bfcbd9;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      position: relative;
      cursor: pointer;
      background: #fff;
      display: inline-block;
      box-sizing: border-box;
      top: 3px;
      // &:hover {
      //   border-color: #20a0ff;
      // }
      &:after {
        transform: translate(-50%, -50%) scale(1);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
      }
    }
  }
}
</style>