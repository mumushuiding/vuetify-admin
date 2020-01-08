import Vue from 'vue'
// ECharts
import ECharts from 'vue-echarts'
import theme from './echarttheme'
import 'echarts/theme/dark'
import './echarts.styl'
ECharts.registerTheme('ovilia-green', theme)
Vue.prototype.$echarts = ECharts
Vue.component('chart', ECharts)
