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
        <p class="text-bold text-gray">Total <span class="text-primary">66482020</span> Gift</p>
        <div class="relative" @click.stop = "drawShow = showDraw">
          <button class="btn btn-cancel">Withdraw</button>
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
        <a href="" class="btn btn-primary">Get 10 Gift</a>
      </div>
      <div class="sideadress">
        <h5>ETH Wallet Adress</h5>
        <h6>{{user.eth}}</h6>
        <h5>Gift Wallet Adress</h5>
        <h6>{{user.gift}}</h6>
        <h5>Email</h5>
        <h6>{{user.mail}}</h6>
      </div>
      <a class="edit"  href="profile_edit.html"></a>
      <a href="" class="signout"></a>
    </div>
  </div>

  <div class="wrap">
    <div class="match">
      <div class="tab">
        <ul class="clearfix">
          <li><router-link to="/profile/project"><a>Projects</a></router-link></li>
          <li class="active"><a>Hackathons</a></li>
          <li><router-link to="/profile/github"><a>Github Repo</a></router-link></li>
          <li><router-link to="/profile/invested"><a>Invested Projects</a></router-link></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="calendar" style="margin-top: 0">
    <div class="pcwrap">
      <div class="list-group radius">
        <a href="#" class="item clearfix " v-for="value,index in items">
          <img :src="value.url" alt="" class="pull-left">
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


  <div class="wrap">
    <ul class="pagination clearfix">
      <li><a href="" class="fa fa-chevron-left"></a></li>
      <li class="active"><a href="">1</a></li>
      <!-- <li class="ellip"><a></a></li> -->
      <li><a href="">2</a></li>
      <li><a href="">3</a></li>
      <li><a href="">4</a></li>
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
  name: 'ProfileHackathon',
  data () {
    return {
      menuShow:false,
      drawShow:false,
      user:{
        url:'images/pig.png',
        name:'Peggi Whistle',
        followers:286,
        following:6,
        address:'BJTU,Beijing',
        eth:'0x61c55E4b294f771DF396a790c23FBd9aB8F2C1d7',
        gift:'NOT SAVE',
        mail:'872575540@qq.com'
      },
      items: [
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        // {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'}

      ]
    }
  },
  created() {
    // 点击其他不在的区域触发事件
    document.addEventListener('click', (e) => {
      this.drawShow = false
    })
  },
  methods: {
    showDraw () {
      this.drawShow = true
    }
  }
}
</script>

<style scoped>

</style>
