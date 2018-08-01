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
					<div class="f-line">
						<i>Project logo</i>
						<div class="f-upimg">
							<div class="f-upload">
								<div class="ico icon-image"></div>
								<input type="file" />
							</div>
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
						<div class="f-length">9/92</div>
					</div>					
			
					<div class="f-line">
						<div class="button button-max">Update</div>
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
		padding:0 60px;
		margin:50px 0;
		&-length{
			position:absolute;
			right:10px;
			bottom:10px;
			font-size:14px;
			color:darken(#d0d5d5,4%);
		}
		&-upimg{
		
			.ico{
				font-size:22px;
			}
		}
		&-upload{
			width:100px;
			height:100px;
			position:relative;
			border-radius: 6px;
			border: 1px dashed #d0d5d5;
			display:flex;
			align-items:center;
			justify-content: center;
			color:#d0d5d5;
			transition:.3s;
			display:flex;
			align-items:center;
			justify-content: center;			
			&:hover{
				background:lighten(#44c4c2,44%);
				border-color:darken(#44c4c2,2%);
				.ico{
					color:#44c4c2;
				}
			}

		}
		&-line{
			position:relative;
			margin:20px 0;
			padding-left:150px;
			i{
				position:absolute;
				left:0;
				top:0;
				line-height:36px;
				width:150px;
				padding:0 15px;
				font-style:normal;
				color:#A4A4A4;
				text-align:right;
			}
			input{
				padding:10px 8px;
			}
			textarea{
			
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