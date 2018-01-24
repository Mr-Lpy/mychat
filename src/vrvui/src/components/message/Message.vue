<template>
  <div class="card">
      <div class="media" :style="isRight ? 'flex-direction: row-reverse;':''">
        <div class="media-left">
          <v-avatar :src='msgItem.avatar' :isOnline='true' :rounded='false' :isName='false'></v-avatar>
        </div>
        <div class="media-content" :class="!isRight ? 'other':'self'">
            <span class='media-title' v-if="msgItem.chatType==2">{{msgItem.name}}</span>
            <div class="messages-body">
              <div class="msg-bubble">{{msgItem.msg}}</div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'vMessage',
  props: {
    msgItem: Object,
    src: String,
    msgList: Array,
    isRight: Boolean
  },
  data() {
    return {
      imgSrc: require('../../images/common/dou.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  padding: 0;
}
@mixin outward {
  margin-top: 12px;
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  position: relative;
  .image {
    height: 40px;
    width: 40px;
    overflow: hidden;
    border-radius: 50%;
  }
  .media-title {
    position: absolute;
    font-size: 12px;
    display: flex;
    top: -20px;
    color: #919492;
  }
  .messages-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 4px;
    .msg-bubble {
      max-width: 400px;
      min-width: 50px;
      display: flex;
      justify-content: center;
      padding: 10px 10px;
      word-wrap: break-word;
      word-break: break-all;
      position: relative;
    }
  }
}

.self {
  @include outward;
  flex-direction: row-reverse;
  .media-title {
    right: 25px;
  }
  .messages-body {
    align-items: flex-end;
    margin-right: 4px;
    .msg-bubble {
      color: #fff;
      border-image-source: url('../../images/common/blue_right.png');
      border-image-slice: 32 20 6 8 fill;
      border-image-width: 32px 20px 6px 8px; // padding-left: 20px;
      border-image-repeat: round;
      padding-right: 20px;
    }
  }
}

.other {
  @include outward;
  .media-title {
    left: 25px;
  }
  .messages-body {
    margin-left: 4px;
    .msg-bubble {
      border-image-source: url('../../images/common/left3.png');
      border-image-slice: 31 6 7 20 fill;
      border-image-width: 31px 6px 7px 20px;
      border-image-repeat: round;
      padding-left: 20px;
    }
  }
}
.card {
  box-shadow: none;
}
.media {
  padding: 0.5rem;
}
.media-left {
  margin: 0px;
}
</style>
