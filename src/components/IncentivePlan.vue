<template>
<div>
		<div class="container">
			<div class="p-header">
				<h2 class="p-title">
					NKN DApp Incentive Plan
				</h2>
				<div class="p-header-buttons">
					<a class="button button-line button-radius" href="https://github.com/nknorg"><i class="icon-github"></i>GitHub</a>
					<a class="button button-radius"><i class="icon-lesson"></i>Online course</a>
				</div>
			</div>
			<div class="panel p-rules">
				<div class="p-title"><i class="icon-cup"></i>Reward rules</div>
				<div class="p-cont">
					Marriott Rewards membership and its benefits are offered at the discretion of Marriott. Marriott and its travel partners have the right, without limitation, to change, limit, modify or cancel Program Rules, regulations, rewards, and reward levels at any time, with or without notice, even though such changes may affect the value of points or miles already accumulated, the ability to use accumulated points or miles, or the ability to obtain certain rewards. Marriott and its travel partners may, among other things…
				</div>
			</div>

			<div class="p-rank">
				<table class="p-table">
					<tr>
						<th align="left">Contributor Rank</th>
						<th>Commits</th>
						<th align="left">GitHub address</th>
					</tr>
					<tr v-for="item, index in rank">
						<td>
							<div class="p-rank-info">
								<i class="icon-rank"><b>{{index+1}}</b></i>
								<img :src="item.author_avatar"></img>
								<span>{{item.author_login}}</span>
							</div>
						</td>
						<td align="center">{{item.commit}}</td>
						<td><a href="{item.github}">{{item.github}}</a></td>
					</tr>
				</table>
			</div>
		</div>

		  </div>
</template>
<script>
import api from '@/api'

export default {
  name: 'IncentivePlan',
  data (){
    return {
      rank:[
        // {
        // 	userImg:'https://sfault-avatar.b0.upaiyun.com/283/845/2838459588-58328e275a4c3_big64',
        // 	name:"Jonas Brooke",
        // 	commits:490,
        // 	rank:1,
        // 	address:'https://github.com/jonasBrooke'
        // },{
      ]
    }
  },
  created () {
    api.nkn_contributors().then((res) => {
      const d = res.data
      console.log(d)
      if (d.errcode) {
        alert(d.errmsg)
      } else {
        this.rank = d
      }
    })
  },
  methods: {
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
		font-weight:800;
		i{
			margin-right:6px;
		}
	}
	&-cont{
		line-height:2;
		font-size:13px;
		color:#727878;
	}
	&-rank{
		margin:50px 0;
		border:1px solid #E4E4E4;
		border-radius:6px;
		table{
			width:100%;
			td{
				border-bottom:1px solid #E4E4E4;
				padding:15px 6px;
				font-weight:normal;
				font-size:15px;
				color:#727878;

				a{

					color:#666;
					&:hover{
						color:#4CC6C5;
						text-decoration:underline;
						font-weight:normal;
					}
				}
			}
			tr{
				    transition: .3s;
				&:hover{
					background:#eee;
					td{
						color:#444;
					}
				}
				&:last-child{
				td{
					border-bottom:none;
				}
			}
			}
			th{
				padding:15px 6px;
				border-bottom:1px solid #E4E4E4;
				background: #FCFCFC;
				border-radius: 6px 6px 0 0;
				font-weight:800;
				color:#727878;
			}
		}
		&-info{
			display:flex;
			align-items:center;

			i{
				text-align:center;
				display:flex;
				align-items:center;
				justify-content:center;
				position:relative;width:80px;

				&:before{
					font-size:36px;
					position:absolute;
					left:0;
					right:0;
					bottom:0;
					top:50%;
					margin-top:-18px;
					color:#eee;
					z-index:1;
					display:block;
				}
				b{
					z-index:2;
				}
			}
			img{
				width:24px;
				height:24px;
				    border-radius: 100px;
				    margin:0 5px;
			}
		}
	}
}
</style>
