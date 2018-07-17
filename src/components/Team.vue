/* eslint-disable */
<template>
<div>
  <div class="wrap">
    <a class="text-center ad" href="#">
      <img :src="require('@/images/banner2.png')" alt="" style="width: 100%">
    </a>
  </div>


  <div class="wrap">
    <div class="match">
      <div class="tab">
        <ul class="clearfix">
          <li><router-link to="/hackathon/detail"><a>Details</a></router-link></li>
          <li><router-link to="/hackathon/participants"><a>Participants</a></router-link></li>
          <li class="active"><a>Team</a></li>
          <li><router-link to="/hackathon/update"><a>Updates</a></router-link></li>
          <li><router-link to="/hackathon/ranking"><a>Ranking</a></router-link></li>
        </ul>
      </div>
    </div>


    <div class="search sm">
      <form action="">
        <input type="text" class="key" placeholder="Search by team name or member name ">
        <button type="submit" class="sub"></button>
      </form>
    </div>
  </div>

  <div class="lrlayout clearfix">
    <div class="nav sm">
      <div class="list-group clearfix">
        <a class="item active">
          Teaming Up
        </a>
        <a class="item"><router-link to="/hackathon/team/completed">
          Team Completed</router-link>
        </a>
        <a class="item"><router-link to="/hackathon/team/build">
          <i class="fa fa-plus" style="color:#4cc6c5"></i> My Team</router-link>
        </a>
      </div>
    </div>
    <div class="judges six lg">
      <div class="main">
        <div class="lists clearfix">
          <div class="lists-title text-primary">Paprika for Dora Attacking</div>
          <div class="item sm-center" v-for="v,i in judges">
            <div class="img" :class="{active:v.active}"><img :src="require('@/'+v.url)" alt=""></div>
            <h3>{{v.name}}</h3>
            <p class="sname text-center">{{v.intro}}</p>
          </div>
          <div class="item sm-center">
            <div class="add img circle" style="border-radius: 50%" @click="change($event,1)">
            </div>
            <h3 class="text-primary">Join The Team</h3>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="lists clearfix">
          <div class="lists-title text-primary">Just for The World Peace</div>
          <div class="item sm-center" v-for="v,i in judges2">
            <div class="img" :class="{active:v.active}"><img :src="require('@/'+v.url)" alt=""></div>
            <h3>{{v.name}}</h3>
            <p class="sname text-center">{{v.intro}}</p>
          </div>
          <div class="item sm-center">
            <div class="add img circle" style="border-radius: 50%" @click="change($event,2)">
            </div>
            <h3 class="text-primary">Join The Team</h3>
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


