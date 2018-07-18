<template>
  <div>
    <div class="upinfo-box">
      <div class="wrap">
        <h2 class="big-title">Profile Edition</h2>
        <div class="form">
          <form action="">
            <div class="realyou add addone circle" :class="{bgnone:avatar}">
              <input type="file" @change="uploadAvatar($event)" title="选择头像">
              <img :src="avatar" alt="">
            </div>
            <p class="p">Upload avatar</p>
            <div class="input-group clearfix">
              <label for="name" class="label">Crypto name</label>
              <div class="form-info">
                <input type="text" id="name" >
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="residence" class="label">Residence</label>
              <div class="form-info">
                <input type="text" id="residence">
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="email" class="label">Email Adress</label>
              <div class="form-info">
                <input type="text" id="email">
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="" class="label">Connect with Github</label>
              <div class="form-info">
                <a href="" class="connectgit"></a>
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="gift" class="label">Gift Wallet address</label>
              <div class="form-info">
                <input type="text" id="gift">
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="eth" class="label">ETH address(optional)</label>
              <div class="form-info">
                <input type="text" id="eth">
              </div>
            </div>

            <div class="input-group">
              <button type="submit" class="btn-primary">Save Changes</button>
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
  name: 'ProfileEdit',
  data () {
    return {
      menuShow: false,
      maxTxtCount: 100,
      curTxtCount: 0,
      avatar: ''
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
        this.avatar = url
      }
    }

  }
}
</script>

<style scoped>

</style>
