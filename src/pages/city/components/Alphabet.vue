<template>
  <div class="list">
    <div
      class="item"
      :ref="item"
      v-for="item of letters"
      :key="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
      >
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () { // 创建一个letters数字
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStartus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 字母A距离顶部的高度
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText) // 获取当前点击的字母
    },
    handleTouchStart () {
      this.touchStartus = true
    },
    handleTouchMove (e) {
      if (this.touchStartus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 手指点击的位置距离顶部的高度
          const index = Math.floor((touchY - this.startY) / 20) // 两者相减 除以每个字母的高度20px(css设置的.4rem) 获得点击的是第几个字母
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
          console.log(this.letters[index])
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStartus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
.item
  text-align center
  line-height .4rem
  color $blueColor
</style>
