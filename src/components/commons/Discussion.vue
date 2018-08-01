<template>
        <div class="discussions-content">
            <div class="hot-discussions">
                <h3>Hot discussions</h3>
                <div class="response">
                    <img :src="require('@/images/user.png')" alt="" width='50px' >
                    <input class="response-word"  placeholder="Write a response…"></input>
                </div>
            </div>
            <div class="discussion">
                <div class="discussion-con"  v-for="(v,i) in discussions" :key="v.id">
                    <img :src="require('@/images/user.png')" alt="" width='50px' class="discussion-left">
                    <div class="discussion-right">
                        <div class="dis-top">
                            <span class="dis-name">{{ v.name}}</span> <span  class="dis-date">{{v.date}}</span>
                        </div>
                        <p class="dis-word">{{ v.word }}</p>
                        <div class="dis-comment"><i class="icon-comment  icon-style"></i>{{v.discomment}}</div>
                        <div v-show='v.discomment>0' class='reversion'>
                            <div  v-for='item of reversion' :key='item.id' class='reversion-content'>
                                <div class="reversion-img">
                                    <img :src="require('@/images/user.png')" alt="" width='30px' >
                                </div>
                                <div class='reversion-con'>
                                    <div class='reversion-name'>{{item.reverName}}</div>
                                    <div class='reversion-word'>{{item.reverWord}}</div>
                                </div>
                            </div>
                            <div class="reversion-wirte">
                               <div class="reversion-wirte-img">
                                    <img :src="require('@/images/user.png')" alt="" width='30px' >
                                </div>
                                <div class='reversion-wirte-con'>
                                    <textarea  @focus='write'  class='reversion-wirte-art'>{{reversionWord}}</textarea>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="disc-more">MORE</div>
        </div>
</template>
<script>
export default {
    name:'Discussion',
    data () {
        return{
            reversionWord:'Write a response…',
            discussions:[
                {
                    id:'001',
                    url:'images/1.png',
                    name:'Chris Fritz',
                    date:'2018.02.03',
                    discomment:32,
                    word:'BTC opened the block chain 1 era, ETH brought us into the block chain 2, because both did not have a very fast TPS, many commercial applications did not enjoy the advantage of the block chain, on the promotion of the public chain TPS, put forward some feasible solutions, and detailed description.'
                },
                {
                    id:'002',
                    url:'images/2.png',
                    name:'Tim Yang',
                    date:'2018.02.03',
                    discomment:0,
                    word:'As a common way of consensus, PBFT depends on the consensus of the members of the N Committee and does not need the consensus of the referendum, but the members of the committee are not fixed, then how the committee members should be set up more reasonably.'
                },
                {
                    id:'003',
                    url:'images/3.png',
                    name:'Elliot Loh',
                    date:'2018.02.03',
                    discomment:0,
                    word:'As a common way of consensus, PBFT depends on the consensus of the members of the N Committee and does not need the consensus of the referendum, but the members of the committee are not fixed, then how the committee members should be set up more reasonably.'
                },
                {
                    id:'004',
                    url:'images/4.png',
                    name:'Mark Woolum',
                    date:'2018.02.03',
                    discomment:0,
                    word:'I really enjoy this piece and find a lot of benefit reading it. I also love how well it fits with the last article I read by Jessica Wildfire : Self Care with a little attitude. However I think we are missing a little bit of something with this whole self care thing, why are we burdening ourselves so much with self care when we have friends, family…'


                }
            ],
            reversion:[
                {
                  reverId:'0001',
                  reverName:'Stan Perkins',
                  reverWord:'on the promotion of the public chain TPS, put forward some feasible solutions, and detailed description.' 
                },
                {
                  reverId:'0002',
                  reverName:'Barrett',
                  reverWord:'othen how the committee members should be set up more reasonably.' 
                },
                {
                  reverId:'0003',
                  reverName:'Stan Perkins',
                  reverWord:'on the promotion of the public chain TPS, put forward some feasible solutions, and detailed description.' 
                }                
            ]               
        }     
    },
    methods:{
        fllow(){
            console.log('fllow');
        },
        count(){
            this.likenum++;
        },
        changeWord(){
            this.responseWord=' ';
        },
        write(){
            this.reversionWord=' '; 
        }
    }   
}
</script>
<style scoped>
/* hot-discussions */
.hot-discussions{
    width:70%;
    margin:0 auto;
    margin-top:260px;
    /*//linshi */
    margin-bottom:66px;  
    height:85px; 
}
.hot-discussions h3{
    margin-bottom:38px;
    font-family: SourceHanSansSC-Bold;
    font-size: 20px;
    color: #444444;
    letter-spacing: 0;
    text-align: justify;   
}
.response{
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 6px 6px 0 0;
    padding-top:0.45%;
    padding-bottom:0.45%;
    padding-left:2.8%;
    overflow: hidden;
}
.response img{
    float:left;
}
.response-word{
    float:left;
    font-size: 16px;
    color: #9D9D9D;
    display: inline-block;
    padding-left:28px;
    padding-top:16px;
    display: block;
    border:0;
    outline: none;
    width:93%;
}

.discussion{
    width:70%;
    margin:0 auto;
    border: 1px solid #E4E4E4;
    border-top-width: 0;
}
.discussion-con{
    overflow:hidden;
    padding-top:13px;
    padding-bottom:13px;
    padding-left:2.8%;
}
.discussion-left{
    float:left;
}
.discussion-right{
    float:left;
    margin-left:26px;
    width:88%;
}
.dis-name{
    font-size: 16px;
    color: #4CC6C5;
    float:left;
}
.dis-date{
    font-size: 14px;
    color: #A9A9A9;
    float:right;
    margin-right:16px;
}
.dis-top{
    margin-bottom:13px;
    overflow: hidden;
}
.dis-top span{
    display: block;
}
.dis-word{
    font-size: 14px;
    color: #444444;
    letter-spacing: 0;
    text-align: justify;
    line-height: 24px;
    margin-bottom:13px;
}
.dis-comment{
    font-size: 14px;
    color: #C5C6C6;
    padding-bottom: 16px;
}
.disc-more{
    font-size: 14px;
    color: #777777;
    border: 1px solid #E4E4E4;
    border-top-width: 0px;
    height:70px;
    text-align:center;
    line-height: 70px;
    cursor:pointer;
    width:70%;
    margin:auto;
    
}
.reversion{
    border: 1px solid #E4E4E4;  
}
.reversion-content{
    overflow:hidden;
    padding:16px; 
    
}
.reversion-img{
    float: left;
}
.reversion-con,.reversion-wirte-con,.reversion-wirte-img{
   float: left;
   margin-left:16px;
}

.reversion-name{
    font-size: 13px;
    color: #4CC6C5;
}
.reversion-word{
    font-size: 13px;
    color: #444444; 
    font-weight: normal;
}
.reversion-wirte{
    overflow:hidden;
    padding-top:16px;
    border-top: 1px solid #E4E4E4;  
   
}
.reversion-wirte-art{
    font-size: 14px;
    color: #9D9D9D;
    font-weight: normal;
    border:0;
}
.reversion-wirte-con{
    height: 60px;
    width: 88%;
}
</style>


