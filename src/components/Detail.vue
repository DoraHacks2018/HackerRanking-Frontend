<template>
  <div id="app" v-cloak>

    <header>
      <div class="wrap">
        <div class="header-top">
          <a href="index.html" class="header-logo"></a>
          <span class="header-nav-btn">
					<i @click="menuShow = !menuShow" class="fa fa-bars" aria-hidden="true"></i>
				</span>
        </div>
        <ul class="header-nav" :class="{show:menuShow}">
          <li class="item active"><a href="index.html">HACKATHON</a></li>
          <li class="item"><a href="hackers.html">HACKERS</a></li>
          <li class="item"><a href="#">PROJECTS</a></li>
          <li class="item"><a href="#" class="user"><img src="images/user.png" alt=""></a></li>
          <li class="item"><a href="#" class="new active"><span></span></a></li>
          <li class="item"><a href="#">EN</a></li>
        </ul>
      </div>
    </header>

    <div class="wrap">
      <a class="text-center ad" href="#">
        <img src="images/banner2.png" alt="" style="width: 100%">
      </a>
    </div>


    <div class="wrap">
      <div class="match">
        <div class="tab">
          <ul class="clearfix">
            <li class="active"><a>Details</a></li>
            <li><a href="participants.html">Participants</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="updates.html">Updates</a></li>
            <li><a href="ranks.html">Ranks</a></li>
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
            <a class="upload" @click="gotoInfo">Upload Your Infomation <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            <div class="cup text-center">
              <p>${{SeparatorMoney}}</p>
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
          <div class="lists clearfix" id="lists">

            <div class="item" v-for="v,i in judges">
              <div class="img"><img :src="v.url" alt=""></div>
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
        {url:'images/1.png',name:'Michael Li',intro:`The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60.`},
        {url:'images/2.png',name:'Adam Levine',intro:`Scientists have described the results as 'impressive' but 'pretty worrying to the Times. The decline is to do with a difference in the way languages.`},
        {url:'images/5.png',name:'Qiu Rui',intro:`The decline is to do with a difference in the way languages and  are taught in schools. `},
        {url:'images/3.png',name:'David Aguilera',intro:`The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. `},
        {url:'images/1.png',name:'Michael Li',intro:`The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60.`},
        {url:'images/2.png',name:'Adam Levine',intro:`Scientists have described the results as 'impressive' but 'pretty worrying to the Times. The decline is to do with a difference in the way languages.`},
        {url:'images/5.png',name:'Qiu Rui',intro:`The decline is to do with a difference in the way languages and  are taught in schools. `},
        {url:'images/3.png',name:'David Aguilera',intro:`The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. `}
      ]
    }
  },
  methods: {
    gotoInfo () {
      this.$router.push('/upload-info')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
