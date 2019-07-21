<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailList></DetailList>
    <div class="container"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 50rem
</style>
