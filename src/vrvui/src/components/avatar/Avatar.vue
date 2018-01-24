<template>
  <div class="avatar" :class="[size, shape, type, offline ? 'is-offline' : null]">
    <img v-if="type==='is-image'" class="imgs" :src=" 'file://'+src" alt="Image" @error="imgError" >
    <span v-else class="content">{{userInitial}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
/**
   * Created by lpy on 2017/10/23.
   */
export default {
  name: 'vAvatar',
  props: {
    size: {
      type: String
    },
    shape: String,
    type: {
      type: String,
      default: 'is-image'
    },
    initials: {
      type: String
    },
    src: {
      type: String
    },
    content: String,
    lighten: {
      type: Number,
      default: 80
    },
    offline: {
      type: Boolean,
      default: false
    },
    isName: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultSrc: require('../../images/common/avatar.png')
    }
  },
  computed: {
    isImage() {
      return this.src !== undefined || this.isName === false
    },
    userInitial() {
      const initials = this.initials || this.initial(this.content)
      return initials
    }
  },
  methods: {
    imgError(e) {
      e.target.src = this.defaultSrc
    },

    initial(username) {
      let parts = username.split(/[ -]/)
      let initials = ''

      for (let i = 0; i < parts.length; i++) {
        initials += parts[i].charAt(0)
      }

      if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
        initials = initials.replace(/[a-z]+/g, '')
      }

      initials = initials.substr(0, 3).toUpperCase()
      return initials
    }
  }
}
</script>
