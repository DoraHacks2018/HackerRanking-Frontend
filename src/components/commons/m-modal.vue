<template>
  <div class="layer" v-show="show">
    <div class="main">
      <div class="modal-header">
        <slot name="modal-header">
          <h4 class="title">{{modalTitle}}</h4>
          <h5 class="sub-title">{{sTitle}}</h5>
        </slot>
        <span class="close-layer" @click="show = !show"></span>
      </div>
      <div class="modal-content">
        <slot name="modal-content">

        </slot>
      </div>
      <div class="modal-footer">
        <slot name="modal-footer"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'm-modal',
  props: ['modalTitle', 'sTitle', 'isShow'],
  data () {
    return {
      show: false
    }
  },
  created () {
    this.show = this.isShow
  }
}
</script>

<style scoped>

</style>
