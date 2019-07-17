<template>
  <div class="icons">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.iconid">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        loop: false // 支持循环轮播
      },
      iconsList: [
        {iconId: '001', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '景点门票'},
        {iconId: '002', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '名胜古迹'},
        {iconId: '003', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '灵泉海洋世界'},
        {iconId: '004', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '水上乐园'},
        {iconId: '005', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '环球嘉年华'},
        {iconId: '006', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '八里河'},
        {iconId: '007', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '休闲玩乐'},
        {iconId: '008', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '自然风光'},
        {iconId: '009', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '黄山景区'},
        {iconId: '0010', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '地沟乐园'},
        {iconId: '0011', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '管仲公园'},
        {iconId: '0012', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '西湖景区'},
        {iconId: '0013', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '竹音寺'},
        {iconId: '0014', iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bf479a6bf700650fbc25837fea1c38e8.png', desc: '体育场'},
        {iconId: '0015', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '动植物园'},
        {iconId: '0016', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '阜阳生态园'}
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    overflow hidden
    height 0
    padding-bottom 50%
  .icon
    position relative
    overflow hidden
    width 25%
    height 0
    float left
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      right 0
      left 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      width 100%
      position absolute
      line-height .44rem
      text-align center
      bottom 0
      color $darkTextColor
      ellipsis()
</style>
