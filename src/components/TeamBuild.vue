/* eslint-disable */
<template>
  <div>

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
            <li><router-link to="/hackathon/participants"><a>Participants</a></router-link></li>
            <li class="active"><a>Organize Teams</a></li>
            <li><router-link to="/hackathon/update"><a>Update Projects</a></router-link></li>
            <li><router-link to="/hackathon/ranking"><a>Ranking</a></router-link></li>
          </ul>
        </div>
      </div>


      <div class="text-right clearfix" v-if="inTeam">
        <a v-if="isLeader" class="btn btn-cancel dismiss">Disband The Team</a>
        <a v-else class="btn btn-cancel dismiss">Leave The Team</a>

      </div>
    </div>

    <div class="lrlayout clearfix">
      <div class="nav sm">
        <div class="list-group clearfix">
          <a class="item"><router-link to="/hackathon/team">
            Teaming Up</router-link>
          </a>
          <a class="item"><router-link to="/hackathon/team/completed">
            Team Completed</router-link>
          </a>
          <a class="item active">
            <i class="fa fa-plus" style="color:#4cc6c5"></i> My Team
          </a>
        </div>
      </div>
      <div class="judges six lg webkitscroll">
        <div class="main">
          <div class="lists clearfix">                <!-- 6.24-1 -->
            <div class="lists-title text-primary" contenteditable="true" @blur="entername($event)">{{teamName}}</div>
            <div class="item sm-center" v-for="v,i in judges">
              <div class="img" :class="{active:v.active}"><img :src="require('@/'+v.url)" alt=""></div>
              <h3>{{v.name}}</h3>
              <p class="sname text-center">{{v.intro}}</p>
            </div>
            <div class="item sm-center">
              <div class="add img circle" style="border-radius: 50%" @click="change($event,1)">
              </div>
              <h3 class="text-primary">Invite members</h3>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button class="btn btn-primary btn-lg">Team Comeplete</button>
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

    <lg-modal ref = "lgLayer" modal-title="Send Invitation">
      <div slot="modal-content">
        <div class="search" style="width: 100%;margin: 0">
          <form action="">
            <input type="text" class="key">
            <button type="submit" class="sub"></button>
          </form>
        </div>
        <div class="tab">
          <ul>
            <li v-for="value,index in role.tab"
                :class="{'active': index == role.n}"
                @mouseover="choose(index)"
            >{{value.title}}</li>
          </ul>
        </div>
        <div class="judges three webkitscroll">
          <div class="lists clearfix" id="lists">
            <div class="item text-center" v-for="v,i in role.filterData">
              <div class="img"><img :src="require('@/'+v.url)" alt=""></div>
              <h3>{{v.name}}</h3>
              <p class="intro" style="text-align: left;">{{v.intro}}
              </p>
              <button class="btn btn-primary" @click="invite()">Add</button>
            </div>
          </div>
        </div>
      </div>
    </lg-modal>
    <m-modal ref="layer">
      <div slot="modal-header">
        <h4 class="title">Are you sure to send this invitation to <span class="black">Anna Levine</span> ?</h4>
        <h5 class="sub-title">Invitation Card</h5>
      </div>
      <div slot="modal-content">
        <form action="">
          <div class="area">
            <textarea name="" rows="6" placeholder="eg: I’m glad to introduce our project to you...." @input="input($event)" autofocus="autofocus"></textarea>
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
import LgModal from './commons/LgModal'

export default {
  name: 'TeamBuid',
  components: { MModal, LgModal},
  data () {
    return {
      teamName:'enter a team name',
      menuShow:false,
      maxTxtCount:80,
      curTxtCount:0,
      inTeam: false,
      isLeader: false,
      judges: [
        // {url:'images/6.png',name:'Qiu Wang',intro:`Designer`,active:true}

      ],
      role: {
        tab: [
          {id: 0, title: 'Full Stack'},
          {id: 1, title: 'Designer'},
          {id: 2, title: 'DApps'},
          {id: 3, title: 'Security'},
          {id: 4, title: 'Public Chain'},
          {id: 5, title: 'Hacker'}
        ],
        items: [
          {
            url: 'images/6.png',
            name: 'Qiu Wang',
            intro: `TI will try my best to win this competition! No one is going to stop me from making it.`,
            pid: 0
          },
        ],

        filterData: [],
        n: 0
      }
    }
  },
  created (){
    this.role.filterData = this.role.items.filter(item=>item.pid==this.role.n)
    api.check_team.then((res) => {
      const d = res.data
      if (d.errcode) {
        console.log('check team error')
        alert(d.errmsg)
        return
      }
      this.inTeam = d.inTeam
      this.isLeader = d.isLeader
    })
  },
  methods:{
    change(event){
      this.$refs.lgLayer.show = true;

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
    ok(){},

    invite(){
      this.$refs.layer.show = true
    },
    choose(index) {
      this.role.n = index;
      this.role.filterData = this.role.items.filter(item=>item.pid==this.role.n)
    },
    entername(event){
      // console.log(event.target.innerHTML)
      this.teamName=event.target.innerHTML
    }

  }
}
</script>

<style scoped>
  .dismiss {
    width: 200px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    margin: 0 auto;
    display: block;
    font-size: 14px;
    background-image: url(../images/dismiss.png);
    background-repeat: no-repeat;
    background-position: 20px center;
    padding-left: 46px;
    text-align: left;
  }
</style>
