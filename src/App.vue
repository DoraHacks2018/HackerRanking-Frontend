<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div id="header">
      <div class="wrap">
        <div class="header-top" @click="toHome">
          <router-link to="/">
          <a class="header-logo"></a>
          <span class="header-nav-btn">
					<i @click="menuShow = !menuShow" class="fa fa-bars" aria-hidden="true"></i>
          </span></router-link>
        </div>
        <ul class="header-nav" :class="{show:menuShow}">
          <li class="item" :class="{active: isPage[3]}" @click="toPlan"><a>DEVELOPER INCENTIVE PLAN</a></li>
          <li class="item" :class="{active: isPage[0]}" @click="toDetail"><a>HACKATHON</a></li>
          <li class="item" :class="{active: isPage[1]}" @click="toHacker"><a>HACKERS</a></li>
          <!--<li class="item" :class="{active: isPage[2]}" @click="toProjects"><a href="#">PROJECTS</a></li>-->
          <li class="item" v-if="!user" ><a href="javascript:;" class="user" @click="showLogin">LOGIN/SIGNUP</a></li>
          <li class="item" v-else><a class="user" @click="toProfile"><img :src=user.avatar alt="" width="45" height="40"></a></li>
          <!--<li class="item"><a href="#" class="new" @click.stop="showNews" :class="{active:hasNew}"><span></span></a></li>-->
          <!--<li class="item"><a href="#">EN</a></li>-->
        </ul>
      </div>
    </div>
    <transition name="fade">
      <router-view @update="update" @atPage="atPage" @navigation="navigator"/>
    </transition>
    <footer>
      <div class="wrap">
        <ul class="flex">
          <li><a href="https://www.dorahacks.com">ABOUT US</a></li>
          <li>FEEDBACK support@dorahacks.com</li>
          <li>COOPERATION bd@dorahacks.com</li>
        </ul>
      </div>
    </footer>
    <!--<news-modal ref="newsLayer" :news="news"></news-modal>-->
    <login-modal ref="logLayer" @update="update"></login-modal>

<!--<div class="talk-box" >-->
	<!--<div class="talkbtn" @click="talkShow = !talkShow" :class="{close:talkShow}"></div>-->
	<!--<div class="talk-layer" v-show="talkShow" >-->
		<!--&lt;!&ndash; 消息列表  &ndash;&gt;-->
		<!--<div class="sublayer layer1" v-show="layer1">-->

			<!--<ul class="flex talk-header">-->
				<!--<li class="item" :class="{active:talktab.n==i}" v-for="v,i in talktab.item">-->
					<!--<a href="javascript:;" @click.stop="chooseTalk(v,i)">{{v}}</a>-->
				<!--</li>-->
			<!--</ul>-->

			<!--<div class="talk-list webkitscroll">-->
				<!--<div class="item card clearfix" v-for="v,i in filterTalkList" @click.stop="showMessage(v,i,v.pindex)">-->
					<!--<img :src=v.avatar alt="" class="avatar">-->
					<!--<div class="center">-->
						<!--<h2 class="name">{{v.name}}</h2>-->
						<!--<p>{{v.txt}}</p>-->
					<!--</div>-->
					<!--<div class="time">-->
						<!--<time>{{v.time}}</time>-->
						<!--<p class="readstate" :class="{read:v.readstate}">{{v.readstate?'Read':'Unread'}}</p>-->
					<!--</div>-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->

		<!--&lt;!&ndash; 私人消息&ndash;&gt;-->
		<!--<div class="sublayer layer2" v-show="layer2">-->
			<!--<div class="talk-header">-->
				<!--<span class="back" @click="back"></span>-->
				<!--<h2>{{talkName}}</h2>-->
				<!--<a href="" class="user"></a>-->
			<!--</div>-->
			<!--<div class="msg-list webkitscroll">-->
				<!--<div class="item clearfix" :class="{other:v.man=='other',self:v.man=='self',read:v.read}"  v-for="v,i in filtermsgConent">-->
					<!--<img :src=v.avatar alt="">-->
					<!--<p>{{v.msg}}</p>-->
				<!--</div>-->
			<!--</div>-->
			<!--&lt;!&ndash; <div class="send clearfix">-->
				<!--<input type="text" v-model="newsend">-->
				<!--<button class="btn btn-cancel" @click="send(0)">Send</button>-->
			<!--</div> &ndash;&gt;-->
		<!--</div>-->
		<!--&lt;!&ndash; 群组消息&ndash;&gt;-->
		<!--<div class="sublayer layer3" v-show="layer3">-->
			<!--<div class="talk-header">-->
				<!--<span class="back" @click="back"></span>-->
				<!--<h2>Go for Sunshine</h2>-->
				<!--<a href="" class="user group"></a>-->
			<!--</div>-->
			<!--<div class="msg-list webkitscroll">-->
				<!--<div class="item clearfix ingroup" :class="{other:v.man=='other',self:v.man=='self'}" v-for="v,i in filtermsgConent">-->
					<!--<img :src=v.avatar alt="">-->
					<!--<p>{{v.msg}}</p>-->
				<!--</div>-->
			<!--</div>-->
			<!--<div class="send clearfix">-->
				<!--<input type="text" v-model="newsend">-->
				<!--<button class="btn btn-cancel" @click="send(1)">Send</button>-->
			<!--</div>-->
		<!--</div>-->
		<!--&lt;!&ndash; 加群申请&ndash;&gt;-->
		<!--<div class="sublayer layer4" v-show="layer4">-->
			<!--<div class="talk-header">-->
				<!--<span class="back" @click="back"></span>-->
				<!--<h2>{{this.talk_t.name}}</h2>-->
				<!--<a href="" class="user"></a>-->
			<!--</div>-->
			<!--<div class="msg-list webkitscroll">-->
				<!--<div class="item clearfix other">-->
					<!--<img :src="require('@/images/10.png')" alt="">-->

					<!--<h5 class="apply">Application</h5>-->
					<!--<p>{{this.talk_t.txt}}</p>-->
					<!--<div class="answerapply clearfix">-->
						<!--<button class="btn btn-cancel" @click="group_ok(talk_t)">Accept</button>-->
						<!--<button class="btn btn-cancel" @click="group_no(talk_t)">Refuse</button>-->
					<!--</div>-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->
  <!--</div>-->
