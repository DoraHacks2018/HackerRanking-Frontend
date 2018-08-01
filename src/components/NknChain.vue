<template>
	<div>
		<div class="k-banner">
			
		</div>

		<div class="container">
			<div class="panel k">
				<div class="k-img">
					<div class="k-img-cont">
						<img :src="require('@/images/knk.png')" alt="Knk">
					</div>
					<div class="button button-line k-fllow button-radius"
						:class="{buttonActive:fllowing}" 
						v-on:click="fllowing = !fllowing">
						<span v-if="fllowing">fllowing</span>
						<span v-else>fllow</span>
					</div>
				</div>
				<div class="k-content">
					<h2 class="k-title">NKN</h2>
					<div class="k-info">
						<a href="https://www.nkn.org" target="_bank">
						<i class="icon-www"></i>https://www.nkn.org</a>
						<a href="https://www.nkn.org" target="_bank">
						<i class="icon-book"></i>https://www.nkn.org
						
						</a>						
					</div>

					<div class="k-cont">
						<p>
						NKN is a new type of network infrastructure and ecosystem driven by blockchain technology that is open, decentralized and shared by communities. NKN encourages users to share redundant network bandwidth, assists equipment service providers to effectively allocate network resources, and encourages individuals and enterprises to deploy more nodes to join the network to provide data transmission services for other nodes, thereby obtaining economic benefits. The goal of NKN is to use blockchain technology to create new opportunities for network transmission and solve the problems of resource allocation, transmission efficiency and value transfer in the current network. After becoming the Ethereum blockchain computing capability, the Filecoin/IPFS blockchains the storage capacity and then links the other information technology core element - the network transmission resource block to the public chain infrastructure. Its technological innovations are dynamic routing, network relay certification, highly scalable consensus mechanisms and resource sharing incentives.
						</p>
					</div>
					<div class="k-bar">
						<div class="k-bar-left">
							<div class="button button-line button-radius">
								<i class="icon-github"></i>
								GitHub
							</div>
							<div class="button button-line button-radius">
								<i class="icon-lesson"></i>
								Online course
							</div>
						</div>
						<div class="k-bar-right">
							<div class="button button-line-grey button-radius"
								:class="{buttonLike:like}"
								v-on:click="likeProject">
								<i class="icon-like"></i>
								like({{heart}})
							</div>
							<div class="button button-radius">
								<i class="icon-share"></i>
								Share
							</div>
						</div>
					</div>

					<div class="k-title-bar">
						<i class="icon-cup"></i>
						Dapp incentive plan Reward rules
					</div>
					<div class="k-cont">
						<p>Marriott Rewards membership and its benefits are offered at the discretion of Marriott. Marriott and its travel partners have the right, without limitation, to change, limit, modify or cancel Program Rules, regulations, rewards, and reward levels at any time, with or without notice, even though such changes may affect the value of points or miles already accumulated, the ability to use accumulated points or miles, or the ability to obtain certain rewards. Marriott and its travel partners may, among other things…</p>
						<p>

increase or decrease the number of points or miles received for a stay or required for a reward;</p>
<p>withdraw, limit, modify, or cancel any reward or category;</p>
<p>add blackout dates, limit rooms available for reward redemption at any participating hotel, change or restrict participating hotels, or otherwise restrict the continued availability of rewards;</p><p>
change program benefits, travel partners, locations served by Marriott or its travel partners, conditions of participation, rules for earning, redeeming, retaining, or forfeiting points or miles, or rules governing the use of rewards;</p><p>
change or cancel its travel partner rewards. The accumulation of points or miles does not entitle members to any vested rights with respect to points, miles, rewards, or program benefits. In accumulating points or miles, members may not rely upon the continued availability of any reward or reward level.</p>
					</div>

					<div class="k-submit">
						<div class="button button-grey" @click="toCreateDapp">
							GitHub 核心代码提交
						</div>
						<div class="button button-grey-line"  @click="toPlan">
							Dapp incentive plan
						</div>						
					</div>
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
  name: 'NknChain',
  data() {
    return {
      fllowing:false,
 	  like:false,
 	  heart:39
    }
  },
  methods: {
    likeProject() {
      let status = !this.like
      this.like = status
      this.heart = status ? this.heart+1 : this.heart-1
    },
    toCreateDapp(){
    	this.$router.push('/partner/createdapp')
    },
    toPlan(){
    	this.$router.push('/partner/incentiveplan')
    }
  }
}
</script>

<style lang="less" scoped>
	.k{
		padding:50px;
		padding-left:220px;
		z-index:2;
		position: relative;
		margin-top:-320px;
		margin-bottom:40px;
		box-shadow: 0 8px 20px 0 rgba(180,180,180,0.5);
		&-banner{
			height:500px;
		   	z-index:1;
		}

		&-img{
			width:130px;
			position:absolute;
			left:50px;
			top:50px;
			text-align:center;
		
			&-cont{
				width:130px;
				height:130px;
				border: 1px solid #D9D9D9;
				border-radius: 12px;
				overlfow:hidden;
				display:flex;
				align-item:center;
				justify-content:center;

				img{
					width:100%;
					display:block;
						border-radius: 12px;
				}
			}
			.button{
				padding:8px 0;
				margin:20px 20px;
				display:block;
			}
		}
		&-title{
			font-size:30px;
			font-weight:700;
			color:#444;
			&-bar{
				clear:both;
				padding:16px 0;
				border-bottom:1px solid #d0d5d5;
				font-size:22px;
				margin:100px 0 20px 0;
			}
		}
		&-info{
			margin:20px 0 30px;
			&>a{
				color:#444;
				    transition: 0.4s;
				    margin-right:20px;
				    font-weight:normal;

				    i{
						margin-right:6px;
						position:relative;
						bottom:-1px;
				    }
				&:hover{
					color:#4cc6c5;
				}
			}
		}
		&-cont{
			color:#555;
			p{
				line-height:2;
				font-size:15px;
				text-align: justify;
				margin-bottom:8px;
				color:#555;
			}
		}
		&-bar{
			overlfow:hidden;
			margin:20px 0;
			&-left{
				float:left;
			}
			&-right{
				float:right;
			}
		}
		&-submit{
			margin-top:40px;
			display:flex;
			align-item:center;
			justify-content: space-between;
			.button{
				width:48%;
				padding:10px 0;
				line-height:30px;
				padding:8px 50px;
				text-align:center;
			}
		}
	}
</style>
