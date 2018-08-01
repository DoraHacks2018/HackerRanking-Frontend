<template>
  <div>
    <div class="upinfo-box">
      <div class="wrap">
        <h2 class="big-title">Profile Edition</h2>
        <div class="form">
          <form action="">
            <div class="realyou add addone circle" :class="{bgnone:ava}">
              <input type="file" @change="uploadAvatar($event)" title="选择头像">
              <img :src="ava" alt="">
            </div>
            <p class="p">Upload avatar</p>
            <!--<div class="input-group clearfix">-->
              <!--<label for="name" class="label">Crypto name</label>-->
              <!--<div class="form-info">-->
                <!--<input type="text" id="name" >-->
              <!--</div>-->
            <!--</div>-->
            <div class="input-group clearfix">
              <label for="residence" class="label">Residence</label>
              <div class="form-info">
                <input type="text" id="residence" v-model="city">
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="email" class="label" >Email Adress</label>
              <div class="form-info">
                <input type="text" id="email" v-model="email">
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="" class="label">Connect with Github</label>
              <div class="form-info" @click="bindGithub">
                <a href="" class="connectgit"></a>
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="gift" class="label">Gift Wallet address</label>
              <div class="form-info">
                <input type="text" id="gift" v-model="gift">
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="eth" class="label">ETH address(optional)</label>
              <div class="form-info">
                <input type="text" id="eth" v-model="eth">
              </div>
            </div>

            <div class="input-group">
              <button type="submit" class="btn-primary" @click="save">Save Changes</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import OAuthPopup from '@/utils/popup'

export default {
  name: 'ProfileEdit',
  data () {
    return {
      menuShow: false,
      maxTxtCount: 100,
      curTxtCount: 0,
      avatar: '',
      city: '',
      email: '',
      gift: '',
      ava: '',
      client_id: ''
    }
  },
  methods: {
    input (event) {
      this.curTxtCount = event.target.textLength
      if(this.curTxtCount>this.allTxtCount){
        return false;
      }
    },

    uploadAvatar (event) {
      var _name, _fileName;

      _name = event.target.value;

      _fileName = _name.substring(_name.lastIndexOf(".") + 1).toLowerCase();
      if (_fileName !== "png" && _fileName !== "jpg") {
        alert("上传图片格式不正确，请重新上传");
      } else {
        let url = `${window.URL.createObjectURL(event.target.files[0])}`
        this.ava = url
      }
    },
    save () {
      const formd = new FormData()
      if (this.avatar) {
        formd.append('file', this.avatar)
      }
      else {
        alert('Please upload your avatar')
        return
      }
      formd.append('city', this.city)
      formd.append('email', this.email)
      formd.append('gift', this.gift)
      formd.append('eth', this.eth)
      api.upload_profile(formd).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          alert('Edit Success')
        }
      })
    },
    bindGithub () {
      const url = 'https://github.com/login/oauth/authorize?client_id='.concat(this.client_id, '&scope=user')
      const popupOptions = { width: 1020, height: 618 }
      const redirect = this.redirect_uri
      this.oauthPopup = new OAuthPopup(url, 'github', popupOptions)
      this.oauthPopup.open(redirect, false).then((res) => {
        api.bind_git(res.code).then((response) => {
          const dd = response.data
          if (dd.errcode) {
            alert(dd.errmsg)
            return
          }
          this.show = false
          this.$emit('update', dd)
        })
      })
    }

  }
}
</script>

<style scoped>

</style>
