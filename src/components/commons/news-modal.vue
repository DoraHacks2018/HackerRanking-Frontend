<template>
  <div class="news-box" v-show="show" @click.stop="show=true" >
    <div class="news-slide clearfix" :class="{active:news.slide}">
      <div class="list relative pull-left">
        <div class="scroll">
          <div class="item card" :class="{unread:v.unread}" v-for="v,i in news.list" @click="showNew(i)">
            <p>{{v.abstract}}</p>
            <time>{{v.time}}</time>
          </div>
        </div>
        <div class="ignore" @click="ignore">
          Ignore Unread Notification
        </div>
      </div>
      <div class="content relative pull-left">
        <div class="news-header">
          <a href="javascript:;" class="back" @click="news.slide=false"></a>
          <h2>{{news.list[news.n].title}}</h2>
          <time class="pull-right">{{news.list[news.n].time}}</time>
        </div>
        <div class="news-intro">
          <p>{{news.list[news.n].abstract}}
            <a class="text-primary" href=""><i class="fa fa-angle-right"></i></a>
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-modal',
  props: ['news'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    showNews () {
      this.newsShow = true;

    },
    showNew (index) {
      this.news.n = index;
      this.news.slide = true;
      this.news.list[index].unread=false;

    },
    ignore () {
      this.news.list.map(function(item){
        item.unread = false
      })
    }
  }
}
</script>

<style scoped>

</style>
