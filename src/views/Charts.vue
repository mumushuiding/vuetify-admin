<template>
  <main>
    <section v-if="expand.bar">
      <figure>
        <chart
          ref="bar"
          :options="bar"
          theme="ovilia-green"
          autoresize
          @zr:click="handleZrClick"
          @click="handleClick"
        />
      </figure>
    </section>
    <section>
      <figure>
        <chart
          ref="pie"
          :options="pie"
          autoresize
        />
      </figure>
    </section>
    <section>
      <figure>
        <chart
          ref="largescalearea"
          :options="largescalearea"
          autoresize
        />
      </figure>
    </section>
  </main>
</template>

<script>
import getBar from './data/bar'
import pie from './data/pie'
import largescalearea from './data/largeScaleArea'
export default {
  components: {
  },
  data () {
    return {
      bar: getBar(),
      pie,
      largescalearea,
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