<div class="talk-box" >
		<div class="talkbtn" @click="talkShow = !talkShow" :class="{close:talkShow}"></div>
		<div class="talk-layer" v-show="talkShow" >
			<!-- 消息列表  -->
			<div class="sublayer layer1" v-show="layer1"> 
		
				<ul class="flex talk-header">
					<li class="item" :class="{active:talktab.n==i}" v-for="v,i in talktab.item">
						<a href="javascript:;" @click.stop="chooseTalk(v,i)">{{v}}</a>
					</li>
				</ul>

				<div class="talk-list webkitscroll">
					<div class="item card clearfix" v-for="v,i in filterTalkList" @click.stop="showMessage(v,i,v.pindex)">
						<img :src="require('@/'+v.url)" alt="" class="avatar">
						<div class="center">
							<h2 class="name">{{v.name}}</h2>
							<p>{{v.txt}}</p>
						</div>
						<div class="time">
							<time>{{v.time}}</time>
							<p class="readstate" :class="{read:v.readstate}">{{v.readstate?'Read':'Unread'}}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- 私人消息-->
			<div class="sublayer layer2" v-show="layer2"> 
				<div class="talk-header">
					<span class="back" @click="back"></span>
					<h2>Qui Wang</h2>
					<a href="" class="user"></a>
				</div>
				<div class="msg-list webkitscroll">
					<div class="item clearfix" :class="{other:v.man=='other',self:v.man=='self',read:v.read}"  v-for="v,i in filtermsgConent">
						<img :src="require('@/'+v.avatar)" alt="">
						<p>{{v.msg}}</p>
					</div>
				</div>
				<div class="send clearfix">
					<input type="text" v-model="newsend">
					<button class="btn btn-cancel" @click="send(0)">Send</button>
				</div>
			</div>
			<!-- 群组消息-->
			<div class="sublayer layer3" v-show="layer3"> 
				<div class="talk-header">
					<span class="back" @click="back"></span>
					<h2>Go for Sunshine</h2>
					<a href="" class="user group"></a>
				</div>
				<div class="msg-list webkitscroll">
					<div class="item clearfix ingroup" :class="{other:v.man=='other',self:v.man=='self'}" v-for="v,i in filtermsgConent">
						<img :src="require('@/'+v.avatar)" alt="">
						<p>{{v.msg}}</p>
					</div>
				</div>
				<div class="send clearfix">
					<input type="text" v-model="newsend">
					<button class="btn btn-cancel" @click="send(1)">Send</button>
				</div>
			</div>
			<!-- 加群申请-->
			<div class="sublayer layer4" v-show="layer4"> 
				<div class="talk-header">
					<span class="back" @click="back"></span>
					<h2>Anna Legend</h2>
					<a href="" class="user"></a>
				</div>
				<div class="msg-list webkitscroll">
					<div class="item clearfix other">
						<img :src="require('@/images/10.png')" alt="">

						<h5 class="apply">Application</h5>
						<p>Hi, I’m Anna Legend.I’m glad to join your team. I’m a designer and I do enjoy your project. The idea is really amazing!</p>
						<div class="answerapply clearfix">
							<button class="btn btn-cancel" @click="group_ok">Accept</button>
							<button class="btn btn-cancel">Refuse</button>
						</div>
					</div>
				</div>
				<div class="send clearfix">
					<input type="text" v-model="newsend">
					<button class="btn btn-cancel" @click="send">Send</button>
				</div>
			</div>

		</div>
	</div>



  <m-modal ref="layer">
    <div slot="modal-header">
      <h4 class="title">Are you sure to join the team <span class="black">Just for The World Peace</span> ?</h4>
      <h5 class="sub-title">Application letter</h5>
    </div>
    <div slot="modal-content">
      <form action="">
        <div class="area">
          <textarea name="" rows="6" placeholder="eg: I'd like to join your team..." @input="input($event)" autofocus="autofocus"></textarea>
          <div class="count">
            <span class="cur" :class="{red:curTxtCount>maxTxtCount}">{{curTxtCount}}</span> /
            <span class="all">{{maxTxtCount}}</span>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary" @click="ok">Confirm</button>
          <button type="button" class="btn btn-cancel" @click="cancel">Cancel</button>
        </div>
      </form>
    </div>
  </m-modal>

</div>
</template>

<script>
import MModal from './commons/MModal'
import io from 'socket.io-client'

