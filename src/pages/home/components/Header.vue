<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe676;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67b;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHearder',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .header
    display: flex
    align-items: center
    height: .86rem
    background: $blueColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      padding-left: .2rem
      background: #ffffff
      border-radius: .1rem
      color: #cccccc
    .header-right
      width: 1.24rem
      display block
      float: right
      text-align: center
      color: #fff
      overflow hidden
      white-space nowrap
      // text-overflow ellipsis
      .arrow-icon
        font-size: .24rem
        margin-left: .04rem
</style>
