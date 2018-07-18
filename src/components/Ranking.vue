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
            <li><router-link to="/hackathon/update"><a>Update Project</a></router-link></li>
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
        <div class="prize sideinfo pull-left">
          <h4 class="dollor">{{v.dollor}}</h4>
          <div class="hcount">
            <div class="hackers">
              <h4>{{v.hackers}}</h4>
              Hackers
            </div>
            <div class="judges">
              <h4>{{v.judges}}</h4>
              Judges
            </div>
          </div>
          <button class="btn btn-primary" :disabled="!v.limit" @click="handle(v,i)">{{v.prize?'Recive Prize':'VOTE'}}</button>
        </div>
        <div class="info clearfix pull-right">
          <img :src="require('@/'+v.url)" alt="">
          <div class="txt">
            <h2>{{v.title}}</h2>
            <h3>By Team <span class="text-primary">{{v.team}}</span></h3>
            <p class="webkitscroll">{{v.txt}}</p>
          </div>
          <div class="href">
            <a href="" class="primary-hover">Demo</a>
            <a href="" class="primary-hover">Github</a>
          </div>
          <div class="tag">{{i+1}}</div>
        </div>
      </div>
    </div>

    <div class="wrap">
      <ul class="pagination clearfix">
        <li class="disabled"><a href="" class="fa fa-chevron-left"></a></li>
        <li class="active"><a href="">1</a></li>
        <!-- <li class="ellip"><a></a></li> -->
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <!-- <li class="ellip"><a></a></li> -->
        <li><a href="" class="fa fa-chevron-right"></a></li>
      </ul>
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
export default {
  name: 'Ranking',
  data () {
    return {
      menuShow: false,
      list: [
        // {
        //   prize: false,
        //   limit: true,
        //   dollor: 100000,
        //   hackers: 313,
        //   judges: 43,
        //   url: 'images/cat.png',
        //   title: 'Looking for Best Designers',
        //   team: 'Hacking to The Gate',
        //   txt: `The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the`
        // },
        // {
        //   prize: true,
        //   limit: true,
        //   dollor: 800000,
        //   hackers: 313,
        //   judges: 43,
        //   url: 'images/cat.png',
        //   title: 'Looking for Best Designers',
        //   team: 'Hacking to The Gate',
        //   txt: `The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools.`
        // },
        // {
        //   prize: true,
        //   limit: false,
        //   dollor: 600000,
        //   hackers: 313,
        //   judges: 43,
        //   url: 'images/cat.png',
        //   title: 'Looking for Best Designers',
        //   team: 'Hacking to The Gate',
        //   txt: `The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. `
        // },
        // {
        //   prize: false,
        //   limit: true,
        //   dollor: 460000,
        //   hackers: 313,
        //   judges: 43,
        //   url: 'images/cat.png',
        //   title: 'Looking for Best Designers',
        //   team: 'Hacking to The Gate',
        //   txt: `The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools.`
        // }
      ]
    }
  },

  computed:{

  },
  updated () {

  },
  methods:{
    handle(v,i){
      console.log(v,i)
    }
  }
}
</script>

<style scoped>
.search{width: 478px;margin: 0 0 20px 0}
</style>
