<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div id="header" :class="{'header-index': this.$route.path==='/'}">
      <div class="wrap">
        <div class="header-top">
          <router-link to="/">
          <a class="header-logo"></a>
          <span class="header-nav-btn">
					<i @click="menuShow = !menuShow" class="fa fa-bars" aria-hidden="true"></i>
          </span></router-link>
        </div>
        <ul class="header-nav" :class="{show:menuShow}">
          <li class="item" :class="{active: isPage[0]}" @click="toDetail"><a>HACKATHON</a></li>
          <li class="item" :class="{active: isPage[1]}" @click="toHacker"><a>HACKERS</a></li>
          <li class="item" :class="{active: isPage[2]}" @click="toProjects"><a href="#">PROJECTS</a></li>
          <li class="item" v-if="!user" >
            <a href="javascript:;" class="user" @click="showLogin">LOGIN/SIGNUP</a></li>
          <li class="item" v-else><a href="#" class="user"><img :src="require('@/images/pig.png')" alt=""></a></li>

          <li class="item"><a href="#" class="new" @click.stop="showNews" :class="{active:hasNew}"><span></span></a></li>
          <li class="item"><a href="#">EN</a></li>
        </ul>
      </div>
    </div>
    <transition name="fade">
      <router-view @update="update" @notify="notify" @atPage="atPage"/>
    </transition>

    <news-modal ref="newsLayer" :news="news"></news-modal>
    <login-modal ref="logLayer" @update="update"></login-modal>
  </div>
</template>

<script>
import api from '@/api'

import LoginModal from './components/commons/LoginModal'
import NewsModal from './components/commons/NewsModal'

export default {
  name: 'App',
  components: { LoginModal, NewsModal },
  data () {
    return {
      user: null,
      git_state: '',
      isPage: [
        true,
        false,
        false,
      ],
      menuShow:false,
      hasNew:true,
      newsShow:false,
      news:{
        list:[
          // {abstract:'The hackthon bonus has been announced. ',title:'Details of Notification',time:'2018/06/20',unread:true},
        ],
        n:0,
        slide:false
      },
    }
  },
  created () {
    if (window.cookieStorage.getItem('token')) {
      this.user = {
        name: window.cookieStorage.getItem('name'),
        id: window.cookieStorage.getItem('id'),
        avatar: window.cookieStorage.getItem('id')
      }
    }
    this.notify(this.user.id)
  },
  methods: {
    showLogin(){
      console.log(this.$refs)
      this.$refs.logLayer.show = true
    },
    showNews () {
      if (this.$refs.newsLayer.show === true) {
        this.$refs.newsLayer.show = false
      } else {
        this.$refs.newsLayer.show = true;
      }
    },
    toDetail () {
  
      this.isPage= [true,false,false];
      this.$router.push('/hackathon/detail')
    },
    toHacker () {
      this.isPage= [false,true,false];
      this.$router.push('/hackers')
      
    },
    toProjects () {
      this.isPage= [false,false,true];
      this.$router.push('/hackathon/ranking')
    },
    atPage (i) {
      this.isPage[i] = true
      for (let j = 0; j < 6; j += 1) {
        if (j !== i) {
          this.isPage[j] = false
        }
      }
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
    notify (uid) {
      api.notification(uid).then((res) => {
        const d = res.data
        if (d.errcode) {
          return
        }
        this.notifications = d
      })
      this.news.n = this.notifications.length
      for (let i = 0; i < this.notifications.length; i += 1) {
        this.news.list.push({abstract: this.notifications[i].content, })
      }
    },
    update (data) {
      const d = new Date()
      if (data) {
        this.$router.push('/')
        d.setSeconds(d.getSeconds() + data.expires_in)
        this.user = {
          name: data.user_info.username,
          id: data.user_info.id,
          avatar: data.user_info.avatar
        }
        window.cookieStorage.setItem('token', data.auth_token, {expires: d})
        window.cookieStorage.setItem('name', data.user_info.username, {expires: d})
        window.cookieStorage.setItem('id', data.user_info.id, {expires: d})
        window.cookieStorage.setItem('avatar', data.user_info.avatar, {expires: d})
        this.notify(this.user.id)
      } else {
        this.$router.push('/')
        this.user = null
        window.cookieStorage.setItem('token', 'anyValue', {expires: d})
        window.cookieStorage.setItem('name', 'anyValue', {expires: d})
        window.cookieStorage.setItem('id', 'anyValue', {expires: d})
        window.cookieStorage.setItem('avatar', 'anyValue', {expires: d})
        this.notifications = []
      }
    },
  }
}

</script>

<style scoped>
</style>
