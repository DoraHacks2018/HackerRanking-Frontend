/* eslint-disable */
<template>
  <div v-cloak>
    <div class="wrap">
      <a class="text-center ad" href="#">
        <img :src="require('@/images/banner-bch.png')" alt="" style="width: 100%">
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


      <!--<div class="search">-->
        <!--<form action="">-->
          <!--<input type="text" class="key" placeholder="Search by member name">&lt;!&ndash; 6.24-1 &ndash;&gt;-->
          <!--<button type="submit" class="sub"></button>-->
        <!--</form>-->
      <!--</div>-->
    </div>

    <div class="lrlayout clearfix">
      <div class="nav">
        <div class="list-group clearfix">
          <a class="item" :class="{active: act[0]}" @click="getRole(0)" >
            全栈
          </a>
          <a class="item" :class="{active: act[1]}" @click="getRole(1)">
            前端
          </a>
          <a class="item" :class="{active: act[2]}" @click="getRole(2)">
            后端
          </a>
          <a class="item" :class="{active: act[3]}" @click="getRole(3)">
            产品设计
          </a>
          <a class="item" :class="{active: act[4]}" @click="getRole(4)">
            UI
          </a>
          <a class="item" :class="{active: act[5]}" @click="getRole(5)">
            其他
          </a>
        </div>
      </div>
      <div class="judges three">
        <div class="main">
          <div class="lists clearfix" id="lists">
            <div class="item sm-center" v-for="v in judges">
              <div class="img"><img :src=v.url alt=""></div>
              <h3>{{v.name}}</h3>
              <p class="intro">{{v.intro}}
              </p>
              <button class="btn btn-primary" @click="invite(v.uid)" v-if="v.teamId==0">Invite</button>
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


export default {
  name: 'Participants',
  components: { MModal },
  data () {
    return {
      menuShow:false,
      maxTxtCount:80,
      curTxtCount:0,
      curTxt:null,
      player: [],
      act:[false,false,false,false,false,false],
      roles:['Full Stack', 'Frontend', 'Backend', 'Product', 'UI', 'Others'],
      judges:[
        // {url:'images/6.png',name:'Qiu Wang',intro:`I will try my best to win this competition! No one is going to stop me from making it.`},
      ]
    }
  },
  created () {
    this.$emit('navigator', '0')
    let role = 'Full Stack'
    if (this.$route.query.role) {
      role = this.$route.query.role
    }
    api.participants(role).then((res) => {
      const d = res.data
      if (d.errcode) {
        alert(d.errmsg)
        console.log('get participants err')
      } else {
        console.log(d)
        this.judges = d
      }
    })
    this.act[this.roles.indexOf(role)] = true
  },
  methods:{
    ok(){

      console.log(this.s_uid)
      this.$socket.emit('add_group', {'from_id':this.uid,'to_id':this.s_uid,msg:this.curTxt,'isinvitation':1})
      this.$refs.layer.show = false
    },
    invite(s_uid){
      this.$refs.layer.show = true
      this.s_uid= s_uid
    },
    cancel(){
      this.$refs.layer.show = false
    },
    input(event){
      this.curTxt = event.target.value
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
    getRole (i) {
      this.chooseRole(i)
      api.participants(this.roles[i]).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
          console.log('get participants err')
        } else {
          this.judges = d
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
