<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {id: '0', imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/28/288e0ccf38a6f3d990.img.jpg_200x200_3d6ee528.jpg', title: '大连圣亚海洋世界', desc: '浪漫大连首站胜利大街发来的浪漫大连首站胜利大街发来的'},
        {id: '1', imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/28/288e0ccf38a6f3d990.img.jpg_200x200_3d6ee528.jpg', title: '大连圣亚海洋世界', desc: '浪漫大连首站胜利大街发来的浪漫大连首站胜利大街发来的'},
        {id: '2', imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/28/288e0ccf38a6f3d990.img.jpg_200x200_3d6ee528.jpg', title: '大连圣亚海洋世界', desc: '浪漫大连首站胜利大街发来的浪漫大连首站胜利大街发来的'},
        {id: '3', imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/28/288e0ccf38a6f3d990.img.jpg_200x200_3d6ee528.jpg', title: '大连圣亚海洋世界', desc: '浪漫大连首站胜利大街发来的浪漫大连首站胜利大街发来的'},
        {id: '4', imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/28/288e0ccf38a6f3d990.img.jpg_200x200_3d6ee528.jpg', title: '大连圣亚海洋世界', desc: '浪漫大连首站胜利大街发来的浪漫大连首站胜利大街发来的'},
        {id: '5', imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/28/288e0ccf38a6f3d990.img.jpg_200x200_3d6ee528.jpg', title: '大连圣亚海洋世界', desc: '浪漫大连首站胜利大街发来的浪漫大连首站胜利大街发来的'},
        {id: '6', imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/28/288e0ccf38a6f3d990.img.jpg_200x200_3d6ee528.jpg', title: '大连圣亚海洋世界', desc: '浪漫大连首站胜利大街发来的浪漫大连首站胜利大街发来的'},
        {id: '7', imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/28/288e0ccf38a6f3d990.img.jpg_200x200_3d6ee528.jpg', title: '大连圣亚海洋世界', desc: '浪漫大连首站胜利大街发来的浪漫大连首站胜利大街发来的'}
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
    .item-title
      font-size .32rem
      line-height .54rem
    .item-desc
      line-height .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
