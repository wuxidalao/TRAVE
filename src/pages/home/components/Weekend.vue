<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/source/1511/fd/0285e145e82233.jpg_r_640x214_b5f10121.jpg', title: '大连圣亚海洋世界', desc: '浪漫大连首站胜利大街发来的浪漫铃声多多大连首站胜利大街发来的'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  // .item
  //   overflow hidden
  //   display flex
  //   height 1.9rem
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 33.9%
    .item-img
      width 100%
    .item-info
      padding .1rem
    .item-title
      font-size .32rem
      line-height .54rem
    .item-desc
      line-height .4rem
      color: #ccc
      ellipsis()
</style>
