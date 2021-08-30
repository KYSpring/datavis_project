<!-- 律师参与案件时长情况 -->
<template>

    <div id="mainFrame">
    <!--律师对法官裁判结果的影响分析-->
      <dv-border-box-7 :color="['#080f35']" style="width:98%;height:60em;padding:1em">
        <el-row type="flex">
          <el-col :span="5" style="color:#00ffff;margin-bottom:1em">律师对法官裁判结果的影响分析</el-col>
        </el-row>
        <el-row type="flex" gutter="22" justify="center">
          <el-col :span="16">
            <el-row type="flex">
              <el-col :span="6" style="color:white;margin-bottom:1em">不同案由平均参与时长</el-col>
            </el-row>
            <div id="differentCauseOfActionAverageParticipateInDurationEcharts" style="margin-left:2em">
              <!-- 律师对法官裁判结果的影响分析-不同案由平均参与时长 finish-->
            </div>
          </el-col>
          <el-col :span="8">
            <el-row type="flex">
              <el-col :span="12" style="color:white;margin-bottom:1em">平均时长案由排行TOP5</el-col>
            </el-row>
            <div id="lawyerParticipateInAverageDurationTop5Echarts">
              <!-- 律师参与平均时长案由排行TOP5 finish-->
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" gutter="22" justify="center" style="margin-top:2em">
          <el-col :span="24">
            <el-row type="flex">
              <el-col :span="10" style="color:white;margin-bottom:1em">不同结案方式案件律师参与平均时长</el-col>
              <el-col :span="10">
                  <span class="tabItem" :style="{color: isFirtJudge? '#ffd04b':''}" @click="()=>isFirtJudge=!isFirtJudge">一审</span>
                  <span class="tabItem" :style="{color: isFirtJudge? '':'#ffd04b'}" @click="()=>isFirtJudge=!isFirtJudge">二审</span>
              </el-col>
            </el-row>
            <div v-show="isFirtJudge" id="differentCloseCaseModeLawyerParticipateInAverageDurationEcharts">
              <!-- 不同结案方式案件律师参与平均时长  复用2个 finish-->
            </div>
            <div v-show="!isFirtJudge" id="differentCloseCaseModeLawyerParticipateInAverageDurationEcharts2">
              <!-- 不同结案方式案件律师参与平均时长  复用2个 finish-->
            </div>
          </el-col>
        </el-row>
      </dv-border-box-7>
      
      <!--律师参与对案件审理时长的影响-->
      <dv-border-box-7 :color="['#080f35']" style="width:98%;height:50em;padding:1em">
        <el-row type="flex">
          <el-col :span="5" style="color:#00ffff;margin-bottom:1em">律师参与对案件审理时长的影响</el-col>
        </el-row>
        <el-row type="flex" gutter="22" justify="center">
          <el-col :span="16">
            <el-row type="flex">
              <el-col :span="7" style="color:white;margin-bottom:1em">有无案件代理人对审理时长的影响</el-col>
            </el-row>
            <div id="influenceOfPresenceOrAbsenceOfCaseAgentOnTrialTimeEcharts">
              <!-- 有无案件代理人对审理时长的影响 finish-->
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" gutter="22" justify="center" style="margin-top:2em">
          <el-col :span="16">
            <el-row type="flex">
              <el-col :span="7" style="color:white;margin-bottom:1em">有无执业律师对审理时长的影响</el-col>
            </el-row>
            <div id="influenceOfPresenceOrAbsenceOfLawyersOnTrialTimeEcharts">
              <!-- 有无执业律师对审理时长的影响 finish-->
            </div>
          </el-col>
        </el-row>
      </dv-border-box-7>   
    </div>
</template>

