<template>
  <div class="header">
    <div class="header-left">1</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">3</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHearder'
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    height .86rem
    background: #00bcd4
    color: #fff

    .header-left
      width : .64rem
      float: left

    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      margin-top: .12rem
      padding-left: .2rem
      background: #ffffff
      border-radius: .1rem
      color: #cccccc

    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>
