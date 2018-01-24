<template>
  <nav class="navbar is-transparent" :class="{'is-bottom':isMobile}" @contextmenu="showContextMenu($event)">
    <div class="navbar-brand">
      <a class="navbar-left" :class="{'is-hidden':isMobile}">
         <v-avatar size="is-small"  :src='defaultAvatar' :offline="false" shape="round" ></v-avatar>
        <div class="search-box">
          <v-input class="is-hidden-mobile" size='is-border' position='left'>
              <i class="icon search-btn" slot="expand">&#xe68c;</i>
          </v-input>
        </div>
      </a>
      <div class="navbar-center">
        <div class="navbar-item has-dropdown is-hoverable" :class="{'flex-1':isMobile}" v-for="(item, index) in tabList" :key="index">
          <div class="navbar-link" :class="{'padding-0':isMobile}" @click="tabSwitch(index,item)">
            <i class="icon" :class="{active:active==index}" v-html="item.icon"></i>
            <p v-if="isTabNameShow" :class="{active:active==index}">{{item.label}}</p>
          </div>
          <div class="navbar-dropdown is-boxed" v-if='item.children'>
            <a class="navbar-item" v-for="(value,key) in item.children" :key="key" @click="handleClick(index,key)">
              {{value}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'vNavbar',
  data() {
    return {
      /**
       * 手机还是pc
       */
      isMobile: false,
      isExpand: true,
      user: 'ZhangYang',
      defaultAvatar: require('../../images/common/avatar.png'),
      active: ''
    }
  },
  props: {
    tabList: Array,
    isTabNameShow: Boolean,
    activeIndex: Number | String
  },
  created() {
    this.active = this.activeIndex
    let ua = navigator.userAgent.toLowerCase()
    this.isMobile = /mobile|android|iphone|ipad|phone/i.test(ua)
  },
  methods: {
    // tab下拉菜单点击事件
    handleClick(index, key) {
      this.$emit('clickEvent', index, key)
    },
    // tab路由跳转
    tabSwitch(index, item) {
      this.active = index
      this.$router.push({
        path: item.path,
        query: { name: item.name, activeIndex: index }
      })
    },
    // 右键菜单点击回调
    selectItem(index) {
      console.log(this.menuList[index])
    }
  }
}
</script>
<style lang="scss" scoped>
.search-btn {
  height: 28px !important;
  width: 28px !important;
}
</style>