export default {
  name: 'Team',
  components: { MModal },
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
			u_id : parseInt(window.cookieStorage.getItem('id')),
			to_u_id : -1,
      judges:[
        {url:'images/6.png',name:'Qiu Wang',intro:`Designer`,active:false},
        {url:'images/7.png',name:'Sijie Chen',intro:`Public Chain`,active:false},
        {url:'images/8.png',name:'Anna Levine',intro:`DApps`,active:false}

      ],
      judges2:[
        {url:'images/10.png',name:'Michael Blue',intro:`Full Stack`,active:false},
        {url:'images/11.png',name:'Yu Hagiee',intro:`Hacker`,active:false},
        {url:'images/8.png',name:'Anna Levine',intro:`DApps`,active:false},
				{url:'images/7.png',name:'Sijie Chen',intro:`Public Chain`,active:false}
				
      ],
			talktab:{
				item:['Unread','Hacker','Group'],
				n:0
			},
			talkList:[

				{url:'images/6.png',name:'4',id:4,txt:`I’m glad to join your team`,time:'2016/06/16',readstate:0,isgroup:0,apply:1},
				{url:'images/6.png',name:'3',id:this.u_id,txt:``,time:'2016/06/16',readstate:0,isgroup:1,apply:0},
				// {url:'images/8.png',name:'5',id:5,txt:`I’m glad to join your team`,time:'2016/06/16',readstate:0,isgroup:0,apply:0},
				// {url:'images/9.png',name:'6',id:'3607614',txt:`I’m glad to join your team`,time:'2016/06/16',readstate:0,isgroup:0,apply:0},
				// {url:'images/10.png',name:'7',id:'8137853',txt:`I’m glad to join your team`,time:'2016/06/16',readstate:0,isgroup:0,apply:0},
				// {url:'images/12.png',name:'aaaa',id:100,txt:`I’m glad to join you`,time:'2016/06/16',readstate:0,isgroup:1,apply:0},

		],			filterTalkList:[
			],
			msgConent:[
				// {avatar:'images/6.png',msg:`What if we make a power machine to get the arc. deepened?`,man:'other',read:1,from_id:'5',to_id:7,isgroup:0},
				// {avatar:'images/6.png',msg:`What if we make a power`,man:'other',read:1,from_id:'5',to_id:3607614,isgroup:0},
				// {avatar:'images/7.png',msg:`What if we make a power machine to get the arc. deepened?`,man:'self',read:0,from_id:'5',to_id:6,isgroup:0},
			],
			filtermsgConent:[
			]
    }

  },
  watch:{
		talkList:{
			handler(){
				if(this.talktab.n==0){
					this.filterTalkList = copylist(this.talkList).filter(item=>!item.readstate)
				}
				if(this.talktab.n==1){
					this.filterTalkList = copylist(this.talkList)
				}
				if(this.talktab.n==2){
					this.filterTalkList =  copylist(this.talkList).filter(item=>item.isgroup)
				}
				
			},
			deep:true
		}
	},
	sockets:{
    connect: function(){
			console.log('socket connected')
			this.$socket.emit('connect_event', {'user_id':this.u_id})
		},
		
    get_msg: function(obj){
     		obj['avatar'] = 'images/7.png'
				obj['man'] = 'other'
				obj['read'] = 1

			this.msgConent.push(obj,)
			console.log(this.to_u_id+'判断争取输出。。。。'+obj.to_id)
			if(this.to_u_id == obj.to_id){
				console.log('判断争取输出。。。。')
				this.filtermsgConent.push(obj,)
			}

		},

		get_join:function(obj){

	 				console.log(obj)
					this.talkList.push(obj)
		}
  },
	created(){
		this.filterTalkList = copylist(this.talkList).filter(item=>!item.readstate)
	},
	// sockets:{//不能改
  //     connect:function() {//与socket.io连接后回调
	// 			this.$socket.emit('connect_event', {'user_id':window.cookieStorage.getItem('id')});
	// 			return
  //     },a
  //     get_msg:function(value) {
	// 			alert(value)
				
  //       // console.log(value);//监听login(后端向前端emit  login的回调)
	// 		},
		
  //   },
  methods:{
    ok(){

			console.log(this.s_uid)
			this.$socket.emit('add_group', {'from_id':this.uid,'to_id':this.s_uid,'isinvitation':0})
			
		},
    change(event){
      console.log(0)
      this.$refs.layer.show = true
		},
		get_msg(value){
				console.log(value)
		},
    cancel(){
      this.$refs.layer.show = false
    },
    input(event){
      this.curTxtCount = event.target.textLength
      if(this.curTxtCount>this.allTxtCount){
        return false;
      }

    },
    chooseTalk(value,index){
			// console.log(index,tab)
			this.talktab.n = index;
			if(index==0){ //unread
				this.filterTalkList = copylist(this.talkList).filter(item=>!item.readstate)
			}
			if(index==1){ //hacker
				this.filterTalkList = copylist(this.talkList)
			}
			if(index==2){ //Group
				this.filterTalkList = copylist(this.talkList).filter(item=>item.isgroup)
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

			this.to_u_id = value.id
			this.img_url = value.url
			this.filtermsgConent = copylist(this.msgConent).filter(item=>(item.to_id==value.id || item.from_id==value.id))

		},
		back(){
			this.layer1=true
			this.layer2=this.layer3=this.layer4=false
		},
		send(isgroup){
			if(!this.newsend) return false
			this.filtermsgConent.push({avatar:'images/7.png',msg:this.newsend,man:'self',read:0,from_id:this.u_id,to_id:this.to_u_id,isgroup:0},)
			this.msgConent.push({avatar:'images/7.png',msg:this.newsend,man:'self',read:0,from_id:this.u_id,to_id:this.to_u_id,isgroup:0},)

			this.$socket.emit('send_message', {'msg':this.newsend,from_id:this.u_id,to_id:this.to_u_id,isgroup:isgroup});
		
		},
		group_ok(){

				this.$socket.emit('add_group_judge', {from_id:this.u_id,to_id:this.to_u_id});

		}
  }
}

function copylist(obj){
	let res = []
    for (let i = 0; i < obj.length; i++) {
     res.push(obj[i])
     res[i].pindex = i;
    }
    return res
}
function socket_conn(){

				
				
}


</script>

<style scoped>

</style>
