<template>
  <div class="layer layer-login" v-show="show">
    <div class="main">
      <ul>
        <li :class="{active:n==i}" v-for="v,i in tab" @click="n=i">{{v}}</li>
      </ul>
      <div class="logform" v-show="n==1">
        <form action="">
          <input type="text" placeholder="CryptoName" v-model="cryptoName">
          <input type="text" placeholder="Password" v-model="passwd">
          <div class="log-btns">
            <button class="btn btn-cancel" @click="sendLogin">Login</button>
            <div class="or">or</div>
            <button class="btn btn-primary github" @click="login_auth('github')"><span>Login with Github</span></button>
          </div>
        </form>
      </div>
      <div class="signform" v-show="n==0">
        <form action="">
          <input type="text" placeholder="Enter A Crypto Name" v-model="cryptoName">
          <input type="text" placeholder="Enter Email Adress" v-model="email">
          <input type="text" placeholder="Enter Password" v-model="passwd">
          <div class="log-btns">
            <button class="btn btn-cancel" @click="register">Sign Up with Email</button>
            <div class="or">or</div>
            <button class="btn btn-primary github" @click="login_auth('github')"><span>Login with Github</span></button>
          </div>
        </form>
      </div>
      <span class="close-layer" @click="show = !show"></span>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import OAuthPopup from '@/utils/popup'

export default {
  name: 'LoginModal',
  data(){
    return {
      show: false,
      tab:['Sign up','Login',],
      n:0,
      cryptoName: '',
      passwd: '',
      email: '',
      redirect_uri: 'https://ranking.dorahacks.com/',
    }
  },
  methods: {
    login_auth (provider) {
      const url = 'https://github.com/login/oauth/authorize?client_id=&scope=user'
      const popupOptions = { width: 1020, height: 618 }
      const redirect = this.redirect_uri
      this.oauthPopup = new OAuthPopup(url, provider, popupOptions)
      this.oauthPopup.open(redirect, false).then((res) => {
        api.login_auth(res.code).then((response) => {
          const dd = response.data
          if (dd.errcode) {
            alert(dd.errmsg)
            return
          }
          this.show = false
          this.$emit('update', dd)
        })
      })
    },
    register_auth (provider) {
      const url = 'https://github.com/login/oauth/authorize?client_id=&scope=user'
      const popupOptions = { width: 1020, height: 618 }
      const redirect = this.redirect_uri
      this.oauthPopup = new OAuthPopup(url, provider, popupOptions)
      this.oauthPopup.open(redirect, false).then((res) => {
        api.register_auth_git(res.code).then((response) => {
          const dd = response.data
          if (dd.errcode) {
            alert(dd.errmsg)
            return
          }
          this.show = false
          this.$emit('update', dd)
        })
      })
    },
    sendLogin () {
      api.login(this.cryptoName, this.passwd).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          this.show = false
          this.$emit('update', d)
        }
      })
    },
    register () {
      api.register(this.cryptoName, this.email, this.passwd).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          this.sendLogin()
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
