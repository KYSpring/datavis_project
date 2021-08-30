<!--律师代理案件案由分布 -->
<template>
    <div id="myEcharts">
      <div id="lawyerAgentHighFrequencyPointEcharts">
        <!-- 律师代理高频案由（TOP5） 复用 finish-->
      </div>
      <div id="lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts">
        <!-- 律师代理高频案由标的额差异 复用 finish-->
      </div>
    </div>
</template>

<script>
export default {
  name: 'Echarts',
  data () {
    return {
    }
  },
  mounted () {
    // this.drawDemo()
    this.drawAgencyAnalysisEcharts()
    this.drawLawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts()
  },
  methods: {
    drawDemo () {
      var agencyAnalysisEcharts = this.$echarts.init(document.getElementById('agencyAnalysisEcharts'))
      var agencyAnalysisEchartsOption = {
      }
      agencyAnalysisEcharts.setOption(agencyAnalysisEchartsOption)
    },
    drawAgencyAnalysisEcharts () {
      var lawyerAgentHighFrequencyPointEcharts = this.$echarts.init(document.getElementById('lawyerAgentHighFrequencyPointEcharts'))
      var lawyerAgentHighFrequencyPointEchartsOption = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          containLabel: true
        },
        title: {
          text: '案件量（TOP5）',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params) {
            return params[0].name + '<br/>' +
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
              params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
          }
        },
        backgroundColor: 'rgb(20,28,52)',
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              color: '#fff'
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: ['大米', '玉米', '蔬菜', '鸡蛋', '坚果']
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              color: '#ffffff',
              fontSize: '12',
              formatter: function (value) {
                if (value >= 10000) {
                  return (value / 10000).toLocaleString() + '万'
                } else {
                  return value.toLocaleString()
                }
              }
            },
            data: [50000000, 22000000, 10000000, 5000000, 1]
          }],
        series: [
          {
            name: '金额',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              borderRadius: 30,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgb(57,89,255,1)'
              }, {
                offset: 1,
                color: 'rgb(46,200,207,1)'
              }])
            },
            barWidth: 20,
            data: [50000000, 22000000, 10000000, 5000000, 1]
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [50000000, 50000000, 50000000, 50000000, 1],
            itemStyle: {
              color: 'rgba(24,31,68,1)',
              borderRadius: 30
            }
          }
        ]
      }
      lawyerAgentHighFrequencyPointEcharts.setOption(lawyerAgentHighFrequencyPointEchartsOption)
    },
    drawLawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts () {
      var lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts = this.$echarts.init(document.getElementById('lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts'))
      var lawyerAgentHighFrequencyPointSubjectAmountDifferenceEchartsOption = {
        backgroundColor: '#031A32',
        title: {
          text: ' 律师代理高频案由标的额差异 复用',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          }
        },
        grid: {
          left: '4%',
          top: '18%',
          right: '5%',
          bottom: '22%'
        },
        legend: {
          data: ['昨日总人数', '今日实时人数', '昨日使用率'],
          top: '4%',
          textStyle: {
            color: '#1FC3CE',
            fontSize: 14
          }
        },
        xAxis: {
          data: [
            '会议室1',
            '会议室2',
            '会议室3',
            '会议室4',
            '会议室5',
            '会议室6',
            '会议室7',
            '会议室8',
            '会议室9',
            '会议室10',
            '会议室11',
            '会议室12'
          ],
          axisLine: {
            show: true, // 隐藏X轴轴线
            lineStyle: {
              color: '#3d5269',
              width: 1
            }
          },
          axisTick: {
            show: true, // 隐藏X轴刻度
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#396A87', // X轴文字颜色
              fontSize: 14
            },
            interval: 0,
            rotate: 30
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '人数',
            nameTextStyle: {
              color: '#396A87',
              fontSize: 14
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: '#3d5269'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#396A87',
                fontSize: 14
              }
            }
          },
          {
            type: 'value',
            name: '使用率%',
            nameTextStyle: {
              color: '#396A87',
              fontSize: 14
            },
            position: 'right',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#396A87',
                width: 2
              }
            },
            axisLabel: {
              show: true,
              formatter: '{value} %', // 右侧Y轴文字显示
              textStyle: {
                color: '#396A87',
                fontSize: 14
              }
            }
          }
        ],
        series: [
          {
            name: '昨日总人数',
            type: 'bar',
            barWidth: 18,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00FFFF'
                },
                {
                  offset: 1,
                  color: '#0080FF'
                }
                ])
              }
            },
            data: [24, 45, 43, 35, 76, 154, 86, 42, 68, 97, 24, 34]
          },
          {
            name: '今日实时人数',
            type: 'bar',
            barWidth: 18,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#E29052'
                },
                {
                  offset: 1,
                  color: '#FA5A53'
                }
                ])
              }
            },
            data: [133, 23, 114, 67, 89, 35, 67, 96, 90, 46, 75, 85]
          },
          {
            name: '昨日使用率',
            type: 'line',
            yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            showAllSymbol: true, // 显示所有图形。
            symbol: 'circle', // 标记的图形为实心圆
            symbolSize: 6, // 标记的大小
            itemStyle: {
              // 折线拐点标志的样式
              color: '#26D9FF',
              borderColor: '#26D9FF',
              width: 2,
              shadowColor: '#26D9FF',
              shadowBlur: 2
            },
            lineStyle: {
              color: '#26D9FF',
              width: 2,
              shadowBlur: 2
            },
            data: [4.2, 3.5, 2.9, 7.8, 2, 3, 4.2, 3.5, 2.9, 7.8, 2, 3]
          }
        ]
      }
      lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts.setOption(lawyerAgentHighFrequencyPointSubjectAmountDifferenceEchartsOption)
    }
  }
}
</script>

<style>
  html, body {
    /* 获取浏览器的定高，body和div也就有了依赖 */
    margin: 0;
    height: 100%;
  }
  #myEcharts {
    display: flex;
    flex-direction: column;
    align-items: center;        /* flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式 */
    justify-content: center;    /* 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式 */
    overflow: auto;
  }
  #lawyerAgentHighFrequencyPointEcharts {
    height: 790px;
    width: 80%;
  }
  #lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts {
    height: 790px;
    width: 80%;
  }
</style>
