<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="container">
      <DetailList :list="list"></DetailList>
    </div>
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
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人哈哈哈',
              children: [
                {title: '成人哈哈哈11111'},
                {title: '成人哈哈哈22222'}
              ]
            },
            {title: '成人嘻嘻嘻'}
          ]
        },
        {title: '儿童票'},
        {title: '军人票'},
        {title: '老人票'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 50rem
</style>
