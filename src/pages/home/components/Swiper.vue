<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 显示点图标
        loop: true // 支持循环轮播
      },
      swiperList: [
        {id: '000', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg'},
        {id: '001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/16/b1ffddb30c6ea702.jpg'},
        {id: '002', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg'},
        {id: '003', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a3f4f34a577fc89ca85619cebbd4fa4c.jpg'}
      ]
    }
  },
  computed: {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    // >>> 样式穿透
    background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height:0
    padding-bottom: 26.79% // 宽高比例
    background: #eee
    .swiper-img
      width:100%
</style>
