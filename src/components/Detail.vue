<template>
  <div id="app" v-cloak>
    <div class="wrap">
      <a class="text-center ad" href="#">
        <img :src="require('@/images/banner-bch.png')" alt="" style="width: 100%">
      </a>
    </div>


    <div class="wrap">
      <div class="match">
        <div class="tab">
          <ul class="clearfix">
            <li class="active"><a>Details</a></li>
            <li><router-link to="/hackathon/participants"><a>Participants</a></router-link></li>
            <li><router-link to="/hackathon/team"><a>Organize Teams</a></router-link></li>
            <li><router-link to="/hackathon/update"><a>Update Project</a></router-link></li>
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
        time:'2018年7月21日~7月22日',
        address:`裸心社三里屯社区（北京朝阳工体北路甲2号盈科中心C栋5层`,
        txt:`为共同建设BCH核心开发社群和应用开发者社群、维护BCH，DoraHacks&BCH寻找最优秀的Hacker，开始这场24小时冒险之旅。使用最尖端的区块链技术，展开最激烈的头脑风暴，用令人折服的作品解决人类社会各行业出现的最新、最迫切的问题.<br>
参赛选手通过专业筛选获得参赛资格，瓜分总数为¥200,000+的BCH奖金池。通过筛选的参赛者可以获得Brainstorm Creative Hacker的优秀Hacker奖，获得报销全额/部分差旅(最高1BCH)；同时比赛中按照票数多少划分项目一二三等奖，所有获得票数的选手可根据票数，获得相应份额的奖金。
<br>
（*BCH价格按6月14日活动发布日的收盘价格算）
`,
        money:2200000
      },
      judges:[
        {url:'assets/fangyuan.jpg',name:'方圆',intro:`得到首席架构师`},
        {url:'assets/timyang.jpg',name:'Tim Yang',intro:`微博研发副总经理`},
        {url:'assets/jiangjiazhi.jpg',name:'姜家志',intro:`BCH资深开发者`},
        {url:'assets/hanjin.jpg',name:'韩进',intro:`硅谷知名区块链公司创始人兼CTO`}],
      judges2:[
        {url:'assets/astaxie.jpg',name:'Asta Xie',intro:`Go语言中国首席布道师`},
      ]
    }
  },
  methods: {
    gotoInfo () {
      let tmp = window.cookieStorage.getItem('token')
      if (tmp === 'anyValue' || !tmp) {
        alert('Login required.')
        return
      }
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