<!--</div>-->

</div>

</template>

<script>
import api from '@/api'
import LoginModal from './components/commons/LoginModal'
import NewsModal from './components/commons/NewsModal'
import MModal from './components/commons/MModal'


export default {
  name: 'App',
  components: { LoginModal, NewsModal },
  data () {
    return {
      menuShow:false,
      maxTxtCount:100,
      curTxtCount:0,
      talkShow:false,
		  layer1:true,  //消息列表
		  layer2:false, //私人聊天
		  layer3:false, //群聊天
		  layer4:false, //加群申请
			newsend:'',
			img_url:'',
      talkName: '',
			u_id : parseInt(window.cookieStorage.getItem('id')),
			to_u_id : -1,
			talk_t:{},
      user: null,
      git_state: '',
      isPage: [false, false, false, false],
      hasNew:true,
      newsShow:false,
      news:{
        list:[
          // {abstract:'The hackthon bonus has been announced. ',title:'Details of Notification',time:'2018/06/20',unread:true},
        ],
        n:0,
        slide:false
      },
			talktab:{
				item:['Unread','Talk'],//,'Group'
				n:0
			},
			talkList:[
				// {avatar:'images/6.png',name:'4',id:4,txt:`I’m glad to join your team`,time:'2016/06/16',readstate:0,isgroup:0,apply:1},
				// {avatar:'images/6.png',name:'3',id:this.u_id,txt:``,time:'2016/06/16',readstate:0,isgroup:1,apply:0},
      ],
      filterTalkList:[
			],
			msgConent:[
				// {avatar:'images/6.png',msg:`What if we make a power machine to get the arc. deepened?`,man:'other',read:1,from_id:'5',to_id:7,isgroup:0},
			],
			filtermsgConent:[
			]
    }
  },
  // watch:{
	// 	talkList:{
	// 		handler(){
	// 			if(this.talktab.n==0){
	// 				this.filterTalkList = this.copylist(this.talkList).filter(item=>!item.readstate)
	// 			}
	// 			if(this.talktab.n==1){
	// 				this.filterTalkList = this.copylist(this.talkList)
	// 			}
	// 			if(this.talktab.n==2){
	// 				this.filterTalkList =  this.copylist(this.talkList).filter(item=>item.isgroup)
	// 			}
	// 		},
	// 		deep:true
	// 	}
	// },
  // sockets:{
  //   connect: function(){
	// 		console.log('socket connected')
	// 		this.$socket.emit('connect_event', {'user_id':this.u_id})
	// 	},
  //   init_msg:function(objs){
  //     console.log(objs)
  //     this.talkList=[]
  //     this.msgConent=[]
  //
  //     for(var i=0 ;i<objs.length;i++ ){
  //       var obj = objs[i]
  //
  //       obj['man'] = 'other'
  //       if(obj['from_id']==this.u_id){
  //         obj['man'] = 'self'
  //       }
  //       obj['read'] = 0
  //
  //       var temp_talk = this.talkList.filter(item=>(item.id==obj.id & item.apply==0))
  //       if( temp_talk.length >0){
  //         temp_talk[0]['txt'] = obj['txt']
  //         temp_talk[0]['time'] = obj['time']
  //         temp_talk[0]['readstate'] = 0
  //       }else{
  //         var result = {}
  //         result['avatar'] = obj['avatar']
  //         result['name'] = obj['name']
  //         result['id'] = obj['id']
  //         result['txt'] = obj['msg']
  //         result['time'] = obj['time']
  //         result['readstate'] = 0
  //         result['apply'] = 0
  //         result['isgroup'] = obj['isgroup']
  //         this.talkList.push(result,)
  //
  //         // this.$socket.emit('talk_sync', {'userid':this.u_id,'result':result})
  //       }
  //       this.msgConent.push(obj,)
  //     }
  //
	// 	},
  //   get_msg: function(obj){
  //
  //     console.log(obj)
  //    		// obj['avatar'] = 'images/7.png'
	// 			obj['man'] = 'other'
	// 			obj['read'] = 1
  //
	// 		var temp_talk = this.talkList.filter(item=>(item.id==obj.id & item.apply==0))
  //
	// 		if( temp_talk.length > 0){
  //
	// 			// {url:'images/6.png',name:'3',id:this.u_id,txt:``,time:'2016/06/16',readstate:0,isgroup:1,apply:0}
  //
	// 					temp_talk[0]['txt'] = obj['msg']
	// 					temp_talk[0]['time'] = obj['time']
	// 					temp_talk[0]['readstate'] = 0
	// 		}else{
	// 				var result = {}
	// 				result['avatar'] = obj['avatar']
	// 				result['name'] = obj['name']
	// 				result['id'] = obj['id']
	// 				result['txt'] = obj['msg']
	// 				result['time'] = obj['time']
  //         result['readstate'] = 0
  //         result['apply'] = 0
  //         result['isgroup'] = obj['isgroup']
	// 				this.talkList.push(result,)
  //
  //         // this.$socket.emit('talk_sync', {'userid':this.u_id,'result':result})
  //
	// 		}
  //
	// 		this.msgConent.push(obj,)
	// 		if(this.to_u_id == obj['id']){
	// 			this.filtermsgConent.push(obj,)
	// 		}
  //
	// 	},
	// 	get_join:function(obj){
  //
	// 				//  this.$refs.layer.show = true
	//  				console.log(obj)
	// 				this.talkList.push(obj)
  //         // this.$socket.emit('talk_sync', {'userid':this.u_id,'result':obj})
	// 	}
  // },
  created () {
    if (window.cookieStorage.getItem('token')) {
      this.user = {
        name: window.cookieStorage.getItem('name'),
        id: window.cookieStorage.getItem('id'),
        avatar: window.cookieStorage.getItem('avatar')
      }
    }
    // this.notify(this.user.id)
    this.filterTalkList = this.copylist(this.talkList).filter(item=>!item.readstate)
  },
  // watch:{
  //   talkList:{
  //     handler(){
  //       if(this.talktab.n==0){
  //         this.filterTalkList = this.copylist(this.talkList).filter(item=>!item.readstate)
  //       }
  //       if(this.talktab.n==1){
  //         this.filterTalkList = this.copylist(this.talkList)
  //       }
  //       if(this.talktab.n==2){
  //         this.filterTalkList =  this.copylist(this.talkList).filter(item=>item.isgroup)
  //       }
  //
  //     },
  //     deep:true
  //   }
  // },
  methods: {
    navigator (page) {
      this.isPage[page] = true
      for (let i = 0; i < 2; i += 1) {
        if (i !== page) {
          this.isPage[i] = false
        }
      }
    },
    ok(){
			console.log(this.s_uid)
			this.$socket.emit('add_group', {'from_id':this.uid,'to_id':this.s_uid,'isinvitation':0})

		},
    showLogin(){
      console.log(this.$refs)
      this.$refs.logLayer.show = true
    },
    // showNews () {
    //   if (this.$refs.newsLayer.show === true) {
    //     this.$refs.newsLayer.show = false
    //   } else {
    //     this.$refs.newsLayer.show = true;
    //   }
    // },
    toHome () {
      this.isPage = [false, false, false]
    },
    toPlan () {
      this.isPage= [false,false,false, true]
      this.$router.push('/partner/nknchain')
    },
    toDetail () {
      this.isPage= [true,false,false, false]
      this.$router.push('/hackathon/detail')
    },
    toHacker () {
      this.isPage= [false,true,false, false]
      this.$router.push('/hackers')

    },
    toProjects () {
      this.isPage= [false,false,true, false]
      this.$router.push('/hackathon/ranking')
    },
    toProfile () {
      this.$router.push('/profile/project')
    },
    atPage (i) {
      this.isPage[i] = true
      for (let j = 0; j < 6; j += 1) {
        if (j !== i) {
          this.isPage[j] = false
        }
      }
    },
    openMenu () {

    },
    closeHint () {
      this.showHint = false
    },
    makestate () {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 10; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text;
    },
    // notify (uid) {
    //   api.notification(uid).then((res) => {
    //     const d = res.data
    //     if (d.errcode) {
    //       return
    //     }
    //     this.notifications = d
    //   })
    //   this.news.n = this.notifications.length
    //   for (let i = 0; i < this.notifications.length; i += 1) {
    //     this.news.list.push({abstract: this.notifications[i].content, })
    //   }
    // },
    update (data) {
      const d = new Date()
      if (data) {
        this.$router.push('/')
        d.setSeconds(d.getSeconds() + data.expires_in)
        this.user = {
          name: data.user_info.username,
          id: data.user_info.id,
          avatar: data.user_info.avatar,
          role: data.user_info.role
        }
        window.cookieStorage.setItem('token', data.auth_token, {expires: d})
        window.cookieStorage.setItem('name', data.user_info.username, {expires: d})
        window.cookieStorage.setItem('id', data.user_info.id, {expires: d})
        window.cookieStorage.setItem('avatar', data.user_info.avatar, {expires: d})
        window.cookieStorage.setItem('role', data.user_info.role, {expires: d})
        window.cookieStorage.setItem('teamId', data.user_info.cteam_id, {expires: d})

        // this.notify(this.user.id)
      } else {
        this.$router.push('/')
        this.user = null
        window.cookieStorage.setItem('token', 'anyValue', {expires: d})
        window.cookieStorage.setItem('name', 'anyValue', {expires: d})
        window.cookieStorage.setItem('id', 'anyValue', {expires: d})
        window.cookieStorage.setItem('avatar', 'anyValue', {expires: d})
        window.cookieStorage.setItem('role', 'anyValue', {expires: d})
        window.cookieStorage.setItem('teamId', 'anyValue', {expires: d})
        this.notifications = []
      }
    },
    chooseTalk(value,index){
			// console.log(index,tab)
			this.talktab.n = index;
			if(index==0){ //unread
				this.filterTalkList = this.copylist(this.talkList).filter(item=>!item.readstate)
			}
			if(index==1){ //hacker
				this.filterTalkList = this.copylist(this.talkList)
			}
			if(index==2){ //Group
				this.filterTalkList = this.copylist(this.talkList).filter(item=>item.isgroup)
			}
    },
		showMessage(value,index,pindex){
			// alert(value.name)
			console.log(value)
			console.log(pindex)
			this.talkList[pindex].readstate = 1;
			if(value.isgroup){
				this.layer3=true;
				this.layer1=this.layer2=this.layer4=false;
			}else if(value.apply){
				this.layer4=true;
				this.layer1=this.layer2=this.layer3=false;
			}
			else{
				this.layer1=this.layer3=this.layer4=false;
				this.layer2=true
			}
			this.talk_t = value
			this.to_u_id = value.id
			this.img_url = value.avatar
      this.talkName = value.name
			this.filtermsgConent = this.copylist(this.msgConent).filter(item=> item.from_id==value.id)
		},
		back(){
			this.layer1=true
			this.layer2=this.layer3=this.layer4=false
		},
		send(isgroup){
      //showNotify('aaa','asdsda')
			if(!this.newsend) return false
			this.filtermsgConent.push({avatar:'images/6.png',msg:this.newsend,man:'self',read:0,from_id:this.u_id,to_id:this.to_u_id,isgroup:0},)
			this.msgConent.push({avatar:'images/6.png',msg:this.newsend,man:'self',read:0,from_id:this.u_id,to_id:this.to_u_id,isgroup:0},)
      // obj['avatar']
      // result['name'] = obj['name']
      //
			this.$socket.emit('send_message', {'msg':this.newsend,from_id:this.u_id,to_id:this.to_u_id,isgroup:isgroup});

		},
		group_ok(talk_t){
      this.layer1=true
			this.layer2=this.layer3=this.layer4=false
      this.talkList.splice(this.talkList.filter(item=>item.id=talk_t.id).index,1);
			this.$socket.emit('add_group_judge', {from_id:this.u_id,to_id:this.to_u_id,isinvitation:talk_t.isinvitation,isNO:0});

		},
    group_no(talk_t){
     this.layer1=true
			this.layer2=this.layer3=this.layer4=false
      this.$socket.emit('add_group_judge', {from_id:this.u_id,to_id:this.to_u_id,isNO:1});
    },
    copylist(obj){
      let res = []
      for (let i = 0; i < obj.length; i++) {
        res.push(obj[i])
        res[i].pindex = i;
      }
      return res
    }
  }
}

</script>

<style scoped>
</style>
