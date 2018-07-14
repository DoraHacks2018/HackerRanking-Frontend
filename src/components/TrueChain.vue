/* eslint-disable */
<template>
  <div>

    <div class="wrap">
      <div class="service partner clearfix">
        <div class="content clearfix">
          <div class="bdr clearfix">
            <img :src="require('@/images/service01.png')" alt="">
            <div class="txt">
              <div class="pheader">
                <h2>{{partner.name}}</h2>
                <span class="link"><i class="fa fa-link"></i> {{partner.link}}</span>
              </div>
              <h6>About</h6>
              <p>{{partner.intro}}</p>
              <a href="" class="get">Get Gift Reward</a>
              <span class="heart" @click="like">{{partner.heart}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--
    <div class="wrap">
      <div class="post">
        <form action="" class="clearfix">
          <input type="text" class="input" placeholder="Write a discussion">
          <button class="btn btn-primary">Post</button>
        </form>
      </div>
    </div>
-->
    <div class="wrap">
      <div class="post">
        <span></span>
      </div>
      </div>

    <div class="wrap">
      <div class="discuss">
        <h2 class="big-title">Hot Discussions</h2>
        <div class="dislist">
          <div class="item clearfix" v-for="v,i in discuss">
            <div class="clearfix">
              <img :src="require('@/images/service01.png')" alt="">
              <p>{{v.item.intro}}</p>
              <!--<div class="comment" :class="{visited:commentsShow==i}" @click="commentsShow= commentsShow==i?-1:i">{{v.item.comment}}</div>-->
            </div>
            <!--
            <div class="commentlist" v-show="i==commentsShow">
              <ul class="items clearfix webkitscroll">
                <li class="item clearfix" v-for="v2,i2 in v.comments">
                  <img :src="v2.img" alt="">
                  <p>{{v2.content}}</p>
                  <div class="bottom">
                    <time>{{v2.time}}</time>
                    <div class="gift">
                      {{v2.gift}} Gift
                      <button class="btn btn-cancel">Reward 1 Gift</button>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="post">
                <form action="" class="clearfix">
                  <input type="text" class="input" placeholder="Write a your idea">
                  <button class="btn btn-primary">Post</button>
                </form>
              </div>

              <div class="up">
                <i class="fa fa-angle-up" @click="commentsShow=-1"></i>
              </div>
            </div>
            -->
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

  </div>
</template>

<script>
export default {
  name: 'TrueChain',
  data() {
    return {
      menuShow: false,
      commentsShow: -1,
      partner: {
        img: 'images/service01.png',
        name: 'Truechain',
        link: 'www.truechain.com',
        intro: `TrueChain is the first public chain in the world which brings about the technology of hybrid consensus combining  PBFT and POW. TrueChain adopts sharding to raise the transaction processing speed, to realize scalability without affecting the safety of hybrid consensus. TrueChain integrates fruitchain technology into PoW protocol to allow mobile users to participate in mining, and re-assure complete decentralization. The leading research and engineering team members of True Chain come from the U.S., India and China.`,
        heart: 195
      },
      discuss: [
        {
          item: {
            img: 'images/dis.png',
            intro: `BTC opened the block chain 1 era, ETH brought us into the block chain 2, because both did not have a very fast TPS, many commercial applications did not enjoy the advantage of the block chain, on the promotion of the public chain TPS, put forward some feasible solutions, and detailed description.`,
            comment: 1296
          },
          comments: [
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            },
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            },
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            },
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            }
          ]
        },
        {
          item: {
            img: 'images/dis.png',
            intro: `Block chain 3 after block chain application will usher in a blowout like development, the data will be more and more, more and more diverse, now the size of the BTC block is 1M, then to the block chain 3 , the block chain size of data blocks and the speed of the block set is more appropriate.`,
            comment: 1296
          },
          comments: [
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            },
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            },
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            },
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            }
          ]
        },
        {
          item: {
            img: 'images/dis.png',
            intro: `As a common way of consensus, PBFT depends on the consensus of the members of the N Committee and does not need the consensus of the referendum, but the members of the committee are not fixed, then how the committee members should be set up more reasonably.`,
            comment: 1296
          },
          comments: [
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            },
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            },
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            },
            {
              img: 'images/pig1.png',
              content: `This is amazing! I couldn’t wait to see what is going to happen next. I guess I’d make some point for next hackthon to make it clear whether it is true or not.This is amazing! I couldn’t wait to see what is going to happen next...`,
              time: '2018/06/16',
              gift: 266
            }
          ]
        }
      ]
    }
  },
  methods: {
    like () {
      this.partner.heart += 1
    }
  }
}
</script>

<style scoped>

</style>
