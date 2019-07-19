<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">请输入正确的城市名或拼音</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      // 1.监听keyword内容
      if (this.timer) {
        clearTimeout(this.timer) // 2.节流操作 监听keyword的操作 100毫秒后执行
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1) {
              result.push(value)
              // 3.如果可以搜索到上述两项 就添加到result中
              // 4.让数组list等于result
              // 5.把list循环到页面上
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height .72rem
  padding 0 .1rem
  background $blueColor
.search-input
  box-sizing border-box
  height .62rem
  line-height .62rem
  width 100%
  text-align center
  border-radius .06rem
  color #666
  padding 0 .1rem
.search-content
  z-index 1
  overflow hidden
  position absolute
  width 100%
  top 1.58rem
  right 0
  bottom 0
  background #eee
.search-item
  line-height .62rem
  padding-left .2rem
  background #fff
  color #666
</style>
