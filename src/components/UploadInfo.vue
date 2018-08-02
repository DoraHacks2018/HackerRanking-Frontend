/* eslint-disable */
<template>
    <div>
      <div class="upinfo-box">
        <div class="wrap">
          <h2 class="big-title">Information Completion</h2>
          <div class="form">
            <form action="">
              <div class="realyou add addone circle" :class="{bgnone:ava}">
                <input type="file" @change="uploadAvatar($event)" title="选择头像">
                <img :src="ava" alt="">
              </div>
              <p class="p">Upload real you</p>
              <div class="input-group clearfix">
                <label for="name" class="label">真实姓名</label>
                <div class="form-info">
                  <input type="text" id="name" style="-webkit-appearance:none;" v-model="name">
                </div>
              </div>
              <div class="input-group clearfix">
                <label for="residence" class="label">所在城市</label>
                <div class="form-info">
                  <input type="text" id="residence" v-model="city">
                </div>
              </div>
              <div class="input-group clearfix" style="margin-bottom: 10px">
                <label class="label">比赛角色</label>
                <div class="form-info">
                  <input class="magic btn-check" type="radio" name="role" id="stack">
                  <label for="stack" class="fontnormal">全栈</label>
                  <input class="magic btn-check" type="radio" name="role" id="designer">
                  <label for="designer" class="fontnormal">前端</label>
                  <input class="magic btn-check" type="radio" name="role"  id="dapps">
                  <label for="dapps" class="fontnormal">后端</label>
                  <input class="magic btn-check" type="radio" name="role" id="security">
                  <label for="security" class="fontnormal">产品设计</label>
                  <input class="magic btn-check" type="radio" name="role" id="chain">
                  <label for="chain" class="fontnormal">UI</label>
                  <input class="magic btn-check" type="radio" name="role" id="hacker">
                  <label for="hacker" class="fontnormal">其他</label>
                </div>
              </div>
              <div class="input-group clearfix">
                <label for="work" class="label">学校/公司</label>
                <div class="form-info">
                  <input type="text" id="work" v-model="org">
                </div>
              </div>
              <div class="input-group clearfix">
                <label for="address" class="label">发放奖金BCH钱包地址</label>
                <div class="form-info">
                  <input type="text" id="address" v-model="bch">
                </div>
              </div>
              <div class="input-group clearfix">
                <label for="slogan" class="label">召集队友宣言(Optional)</label>
                <div class="form-info">
                  <div class="area">
                    <textarea name="" rows="5" v-model="slogan" placeholder="eg: I have a good idea about..." @input="input($event)" id="slogan"></textarea>
                    <div class="count">
                      <span class="cur" :class="{red:curTxtCount>maxTxtCount}">{{curTxtCount}}</span> /
                      <span class="all">{{maxTxtCount}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!--<div class="input-group clearfix">-->
                <!--<label for="" class="label">&nbsp;</label>-->
                <!--<div class="form-info">-->
                  <!--<input class="magic magic-check" type="checkbox" id="save">-->
                  <!--<label for="save">Save for next Hackthon</label>-->
                <!--</div>-->
              <!--</div>-->
              <div class="input-group">
                <button type="submit" class="btn-primary" @click="submit">Submit And Upload</button>
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
  name: 'UploadInfo',
  data () {
    return {
      menuShow:false,
      maxTxtCount:100,
      curTxtCount:0,
      ava:'',
      avatar: null,
      name: '',
      city: '',
      role: '',
      org: '',
      bch: '',
      sloagn: '',
      rolecontent: [
        'Full Stack',
        'Frontend',
        'Backend',
        'Product',
        'UI',
        'Others'
      ],
      token: null
    }
  },
  created () {
    this.token = window.cookieStorage.getItem('token')
  },
  methods:{
    input(event){
      this.curTxtCount = event.target.textLength
      if(this.curTxtCount>this.allTxtCount){
        return false;
      }
    },

    uploadAvatar(event){
      var _name, _fileName;

      _name = event.target.value;
      this.avatar = event.target.files[0]
      _fileName = _name.substring(_name.lastIndexOf(".") + 1).toLowerCase();
      if (_fileName !== 'png' && _fileName !== 'jpg') {
        alert('我们只支持png和jpg的图片格式. 请重新上传.');
      } else {
        let url = `${window.URL.createObjectURL(event.target.files[0])}`
        this.ava = url
      }
    },
    submit () {
      const formd = new FormData()
      if (this.avatar) {
        formd.append('file', this.avatar)
      }
      else {
        alert('Please upload your avatar')
        return
      }
      const radio = document.getElementsByName('role')
      let role = null
      for (let i = 0; i < radio.length; i += 1) {
        if (radio[i].checked) {
          formd.append('role', this.rolecontent[i])
          role = this.rolecontent[i]
        }
      }
      formd.append('name', this.name)
      formd.append('city', this.city)
      formd.append('org', this.org)
      formd.append('bch', this.bch)
      formd.append('slogan', this.slogan)
      api.upload_info(formd, this.token).then((res) => {
        const d = res.data
        if (d.errcode) {
          if (d.errmsg) {
            alert(d.errmsg)
          } else {
            alert('Upload Fail..Please upload again')
          }
          console.log('fail')
        } else {
          alert('Upload Success')
          this.$router.push({'name': 'Participants', query: { role: role}})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
