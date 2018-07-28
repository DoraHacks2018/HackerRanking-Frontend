/* eslint-disable */
<template>
  <div>
    <div class="resetpasswd">
      <p>请输入新密码</p>
      <input id="pwd1" type="password" placeholder="第一遍"/>
      <input id="pwd2" type="password" placeholder="第二遍"/>
      <div class="log-btns">
        <button class="btn btn-primary" @click="reset()"><span>重置密码</span></button>
      </div>
    </div>


    <footer>
    <div class="wrap">
      <ul class="flex">
        <li><a href="">ABOUT US</a></li>
        <li>FEEDBACK support@dorahacks.com</li>
        <li>COOPERATION bd@dorahacks.com</li>
      </ul>
    </div>
  </footer>

  </div>
</template>

<script>

import api from '@/api'


export default {
  name: 'ResetPassword',
  components: {},
  data () {
    return {

      }

  },
  created(){

  },

  methods: {
    reset(){

      var pwd1 = document.getElementById('pwd1');
      var pwd2 = document.getElementById('pwd2');

      if(pwd1.value == '' || pwd2.value ==''){
        alert('不能为空');
        return false;
      }else if(pwd1.value != pwd2.value){
        alert('两次输入不一致');
        return false;
      }


      var token = this.$route.query.token;


      api.resetpassword2(token,pwd1.value).then((res) => {
        const d = res.data
        if (d.state == 0) {
          alert('成功发送邮件！')
        }

      })


    }

  }
}
</script>

<style scoped>
  .resetpasswd{
    width: 300px;
    margin: 10px 40%;
  }
  input[type=password]{
    margin: 10px 0;
    display: block;

  }
  p{
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    margin: 20px 0px;
  }
</style>
