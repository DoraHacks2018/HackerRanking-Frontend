<template>
  <div>
    <div class="wrap">
      <div class="search fl">
        <form action="">
          <input type="text" class="key" placeholder="Search by hacker’s name">
          <button type="submit" class="sub"></button>
        </form>
      </div>
    </div>

    <div class="hackerlist">
      <div class="item clearfix card" v-for="v,i in hackers">
        <span class="rank">#{{v.rank}}</span>
        <div class="left clearfix">
          <div class="user">
            <img :src="require('@/'+v.avatar)" alt="">
            <h5>a{{v.id}}</h5>
            <h6>Commits</h6>
          </div>
          <div class="follow">
            <h4>{{v.name}}</a></h4>
            <p><span class="text-primary">{{v.follow}}</span> Folllowers</p>
            <div class="">
              <a href="" class="btn btn-primary">Follow</a>
              <a href="" class="btn btn-cancel">Message</a>
            </div>
          </div>
        </div>
        <div class="right">
          <table>
            <tr><!-- 6.24-1 -->
              <td colspan="3" style="text-align: left;">Contributed On Github：</td>
              <!--<td>{{v.date}}</td>-->
              <!--<td>{{v.time}}</td>-->
            </tr>
            <tr>
              <td style="text-align: left;">{{v.t1}}：</td>
              <td>{{v.c1}}+</td>
              <td>Commits</td>
              <td>{{v.p1}}++</td>
              <td>{{v.d1}}--</td>
            </tr>
            <tr>
              <td style="text-align: left;">{{v.t2}}：</td>
              <td>{{v.c2}}+</td>
              <td>Commits</td>
              <td>{{v.p2}}++</td>
              <td>{{v.d2}}--</td>
            </tr><!-- 6.24-1 -->

          </table>
          <p style="color:#b6baba;margin-left: 30px;font-size: 14px;line-height: 1">...</p>
          <a class="btn btn-primary" @click="claimId(v.name)">Claim Identity to Get Gift &nbsp; <i class="fa fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import OAuthPopup from '@/utils/popup'

export default {
  name: 'Hackers',
  data () {
    return {
      menuShow:false,
      hackers:[
        {rank:1,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:2,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:3,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:4,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:5,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:6,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:7,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:8,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:9,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:10,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:11,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:12,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:13,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:14,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
        {rank:15,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'}
      ]
    }
  },
  created () {
    api.github_contributors().then((res) => {
      const d = res.data
      if (d.errcode) {
        alert(d.errmsg)
      } else {
        // hackers
      }
    })
  },
  methods: {
    claimId (name) {
      const url = 'https://github.com/login/oauth/authorize?client_id=ae68a17db805afccb892&scope=user'
      const popupOptions = { width: 1020, height: 618 }
      const redirect = this.redirect_uri
      this.oauthPopup = new OAuthPopup(url, 'github', popupOptions)
      this.oauthPopup.open(redirect, false).then((res) => {
        api.claim_auth(res.code, name).then((response) => {
          const dd = response.data
          if (dd.errcode) {
            alert(dd.errmsg)
            return
          }
          this.show = false
          this.$emit('update', dd)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
