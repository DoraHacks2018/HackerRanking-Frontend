<template>
  <div class="container">
    <div class="p-header">
      <h2 class="p-title">
        My DApp
      </h2>
      <div class="p-header-buttons">
        <a class="button button-radius button-line" @click="toCreate"><i class="icon-newdapp"></i>New DApp</a>
      </div>
    </div>
    <div class="panel v-project" v-for="d in dapps">
      <div class="v-img">
        <img :src=d.logo alt="">
        <!--<div class="button button-line button-radius">Vote</div>-->
      </div>
      <div class="v-info">
        <h2 class="v-title">{{d.name}}</h2>
        <div class="v-bar">
          <div>
            <a :href=d.demo><div class="button button-line button-min"><i class="icon-lab"></i>Demo</div></a>
            <a :href=d.git><div class="button button-line button-min"><i class="icon-github"></i>GitHub</div></a>
          </div>
        </div>
        <div class="v-cont">
          <p>{{d.intro}}</p>
        </div>
        <div class="v-bar">
          <div class="v-voted">
            <i class="icon-voted"></i>
            {{d.vote}} voted
          </div>
          <div class="v-edit">
          <div class="button button-line-grey button-min" @click="toEdit(d.id)"><i class="icon-edit"></i>Edit</div>
          <div class="button button-line-grey button-min" @click="deleteDapp(d.id)">Delete</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'NKNMyDApp',
  data () {
    return {
      dapps: [],
      content: 'While the book is mostly a mathematician’s case for choosing a life of faith and belief, the more curious thing about it'
    }
  },
  created () {
    const uid = parseInt(window.cookieStorage.getItem('uid'))
    api.my_dapps(uid).then((res) => {
      const d = res.data
      if (d.errcode) {
        alert(d.errmsg)
      } else {
        console.log(d)
        this.dapps = d
      }
    })
  },
  methods: {
    toEdit (did) {
      this.$router.push({'name': 'CreateDapp', query: { did: did }})
    },
    deleteDapp (did) {
      const token = window.cookieStorage.getItem('token')
      api.delete_dapp(did, token).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          alert('删除成功')
        }
      })
    }
  }
}
</script>

<style lang="less">
  .p{
    &-rules{
      padding:30px;
      .p-title{
        font-size:20px;
      }
    }
    &-header{
      display:flex;
      align-items:center;
      justify-content: space-between;
      margin:40px 0 20px;

    }
    &-title{
      font-size:24px;
      margin-bottom:20px;
      font-weight:800;
      i{
        margin-right:6px;
      }
    }
    &-cont{
      line-height:2;
      font-size:13px;
      color:#727878;
    }
  }
  .v{
    &-project{
      padding:30px;
      padding-left:160px;
      margin:20px 0;
    }
    &-title{
      line-height:2;
      font-size:18px;
    }
    &-voted{
      font-size:12px;
      color:#939999;
      margin-top:18px;
      i{
        color:#4CC6C5;
      }
    }
    &-bar{
      margin:10px 0 0;
      display:flex;
      align-items:center;
      justify-content: space-between;
    }
    &-cont{
      line-height:1.6;
      margin-top:10px;
      color:#727878;
      p{
        color:#727878;
      }
    }
    &-img{
      width:100px;
      height:100px;
      position:absolute;
      left:30px;
      top:30px;
      img{
        width:100px;
        height:100px;
      }
      .button{
        width:100%;
        margin-top:14px;
        text-align:center;
        padding:8px 0;
      }
    }
  }
</style>
