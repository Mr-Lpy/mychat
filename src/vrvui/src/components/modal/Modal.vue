<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('closeModal')"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <!-- <button class="delete" @click="closeModal=false"></button> -->
        <slot></slot>
        {{modalData}}
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vModal',
  props: {
    modalData: String
  }
}
</script>
<style lang="scss" scoped>
.modal-card-body {
  display: flex;
  flex-direction: column;
  .delete {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
