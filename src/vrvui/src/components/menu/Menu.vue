<template>
  <div class="dropdown is-active">
    <div class="dropdown-menu" :style="currentPos">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item" v-for="(item,index) in menuList" :key="index" @click="clickEvent(index)">
          <p>{{item}}</p>
        </a>
        <hr class="dropdown-divider">
        <a href="#" class="dropdown-item">
          更多
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vMenu',
  props: {
    menuList: Array,
    currentPos: Object
  },
  created() {
    let abody = document.querySelector('body');
    abody.onclick = () => {
      this.$emit('closeMenu');
    };
  },
  methods: {
    clickEvent(index) {
      this.$emit('selectItem', index);
    }
  }
};
</script>
<style lang="scss" scoped>
.dropdown {
  position: absolute;
  top: 0;
  left: 0;
  top: 0;
}
</style>
