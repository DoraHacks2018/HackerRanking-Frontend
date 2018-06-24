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
  name: 'lg-modal',
  props: ['modalTitle', 'isShow'],
  data () {
    return {
      show: false
    }
  },
  created () {
    this.show = this.isShow
  },
  updated (){
    this.maxHeight('lists','intro')
  },
  methods: {
    maxHeight (pname,cname){
      if(!pc()) return;
      if(!pname || !cname) return;
      let h = 0,height='',el = [];
      let par = document.getElementsByClassName(pname);
      for(i=0;i<par.length;i++){
        el[i] = par[i].getElementsByClassName(cname);
      }
      for (j=0;j<el.length;j++){
        for(k=0;k<el[j].length;k++){
          if(h<el[j][k].offsetHeight){
            h = el[j][k].offsetHeight
          }
        }
      }
      if(h==0){
        height=='auto'
      }else{
        height = h+'px'
      }
      for (j=0;j<el.length;j++){
        for(k=0;k<el[j].length;k++){
          el[j][k].style.height = height
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
