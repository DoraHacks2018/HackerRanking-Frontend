<template>
	<div>
		<div class="container">
			<div class="page-header">
				<h2 class="page-title">
					Create New Dapp
				</h2>
				
			</div>			
			<div class="panel">
				<div class="f">
				<form>
					<div class="f-upimg">
						<div class="f-upload">
							<i class="icon-image"></i>
							<input type="file" />
						</div>
					</div>
					<div class="f-line">
						
						<i>Project name</i>
						<input type="text" />
					</div>
					<div class="f-line">
						
						<i>Github link</i>
						<input type="text" />
					</div>					

					<div class="f-line">
						
						<i>Dapp introduction</i>
						<textarea></textarea>
					</div>					
			
					<div class="f-line">
						<div class="button">Update</div>
					</div>					
				</form>
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
  		name: 'CreateDapp',
  		data:function(){
  			return {
  				
  			}
  		}
	}
</script>
<style lang="less">
.panel{
	margin: 0 0 50px 0;
}
	.f{
		padding:30px 160px;
		margin:50px 0;
		&-upimg{
			display:flex;
			align-items:center;
			justify-content: center;
			i{
				font-size:40px;
			}
		}
		&-upload{
			width:130px;
			height:130px;
			position:relative;
			border-radius: 6px;
			border: 1px solid #d0d5d5;
			display:flex;
			align-items:center;
			justify-content: center;
			color:#d0d5d5;
			transition:.3s;
			&:hover{
				background:darken(#d0d5d5,20%);
				border:1px solid darken(#d0d5d5,30%)
			}

		}
		&-line{
			position:relative;
			margin:20px 0;
			i{
				position:absolute;
				left:0;
				top:0;
				line-height:36px;
				padding:0 15px;
				font-style:normal;
				color:#A4A4A4;
			}
			input{
				padding:10px 8px 10px 100px;
			}
			textarea{
				padding-top:40px;
			}
			input,textarea{
				border:1px solid #d0d5d5;
				transition:.3s;
				resize:none;
				color:#444;
				&:focus{
					border:1px solid darken(#d0d5d5,20%);
				}
			}
		}
	}
</style>