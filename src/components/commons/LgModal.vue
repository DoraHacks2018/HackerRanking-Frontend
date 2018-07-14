<template>
  <div class="layer layer-send" v-show="show">
    <div class="main">
      <div class="modal-header">
        <slot name="modal-header">
          <h4 class="title">{{modalTitle}}</h4>
        </slot>
        <span class="close-layer" @click="show = !show"></span>
      </div>
      <div class="modal-content">
        <slot name="modal-content">

        </slot>

      </div>
      <div class="modal-footer"><slot name="modal-footer"></slot></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LgModal',
  props: ['modalTitle', 'isShow'],
  data () {
    return {
      show: false
    }
  },
  created () {
    this.show = this.isShow
  },
  updated () {
    maxHeight('lists','intro')
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
