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
            <li><router-link to="/hackathon/team"><a>Organize Teams</a></router-link></li>
            <li><router-link to="/hackathon/update"><a>Update Projects</a></router-link></li>
            <li class="active"><a>Ranking</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="search">
        <form action="">
          <input type="text" class="key" placeholder="Search by project name or team name ">
          <button type="submit" class="sub"></button>
        </form>
      </div>
    </div>
    <div class="projects-list">
      <div class="item relative" :class="{
		one:i==0,two:i==1,three:i==2
	}" v-for="v,i in list">
        <div class="prize sideinfo pull-left" >
          <h4 class="dollor" v-if="end">{{v.team.bonus}}</h4>
          <div class="hcount" v-if="end">
            <div class="hackers">
              <h4>{{v.team.ballot}}</h4>
              Hackers
            </div>
            <div class="judges">
              <h4>{{v.team.judges}}</h4>
              Judges
            </div>
          </div>
          <button v-if="!end" class="btn btn-primary" :disabled="!inTeam" @click="vote(v.team.id)">VOTE</button>
          <button v-if="inTeam && end" class="btn btn-primary" :disabled="!v.received" @click="receive">Receive Prize</button>

        </div>
        <div class="info clearfix pull-right">
          <img :src=v.logo alt="">
          <div class="txt">
            <h2>{{v.name}}</h2>
            <h3>By Team <span class="text-primary">{{v.team.name}}</span></h3>
            <p class="webkitscroll">{{v.description}}</p>
          </div>
          <div class="href">
            <a :href=v.demo class="primary-hover">Demo</a>
            <a :href=v.git class="primary-hover">Github</a>
          </div>
          <div class="tag" v-if="end">{{i+1}}</div>
        </div>
      </div>
    </div>

    <div class="wrap">
      <ul class="pagination clearfix">
        <!--<li class="disabled"><a href="" class="fa fa-chevron-left"></a></li>-->
        <li :class="{active: act[0]}" @click="getPage(1)">1</li>
        <!-- <li class="ellip"><a></a></li> -->
        <!--<li :class="{active: act[1]}" @click="getPage(2)" v-if="pageData.total > 10">2</li>-->
        <!-- <li class="ellip"><a></a></li> -->
        <!--<li><a href="" class="fa fa-chevron-right"></a></li>-->
      </ul>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'Ranking',
  data () {
    return {
      menuShow: false,
      end: false,
      list: [],
      pageData: null,
      act: [true, false],
      inTeam: false,
      teamID: 0,
    }
  },

  computed:{

  },
  created () {
    this.teamID = parseInt(window.cookieStorage.getItem('teamId'))
    this.inTeam = (this.teamID !== 0)
    api.fetch_projects(1).then((res) => {
      const d = res.data
      if (d.errcode) {
        alert(d.errmsg)
      } else {
        this.pageData = d
        this.list = d.items
      }
    })
  },
  updated () {

  },
  methods: {
    vote (to) {
      const token = window.cookieStorage.getItem('token')
      api.vote(this.teamID, to, token).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          alert('You have voted successfully.')
        }
      })
    },
    receive () {
    },
    getPage (i) {
      this.act[i] = true
      this.act[1-i] = false
      api.fetch_projects(i).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          this.pageData = d
          this.list = d.items
        }
      })
    }
  }
}
</script>

<style scoped>
.search{width: 478px;margin: 0 0 20px 0}
</style>
