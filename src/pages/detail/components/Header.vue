<template>
  <div>
    <router-link tag="div" to="/" v-show="showAbs" class="header-abs iconfont">&#xe676;</router-link>
    <div class="header-fixe" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixe-icon">&#xe676;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 渐隐效果
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll) // 注意： 当页面隐藏的时候，对全局事件解绑
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  border-radius .4rem
  background rgba(0,0,0,.8)
  color #fff
  font-size .4rem
  display flex
  flex-direction column
  justify-content center
  align-items center
.header-fixe
  position fixed
  top 0
  left 0
  width 100%
  overflow hidden
  height .86rem
  line-height .86rem
  text-align center
  color #fff
  background $blueColor
  font-size .32rem
.header-fixe-icon
  position absolute
  top 0
  text-align center
  font-size .4rem
  color #fff
</style>
