<template>
  <div class="card"
    :class="[cardClass,disabled ? 'card-disabled' : {}]"
    :disabled="disabled"
    @click="handleClick"
    @contextmenu="menuClick" >
    <div class="card-content"  :class="contentClass">
      <div class="media" >
        <div class="media-left" v-if="showLeft">
          <slot name="left"></slot>
          <slot name="leftAvatar"></slot>
        </div>
        <div class="media-content">
          <p class="title">
            <span class="title-main">{{title}}</span>
             <slot name="after"></slot>
          </p>
          <p v-if="subtitle" class="subtitle">
            <span class="contents" v-text="subtitle"></span>
            <slot name="subAfter"></slot>
          </p>
          <slot></slot>
        </div>
         <div class="media-right" v-if="showRight">
          <slot name="right"></slot>
          <slot name="rightAvatar"></slot>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vCard',
  data() {
    return {
      menuClickNum: Number
    }
  },
  props: {
    index: Number,
    title: String,
    subtitle: String,
    inset: String,
    disabled: {
      type: Boolean,
      default: true
    },
    cardClass: {
      type: [String, Object, Array]
    },
    contentClass: {
      type: [String, Object, Array],
      default: 'default-content'
    }
  },
  created() {
    if (!this.$parent.$data._isCard) {
      this.$destroy()
      throw new Error('You should wrap card')
    }
    this.$parent.cardLists.push(this)
  },
  computed: {
    showLeft() {
      return (
        this.$slots &&
        ((this.$slots.left && this.$slots.left.length > 0) ||
          (this.$slots.leftAvatar && this.$slots.leftAvatar.length > 0))
      )
    },
    showRight() {
      return (
        this.toggleNested ||
        (this.$slots &&
          ((this.$slots.right && this.$slots.right.length > 0) ||
            (this.$slots.rightAvatar && this.$slots.rightAvatar.length > 0)))
      )
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
      if (this.$parent.handleItemClick) this.$parent.handleItemClick(this)
    },
    menuClick() {
      this.$parent.num = this.index
    }
  }
}
</script>