<template>
<div>
  <div class="hackertop">
    <div class="wrap clearfix">
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
        <a href="" class="btn btn-primary">Follow</a>
        <a href="" class="btn btn-cancel">Message</a>
      </div>
    </div>
  </div>

  <div class="wrap">
    <div class="match">
      <div class="tab">
        <ul class="clearfix">
          <li><a href="hackers_projects.html">Projects</a></li>
          <li class="active"><a href="hackers_hackthons.html">Hackthons</a></li>
          <li><a href="hackers_github.html">Github Repo</a></li>
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
  name: 'HackerHackathon',
  data () {
    return {
      menuShow:false,
      user:{
        url:'images/pig.png',
        name:'Peggi Whistle',
        followers:286,
        following:6,
        address:'BJTU,Beijing'
      },
      items: [
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'},
        {url:'images/tab1.png',title:'Blockchain for Future Hackthon',subTitle:'Blockchain, connect and coherence!',address:'San Jose convention center',money:'18,000',time:'June 26th - 27th'}

      ],
    }
  }
}
</script>

<style scoped>

</style>
