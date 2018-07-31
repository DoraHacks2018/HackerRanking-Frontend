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
          <li class="active"><a href="hackers_projects.html">Projects</a></li>
          <li><a href="hackers_hackthons.html">Hackthons</a></li>
          <li><a href="hackers_github.html">Github Repo</a></li>
        </ul>
      </div>
    </div>
  </div>

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
      <div class="invest" @click.stop="investIndex = i">
        <button class="btn btn-primary">Invest</button>
        <div class="confirm" v-show="i==investIndex" >
          <form action="" class="form">
            <div>Invest</div>
            <div>
              <input type="text">
              <button type="submit" class="btn btn-cancel">Confirm</button>
            </div>
            <div>Gift</div>
          </form>
        </div>
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

</div>
</template>

<script>
export default {
  name: 'HackerProject',
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
      list:[
        {
          url:'images/cat.png',
          title:'Looking for Best Designers',
          team:'Hacking to The Gate',
          txt:`The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the`
        },
        {
          url:'images/cat.png',
          title:'Looking for Best Designers',
          team:'Hacking to The Gate',
          txt:`The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the`
        },
        {
          url:'images/cat.png',
          title:'Looking for Best Designers',
          team:'Hacking to The Gate',
          txt:`The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the`
        },
        {
          url:'images/cat.png',
          title:'Looking for Best Designers',
          team:'Hacking to The Gate',
          txt:`The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the`
        },
        {
          url:'images/cat.png',
          title:'Looking for Best Designers',
          team:'Hacking to The Gate',
          txt:`The drop in scores marks the end of a trend – known as the Flynn effect – which has seen average IQs rise for the past 60 to 70 years by roughly three points a decade. Scientists have described the results as 'impressive' but 'pretty worrying according to the Times. The decline is to do with a difference in the way languages and maths are taught in schools. The drop in scores marks the`
        }
      ],
      investIndex:-1
    }
  },
  created () {
    // 点击其他不在的区域触发事件
    document.addEventListener('click', (e) => {
      this.investIndex = -1
    })
  },
}
</script>

<style scoped>

</style>
