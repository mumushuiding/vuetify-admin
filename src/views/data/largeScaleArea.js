import ECharts from 'vue-echarts'
var base = +new Date(1968, 9, 3)
var oneDay = 24 * 3600 * 1000
var date = []
for (var i = 1; i < 20000; i++) {
  var now = new Date(base += oneDay)
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
}
var pv = [Math.random() * 300]

for (i = 1; i < 20000; i++) {
  pv.push(Math.round((Math.random() - 0.5) * 20 + pv[i - 1]))
}
var uv = [Math.random() * 300]
for (i = 1; i < 20000; i++) {
  uv.push(Math.round((Math.random() - 0.5) * 20 + uv[i - 1]))
}
var ip = [Math.random() * 300]
for (i = 1; i < 20000; i++) {
  ip.push(Math.round((Math.random() - 0.5) * 20 + ip[i - 1]))
}
export default {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%']
    }
  },
  legend: {
    data: ['PV', 'IP', 'UV']
  },
  title: {
    left: 'left',
    text: '大数据量面积图'
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '20%']
  },
  dataZoom: [{
    type: 'inside',
    start: 0,
    end: 10
  }, {
    start: 0,
    end: 10,
    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    handleSize: '80%',
    handleStyle: {
      color: '#fff',
      shadowBlur: 3,
      shadowColor: 'rgba(0, 0, 0, 0.6)',
      shadowOffsetX: 2,
      shadowOffsetY: 2
    }
  }],
  series: [
    {
      name: '页面浏览量',
      type: 'line',
      smooth: true,
      stack: 'pv',
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        normal: {
          color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 176, 240,0.6)'
          }, {
            offset: 0.8,
            color: 'rgba(0, 176, 240,0.1)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: 'rgba(0, 176, 240,0.6)'
        }
      },
      data: pv
    },
    {
      name: '访问者数',
      type: 'line',
      smooth: true,
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        normal: {
          color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(146, 208, 80,0.6)'
          }, {
            offset: 0.8,
            color: 'rgba(146, 208, 80,0.1)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: 'rgba(146, 208, 80,0.6)'
        }
      },
      data: uv
    },
    {
      name: 'ip数',
      type: 'line',
      smooth: true,
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        normal: {
          color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255, 192, 0,0.6)'
          }, {
            offset: 0.8,
            color: 'rgba(255, 192, 0,0.1)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: 'rgba(255, 192, 0,0.6)'
        }
      },
      data: ip
    }

  ]
}
