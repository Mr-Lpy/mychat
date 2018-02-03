<template>
  <div class="login">
    <div class="head-wrapper">
      <div class="head">
        <v-head size="is-auto" shape="is-round" :src="defaultHead"></v-head>
      </div>
    </div>
    <div class="edit-wrapper">
      <div class="vfield">
        <!--<div class="user-label">11</div>-->
        <v-icon class="user-label" name="phone"></v-icon>
        <lab-input class="lab-input user" v-model="user" lineBorder placeholder="手机号">
          <label class="code" slot="prepend">+86</label>
        </lab-input>
      </div>
      <div class="vfield">
        <v-icon class="user-label" name="password"></v-icon>
        <lab-input class="lab-input" v-model="pwd" lineBorder placeholder="密码" type="password"></lab-input>
      </div>
    </div>
    <div class="button-wrapper">
      <button @click="onLogin">登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by lpy on 2018/1/24.
   */
  import Head from '@/components/Common/Head';
  import VInput from '@/vrvui/lab/components/input';
  import vIcon from '@/vrvui/lab/components/icon';
  export default {
    name: 'login',
    data() {
      return {
        defaultHead: require('../../assets/images/common/logo.png'),
        user: '',
        pwd: ''
      }
    },
    components: {
      [Head.name]: Head,
      [VInput.name]: VInput,
      [vIcon.name]: vIcon
    },
    methods: {
      onLogin() {
        console.log('in login');
      }
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
    .edit-wrapper {
      width: 100%;
      height: 96px;
      margin-top: 57px;
      /*background-color: red;*/
      display: flex;
      flex-direction: column;
      padding-left: 29px;
      padding-right: 19px;
      .vfield {
        width: 100%;
        height: 39px;
        display: flex;
        /*background-color: green;*/
        .user-label {
          margin-right: 13px;
          font-size: 20px;
          height: 39px;
        }

        .lab-input {
          height: 39px;
        }
        .user {
          padding-left: 10px;
        }
      }
      .vfield:nth-of-type(1) {
        margin-top: 18px;
      }
      .code {
        font-size: 16px;
        /*color: #e7e7e7;*/
      }
    }

    .button-wrapper {
      width: 100%;
      height: 120px;
      margin-top: 50px;

      button {
        width: 240px;
        height: 40px;
        background-color: #3273dc;
        border-radius: 18px;
        border-color: #3273dc;
        color: white;
        font-size: 16px;
        outline: none;
      }
    }
  }
</style>
