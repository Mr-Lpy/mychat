<template>
  <div @contextmenu="showContextMenu($event)">
    <slot></slot>
    <v-menu v-if="menuList&&isShowMenu" @closeMenu='onCloseMenu' :menuList="menuList" :currentPos="currentPos" @selectItem="selectItem"></v-menu>
  </div>
</template>
<script>
export default {
  name: 'vCardList',
  data() {
    return {
      /**
       * 右键菜单定位
       */
      currentPos: {
        top: String,
        left: String
      },
      isShowMenu: false,
      cardLists: [],
      num: Number
    }
  },
  props: {
    type: Number,
    cardList: Object | Array,
    menuList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    // 右键菜单点击回调
    selectItem(index) {
      this.$emit('menuClick', this.menuList[index], this.num)
    },
    delItem(index) {
      console.log('indexName', index)
    },
    handleItemClick(listItem) {
      this.$emit('itemClick', listItem)
      this.$emit('item-click', listItem)
    },
    showContextMenu(event) {
      this.isShowMenu = !this.isShowMenu
      this.currentPos.left = event.clientX + 'px'
      this.currentPos.top = event.clientY + 'px'
    },
    onCloseMenu() {
      this.isShowMenu = false
    }
  }
}
</script>
