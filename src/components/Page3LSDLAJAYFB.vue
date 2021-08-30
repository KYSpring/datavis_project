<!--律师代理案件案由分布 -->
<template>
    <div id="mainFrame">
    <!-- 高频案由 -->
      <el-row type="flex">
        <el-col :span="4">
          <span class="tabItem" :style="{color: selectedLayer? '#ffd04b':''}" @click="()=>selectedLayer=!selectedLayer">律师代理高频案由</span>
        </el-col>
        <el-col :span="4">
          <span class="tabItem" :style="{color: selectedLayer? '':'#ffd04b'}" @click="()=>selectedLayer=!selectedLayer">本人代理高频案由</span>
        </el-col>
      </el-row>
      
      <dv-border-box-7 :color="['#080f35']" style="height:24em;width:95%;margin-right:5px;padding:1em" v-show="selectedLayer">
        <el-row type="flex" gutter="12" justify="center">
          <el-col :span="12">
              <div id="lawyerAgentHighFrequencyPointEcharts1_1">
                <!-- 律师代理高频案由（TOP5）案件量 复用 finish-->
              </div>
          </el-col>
           <el-col :span="12">
              <div id="lawyerAgentHighFrequencyPointEcharts1_2">
                <!-- 律师代理高频案由（TOP5）比例 复用 finish-->
              </div>
          </el-col>
        </el-row>
      </dv-border-box-7>

      <dv-border-box-7 :color="['#080f35']" style="height:24em;width:95%;margin-right:5px;padding:1em;" v-show="!selectedLayer">
        <el-row type="flex" gutter="12" justify="center">
          <el-col :span="12">
              <div id="lawyerAgentHighFrequencyPointEcharts2_1">
                <!-- 本人代理高频案由（TOP5）案件量 复用 finish-->
              </div>
          </el-col>
           <el-col :span="12">
              <div id="lawyerAgentHighFrequencyPointEcharts2_2">
                <!-- 本人代理高频案由（TOP5）比例 复用 finish-->
              </div>
          </el-col>
        </el-row>
      </dv-border-box-7>

      <!-- 标得额对比 -->

      <el-row type="flex" gutter="12">
        <el-col :span="6">
          <span class="tabItem" :style="{color: selectedTarget? '#ffd04b':''}" @click="()=>selectedTarget=!selectedTarget">律师代理高频案由标的额差异</span>
        </el-col>
        <el-col :span="6">
          <span class="tabItem" :style="{color: selectedTarget? '':'#ffd04b'}" @click="()=>selectedTarget=!selectedTarget">本人代理高频案由标的额差异</span>
        </el-col>
      </el-row>
      
      <dv-border-box-7 :color="['#080f35']" style="height:24em;width:95%;margin-right:5px;padding:1em;" v-show="selectedTarget">
        <el-row type="flex" gutter="12" justify="space-between">
          <div id="lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts1">
            <!-- 律师代理高频案由标的额差异 复用 finish-->
          </div>
        </el-row>
      </dv-border-box-7>

      <dv-border-box-7 :color="['#080f35']" style="height:24em;width:95%;margin-right:5px;padding:1em;" v-show="!selectedTarget">
        <el-row type="flex" gutter="12" justify="space-between">
          <div id="lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts2">
            <!-- 本人代理高频案由标的额差异 复用 finish-->
          </div>
        </el-row>
      </dv-border-box-7>

    </div>
</template>

