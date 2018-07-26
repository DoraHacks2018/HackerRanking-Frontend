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
        <a class="item active">
          Teaming Up
        </a>
        <a class="item"><router-link to="/hackathon/team/completed">
          Team Completed</router-link>
        </a>
        <a class="item"><router-link to="/hackathon/team/build">
          <i class="fa fa-plus" style="color:#4cc6c5"></i> My Team</router-link>
        </a>
      </div>
    </div>
    <div class="judges six lg">
      <div class="main" v-for="t,index in teams">
        <div class="lists clearfix">
          <div class="lists-title text-primary">{{t.name}}</div>
          <div class="item sm-center" v-for="v in t.members">
            <!--<div class="img" :class="{active:v.active}"><img :src=v.url alt=""></div>-->
            <div class="img"><img :src=v.avatar alt=""></div><h3>{{v.name}}</h3>
            <p class="sname text-center">{{v.role}}</p>
          </div>
          <!--<div class="item sm-center" v-if="!inTeam">-->
            <!--&lt;!&ndash;<div class="add img circle" style="border-radius: 50%" @click="change($event,index)">&ndash;&gt;-->
              <!--<div class="add img circle" style="border-radius: 50%" @click="joinTeam(t.id)">-->
              <!--</div>-->
            <!--<h3 class="text-primary">Join The Team</h3>-->
          <!--</div>-->
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
  <!--<m-modal ref="layer">-->
      <!--<div slot="modal-header">-->
        <!--<h4 class="title">Are you sure to send this application to <span class="black">{{teams[toTeam].name}}</span> ?</h4>-->
        <!--<h5 class="sub-title">Application Card</h5>-->
      <!--</div>-->
      <!--<div slot="modal-content">-->
        <!--<form action="">-->
          <!--<div class="area">-->
            <!--<textarea name="" placeholder="eg: I’m glad to introduce our project to you...." @input="input($event)" rows="5" autofocus="autofocus"></textarea>-->
            <!--<div class="count">-->
              <!--<span class="cur" :class="{red:curTxtCount>maxTxtCount}">{{curTxtCount}}</span> /-->
              <!--<span class="all">{{maxTxtCount}}</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="text-center">-->
            <!--<button type="submit" class="btn btn-primary" @click="ok">Confirm</button>-->
            <!--<button type="button" class="btn btn-cancel" @click="cancel">Cancel</button>-->
          <!--</div>-->
        <!--</form>-->
      <!--</div>-->
    <!--</m-modal>-->


</div>
</template>

<script>
import api from '@/api'
import MModal from './commons/MModal'

export default {
  name: 'Team',
  components: { MModal },
  data () {
    return {
      menuShow:false,
      maxTxtCount:100,
      curTxtCount:0,
      teams: [],
      toTeam: 0,
      curTxt:null,
      talkShow:false,
			newsend:'',
			img_url:'',
			u_id : parseInt(window.cookieStorage.getItem('id')),
			to_u_id : -1,
      guid:-1,
			talk_t:{},
      inTeam: false,
      isLeader: false,
    }
  },
  created() {
    api.fetch_team(0).then((res) => {
      const d = res.data
      if (d.errcode) {
        alert(d.errmsg)
      } else {
        this.teams = d
        // console.log(this.teams)
      }
    })
    if (parseInt(window.cookieStorage.getItem('teamId')) !== 0) {
      this.inTeam = true
    }
  },
  methods:{
    ok(){
      console.log('send ', this.u_id, this.guid, this.curTxt)
			this.$socket.emit('add_group', {'from_id':this.u_id,'to_id':this.guid,msg:this.curTxt,'isinvitation':0})
			this.$refs.layer.show = false
		},
    // change(event, index){
    //   this.toTeam = index
    //   this.guid=this.teams[index].members[0].uid
    //   this.$refs.layer.show = true
		// },
    // cancel(){
    //   this.$refs.layer.show = false
    // },
    input(event){
      this.curTxt = event.target.value
      this.curTxtCount = event.target.textLength
      if(this.curTxtCount>this.allTxtCount){
        return false;
      }
    }
  }
}

function copylist(obj){
	let res = []
    for (let i = 0; i < obj.length; i++) {
     res.push(obj[i])
     res[i].pindex = i;
    }
    return res
}


</script>

<style scoped>

</style>
