<template>
  <div class="container">
			<div class="p-header flex">
        <div class="pull-left flex">
				  <h2 class="p-title">NKN DApp Incentive Plan</h2>
          <div class="p-header-buttons">
            <a class="button button-line button-radius" href="https://github.com/nknorg"><i class="icon-github"></i>GitHub</a>
            <a class="button button-radius"><i class="icon-lesson"></i>Online course</a>
          </div>
        </div>
				<div class="p-header-buttons pull-right">

					<a class="button button-radius button-line" @click="toCreate"><i class="icon-newdapp"></i>New DApp</a>
          <a class="button button-radius" @click="toMine" v-if="logined">My DApp</a>
        </div>
			</div>
			<div class="panel p-rules">
				<div class="p-title"><i class="icon-cup"></i>Reward rules</div>
				<div class="p-cont">
					Marriott Rewards membership and its benefits are offered at the discretion of Marriott. Marriott and its travel partners have the right, without limitation, to change, limit, modify or cancel Program Rules, regulations, rewards, and reward levels at any time, with or without notice, even though such changes may affect the value of points or miles already accumulated, the ability to use accumulated points or miles, or the ability to obtain certain rewards. Marriott and its travel partners may, among other things…
				</div>
			</div>

			<div class="panel v-project" v-for="dapp in dapps">
				<div class="v-img">
					<img :src=dapp.logo alt="">
					<div class="button button-line button-radius" :disable="voted">Vote</div>
				</div>
				<div class="v-info">
				<h2 class="v-title">{{dapp.name}}</h2>
				<div class="v-bar">
					<div>
					<a :href=dapp.demo><div class="button button-line button-min"><i class="icon-lab"></i>Demo</div></a>
					<a :href=dapp.git><div class="button button-line button-min"><i class="icon-github"></i>GitHub</div></a>
					</div>
				</div>
				<div class="v-cont">
				<p>{{dapp.intro}}</p>
				</div>
				<div class="v-bar">
					<div class="v-voted">
						<i class="icon-voted"></i>
						{{dapp.vote}} voted
					</div>
					<!--<div class="v-edit">-->
						<!--<div class="button button-line-grey button-min"><i class="icon-edit"></i>Edit</div>-->
						<!--<div class="button button-line-grey button-min">Delete</div>-->
					<!--</div>-->
				</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  name: 'PlanVoted',
  data () {
    return {
      dapps: [],
      voted: false,
      logined: false,
      rules: 'While the book is mostly a mathematician’s case for choosing a life of faith and belief, the more curious thing about it is its clear and lucid ruminations on what it means to be human. It’s a blueprint of our psychology long before psychology was deemed a formal discipline',
    }
  },
  created () {
    let uid = window.cookieStorage.getItem('id')
    if (!uid || uid === 'anyValue') {
      uid = 0
    } else {
      uid = parseInt(uid)
      this.logined = true
    }
    api.nkn_dapps_list(uid).then((res) => {
      const d = res.data
      console.log(d)
      if (d.errcode) {
        alert(d.errmsg)
      } else {
        this.dapps = d.dapps
        if (uid !== 0 && d.voted_dapp_id !== 0) {
          this.voted = true
        }
      }
    })
  },
  methods: {
    toCreate () {
      const uid = window.cookieStorage.getItem('id')
      if (!uid || uid === 'anyValue') {
        alert('请先登录/注册')
        return
      }
      this.$router.push('/partner/nkn/createdapp')
    },
    toMine () {
      this.$router.push('/partner/nkn/my-dapp')
    }
  }
}
</script>
<style lang="less">
.p{
	&-rules{
		padding:30px;
		.p-title{
			font-size:20px;
		}
	}
	&-header{
		display:flex;
		align-items:center;
	    justify-content: space-between;
	    margin:40px 0 20px;

	}
	&-title{
		font-size:24px;
		margin-bottom:20px;
    margin-right: 20px;
		font-weight:800;
    line-height: 0.5;
		i{
			margin-right:6px;
		}
	}
	&-cont{
		line-height:2;
		font-size:13px;
		color:#727878;
	}
}
.v{
	&-project{
		padding:30px;
		padding-left:160px;
		margin:20px 0;
	}
	&-title{
		line-height:2;
		font-size:18px;
	}
	&-voted{
		font-size:12px;
		color:#939999;
		margin-top:18px;
		i{
			color:#4CC6C5;
		}
	}
	&-bar{
		margin:10px 0 0;
		display:flex;
		align-items:center;
		justify-content: space-between;
	}
	&-cont{
		line-height:1.6;
		margin-top:10px;
		color:#727878;
		p{
			color:#727878;
		}
	}
	&-img{
		width:100px;
		height:100px;
		position:absolute;
		left:30px;
		top:30px;
		img{
			width:100px;
			height:100px;
		}
		.button{
			width:100%;
			margin-top:14px;
			text-align:center;
			padding:8px 0;
		}
	}
}
</style>
