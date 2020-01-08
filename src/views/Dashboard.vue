<template>
  <main>
    <section v-if="expand.pie">
      <figure>
        <chart
          ref="pie"
          :options="pie"
          autoresize
        />
      </figure>
    </section>
  </main>
</template>

<script>
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import getBar from './data/bar'
import pie from './data/pie'
export default {
  components: {
  },
  data () {
    return {
      bar: getBar(),
      pie,
      expand: {
        bar: true,
        pie: true
      },
      seconds: -1
    }
  },
  mounted () {
    console.log('home')
  },
  methods: {
    handleClick () {
      console.log('click from echars')
    },
    handleZrClick () {
      console.log('click from zrender')
    },
    refresh () {
      // simulating async data from server
      this.seconds = 3
      let bar = this.$refs.bar
      bar.showLoading({
        text: 'Loading…',
        color: '#4ea397',
        maskColor: 'rgba(255, 255, 255, 0.4)'
      })
      let timer = setInterval(() => {
        this.seconds--
        if (this.seconds === 0) {
          clearTimeout(timer)
          bar.hideLoading()
          this.bar = getBar()
        }
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
figure
  display inline-block
  position relative
  margin 2em auto
  border 1px solid rgba(0, 0, 0, .1)
  border-radius 8px
  box-shadow 0 0 45px rgba(0, 0, 0, .2)
  padding 1.5em 2em
  min-width: calc(40vw + 4em)

  .echarts
    // width 40vw
    width 100%
    min-width 400px
    height 300px

@media (min-width 980px)
  figure.half
    padding 1em 1.5em
    min-width calc(240px + 3em)

    .echarts
      width 28vw
      min-width 240px
      height 180px

    &:not(:last-child)
      margin-right 15px

@media (max-width 980px)
  figure
    width 100vw
    margin 1em auto
    padding 0 1em
    border none
    border-radius 0
    box-shadow none

    .echarts
      width 100%
      min-width 0
      height 75vw
</style>