<script>
export default {
  name: 'Echarts',
  data () {
    return {
      isFirtJudge: true,
    }
  },
  mounted () {
    this.drawDifferentCauseOfActionAverageParticipateInDurationEcharts()
    this.drawLawyerParticipateInAverageDurationTop5Echarts()
    this.drawDifferentCloseCaseModeLawyerParticipateInAverageDurationEcharts()
    this.drawDifferentCloseCaseModeLawyerParticipateInAverageDurationEcharts2()
    this.drawInfluenceOfPresenceOrAbsenceOfCaseAgentOnTrialTimeEcharts()
    this.drawInfluenceOfPresenceOrAbsenceOfLawyersOnTrialTimeEcharts()
    this.drawInfluenceOfPresenceOrAbsenceOfLawyersOnTrialTime2Echarts()
  },
  methods: {
    drawDifferentCauseOfActionAverageParticipateInDurationEcharts () {
      var differentCauseOfActionAverageParticipateInDurationEcharts = this.$echarts.init(document.getElementById('differentCauseOfActionAverageParticipateInDurationEcharts'))
      var differentCauseOfActionAverageParticipateInDurationEchartsOption = {
        // backgroundColor: '#031245',
        color: ['#63caff', '#3608FE'],
        // title: {
        //   text: '不同案由平均参与时长',
        //   textStyle: {
        //     color: '#fff'
        //   }
        // },
        grid: {
          containLabel: true,
          left: 20,
          right: 20,
          bottom: 10,
          top: 40
        },
        xAxis: {
          axisLabel: {
            color: '#c0c3cd',
            fontSize: 14,
            interval: 0,
            // interval:0,
            rotate: "35"
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#384267',
              width: 1,
              type: 'dashed'
            },
            show: false
          },
          data: ['人格权纠纷', '婚姻家庭、继承纠纷', '物权纠纷', '合同、不当得利纠纷', '知识产权与竞争纠纷', '劳动争议、人事争议', '海事海商纠纷', '与公司有关的民事纠纷', '侵权责任纠纷', '适用特殊程序案件案由'],
          type: 'category'
        },
        yAxis: {
          show: false,
          axisLabel: {
            color: '#c0c3cd',
            fontSize: 14
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#384267',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#384267',
              width: 1,
              type: 'dashed'
            },
            show: true
          },
          name: ''
        },
        series: [{
          data: [770.8, 1325.06, 1740.55, 835.08, 876.71, 650.49, 8, 820.28, 468.02, 634.77],
          type: 'bar',
          barWidth: 30,
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [{
                offset: 0,
                color: '#3A1BFD'
              }, {
                offset: 1,
                color: '#3BEFFD'
              }]
            }
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            color: '#fff'
          }
        }, {
          data: [1, 1, 1, 1, 1, 1, 1, 1],
          type: 'pictorialBar',
          barMaxWidth: '20',
          symbol: 'diamond',
          symbolOffset: [0, '50%'],
          symbolSize: [30, 15]
        }, {
          data: [770.8, 1325.06, 1740.55, 835.08, 876.71, 650.49, 8, 820.28, 468.02, 634.77],
          type: 'pictorialBar',
          barMaxWidth: '20',
          symbolPosition: 'end',
          symbol: 'diamond',
          symbolOffset: [0, '-50%'],
          symbolSize: [30, 12],
          zlevel: 2
        }],
        tooltip: {
          trigger: 'item',
          show: true
        }
      }
      differentCauseOfActionAverageParticipateInDurationEcharts.setOption(differentCauseOfActionAverageParticipateInDurationEchartsOption)
    },
    drawLawyerParticipateInAverageDurationTop5Echarts () {
      var lawyerParticipateInAverageDurationTop5Echarts = this.$echarts.init(document.getElementById('lawyerParticipateInAverageDurationTop5Echarts'))
      var lawyerParticipateInAverageDurationTop5EchartsOption = {
        // backgroundColor: {
        //   type: 'linear',
        //   x: 0,
        //   y: 0,
        //   x2: 0,
        //   y2: 1,
        //   colorStops: [{
        //     offset: 0,
        //     color: '#0c0d2b'
        //   }, {
        //     offset: 0.5,
        //     color: '#0a0c3d'
        //   }, {
        //     offset: 1,
        //     color: '#111629'
        //   }],
        //   globalCoord: false
        // },
        // title: {
        //   text: '律师参与平均时长案由排行TOP5',
        //   target: 'blank',
        //   x: 'center',
        //   top: '10',
        //   textStyle: {
        //     color: '#FFF',
        //     fontSize: 16
        //   }
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },
        legend: {
          data: ['国际货物买卖合同纠纷', '测试合同纠纷', '车位纠纷', '证券投资基金交易纠纷', '大气污染责任纠纷'],
          x: 'center',
          y: '92%',
          textStyle: {
            color: '#FFF'
          }
        },
        color: ['#c2c1bd', '#00a1e5', '#23c768', '#e5ce10', '#ff7e00', '#fe0000'],
        series: [
          {
            name: 'YNZ',
            type: 'funnel',
            left: 'center',
            width: '90%',
            // sort: 'ascending',
            label: {
              formatter: '{b}'
            },
            labelLine: {
              show: true,
              length: 30
            },
            itemStyle: {
              opacity: 0.3
            },
            tooltip: {
              show: false
            },
            data: [{
              value: 10,
              name: '国际货物买卖合同纠纷'
            }, {
              value: 20,
              name: '测试合同纠纷'
            },
            {
              value: 70,
              name: '车位纠纷'
            },
            {
              value: 60,
              name: '证券投资基金交易纠纷'
            },
            {
              value: 80,
              name: '大气污染责任纠纷'
            }]
          },
          {
            name: 'TIT',
            type: 'funnel',
            left: 'center',
            width: '80%',
            maxSize: '80%',
            // sort: 'ascending',
            label: {
              position: 'inside',
              formatter: '{c}',
              color: '#fff',
              fontSize: 14
            },
            emphasis: {
              label: {
                position: 'inside',
                formatter: '{b}: {c}'
              }
            },
            itemStyle: {
              opacity: 8,
              borderColor: 'rgba(12, 13, 43, .9)',
              borderWidth: 3,
              shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: 5,
              shadowColor: 'rgba(0, 0, 0, .6)'
            },
            data: [{
              value: 867,
              name: '国际货物买卖合同纠纷'
            }, {
              value: 652,
              name: '测试合同纠纷'
            },
            {
              value: 599,
              name: '车位纠纷'
            },
            {
              value: 498,
              name: '证券投资基金交易纠纷'
            },
            {
              value: 461,
              name: '大气污染责任纠纷'
            }]
          }
        ]
      }
      lawyerParticipateInAverageDurationTop5Echarts.setOption(lawyerParticipateInAverageDurationTop5EchartsOption)
    },
    drawDifferentCloseCaseModeLawyerParticipateInAverageDurationEcharts () {
      var differentCloseCaseModeLawyerParticipateInAverageDurationEcharts = this.$echarts.init(document.getElementById('differentCloseCaseModeLawyerParticipateInAverageDurationEcharts'))
      var differentCloseCaseModeLawyerParticipateInAverageDurationEchartsOption = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          containLabel: true
        },
        // title: {
        //   text: '不同结案方式案件律师参与平均时长',
        //   textStyle: {
        //     color: '#fff'
        //   }
        // },
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
        yAxis: [{
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
          data: ['终结', '不予受理', '准予撤诉', '被指定其他法院管辖', '判决', '其他', '驳回起诉', '裁定移送其他法院管辖', '调解', '与本院其他案件并案审理', '按撤诉处理', '撤诉']
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
          data: [2220.92, 64.375, 1189.71, 76.67, 566.189, 868, 1732.52, 2678.18, 390.537, 44.18, 1100.64, 609.57]
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
            data: [2220.92, 64.375, 1189.71, 76.67, 566.189, 868, 1732.52, 2678.18, 390.537, 44.18, 1100.64, 609.57]
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [2220.92, 64.375, 1189.71, 76.67, 566.189, 868, 1732.52, 2678.18, 390.537, 44.18, 1100.64, 609.57],
            itemStyle: {
              color: 'rgba(24,31,68,1)',
              borderRadius: 30
            }
          }
        ]
      }
      differentCloseCaseModeLawyerParticipateInAverageDurationEcharts.setOption(differentCloseCaseModeLawyerParticipateInAverageDurationEchartsOption)
    },
    drawDifferentCloseCaseModeLawyerParticipateInAverageDurationEcharts2 () {
      var differentCloseCaseModeLawyerParticipateInAverageDurationEcharts = this.$echarts.init(document.getElementById('differentCloseCaseModeLawyerParticipateInAverageDurationEcharts2'))
      var differentCloseCaseModeLawyerParticipateInAverageDurationEchartsOption = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          containLabel: true
        },
        // title: {
        //   text: '(二审)不同结案方式案件律师参与平均时长',
        //   textStyle: {
        //     color: '#fff'
        //   }
        // },
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
        yAxis: [{
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
          data: ['按撤回上诉处理', '终结', '准予撤回上诉', '发回重审', '维持', '改判', '撤销原判并驳回起诉', '撤销原裁定并指令审理', '准予撤回起诉并撤销一审判决', '调解']
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
            // formatter: function (value) {
            //   if (value >= 10000) {
            //     return (value / 10000).toLocaleString() + '万'
            //   } else {
            //     return value.toLocaleString()
            //   }
            // }
          },
          data: [40.98, 19546.75, 76.91, 416.38, 712.06, 846.03, 165.83, 47.67, 106, 8616.5]
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
            data: [40.98, 19546.75, 76.91, 416.38, 712.06, 846.03, 165.83, 47.67, 106, 8616.5]
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [40.98, 19546.75, 76.91, 416.38, 712.06, 846.03, 165.83, 47.67, 106, 8616.5],
            itemStyle: {
              color: 'rgba(24,31,68,1)',
              borderRadius: 30
            }
          }
        ]
      }
      differentCloseCaseModeLawyerParticipateInAverageDurationEcharts.setOption(differentCloseCaseModeLawyerParticipateInAverageDurationEchartsOption)
    },
    drawInfluenceOfPresenceOrAbsenceOfCaseAgentOnTrialTimeEcharts () {
      var influenceOfPresenceOrAbsenceOfCaseAgentOnTrialTimeEcharts = this.$echarts.init(document.getElementById('influenceOfPresenceOrAbsenceOfCaseAgentOnTrialTimeEcharts'))
      var influenceOfPresenceOrAbsenceOfCaseAgentOnTrialTimeEchartsOption = {
        // backgroundColor: '#323a5e',
        // title: {
        //   text: '有无案件代理人对审理时长的影响',
        //   textStyle: {
        //     color: '#fff',
        //     fontSize: 20,
        //     fontWeight: '100'
        //   }
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top: '16%',
          containLabel: true
        },
        legend: {
          data: ['有案件代理人参与', '无案件代理人参与'],
          right: 10,
          top: 12,
          textStyle: {
            color: '#fff'
          },
          itemWidth: 12,
          itemHeight: 10
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: ['人格权纠纷', '婚姻家庭、继承纠纷', '物权纠纷', '合同、不当得利纠纷', '知识产权与竞争纠纷', '劳动争议、人事争议', '与公司有关的民事纠纷', '侵权责任纠纷', '适用特殊程序案件案由'],
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 30,
            fontFamily: 'Microsoft YaHei'
          }
        },
        yAxis: {
          type: 'value',
          max: '1200',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {}
        },
        series: [
          {
            name: '有案件代理人参与',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#fccb05'
              }, {
                offset: 1,
                color: '#f5804d'
              }]),
              borderRadius: 12
            },
            data: [557.88, 1404.01, 2013.21, 597.08, 682.42, 557.88, 1145.55, 606.7, 823.41]
          },
          {
            name: '无案件代理人参与',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#8bd46e'
              }, {
                offset: 1,
                color: '#09bcb7'
              }]),
              borderRadius: 11
            },
            data: [747.45, 1321.66, 1726.75, 879.15, 942.43, 654.06, 745.58, 459.35, 621.47]
          }]
      }
      influenceOfPresenceOrAbsenceOfCaseAgentOnTrialTimeEcharts.setOption(influenceOfPresenceOrAbsenceOfCaseAgentOnTrialTimeEchartsOption)
    },
    drawInfluenceOfPresenceOrAbsenceOfLawyersOnTrialTimeEcharts () {
      var xData = ['人格权纠纷', '婚姻家庭、继承纠纷', '物权纠纷', '合同、不当得利纠纷', '知识产权与竞争纠纷', '劳动争议、人事争议', '与公司有关的民事纠纷', '侵权责任纠纷', '适用特殊程序案件案由']
      var yData1 = [915.69, 1409.49, 2065.22, 597.85, 578.89, 486.96, 1116.24, 524.21, 887.93]
      var yData2 = [749.31, 1321.77, 1727.28, 872.31, 955.53, 654.09, 760.53, 465.32, 618.56]
      var influenceOfPresenceOrAbsenceOfLawyersOnTrialTimeEcharts = this.$echarts.init(document.getElementById('influenceOfPresenceOrAbsenceOfLawyersOnTrialTimeEcharts'))
      var influenceOfPresenceOrAbsenceOfLawyersOnTrialTimeEchartsOption = {
        // title: {
        //   top: '0',
        //   left: 'center',
        //   text: '有无执业律师对审理时长的影响',
        //   textStyle: {
        //     align: 'center',
        //     color: '#FFFFFF',
        //     fontSize: 22
        //   }
        // },
        // backgroundColor: '#043491',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          x: 'center',
          y: '40px',
          textStyle: {
            color: '#f2f2f2',
            fontSize: 13
          },
          icon: 'circle',
          data: ['有执业律师参与', '无执业律师参与']
        },
        grid: {
          right: '5%',
          bottom: '10%',
          left: '2%',
          top: '80px',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: xData,
          name: '时间',
          nameTextStyle: {
            color: '#d4ffff'
          },
          axisLine: {
            lineStyle: {
              color: '#0B4CA9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            color: '#FFF',
            fontSize: 12,
            interval: 0,
            rotate: 30
          }
        }],
        yAxis: [{
          type: 'value',
          name: '次数',
          nameTextStyle: {
            color: '#d4ffff'
          },
          position: 'left',
          axisLine: {
            lineStyle: {
              color: '#0B4CA9'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#0B4CA9'
            }
          },
          axisLabel: {
            color: '#d4ffff',
            fontSize: 12
          }
        }],
        series: [{
          name: '有执业律师参与',
          type: 'line',
          yAxisIndex: 0,
          symbolSize: 12,
          itemStyle: {
            color: '#FC30EE'
          },
          data: yData1
        },
        {
          name: '无执业律师参与',
          type: 'line',
          yAxisIndex: 0,
          symbolSize: 12,
          itemStyle: {
            color: '#0EF100'
          },
          data: yData2
        }]
      }
      influenceOfPresenceOrAbsenceOfLawyersOnTrialTimeEcharts.setOption(influenceOfPresenceOrAbsenceOfLawyersOnTrialTimeEchartsOption)
    },
    drawInfluenceOfPresenceOrAbsenceOfLawyersOnTrialTime2Echarts () {
      var influenceOfPresenceOrAbsenceOfLawyersOnTrialTime2Echarts = this.$echarts.init(document.getElementById('influenceOfPresenceOrAbsenceOfLawyersOnTrialTime2Echarts'))
      var influenceOfPresenceOrAbsenceOfLawyersOnTrialTime2EchartsOption = {
        // title: {
        //   top: '0',
        //   left: 'center',
        //   text: '有无执业律师对审理时长的影响2',
        //   textStyle: {
        //     align: 'center',
        //     color: '#FFFFFF',
        //     fontSize: 22
        //   }
        // },
        // backgroundColor: '#031A32',
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
          data: ['昨日总人数', '今日实时人数', '昨日使用率', '今日使用率'],
          top: '4%',
          textStyle: {
            color: '#1FC3CE',
            fontSize: 14
          }
        },
        xAxis: {
          data: [
            '会议室1',
            '会议室2'
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
            color: '#396A87', // X轴文字颜色
            fontSize: 14,
            interval: 0,
            rotate: 30
          }
        },
        yAxis: [{
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
            color: '#396A87',
            fontSize: 14
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
            color: '#396A87',
            fontSize: 14
          }
        }],
        series: [{
          name: '昨日总人数',
          type: 'bar',
          barWidth: 18,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#00FFFF'
            },
            {
              offset: 1,
              color: '#0080FF'
            }])
          },
          data: [24, 45]
        },
        {
          name: '今日实时人数',
          type: 'bar',
          barWidth: 18,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#E29052'
            },
            {
              offset: 1,
              color: '#FA5A53'
            }])
          },
          data: [133, 23]
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
          data: [4.2, 3.5]
        },
        {
          name: '今日使用率',
          type: 'line',
          yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          showAllSymbol: true, // 显示所有图形。
          symbol: 'circle', // 标记的图形为实心圆
          symbolSize: 6, // 标记的大小
          itemStyle: {
            // 折线拐点标志的样式
            color: '#36882f',
            borderColor: '#36882f',
            width: 2,
            shadowColor: '#36882f',
            shadowBlur: 2
          },
          lineStyle: {
            color: '#36882f',
            width: 2,
            shadowBlur: 2
          },
          data: [3.5, 7.5]
        }]
      }
      influenceOfPresenceOrAbsenceOfLawyersOnTrialTime2Echarts.setOption(influenceOfPresenceOrAbsenceOfLawyersOnTrialTime2EchartsOption)
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
  #differentCauseOfActionAverageParticipateInDurationEcharts {
    height: 20em;
    width: 50em;
  }
  #lawyerParticipateInAverageDurationTop5Echarts {
    height: 20em;
    width: 24em;
  }
  #differentCloseCaseModeLawyerParticipateInAverageDurationEcharts {
    height: 30em;
    width: 80em;
  }
  #differentCloseCaseModeLawyerParticipateInAverageDurationEcharts2 {
    height: 30em;
    width: 80em;
  }
  #influenceOfPresenceOrAbsenceOfCaseAgentOnTrialTimeEcharts {
    height: 20em;
    width: 54em;
  }
  #influenceOfPresenceOrAbsenceOfLawyersOnTrialTimeEcharts {
    height: 20em;
    width: 54em;
  }
  #influenceOfPresenceOrAbsenceOfLawyersOnTrialTime2Echarts {
    height: 20em;
    width: 35em;
  }
  .tabItem{
    font-size: 14px;
    margin-left: 10px;
    width:300px;
    height:60px;
    color: #00f4ff;
    margin-top:-30px;
    margin-bottom:20px;
    cursor:pointer;
  }
  .tabItem:hover{
  color:#ffd04b
}
</style>