<script>
export default {
  name: 'Echarts',
  data () {
    return {
      selectedLayer: true,
      selectedTarget: true
    }
  },
  mounted () {
    // this.drawDemo()
    this.drawAgencyAnalysisEcharts1_1()
    this.drawAgencyAnalysisEcharts1_2()
    this.drawAgencyAnalysisEcharts2_1()
    this.drawAgencyAnalysisEcharts2_2()
    this.drawLawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts1()
    this.drawLawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts2()
  },
  methods: {
    drawDemo () {
      var agencyAnalysisEcharts = this.$echarts.init(document.getElementById('agencyAnalysisEcharts'))
      var agencyAnalysisEchartsOption = {
      }
      agencyAnalysisEcharts.setOption(agencyAnalysisEchartsOption)
    },
    drawAgencyAnalysisEcharts1_1 () {
      var lawyerAgentHighFrequencyPointEcharts = this.$echarts.init(document.getElementById('lawyerAgentHighFrequencyPointEcharts1_1'))
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
        // backgroundColor: 'rgb(20,28,52)',
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
            data: ['合同、不当得利纠纷', '知识产权与竞争纠纷', '与公司有关的民事纠纷', '侵权责任纠纷', '人格权纠纷']
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
                if (value >= 40000) {
                  return (value / 10000).toLocaleString() + '万'
                } else {
                  return value.toLocaleString()
                }
              }
            },
            data: [36351, 4512, 1450, 1364, 1199]
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
            data: [36351, 4512, 1450, 1364, 1199]
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [36351, 4512, 1450, 1364, 1199],
            itemStyle: {
              color: 'rgba(24,31,68,1)',
              borderRadius: 30
            }
          }
        ]
      }
      lawyerAgentHighFrequencyPointEcharts.setOption(lawyerAgentHighFrequencyPointEchartsOption)
    },
    drawAgencyAnalysisEcharts1_2 () {
      var lawyerAgentHighFrequencyPointEcharts = this.$echarts.init(document.getElementById('lawyerAgentHighFrequencyPointEcharts1_2'))
      var lawyerAgentHighFrequencyPointEchartsOption = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          containLabel: true
        },
        title: {
          text: '占比（TOP5）',
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
        // backgroundColor: 'rgb(20,28,52)',
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
            data: ['合同、不当得利纠纷', '知识产权与竞争纠纷', '与公司有关的民事纠纷', '侵权责任纠纷', '人格权纠纷']
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
                if (value < 1) {
                  return (value * 100).toLocaleString() + '%'
                } else {
                  return value.toLocaleString()
                }
              }
            },
            data: [0.765, 0.095, 0.03, 0.029, 0.025]
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
                color: '#e2a63a'
              }, {
                offset: 1,
                color: '#fae368'
              }])
            },
            barWidth: 20,
            data: [0.765, 0.095, 0.03, 0.029, 0.025]
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [0.765, 0.095, 0.03, 0.029, 0.025],
            itemStyle: {
              color: 'rgba(24,31,68,1)',
              borderRadius: 30
            }
          }
        ]
      }
      lawyerAgentHighFrequencyPointEcharts.setOption(lawyerAgentHighFrequencyPointEchartsOption)
    },
    drawAgencyAnalysisEcharts2_1 () {
      var lawyerAgentHighFrequencyPointEcharts = this.$echarts.init(document.getElementById('lawyerAgentHighFrequencyPointEcharts2_1'))
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
        // backgroundColor: 'rgb(20,28,52)',
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
            data: ['民间借贷纠纷', '物业服务合同纠纷', '信用卡纠纷', '金融借款合同纠纷', '房屋租赁合同纠纷']
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
                if (value >= 40000) {
                  return (value / 10000).toLocaleString() + '万'
                } else {
                  return value.toLocaleString()
                }
              }
            },
            data: [35450, 20527, 12958, 11814, 10645]
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
            data: [35450, 20527, 12958, 11814, 10645]
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [35450, 20527, 12958, 11814, 10645],
            itemStyle: {
              color: 'rgba(24,31,68,1)',
              borderRadius: 30
            }
          }
        ]
      }
      lawyerAgentHighFrequencyPointEcharts.setOption(lawyerAgentHighFrequencyPointEchartsOption)
    },
    drawAgencyAnalysisEcharts2_2 () {
      var lawyerAgentHighFrequencyPointEcharts = this.$echarts.init(document.getElementById('lawyerAgentHighFrequencyPointEcharts2_2'))
      var lawyerAgentHighFrequencyPointEchartsOption = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          containLabel: true
        },
        title: {
          text: '占比（TOP5）',
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
        // backgroundColor: 'rgb(20,28,52)',
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
            data: ['民间借贷纠纷', '物业服务合同纠纷', '信用卡纠纷', '金融借款合同纠纷', '房屋租赁合同纠纷']
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
                if (value <= 1) {
                  return (value * 100).toLocaleString() + '%'
                } else {
                  return value.toLocaleString()
                }
              }
            },
            data: ['0.108', '0.062', '0.039', '0.036', '0.032']
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
                color: '#e2a63a'
              }, {
                offset: 1,
                color: '#fae368'
              }])
            },
            barWidth: 20,
            data: ['0.108', '0.062', '0.039', '0.036', '0.032']
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: ['0.108', '0.062', '0.039', '0.036', '0.032'],
            itemStyle: {
              color: 'rgba(24,31,68,1)',
              borderRadius: 30
            }
          }
        ]
      }
      lawyerAgentHighFrequencyPointEcharts.setOption(lawyerAgentHighFrequencyPointEchartsOption)
    },
    drawLawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts1 () {
      var lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts = this.$echarts.init(document.getElementById('lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts1'))
      var lawyerAgentHighFrequencyPointSubjectAmountDifferenceEchartsOption = {
        // backgroundColor: '#031A32',
        // title: {
        //   text: ' 律师代理高频案由标的额差异 复用',
        //   textStyle: {
        //     color: '#fff'
        //   }
        // },
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
          data: ['律师代理平均标的额(万)', '本人代理平均标的额(万)', '差额(万)'],
          top: '4%',
          textStyle: {
            color: '#1FC3CE',
            fontSize: 14
          }
        },
        xAxis: {
          data: ['合同、无因管理、不当得利纠纷', '知识产权与竞争纠纷', '与公司、证券、保险、票据有关的民事纠纷', '侵权责任纠纷', '人格权纠纷'],
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
            name: '律师代理平均标的额(万)',
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
            name: '本人代理平均标的额(万)',
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
            name: '差额(万)',
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
    },
    drawLawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts2 () {
      var lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts = this.$echarts.init(document.getElementById('lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts2'))
      var lawyerAgentHighFrequencyPointSubjectAmountDifferenceEchartsOption = {
        // backgroundColor: '#031A32',
        // title: {
        //   text: ' 本人代理高频案由标的额差异 复用',
        //   textStyle: {
        //     color: '#fff'
        //   }
        // },
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
          data: ['律师代理平均标的额(万)', '本人代理平均标的额(万)', '差额(万)'],
          top: '4%',
          textStyle: {
            color: '#1FC3CE',
            fontSize: 14
          }
        },
        xAxis: {
          data: ['民间借贷纠纷', '物业服务合同纠纷', '信用卡纠纷', '金融借款合同纠纷', '房屋租赁合同纠纷'],
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
            name: '律师代理平均标的额(万)',
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
            name: '本人代理平均标的额(万)',
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
            name: '差额(万)',
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
    },
  }
}
</script>

<style scoped>
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
  #lawyerAgentHighFrequencyPointEcharts1_1 {
    height: 350px;
    width: 600px;
  }
  #lawyerAgentHighFrequencyPointEcharts1_2 {
    height: 350px;
    width: 600px;
  }
  #lawyerAgentHighFrequencyPointEcharts2_1 {
    height: 350px;
    width: 600px;
  }
  #lawyerAgentHighFrequencyPointEcharts2_2 {
    height: 350px;
    width: 600px;
  }
  #lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts1 {
    margin: auto;
    height: 350px;
    width: 1200px;
  }
  #lawyerAgentHighFrequencyPointSubjectAmountDifferenceEcharts2 {
    margin: auto;
    height: 350px;
    width: 1200px;
  }
  .tabItem{
    width:300px;
    height:60px;
    color:#00f4ff;
    margin-top:-30px;
    margin-bottom:20px;
    cursor:pointer;
  }
  .tabItem:hover{
  color:#ffd04b
}
.tabItemSelected{
  color:#ffd04b
}
</style>
