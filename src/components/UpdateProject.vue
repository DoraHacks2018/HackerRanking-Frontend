/* eslint-disable */
<template>
  <div>
    <div class="wrap">
      <a class="text-center ad" href="#">
        <img :src="require('@/images/banner-bch.png')" alt="" style="width: 100%">
      </a>
    </div>


    <div class="wrap">
      <div class="match">
        <div class="tab">
          <ul class="clearfix">
            <li><router-link to="/hackathon/detail"><a>Details</a></router-link></li>
            <li><router-link to="/hackathon/participants"><a>Participants</a></router-link></li>
            <li><router-link to="/hackathon/team"><a>Organize Teams</a></router-link></li>
            <li class="active"><a>Update Projects</a></li>
            <li><router-link to="/hackathon/ranking"><a>Ranking</a></router-link></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="upinfo-box" style="margin-top: 0">
      <div class="wrap updates">
        <div class="form">
          <form action="">
            <div class="input-group clearfix">
              <label for="name" class="label">Project name</label>
              <div class="form-info">
                <div class="area" style="width:100%">
                  <input type="text" id="name" @input="input($event,'name')" v-model="name">
                  <div class="count">
                    <span class="cur" :class="{red:nameCout>nameMax}">{{nameCout}}</span> /
                    <span class="all">{{nameMax}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="link" class="label">Github link</label>
              <div class="form-info">
                <input type="text" id="link" v-model="git">
              </div>
            </div>

            <div class="input-group clearfix">
              <label for="slogan" class="label">introduction</label>
              <div class="form-info">
                <div class="area" style="width: 100%">
                  <textarea name="" rows="6" placeholder="What problem we are committed to solving.What approach do we take. What we have already done." @input="input($event,'intro')" id="slogan" style="width: 100%" v-model="intro"></textarea>
                  <div class="count">
                    <span class="cur" :class="{red:introCount>introMax}">{{introCount}}</span> /
                    <span class="all">{{introMax}}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-group clearfix">
              <label for="demolink" class="label">
                <input type="checkbox" class="magic magic-check" id="m1" v-model="link" @change="setLink">
                <label for="m1">Demo link</label>

              </label>
              <div class="form-info">
                <input type="text" id="demolink" v-model="demo">
              </div>
            </div>

            <div class="input-group clearfix">
              <label for="demodesign" class="label">
                <input type="checkbox" class="magic magic-check" id="m2" v-model="photo" @change="setPhoto">
                <label for="m2">Demo design</label>

              </label>
              <div class="form-info">
                <ul class="design-imgs clearfix">
                  <li v-for="v,i in designs">
                    <img :src="v" alt="">
                    <div class="delete"><strong @click="del(i)">Delete</strong></i></div>
                  </li>
                  <li>
                    <div class="add add-sqare">
                      <input type="file" @change="change($event,'design')">
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="input-group clearfix">
              <label for="logo" class="label">
                Project Logo
              </label>
              <div class="form-info">
                <div class="add addone" :class="{bgnone:logo}">
                  <input type="file" @change="change($event,'logo')">
                  <img :src="logo" alt="">
                </div>
              </div>
            </div>

            <div class="input-group">
              <button type="submit" class="btn-primary" @click="submit">Submit And Update</button>
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
import api from '@/api'

export default {
  name: 'UpdateProject',
  data () {
    return {
      menuShow:false,
      nameCout:0,
      nameMax:30,
      introCount:0,
      introMax:800,
      logo:'',
      designs:[],
      photo: false,
      link: false,
      name: '',
      git: '',
      intro: '',
      demo: '',
      dphotos: [],
      lphoto: ''
    }

  },
  methods:{
    input(event,str){
      if(str == 'name'){
        this.nameCout = event.target.value.length
      }
      if(str == 'intro'){
        this.introCount = event.target.textLength
      }
    },
    del(n){
      this.designs.splice(n,1)
    },
    change(event,str){
      var _name, _fileName;

      _name = event.target.value;

      _fileName = _name.substring(_name.lastIndexOf(".") + 1).toLowerCase();
      if (_fileName !== "png" && _fileName !== "jpg") {
        alert("上传图片格式不正确，请重新上传");
      } else {
        let url = `${window.URL.createObjectURL(event.target.files[0])}`
        if(str=='design'){
          this.designs.push(url)
          this.dphotos.push(event.target.files[0])
        }else{
          this.logo = url;
          this.lphoto = event.target.files[0]
        }
      }
    },
    setLink () {
      if (this.link) {
        this.photo = false
      }
    },
    setPhoto () {
      if (this.photo) {
        this.link = false
      }
    },
    submit () {
      const formd = new FormData()
      if (this.lphoto) {
        formd.append('logo', this.lphoto)
      } else {
        alert('Please upload the logo')
        return
      }
      formd.append('name', this.name)
      formd.append('git', this.git)
      formd.append('desc', this.intro)
      formd.append('demo', this.demo)
      api.upload_project(formd).then((res) => {
        const d = res.data
        if (d.errcode) {
          alert(d.errmsg)
        } else {
          alert('Upload Success')
        }
      })
    }
  }

}
</script>

<style scoped>

</style>
