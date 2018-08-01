/* eslint-disable */
<template>
  <div>
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
            <li><router-link to="/hackathon/participants"><a>Participants</a></router-link></li>
            <li class="active"><a>Organize Teams</a></li>
            <li><router-link to="/hackathon/update"><a>Update Projects</a></router-link></li>
            <li><router-link to="/hackathon/ranking"><a>Ranking</a></router-link></li>
          </ul>
        </div>
      </div>


      <div class="search sm">
        <form action="">
          <input type="text" class="key" placeholder="Search by team name or member name ">
          <button type="submit" class="sub"></button>
        </form>
      </div>
    </div>
    
    <div class="lrlayout clearfix">
      <div class="nav sm">
        <div class="list-group clearfix">
          <a class="item">
            <router-link to="/hackathon/team">
            Teaming Up</router-link>
          </a>
          <a class="item active">
            Team Completed
          </a>
          <a  class="item"><router-link to="/hackathon/team/build">
            <i class="fa fa-plus" style="color:#4cc6c5"></i> My Team</router-link>
          </a>
        </div>
      </div>
      <div class="judges six lg">
        <div class="main" v-for="t,index in teams">
          <div class="lists clearfix">
            <div class="lists-title text-primary">{{t.name}}</div>
            <div class="item" v-for="v in t.members">
              <div class="img"><img :src=v.url alt=""></div>
              <h3>{{v.name}}</h3>
              <p class="sname text-center">{{v.role}}</p>
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

  </div>
</template>

<script>
import MModal from './commons/MModal'
import api from '@/api'

export default {
  name: 'TeamCompleted',
  components: { MModal },
  data () {
    return {
      menuShow:false,
      maxTxtCount:80,
      curTxtCount:0,
      judges:[
        {url:'images/6.png',name:'Qiu Wang',intro:`Designer`,active:false},
      ],
      teams: []
    }
  },
  created() {
    api.fetch_team(1).then((res) => {
      const d = res.data
      if (d.errcode) {
        alert(d.errmsg)
      } else {
        this.teams = d
      }
    })
  },
  methods:{
    ok(){},
    invite(){
      this.$refs.layer.show = true
    },
    cancel(){
      this.$refs.layer.show = false
    },
    input(event){
      this.curTxtCount = event.target.textLength
      if(this.curTxtCount>this.allTxtCount){
        return false;
      }

    }

  }

}
</script>

<style scoped>

</style>
