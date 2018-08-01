<template>
	<div>
		<div class="container">
			<div class="p-header">
				<h2 class="p-title">
					NKH Dapp incentive plan
				</h2>
				<div class="p-header-buttons">
					<a class="button button-line button-radius"><i class="icon-github"></i>GitHub</a>
					<a class="button button-radius"><i class="icon-lesson"></i>Online course</a>
					<a class="button button-radius button-line"><i class="icon-newdapp"></i>New Dapp</a>
				</div>
			</div>
			<div class="panel p-rules">
				<div class="p-title"><i class="icon-cup"></i>Reward rules</div>
				<div class="p-cont">
					Marriott Rewards membership and its benefits are offered at the discretion of Marriott. Marriott and its travel partners have the right, without limitation, to change, limit, modify or cancel Program Rules, regulations, rewards, and reward levels at any time, with or without notice, even though such changes may affect the value of points or miles already accumulated, the ability to use accumulated points or miles, or the ability to obtain certain rewards. Marriott and its travel partners may, among other things…
				</div>
			</div>

			<div class="panel v-project">
				<div class="v-img">
					<img :src="require('@/images/knk.png')" alt="">
					<div class="button button-line button-radius">Voted</div>
				</div>
				<div class="v-info">
				<h2 class="v-title">Hackathon Dapp</h2>
				<div class="v-bar">
					<div>
					<div class="button button-line button-min"><i class="icon-lab"></i>Demo</div>
					<div class="button button-line button-min"><i class="icon-github"></i>GitHub</div>
					</div>
				</div>
				<div class="v-cont">
				<p>
				While the book is mostly a mathematician’s case for choosing a life of faith and belief, the more curious thing about it is its clear and lucid ruminations on what it means to be human. It’s a blueprint of our psychology long before psychology was deemed a formal discipline.</p>
				</div>
				<div class="v-bar">
					<div class="v-voted">
						<i class="icon-voted"></i>
						232 voted
					</div>
					<div class="v-edit">
						<div class="button button-line-grey button-min"><i class="icon-edit"></i>Edit</div>
						<div class="button button-line-grey button-min">Delete</div>
					</div>
				</div>
				</div>
			</div>
<div class="panel v-project">
				<div class="v-img">
					<img :src="require('@/images/knk.png')" alt="">
					<div class="button button-line button-radius">Voted</div>
				</div>
				<div class="v-info">
				<h2 class="v-title">Hackathon Dapp</h2>
				<div class="v-bar">
					<div>
					<div class="button button-line button-min"><i class="icon-lab"></i>Demo</div>
					<div class="button button-line button-min"><i class="icon-github"></i>GitHub</div>
					</div>
				</div>
				<div class="v-cont">
				<p>
				While the book is mostly a mathematician’s case for choosing a life of faith and belief, the more curious thing about it is its clear and lucid ruminations on what it means to be human. It’s a blueprint of our psychology long before psychology was deemed a formal discipline.</p>
				</div>
				<div class="v-bar">
					<div class="v-voted">
						<i class="icon-voted"></i>
						232 voted
					</div>
					<div class="v-edit">
						<div class="button button-line-grey button-min"><i class="icon-edit"></i>Edit</div>
						<div class="button button-line-grey button-min">Delete</div>
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
  		name: 'PlanVoted',
  		data:function(){
  			return {
  				
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