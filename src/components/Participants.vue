/* eslint-disable */
<template>
  <div v-cloak>
    <div class="wrap">
      <a class="text-center ad" href="#">
        <img :src="require('@/images/banner2.png')" alt="" style="width: 100%">
      </a>
    </div>


    <div class="wrap">
      <div class="match">
        <div class="tab">
          <ul class="clearfix">
            <li><router-link to="/hackathon/detail"><a>Details</a></router-link></li>
            <li class="active"><a>Participants</a></li>
            <li><router-link to="/hackathon/team"><a>Organize Teams</a></router-link></li>
            <li><router-link to="/hackathon/update"><a>Update Projects</a></router-link></li>
            <li><router-link to="/hackathon/ranking"><a>Ranking</a></router-link></li>
          </ul>
        </div>
      </div>


      <div class="search">
        <form action="">
          <input type="text" class="key" placeholder="Search by member name"><!-- 6.24-1 -->
          <button type="submit" class="sub"></button>
        </form>
      </div>
    </div>

    <div class="lrlayout clearfix">
      <div class="nav">
        <div class="list-group clearfix">
          <a class="item" :class="{active: act[0]}" @click="getFS" >
            Full Stack
          </a>
          <a class="item" :class="{active: act[1]}" @click="getDesigner">
            Designer
          </a>
          <a class="item" :class="{active: act[2]}" @click="getDApps">
            DApps
          </a>
          <a class="item" :class="{active: act[3]}" @click="getSecurity">
            Security
          </a>
          <a class="item" :class="{active: act[4]}" @click="getChain">
            Public Chain
          </a>
          <a class="item" :class="{active: act[5]}" @click="getHacker">
            Hacker
          </a>
        </div>
      </div>
      <div class="judges three">
        <div class="main">
          <div class="lists clearfix" id="lists">
            <div class="item sm-center" v-for="v in judges">
              <div class="img"><img :src="require('@/'+v.url)" alt=""></div>
              <h3>{{v.name}}</h3>
              <p class="intro">{{v.intro}}
              </p>
              <button class="btn btn-primary" @click="invite(v.uid)">Invite</button>
            </div>
          </div>
        </div>
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

    <m-modal ref="layer">
      <div slot="modal-header">
        <h4 class="title">Are you sure to send this invitation to <span class="black">Anna Levine</span> ?</h4>
        <h5 class="sub-title">Invitation Card</h5>
      </div>
      <div slot="modal-content">
        <form action="">
          <div class="area">
            <textarea name="" placeholder="eg: I’m glad to introduce our project to you...." @input="input($event)" rows="5" autofocus="autofocus"></textarea>
            <div class="count">
              <span class="cur" :class="{red:curTxtCount>maxTxtCount}">{{curTxtCount}}</span> /
              <span class="all">{{maxTxtCount}}</span>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary" @click="ok">Confirm</button>
            <button type="button" class="btn btn-cancel" @click="cancel">Cancel</button>
          </div>
        </form>
      </div>
    </m-modal>
  </div>
</template>

<script>
import api from '@/api'
import MModal from './commons/MModal'
import io from 'socket.io-client'


export default {
  name: 'Participants',
  components: { MModal },
  data () {
    return {
      menuShow:false,
      maxTxtCount:80,
      curTxtCount:0,
      player: [],
      act:[false,false,false,false,false,false],
      s_uid : 0,
      uid : parseInt(window.cookieStorage.getItem('id')),
      socket:null,
      judges:[
        {url:'images/6.png',name:'Qiu Wang',intro:`TI will try my best to win this competition! No one is going to stop me from making it.`,uid:9190260},
        // {url:'images/7.png',name:'Sijie Chen',intro:`I will show you what the best programmer is like.`},
        // {url:'images/8.png',name:'Anna Levine',intro:`Girls are crazy creatures cuz once they find a way to do a program, then no one can prevent them winning. `},
        // {url:'images/9.png',name:'Chen Li',intro:`I will show you what the best programmer is like.`},
        // {url:'images/10.png',name:'Michael Blue',intro:`Girls are crazy creatures cuz once they find a way to do a program, then no one can prevent them ...`},
        // {url:'images/11.png',name:'Yu Hagiee',intro:`I will try my best to win this competition! No one is going to stop me from making it.`},
        // {url:'images/12.png',name:'Xueying Li',intro:`I will show you what the best programmer is like.I am what I am. that’s it.`},
        // {url:'images/13.png',name:'Michael Blue',intro:`Boys are crazy creatures once they find a way to do a program, then every one will lose. `}
      ],
    }
  },
  created () {
    
    api.participants('Full Stack').then((res) => {
      const d = res.data()
      if (d.errcode) {
        alert(d.errmsg)
        console.log('get participants err')
      } else {
        console.log(d)
        this.judges = d
      }
    })
    this.act[0] = true
   
  },
  methods:{
    ok(){
      
      console.log(this.s_uid)
      this.$socket.emit('add_group', {'from_id':this.uid,'to_id':this.s_uid,'isinvitation':1})

      // this.$refs.layer.show = false
    },
    invite(s_uid){
      this.$refs.layer.show = true
      this.s_uid= s_uid
    },
    cancel(){
      this.$refs.layer.show = false
    },
    input(event){
      this.curTxtCount = event.target.textLength
      if(this.curTxtCount>this.allTxtCount){
        return false;
      }

    },
    chooseRole (i) {
      for (let j = 0; j < 6; j += 1) {
        this.act[j] = false
      }
      this.act[i] = true
    },
    getFS () {
      this.chooseRole(0)
      api.participants('Full Stack').then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
          console.log('get participants err')
        } else {
          console.log(d)
          this.judges = d
        }
      })
    },
    getDesigner () {
      this.chooseRole(1)
      api.participants('Designer').then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
          console.log('get participants err')
        } else {
          console.log(d)
          this.judges = d
        }
      })
    },
    getDApps () {
      this.chooseRole(2)
      api.participants('DApps').then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
          console.log('get participants err')
        } else {
          console.log(d)
          this.judges = d
        }
      })
    },
    getSecurity () {
      this.chooseRole(3)
      api.participants('Security').then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
          console.log('get participants err')
        } else {
          console.log(d)
          this.judges = d
        }
      })
    },
    getChain () {
      this.chooseRole(4)
      api.participants('Public Chain').then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
          console.log('get participants err')
        } else {
          console.log(d)
          this.judges = d
        }
      })
    },
    getHacker () {
      this.chooseRole(5)
      api.participants('Hacker').then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
          console.log('get participants err')
        } else {
          console.log(d)
          this.judges = d
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
