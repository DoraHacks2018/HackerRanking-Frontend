/* eslint-disable */
<template>
<div>
  <div class="hackertop self">
    <div class="wrap clearfix relative">
      <div class="sideuser">
        <img :src="user.url" alt="">
        <h2>{{user.name}}</h2>
      </div>
      <div class="sideinfo">
        <div class="hcount">
          <div>
            <h4>{{user.followers}}</h4>
            <p>Followers</p>
          </div>
          <div>
            <h4>{{user.following}}</h4>
            <p>Following</p>
          </div>
        </div>
        <div class="map">{{user.address}}</div>
        <a href="" class="git">Github</a>
      </div>
      <div class="sidebtn">
        <p class="text-bold text-gray">Total <span class="text-primary">{{user.gift}}</span> Gift</p>
        <div class="relative" @click.stop = "drawShow = showDraw">
          <!--<button class="btn btn-cancel">Withdraw</button>-->
          <div class="confirm" style="right: 0;left: auto;" v-show="drawShow">
            <form action="" class="form">
              <div>Withdraw</div>
              <div>
                <input type="text">
                <button type="submit" class="btn btn-cancel submit">Submit</button>
              </div>
              <div>Gift</div>
            </form>
          </div>
        </div>
        <a class="btn btn-primary" @click="getGift">Get 10 Gift</a>
      <button class="btn btn-cancel" @click="logout">Logout</button>
      </div>
      <div class="sideadress">
        <h5>ETH Wallet Adress</h5>
        <h6>{{user.eth}}</h6>
        <h5>Gift Wallet Adress</h5>
        <h6>{{user.gift_addr}}</h6>
        <h5>Email</h5>
        <h6>{{user.mail}}</h6>
      </div>
      <router-link to="/profile/edit"><a class="edit" ></a></router-link>
      <a class="signout"></a>
    </div>
  </div>

  <!--<div class="wrap">-->
    <!--<div class="match">-->
      <!--<div class="tab">-->
        <!--<ul class="clearfix">-->
          <!--<li class="active"><a>Projects</a></li>-->
          <!--<li><router-link to="/profile/hackathon"><a>Hackathons</a></router-link></li>-->
          <!--<li><router-link to="/profile/github"><a>Github Repo</a></router-link></li>-->
          <!--<li><router-link to="/profile/invested"><a>Invested Projects</a></router-link></li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->

  <div class="projects-list">
    <div class="item relative" v-for="v,i in list">
      <div class="info clearfix">
        <img :src="v.url" alt="">
        <div class="txt">
          <h2>{{v.title}}</h2>
          <h3>By Team <span class="text-primary">{{v.team}}</span></h3>
          <p class="webkitscroll">{{v.txt}}</p>
        </div>
        <div class="href">
          <a href="" class="primary-hover">Demo</a>
          <a href="" class="primary-hover">Github</a>
        </div>
      </div>

    </div>
  </div>


  <!--<div class="wrap">-->
    <!--<ul class="pagination clearfix">-->
      <!--<li><a href="" class="fa fa-chevron-left"></a></li>-->
      <!--<li class="active"><a href="">1</a></li>-->
      <!--&lt;!&ndash; <li class="ellip"><a></a></li> &ndash;&gt;-->
      <!--<li><a href="">2</a></li>-->
      <!--<li><a href="">3</a></li>-->
      <!--<li><a href="">4</a></li>-->
      <!--&lt;!&ndash; <li class="ellip"><a></a></li> &ndash;&gt;-->
      <!--<li><a href="" class="fa fa-chevron-right"></a></li>-->
    <!--</ul>-->
  <!--</div>-->

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
  name: 'ProfileProject',
  data () {
    return {
      menuShow: false,
      drawShow: false,
      user: {
        url: '',
        name: '',
        followers: 0,
        following: 0,
        address: '',
        eth: 'NOT SAVE',
        gift_addr: 'NOT SAVE',
        mail: 'NOT SAVE',
        gift: 100
      },
      list: [
        // {
        //   url: 'images/cat.png',
        //   title: 'Looking for Best Designers',
        //   team: 'Hacking to The Gate',
        //   txt: `The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the`
        // },
      ]
    }
  },
  created () {
    // 点击其他不在的区域触发事件
    // document.addEventListener('click', (e) => {
    //   this.drawShow = false
    // })
    api.profile_main().then((res) => {
      const d = res.data
      if (d.errcode) {
        alert(d.errmsg)
      } else {
        this.user.url = d.avatar
        this.user.name = d.username
        this.user.eth = d.eth
        this.user.gift_addr = d.gift
        this.user.gift = d.owned_dust
        this.user.mail = d.email
      }
    })
  },
  methods:{
    showDraw()
    {
      this.drawShow = true
    },
    logout () {
      this.$emit('update')
    },
    getGift () {
      api.get_dust().then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else if (parseInt(d, 10)) {
          this.user.gift = d
          alert('10 Gift got.')
        } else {
          alert(d)
        }
      })
    }

  }
}
</script>

<style scoped>

</style>
