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
								<div class="add addone" :class="{bgnone:photo}">
								<input type="file" @change="uploadLogo($event)"/>
                <img :src="photo" alt="">
                </div>
              </div>
						</div>
					</div>

					<div class="f-line">
						<i>Project name</i>
						<input type="text" v-model="name"/>
					</div>
					<div class="f-line">
						<i>Github link</i>
						<input type="text" v-model="git"/>
					</div>

					<div class="f-line">
						<i>DApp introduction</i>
						<textarea v-model="intro"></textarea>
						<div class="f-length"></div>
					</div>

					<div class="f-line">
						<div class="button button-max" @click="upload">Update</div>
            <div class="button button-max button-line" @click="goBack">Cancel</div>
          </div>
				</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import api from '@/api'

export default {
  name: 'CreateDapp',
  data () {
    return {
      logo: '',
      photo: '',
      logo_uri: null,
      name: '',
      git: '',
      intro: '',
      demo: ''
    }
  },
  created () {
    const token = window.cookieStorage.getItem('token')
    if (this.$route.query.did) {
      const did = this.$route.query.did
      api.get_dapp_info(did, token).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          console.log(d)
          this.photo = d.logo
          this.logo_uri = d.logo
          this.name = d.name
          this.git = d.git
          this.intro = d.intro
          this.demo = d.demo
        }
      })
    }
  },
  methods: {
    uploadLogo(event){
      var _name, _fileName;
      _name = event.target.value;
      _fileName = _name.substring(_name.lastIndexOf(".") + 1).toLowerCase();
      if (_fileName !== 'png' && _fileName !== 'jpg') {
        alert('我们只支持png和jpg的图片格式. 请重新上传.');
      } else {
        let url = `${window.URL.createObjectURL(event.target.files[0])}`
        this.photo = url
        this.logo = event.target.files[0]
      }
    },
    upload () {
      const token = window.cookieStorage.getItem('token')
      let formd = new FormData()
      if (this.logo) {
        formd.append('logo', this.logo)
      } else {
        alert('请上传logo')
        return
      }
      formd.append('name', this.name)
      formd.append('git', this.git)
      formd.append('intro', this.intro)
      formd.append('demo', this.demo)
      formd.append('logo_uri', this.logo_uri)
      api.upload_dapp(formd, token).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          alert('上传成功')
        }
      })
    },
    goBack () {
      this.$router.push('/partner/nkn/dapps')
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
