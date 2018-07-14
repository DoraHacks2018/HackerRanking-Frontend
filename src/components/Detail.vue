<template>
  <div id="app" v-cloak>
    <div class="wrap">
      <a class="text-center ad" href="#">
        <img :src="require('@/images/banner2.png')" alt="" style="width: 100%">
      </a>
    </div>


    <div class="wrap">
      <div class="match">
        <div class="tab">
          <ul class="clearfix">
            <li class="active"><a>Details</a></li>
            <li><router-link to="/hackathon/participants"><a>Participants</a></router-link></li>
            <li><router-link to="/hackathon/team"><a>Organize Teams</a></router-link></li>
            <li><router-link to="/hackathon/update"><a>Update Projects</a></router-link></li>
            <li><router-link to="/hackathon/ranking"><a>Ranking</a></router-link></li>
          </ul>
        </div>
        <div class="content clearfix">
          <div class="main" :class="{show:txtShow}" @mouseleave="showtxt(0)">
            <div class="time">{{match.time}}</div>
            <div class="address">{{match.address}}</div>
            <div class="txt relative">
              <div class="word" :class="{up:!txtShow}"  v-html="match.txt"></div>
              <span class="dot" @mouseenter.stop="showtxt(1)"></span>
            </div>
          </div>
          <div class="info">
            <a class="upload" @click="gotoInfo">I'm a hacker <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            <div class="cup text-center">
              <p>20 ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrap" style="padding: 0">
      <div class="line"></div>

      <div class="judges four">
        <div class="main">
          <h2>Judges</h2>
          <div class="lists clearfix">
            <div class="item" v-for="v,i in judges">
              <div class="img"><img :src="require('@/'+v.url)" alt=""></div>
              <h3>{{v.name}}</h3>
              <p class="intro">{{v.intro}}
              </p>
            </div>
          </div>
          <div class="lists clearfix">
          <div class="item" v-for="v,i in judges2">
              <div class="img"><img :src="require('@/'+v.url)" alt=""></div>
              <h3>{{v.name}}</h3>
              <p class="intro">{{v.intro}}
              </p>
            </div>
          </div>
          <div class="lists clearfix">
            <div class="item" v-for="v,i in judges3">
              <div class="img"><img :src="require('@/'+v.url)" alt=""></div>
              <h3>{{v.name}}</h3>
              <p class="intro">{{v.intro}}
              </p>
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
import api from '@/api'

export default {
  name: 'Detail',
  data () {
    return {
      menuShow: false,
      txtShow: false,
      match:{
        time:'June 26th - 27th, 2018',
        address:`San Jose Convention Center 150 W San Carlos St. San Jose, CA 95113`,
        txt:`DoraHacks will host Blockchain for Future Hackathon, the largest and most competitive blockchain hackathon ever, right in the heart of Silicon Valley on June 26 and 27th. The hackathon will happen in San Jose McEnery Convention Center.<br>

            Themes of the hackathon include public chain security and high impact DApps. Hackers will form a team of 3-5 members prior or at the hackathon.  <br>

			Judging criteria: Usability, technicality, creativity;<br>
            24-hour increment<br>
            Cost：free`,
        money:2200000
      },
      judges:[
        {url:'assets/JiangXuxian.png',name:'Dr. Jiang Xuxian',intro:`ounder & CEO of Peckshield, former chief scientist of 360 and lifelong professor at North Carolina State University`},
        {url:'assets/DawnSong.jpg',name:'Dawn Song',intro:`Founder of Oasis Lab, Professor at UC Berkeley`},
        {url:'assets/MaQIang.png',name:'Ma Qiang',intro:`Founder of BA Capital and Hackers Fund, early investor of Bitmain`},
        {url:'assets/anastasia.jpeg',name:'Anastasia Miron',intro:`Nebulas Ambassador, Innovation Evangelist`}],
      judges2:[
        {url:'assets/Elaine.png',name:'Elaine Shi',intro:`Co-Founder & Chief Scientist of Thunder Token`},
        {url:'assets/jing sun.jpeg',name:'Jing Sun',intro:`Co-Founding Team of IoTeX`},
        {url:'assets/Robin Zhong.jpg',name:'Robin Zhong',intro:`Co-Founding Team of Nebulas `},
        {url:'assets/Hitters Xu.jpg',name:'Hitters Xu',intro:`Co-Founding Team of Nebulas `},
        ],
      judges3:[
        {url:'assets/Jeffrey Wernick.jpeg',name:'Jeffery Wernick',intro:`Qtum Advisor, Early Investor of Uber & Airbnb`},
        {url:'assets/William King.jpeg',name:'William King',intro:`PM, Consensys`},
      ]
    }
  },
  methods: {
    gotoInfo () {
      this.$router.push('/hackathon/upload-info')
    },
    getImgUrl (url) {
      var images = require.context('@/', false, /\.png$/)
      return images(url)
    }
  }
}
</script>

<style scoped>
</style>
