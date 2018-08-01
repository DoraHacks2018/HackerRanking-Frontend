<template>
    <div class="plan">
        <div class="plan-top-bg">
            <div class="plan-top-content">
                <div class="plan-top-content-left">
                    <img :src="require('@/images/plan/head.jpg')" alt="" />
                    <div class="button-line" @click="follow">Follow</div>
                </div>
                <div class="plan-top-content-right">
                        <h1 class="name">{{name}}</h1>
                        <div>
                          <i class="icon-www icon-style"></i><a href="https://www.nkn.org" class="links a-top-style">{{href}}</a>
                          <i class="icon-book icon-style"></i><a class="book a-top-style">{{book}}</a>
                        </div>
                        <p class="content-word">{{word}} </p>

                        <div class="li-icon" >
                            <a class="github" href="javascript:void(0)" ><i class="icon-github icon-style"></i>gitHub</a>
                            <a class="course" href="javascript:void(0)" ><i class="icon-lesson icon-style"></i>Online course</a>
                            <a class="like"   href="javascript:void(0)" @click='count'><i class="icon-like icon-style"></i>Like{{'('+likenum+')'}}</a>
                            <a class="share"  href="javascript:void(0)" ><i class="icon-share icon-style"></i>share</a>
                       </div>
                 </div>
                 <ul class="plan-top-bottom">
                    <li><a href="javascript:void(0)">GitHub core code</a></li>
                    <li class="cup"><a href="javascript:void(0)"><i class="icon-cup  icon-style"></i>Dapp incentive plan</a></li>
                 </ul>
            </div>
        </div>

       <discussion ></discussion>
    </div>

</template>

<script>
import api from '@/api'
import Discussion from './commons/Discussion'
export default {
    name:'Plan',
    components: { Discussion },
    data () {
        return {
            name:'NKN',
            href:'https://www.nkn.org',
            book:'NKN White  Paper',
            word:'NKN is a new type of network infrastructure and ecosystem driven by blockchain technology that is open, decentralized and shared by communities. NKN encourages users to share redundant network bandwidth, assists equipment service providers to effectively allocate network resources, and encourages individuals and enterprises to deploy more nodes to join the network to provide data transmission services for other nodes, thereby obtaining economic benefits. The goal of NKN is to use blockchain technology to create new opportunities for network transmission and solve the problems of resource allocation, transmission efficiency and value transfer in the current network. After becoming the Ethereum blockchain computing capability, the Filecoin/IPFS blockchains the storage capacity and then links the other information technology core element - the network transmission resource block to the public chain infrastructure. Its technological innovations are dynamic routing, network relay certification, highly scalable consensus mechanisms and resource sharing incentives.',
            likenum:923
        }
    },
    methods: {
        follow(){
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
@import url(../css/style-icon.css);
@import url(../css/plan.css);

</style>

