<template>
<div>	<div class="hackertop">
  <div class="wrap clearfix">
    <div class="sideuser">
      <img :src=user.url alt="">
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
      <!--<div class="map">{{user.address}}</div>-->
      <!--<a href="" class="git">Github</a>-->
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
          <!--<li><a href="hackers_projects.html">Projects</a></li>-->
          <!--<li><a href="hackers_hackthons.html">Hackthons</a></li>-->
          <li class="active"><a>Github Repo</a></li>
        </ul>
      </div>
    </div>
  </div>



  <div class="pcwrap">
    <div class="list-group f20" v-for="v,i in items" style="margin-bottom: 20px">
      <div class="item">
        <h2 class="text-primary fontlg">{{v.chain_name}}/{{v.github_project_name}}</h2>
      </div>
      <div class="item">
        <div class="flex">
          <h2 class="item text-gray">{{v.commit}} <span class="text-light">Commits</span></h2>
          <div class="item text-gray">{{v.add}} <span class="text-primary">++</span></div>
          <div class="item text-gray">{{v.delete}} <span style="color:#65a3ff">--</span></div>
        </div>
      </div>

    </div>
  </div>

  <div class="wrap">
    <ul class="pagination clearfix">
      <li><a href="" class="fa fa-chevron-left"></a></li>
      <li class="active"><a href="">1</a></li>
      <!-- <li class="ellip"><a></a></li> -->
      <!-- <li class="ellip"><a></a></li> -->
      <li><a href="" class="fa fa-chevron-right"></a></li>
    </ul>
  </div>

</div>
</template>

<script>
import api from '@/api'
export default {
  name: 'HackerGithub',
  data () {
    return {
      menuShow:false,
      user:{
        url:'',
        name:'',
        followers:0,
        following:0,
        address:''
      },
      items:[
        // {t1:'Truechain',c1:'2850842',p1:'92839828734',d1:'8837476'},
      ]
    }

  },
  created () {
    console.log('cid=',this.$route.query.cid, 'name=',this.$route.query.name)
    if (this.$route.query.cid !== 0) {
      api.hacker_view('', this.$route.query.cid).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          console.log(d)
          this.user.url = d.author_avatar
          this.name = d.author_login
          this.items = d.commit_info
        }
      })
    } else if (this.$route.query.name !== '') {
      api.hacker_view(this.$route.query.name, 0).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          this.user.url = d.author_avatar
          this.name = d.author_login
          this.items = d.commit_info
        }
      })
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
