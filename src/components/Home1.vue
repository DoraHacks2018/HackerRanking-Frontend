/* eslint-disable */
<template>
  <div>

    <div class="swiper-container" id="swiper-container">
      <div class="swiper-wrapper">
        <div  v-for="(item,index) in carousels" class="swiper-slide relative" :style="{backgroundColor:item.bg}">
          <img :src="require('@/images/bch-poster.png')" alt="">
          <a @click="gotoDetail" class="join-bch join1"></a>
        </div>
      </div>
      <!--&lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
      <!--<div class="swiper-pagination" v-show="carousels.length>1"></div>-->
      <!--&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
      <!--<div class="swiper-button-prev" v-show="carousels.length>1"></div>-->
      <!--<div class="swiper-button-next" v-show="carousels.length>1"></div>-->
    </div>

    <div class="wrap">
      <div class="service clearfix">
        <div class="content clearfix" v-for="(v,i) in service">
          <div class="bdr clearfix">
            <img v-if="i==0" :src="require('@/images/service01.png')" alt="" @click="gotoTrue">
            <img v-else :src="require('@/images/service02.png')" alt="" @click="gotoGit">
            <div class="txt">
              <h3>{{v.txt}}</h3>
              <a v-if="i==0" @click="gotoTrue" class="get">Get More Gift</a>
              <a v-else @click="gotoGit" class="get">Get More Gift</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="calendar">
      <div class="wrap">
        <h2 class="big-title">Hackathon Calendar</h2>
        <div class="tab">
          <ul class="clearfix">
            <li
              v-for="item,index in calendars.tab"
              :class="{'active': index == calendars.n}"
              @click="choose(index)"
            >
              {{item.title}}
            </li>
          </ul>
        </div>
      </div>
      <div class="pcwrap">
        <div class="list-group">
          <a href="#" class="item clearfix card" v-for="value,index in calendars.filterData">
            <img :src="require('@/'+value.url)" alt="" class="pull-left" >
            <div class="main pull-left">
              <h4 class="title">{{value.title}}</h4>
              <p class="sub-title">{{value.subTitle}}</p>
              <p class="address">{{value.address}}</p>
            </div>
            <div class="side pull-right">
              <p class="money">${{value.money}}</p>
              <time>{{value.time}}</time>
            </div>
          </a>
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
import LoginModal from './commons/LoginModal'
import NewsModal from './commons/NewsModal'

export default {
  name: 'Home1',
  components: { LoginModal, NewsModal },
  data () {
    return {

      carousels:[
        // {url:'images/banner1.png',bg:'#0d0d22'},
        {url:'@/images/banner1.png',bg:'#0d0d22'}
      ],
      service:[
        {url:'@/images/service01.png',txt:'TRUECHAIN INCENTIVE PLAN',href:'#'},
        {url:'@/images/service02.png',txt:'GITHUB CONTRIBUTORS PLAN',href:'#'}
      ],
      calendars:{
        tab:[
          {id:0,title: 'All'},
          {id:1,title: 'Upcoming'},
          {id:2,title: 'On Spot'}
        ],
        items: [
          {pid:1, url:'images/tab1.png',title:'Blockchain for Future Hackathon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
          {pid:2, url:'images/tab2.png',title:'DoraHacks & BCH Hack',subTitle:'Go for our dreams with our best hackers friends!',address:'Beijing',money:'12,000',time:'July 21th - 22th'},
        ],

        filterData:[],
        n:0
      }
    }
  },
  created(){
    document.addEventListener('click', (e) => {
      this.$refs.newsLayer.show = false;
    })
    this.calendars.filterData = this.calendars.items;
    this.hasNew = this.ifnew(this.news.list,'unread')
  },
  watch:{
    news:{
      handler(){
        this.hasNew = this.ifnew(this.news.list,'unread')
      },
      deep:true
    }
  },
  methods: {
    choose(index) {
      this.calendars.n = index
      this.calendars.filterData = index == 0 ? this.calendars.items : this.calendars.items.filter(function(item){
        return item.pid !== index;
      })
    },

    ifnew (arr,key) {
      let flag=false;
      arr.forEach(function(v,i){
        if(v[key]){
          flag = true;
        }
      })
      return flag
    },
    gotoDetail () {
      this.$router.push('/hackathon/detail')
    },
    gotoTrue () {
      this.$router.push('/partner/truechain')
    },
    gotoGit () {
      this.$router.push('/hackers')
    }
  }
}
</script>

<style scoped>

</style>
