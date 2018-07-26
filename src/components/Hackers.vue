<template>
  <div>
    <div class="wrap">
      <div class="search fl">
        <form action="">
          <input type="text" class="key" placeholder="Search by hacker’s name" v-model="searchName">
          <button type="submit" class="sub" @click="toProfile(searchName, 0)"></button>
        </form>
      </div>
    </div>

    <div class="hackerlist">
      <div class="item clearfix card" v-for="v,i in hackers">
        <span class="rank">#{{v.rank}}</span>
        <div class="left clearfix">
          <div class="user">
            <img :src=v.avatar alt="" @click="toProfile('', v.id)" style="cursor: pointer">
            <h5>{{v.id}}</h5>
            <h6>Commits</h6>
          </div>
          <div class="follow">
            <h4>{{v.name}}</h4>
            <p><span class="text-primary">{{v.follower}}</span> Followers</p>
            <div class="">
              <a href="" class="btn btn-primary">Follow</a>
              <a href="" class="btn btn-cancel">Message</a>
            </div>
          </div>
        </div>
        <div class="right">
          <table>
            <tr><!-- 6.24-1 -->
              <td colspan="3" style="text-align: left;">Contributed On Github：</td>
              <!--<td>{{v.date}}</td>-->
              <!--<td>{{v.time}}</td>-->
            </tr>
            <tr>
              <td style="text-align: left;">{{v.t1}}：</td>
              <td>{{v.c1}}+</td>
              <td>Commits</td>
              <td>{{v.p1}}++</td>
              <td>{{v.d1}}--</td>
            </tr>
            <tr>
              <td style="text-align: left;">{{v.t2}}：</td>
              <td>{{v.c2}}+</td>
              <td>Commits</td>
              <td>{{v.p2}}++</td>
              <td>{{v.d2}}--</td>
            </tr><!-- 6.24-1 -->

          </table>
          <p style="color:#b6baba;margin-left: 30px;font-size: 14px;line-height: 1">...</p>
          <a class="btn btn-primary" @click="claimId(v.name)">Claim Identity to Get {{v.gift}} Gift &nbsp; <i class="fa fa-angle-right"></i></a>
        </div>
      </div>
    </div>

    <div class="wrap">
      <ul class="pagination clearfix">
        <li><a href="" class="fa fa-chevron-left"></a></li>
        <li class="active"><a href="">1</a></li>
        <li><a @click="fetch_page(2)">2</a></li>
        <li><a @click="fetch_page(3)">3</a></li>
        <li><a @click="fetch_page(4)">4</a></li>
        <li class="ellip"><a></a></li>
        <li><a href="">{{total_data.total}}</a></li>
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
import api from '@/api'
import OAuthPopup from '@/utils/popup'

export default {
  name: 'Hackers',
  data () {
    return {
      menuShow:false,
      searchName:'',
      hackers:[
        {rank:1,avatar:'images/pig.png',id:'3096890688',name:'Peggi Whistle',follower:'722',date:'2018-06-20',time:'20:16:40',t1:'Turechain',c1:'999999',p1:'999999999',d1:'99999999',t2:'Wanchain',c2:'88600',p2:'632068',d2:'16000'},
      ],
      total_data: null,
      redirect_uri: 'http://ranking.dorahacks.com/',
    }
  },
  created () {
    this.fetch_page(1)
    this.$emit('navigator', '1')
  },
  methods: {
    claimId (name) {
      const url = 'https://github.com/login/oauth/authorize?client_id=ae68a17db805afccb892&scope=user'
      const popupOptions = { width: 1020, height: 618 }
      const redirect = this.redirect_uri
      this.oauthPopup = new OAuthPopup(url, 'github', popupOptions)
      this.oauthPopup.open(redirect, false).then((res) => {
        api.claim_auth(res.code, name).then((response) => {
          const dd = response.data
          if (dd.errcode) {
            alert(dd.errmsg)
            return
          }
          this.show = false
          this.$emit('update', dd)
        })
      })
    },
    fetch_page (page) {
      this.hackers = []
      api.github_contributors(page).then((res) => {
        const d = res.data
        if (d.errcode) {
          if (d.errmsg) {
            alert(d.errmsg)
          } else {
            alert('Internal Server Error')
          }
        } else {
          this.total_data = d
          for (let i = 0; i < 10; i += 1) {
            const tmp = d.items[i]
            const record = tmp.commit
            let h = {}
            if (record.length === 2) {
              h = {rank:tmp.rank,avatar:tmp.author_avatar,id:tmp.id,name:tmp.author_login, gift:tmp.gift, follower:'0',t1:record[0].chain_name,c1:record[0].commit,p1:record[0].add,d1:record[0].delete,t2:record[1].chain_name,c2:record[1].commit,p2:record[1].add,d2:record[1].delete}
            } else if (record.length === 1) {
              h = {rank:tmp.rank,avatar:tmp.author_avatar,id:tmp.id,name:tmp.author_login,gift:tmp.gift,follower:'0',t1:record[0].chain_name,c1:record[0].commit,p1:record[0].add,d1:record[0].delete,t2:'-',c2:'-',p2:'-',d2:'-'}
            } else {
              h = {rank:tmp.rank,avatar:tmp.author_avatar,id:tmp.id,name:tmp.author_login,gift:tmp.gift,follower:'0',t1:'-',c1:'-',p1:'-',d1:'-',t2:'-',c2:'-',p2:'-',d2:'-'}
            }
            this.hackers.push(h)
          }
        }
      })
    },
    toProfile (name, cid) {
      if (name===''&&cid===0) {
        alert('Please input hacker\'s name')
      }
      this.$router.push({'name': 'HackerGithub', query: { name: name, cid: cid }})
    }
  }
}
</script>

<style scoped>

</style>
