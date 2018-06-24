<template>
  <div>
    <header class="header-index">
      <div class="wrap">
        <div class="header-top">
          <a href="index.html" class="header-logo"></a>
          <span class="header-nav-btn">
					<i @click="menuShow = !menuShow" class="fa fa-bars" aria-hidden="true"></i>
				</span>
        </div>
        <ul class="header-nav" :class="{show:menuShow}">
          <li class="item active"><a>HACKATHON</a></li>
          <li class="item"><a>HACKERS</a></li>
          <li class="item"><a href="#">PROJECTS</a></li>
          <li class="item"><a href="#" class="user">LOGIN/SIGNUP</a></li>
          <li class="item"><a href="#" class="new active"><span></span></a></li>
          <li class="item"><a href="#">EN</a></li>
        </ul>
      </div>
    </header>
    <div class="swiper-container" id="swiper-container">
      <div class="swiper-wrapper">
        <div  v-for="(item,index) in carousels" class="swiper-slide relative" :style="{backgroundColor:item.bg}">
          <img :src="require('@/images/banner1.png')" alt="">
          <a @click="gotoDetail" class="join join1"></a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" v-show="carousels.length>1"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev" v-show="carousels.length>1"></div>
      <div class="swiper-button-next" v-show="carousels.length>1"></div>
    </div>

    <div class="wrap">
      <div class="service clearfix">
        <div class="content clearfix" v-for="(v,i) in service">
          <div class="bdr clearfix">
            <img v-if="i==0" :src="require('@/images/service01.png')" alt="">
            <img v-else :src="require('@/images/service02.png')" alt="">
            <div class="txt">
              <p>{{v.txt}}</p>
              <a :href="v.href" class="get">Get More Gift</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="calendar">
      <div class="wrap">
        <h2 class="big-title">Hackthon Calendar</h2>
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
            <img v-if="index==0" :src="require('@/images/tab1.png')" alt="" class="pull-left">
            <img v-else :src="require('@/images/tab2.png')" alt="" class="pull-left">
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


export default {
  name: 'Home1',
  data () {
    return {
      menuShow:false,
      hasNew:true,
      newsShow:false,
      news:{
        list:[
          {abstract:'The hackthon bonus has been announced. Please the captain go to collect the...The hackthon bonus has been announced. Please the captain go to collect the...The hackthon bonus has been announced. Please the captain go to collect the...The hackthon bonus has been announced. Please the captain go to collect the...The hackthon bonus has been announced. Please the captain go to collect the...The hackthon bonus has been announced. Please the captain go to collect the...The hackthon bonus has been announced. Please the captain go to collect the...',title:'Details of Notification',time:'2018/06/20',unread:true},
          {abstract:'The hackthon bonus has been announced. Please the captain go to collect the...',title:'Details of Notification',time:'2018/06/20',unread:true},
          {abstract:'The hackthon bonus has been announced. Please the captain go to collect the...',title:'Details of Notification',time:'2018/06/20',unread:true},
          {abstract:'The hackthon bonus has been announced. Please the captain go to collect the...',title:'Details of Notification',time:'2018/06/20',unread:true},
          {abstract:'The hackthon bonus has been announced. Please the captain go to collect the...',title:'Details of Notification',time:'2018/06/20',unread:true}
        ],
        n:0,
        slide:false
      },
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
          {id:1,title: 'Online'},
          {id:2,title: 'On Spot'}
        ],
        items: [
          {pid:1, url:'@/images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
          {pid:2, url:'@/images/tab2.png',title:'DoraHacks & BCH Hack',subTitle:'Go for our dreams with our best hackers friends!',address:'Beijing, Peking university',money:'12,000',time:'July 21th - 22th'},
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
    }
  }
}
</script>

<style scoped>

</style>
