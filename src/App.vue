<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <transition name="fade">
      <router-view @view="view" @update="update" @notify="notify" @got="got"/>
    </transition>

    <div class="mask" v-if="registerIsOpen">
      <div class="register-card">
        <span class="close" @click="closeRegister">
          <span></span><span></span>
        </span>
        <ul>
          <li>
            <h2>Signed Resident:</h2>
            <div class="button" @click="login">Login with Cryptoname</div>
            <div class="button" @click="login_auth('github')">Login with Github</div>
            <!--<div class="button" @click="login_auth('facebook')">Login with Facebook</div>-->
          </li>
          <li>
            <h2>New Resident:</h2>
            <div class="button" @click="register">Sign up with Email</div>
            <div class="button" @click="register_auth('github')">Sign up with Github</div>
            <!--<div class="button" @click="register_auth('facebook')">Sign up with Facebook</div>-->
          </li>
        </ul>
      </div>
    </div>
    <div class="hint" v-if="showHint">You can get 10 Gift today.
      <img width="10" height="10" :src="require('@/assets/symbols-close.png')" @click="closeHint">
    </div>
  </div>
</template>

<script>
import api from '@/api'
import OAuthPopup from './utils/popup'


export default {
  name: 'App',
  data () {
    return {
      user: null,
      registerIsOpen: false,
      git_state: '',
      redirect_uri: 'https://ranking.dorahacks.com/',
      notifications: [],
      showHint: false,
    }
  },
  created () {
    if (window.cookieStorage.getItem('token')) {
      this.user = {
        name: window.cookieStorage.getItem('name'),
        id: window.cookieStorage.getItem('id'),
      }
      this.showHint = false
    }
    this.notify(this.user.id)
  },
  methods: {
    got () {
      console.log('got')
      this.showHint = false
    },
    openMenu () {

    },
    closeHint () {
      this.showHint = false
    },
    makestate () {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 10; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text;
    },
    login () {
      this.closeRegister()
      this.$router.push('/login')
    },
    register () {
      this.closeRegister()
      this.$router.push('/register')
    },
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
          this.registerIsOpen = false
          this.update(dd)
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
          this.registerIsOpen = false
          this.update(dd)
        })
      })
    },
    view (item) {
      this.$router.push({ name: 'PlanetView', query: { name: item } })
    },
    notify (uid) {
      api.notification(uid).then((res) => {
        const d = res.data
        this.notifications = d
      })
    },
    openRegister () {
      this.registerIsOpen = true
    },
    closeRegister () {
      this.registerIsOpen = false
    },
    update (data) {
      const d = new Date()
      if (data) {
        this.$router.push('/')
        d.setSeconds(d.getSeconds() + data.expires_in)
        this.user = {
          name: data.user_info.username,
          id: data.user_info.id
        }
        window.cookieStorage.setItem('token', data.auth_token, {expires: d})
        window.cookieStorage.setItem('name', data.user_info.username, {expires: d})
        window.cookieStorage.setItem('id', data.user_info.id, {expires: d})
        this.notify(this.user.id)
        this.showHint = true
      } else {
        this.$router.push('/')
        this.user = null
        window.cookieStorage.setItem('token', 'anyValue', {expires: d})
        window.cookieStorage.setItem('name', 'anyValue', {expires: d})
        window.cookieStorage.setItem('id', 'anyValue', {expires: d})
        this.notifications = []
      }
    },
  }
}

</script>

<style scoped>
</style>
