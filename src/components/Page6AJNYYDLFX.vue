<!-- 案件难易与代理分析 -->
<template>
    <div id="mainFrame">
      <dv-border-box-7 :color="['#080f35']" style="width:98%;height:16em;padding:1em">
        <el-row type="flex">
          <el-col :span="4" style="color:white;margin-bottom:1em">案件难易程度分析</el-col>
        </el-row>
        <el-row type="flex" gutter="22" justify="center">

        <!--复用1-->
          <el-col :span="4">
            <el-row>
            <div id="casesDifficultyAnalysisEcharts1">
              <!-- 案件难易程度分析 复用5个 finish-->
            </div>
            </el-row>
            <el-row style="color:#1594e8;font-size:16px;font-weight:bold;margin-left:-4em">简易案件</el-row>
          </el-col>
        
        <!--复用2-->
          <el-col :span="4">
            <el-row>
            <div id="casesDifficultyAnalysisEcharts2">
              <!-- 案件难易程度分析 复用5个 finish-->
            </div>
            </el-row>
            <el-row style="color:#1594e8;font-size:16px;font-weight:bold;margin-left:-4em">普通案件</el-row>
          </el-col>

        <!--复用3-->
          <el-col :span="4">
            <el-row>
            <div id="casesDifficultyAnalysisEcharts3">
              <!-- 案件难易程度分析 复用5个 finish-->
            </div>
            </el-row>
            <el-row style="color:#1594e8;font-size:16px;font-weight:bold;margin-left:-4em">复杂案件</el-row>
          </el-col>
        
        <!--复用4-->
          <el-col :span="4">
            <el-row>
            <div id="casesDifficultyAnalysisEcharts4">
              <!-- 案件难易程度分析 复用5个 finish-->
            </div>
            </el-row>
            <el-row style="color:#1594e8;font-size:16px;font-weight:bold;margin-left:-4em">疑难案件</el-row>
          </el-col>

          <!--复用5-->
          <el-col :span="4">
            <el-row>
            <div id="casesDifficultyAnalysisEcharts5">
              <!-- 案件难易程度分析 复用5个 finish-->
            </div>
            </el-row>
            <el-row style="color:#1594e8;font-size:16px;font-weight:bold;margin-left:-4em">重大疑难案件</el-row>
          </el-col>

        </el-row>     
      </dv-border-box-7>

      <dv-border-box-7 :color="['#080f35']" style="width:98%;height:24em;padding:1em">
      <el-row type="flex">
          <el-col :span="4" style="color:white;margin-bottom:1em">不同类别案由难易案件分布</el-col>
      </el-row>
       <el-row type="flex" justify="center">
        <div id="differentCategoryCauseOfActionDegreeOfDifficultyCaseDistributionEcharts">
          <!-- 不同类别案由难易案件分布  finish-->
        </div>
       </el-row>
      </dv-border-box-7>

      <dv-border-box-7 :color="['#080f35']" style="width:98%;height:24em;padding:1em">
      <el-row type="flex" justify="space-around">
          <el-col :span="12">
            <el-row type="flex">
                <el-col :span="8" style="color:white;margin-bottom:1em">不同难易程度案件代理情况分析</el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <div id="differentDegreeOfDifficultyCaseAgentEcharts">
                <!-- 不同难度案件代理情况分析 finish -->
              </div>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row type="flex">
                <el-col :span="8" style="color:white;margin-bottom:1em">律师参与对审理时长影响</el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <div id="influenceOfLawyerParticipationOnTrialTimeEcharts">
                <!-- 律师参与对审理时长影响 finish -->
              </div>
            </el-row>
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
    }
  },
  mounted () {
    this.drawCasesDifficultyAnalysisEcharts1()
    this.drawCasesDifficultyAnalysisEcharts2()
    this.drawCasesDifficultyAnalysisEcharts3()
    this.drawCasesDifficultyAnalysisEcharts4()
    this.drawCasesDifficultyAnalysisEcharts5()
    this.drawDifferentCategoryCauseOfActionDegreeOfDifficultyCaseDistributionEcharts()
    this.drawDifferentDegreeOfDifficultyCaseAgentEcharts()
    this.drawInfluenceOfLawyerParticipationOnTrialTimeEcharts()
  },
  methods: {
    drawCasesDifficultyAnalysisEcharts1 () {
      var casesDifficultyAnalysisEcharts = this.$echarts.init(document.getElementById('casesDifficultyAnalysisEcharts1'))
      var casesDifficultyAnalysisEchartsOption = {
        // backgroundColor: '#050038',
        // title: {
        //   text: '案件难易程度分析 复用5个',
        //   textStyle: {
        //     fontWeight: 'normal',
        //     fontSize: 25,
        //     color: 'rgb(97, 142, 205)'
        //   }
        // },
        series: [
          {
            type: 'liquidFill',
            radius: '65%',
            center: ['50%', '50%'],
            data: [0.02, 0.02, 0.02], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: '2%',
              fontSize: 24
            },
            outline: {
              show: false
            }
          },
          {
            'type': 'pie',
            'center': ['50%', '50%'],
            'radius': ['63%', '65%'],
            emphasis: {
              scale: false
            },
            'data': [
              {
                'name': '',
                'value': 500,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              },
              { // 画中间的图标
                'name': '',
                'value': 4,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                label: {
                  borderRadius: '100%'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              }
            ]
          }
        ]
      }
      casesDifficultyAnalysisEcharts.setOption(casesDifficultyAnalysisEchartsOption)
    },
    drawCasesDifficultyAnalysisEcharts2 () {
      var casesDifficultyAnalysisEcharts = this.$echarts.init(document.getElementById('casesDifficultyAnalysisEcharts2'))
      var casesDifficultyAnalysisEchartsOption = {
        // backgroundColor: '#050038',
        // title: {
        //   text: '案件难易程度分析 复用5个',
        //   textStyle: {
        //     fontWeight: 'normal',
        //     fontSize: 25,
        //     color: 'rgb(97, 142, 205)'
        //   }
        // },
        series: [
          {
            type: 'liquidFill',
            radius: '65%',
            center: ['50%', '50%'],
            data: [0.89, 0.89, 0.89], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: '89%',
              fontSize: 24
            },
            outline: {
              show: false
            }
          },
          {
            'type': 'pie',
            'center': ['50%', '50%'],
            'radius': ['63%', '65%'],
            emphasis: {
              scale: false
            },
            'data': [
              {
                'name': '',
                'value': 500,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              },
              { // 画中间的图标
                'name': '',
                'value': 4,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                label: {
                  borderRadius: '100%'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              }
            ]
          }
        ]
      }
      casesDifficultyAnalysisEcharts.setOption(casesDifficultyAnalysisEchartsOption)
    },
    drawCasesDifficultyAnalysisEcharts3 () {
      var casesDifficultyAnalysisEcharts = this.$echarts.init(document.getElementById('casesDifficultyAnalysisEcharts3'))
      var casesDifficultyAnalysisEchartsOption = {
        // backgroundColor: '#050038',
        // title: {
        //   text: '案件难易程度分析 复用5个',
        //   textStyle: {
        //     fontWeight: 'normal',
        //     fontSize: 25,
        //     color: 'rgb(97, 142, 205)'
        //   }
        // },
        series: [
          {
            type: 'liquidFill',
            radius: '65%',
            center: ['50%', '50%'],
            data: [0.01, 0.01, 0.01], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: '1%',
              fontSize: 24
            },
            outline: {
              show: false
            }
          },
          {
            'type': 'pie',
            'center': ['50%', '50%'],
            'radius': ['63%', '65%'],
            emphasis: {
              scale: false
            },
            'data': [
              {
                'name': '',
                'value': 500,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              },
              { // 画中间的图标
                'name': '',
                'value': 4,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                label: {
                  borderRadius: '100%'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              }
            ]
          }
        ]
      }
      casesDifficultyAnalysisEcharts.setOption(casesDifficultyAnalysisEchartsOption)
    },
    drawCasesDifficultyAnalysisEcharts4 () {
      var casesDifficultyAnalysisEcharts = this.$echarts.init(document.getElementById('casesDifficultyAnalysisEcharts4'))
      var casesDifficultyAnalysisEchartsOption = {
        // backgroundColor: '#050038',
        // title: {
        //   text: '案件难易程度分析 复用5个',
        //   textStyle: {
        //     fontWeight: 'normal',
        //     fontSize: 25,
        //     color: 'rgb(97, 142, 205)'
        //   }
        // },
        series: [
          {
            type: 'liquidFill',
            radius: '65%',
            center: ['50%', '50%'],
            data: [0.02, 0.02, 0.02], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: '2%',
              fontSize: 24
            },
            outline: {
              show: false
            }
          },
          {
            'type': 'pie',
            'center': ['50%', '50%'],
            'radius': ['63%', '65%'],
            emphasis: {
              scale: false
            },
            'data': [
              {
                'name': '',
                'value': 500,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              },
              { // 画中间的图标
                'name': '',
                'value': 4,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                label: {
                  borderRadius: '100%'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              }
            ]
          }
        ]
      }
      casesDifficultyAnalysisEcharts.setOption(casesDifficultyAnalysisEchartsOption)
    },
    drawCasesDifficultyAnalysisEcharts5 () {
      var casesDifficultyAnalysisEcharts = this.$echarts.init(document.getElementById('casesDifficultyAnalysisEcharts5'))
      var casesDifficultyAnalysisEchartsOption = {
        // backgroundColor: '#050038',
        // title: {
        //   text: '案件难易程度分析 复用5个',
        //   textStyle: {
        //     fontWeight: 'normal',
        //     fontSize: 25,
        //     color: 'rgb(97, 142, 205)'
        //   }
        // },
        series: [
          {
            type: 'liquidFill',
            radius: '65%',
            center: ['50%', '50%'],
            data: [0.001, 0.001, 0.001], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: '0.1%',
              fontSize: 24
            },
            outline: {
              show: false
            }
          },
          {
            'type': 'pie',
            'center': ['50%', '50%'],
            'radius': ['63%', '65%'],
            emphasis: {
              scale: false
            },
            'data': [
              {
                'name': '',
                'value': 500,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              },
              { // 画中间的图标
                'name': '',
                'value': 4,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#5886f0'
                },
                label: {
                  borderRadius: '100%'
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#5886f0'
                  }
                }
              }
            ]
          }
        ]
      }
      casesDifficultyAnalysisEcharts.setOption(casesDifficultyAnalysisEchartsOption)
    },
    drawDifferentCategoryCauseOfActionDegreeOfDifficultyCaseDistributionEcharts () {
      var differentCategoryCauseOfActionDegreeOfDifficultyCaseDistributionEcharts = this.$echarts.init(document.getElementById('differentCategoryCauseOfActionDegreeOfDifficultyCaseDistributionEcharts'))
      var differentCategoryCauseOfActionDegreeOfDifficultyCaseDistributionEchartsOption = {
        // backgroundColor: '#323a5e',
        // title: {
        //   text: '不同类别案由难易案件分布',
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
          data: ['简易案件', '复杂案件', '疑难案件'],
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
          data: ['劳动争议、人事争议', '人格权纠纷', '婚姻家庭、继承纠纷', '物权纠纷', '与公司、证券、保险、票据等有关的民事纠纷', '适用特殊程序案件案由', '侵权责任纠纷', '知识产权与竞争纠纷'],
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            fontFamily: 'Microsoft YaHei'
          }
        },
        yAxis: {
          type: 'value',
          // max: '1200',
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
            name: '简易案件',
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
            data: [914, 224, 380, 417, 157, 42, 229, 959]
          },
          {
            name: '复杂案件',
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
            data: [241, 72, 301, 204, 79, 13, 115, 752]
          },
          {
            name: '复杂案件',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#248ff7'
              }, {
                offset: 1,
                color: '#6851f1'
              }]),
              borderRadius: 11
            },
            data: [401, 115, 10, 292, 237, 15, 429, 423]
          }]
      }
      differentCategoryCauseOfActionDegreeOfDifficultyCaseDistributionEcharts.setOption(differentCategoryCauseOfActionDegreeOfDifficultyCaseDistributionEchartsOption)
    },
    drawDifferentDegreeOfDifficultyCaseAgentEcharts () {
      const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
      const xData = ['简易案件', '复杂案件', '疑难案件', '重大疑难案件']
      var differentDegreeOfDifficultyCaseAgentEcharts = this.$echarts.init(document.getElementById('differentDegreeOfDifficultyCaseAgentEcharts'))
      var differentDegreeOfDifficultyCaseAgentEchartsOption = {
        // backgroundColor: '#fff',
        // title: {
        //   text: '不同难度案件代理情况分析',
        //   textStyle: {
        //     fontSize: 12,
        //     fontWeight: 400
        //   },
        //   left: 'center',
        //   top: '5%'
        // },
        legend: {
          icon: 'circle',
          top: '5%',
          right: '5%',
          itemWidth: 6,
          itemGap: 20,
          textStyle: {
            color: '#556677'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            label: {
              show: true,
              backgroundColor: '#fff',
              color: '#556677',
              borderColor: 'rgba(0,0,0,0)',
              shadowColor: 'rgba(0,0,0,0)',
              shadowOffsetY: 0
            },
            lineStyle: {
              width: 0
            }
          },
          backgroundColor: '#fff',
          textStyle: {
            color: '#5c6c7c'
          },
          padding: [10, 10]
          // extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
        },
        grid: {
          top: '15%'
        },
        xAxis: [
          {
            type: 'category',
            data: xData,
            axisLine: {
              lineStyle: {
                color: 'rgba(107,107,107,0.37)' // x轴颜色
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: '#999', // 坐标轴字颜色
              margin: 15
            },
            axisPointer: {
              label: {
                padding: [11, 5, 7],
                backgroundColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#fff' // 0% 处的颜色
                    },
                    {
                      offset: 0.9,
                      color: '#fff' // 0% 处的颜色
                    },
                    {
                      offset: 0.9,
                      color: '#33c0cd' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#33c0cd' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(107,107,107,0.37)' // y轴颜色
              }
            },
            axisLabel: {
              color: '#999'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '有代理人',
            type: 'line',
            data: [211, 561, 1068, 19],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
              width: 5,
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: '#9effff'
                },
                {
                  offset: 1,
                  color: '#9E87FF'
                }
              ]),
              shadowColor: 'rgba(158,135,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 20
            },
            itemStyle: {
              color: colorList[0],
              borderColor: colorList[0]
            }
          },
          {
            name: '无代理人',
            type: 'line',
            data: [6886, 2778, 5951, 127],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
              width: 5,
              color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
                {
                  offset: 0,
                  color: '#73DD39'
                },
                {
                  offset: 1,
                  color: '#73DDFF'
                }
              ]),
              shadowColor: 'rgba(115,221,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 20
            },
            itemStyle: {
              color: colorList[1],
              borderColor: colorList[1]
            }
          }
        ]
      }
      differentDegreeOfDifficultyCaseAgentEcharts.setOption(differentDegreeOfDifficultyCaseAgentEchartsOption)
    },
    drawInfluenceOfLawyerParticipationOnTrialTimeEcharts () {
      var influenceOfLawyerParticipationOnTrialTimeEcharts = this.$echarts.init(document.getElementById('influenceOfLawyerParticipationOnTrialTimeEcharts'))
      var influenceOfLawyerParticipationOnTrialTimeEchartsOption = {
        // backgroundColor: '#323a5e',
        // title: {
        //   text: '律师参与对审理时长影响',
        //   textStyle: {
        //     color: '#fff',
        //     fontSize: 20,
        //     fontWeight: '100'
        //   }
        // },
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        //   }
        // },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top: '16%',
          containLabel: true
        },
        legend: {
          data: ['有执业律师', '无执业律师'],
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
          type: 'value',
          max: '800',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          axisLabel: {
            show: false,
            fontFamily: 'Microsoft YaHei'
          },
          splitLine: { // 去掉网格线
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: ['简易案件', '普通案件', '复杂案件', '疑难案件', '重大疑难案件'],
          axisLine: {
            // show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: false
            // lineStyle: {
            //   color: 'rgba(255,255,255,0.3)'
            // }
          },
          axisLabel: {}
        },
        series: [
          {
            name: '有执业律师',
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
            label: {
              show: true,
              position: 'right'
            },
            data: [307.03, 50.21, 618.66, 718.82, 1523.1]
          },
          {
            name: '无执业律师',
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
            label: {
              show: true,
              position: 'right'
            },
            data: [192.67, 30.89, 609.68, 448.53, 180.33]
          }]
      }
      influenceOfLawyerParticipationOnTrialTimeEcharts.setOption(influenceOfLawyerParticipationOnTrialTimeEchartsOption)
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
  #casesDifficultyAnalysisEcharts1 {
    height: 10em;
    width: 10em;
  }
  #casesDifficultyAnalysisEcharts2 {
    height: 10em;
    width: 10em;
  }
  #casesDifficultyAnalysisEcharts3 {
    height: 10em;
    width: 10em;
  }
  #casesDifficultyAnalysisEcharts4 {
    height: 10em;
    width: 10em;
  }
  #casesDifficultyAnalysisEcharts5 {
    height: 10em;
    width: 10em;
  }
  #differentCategoryCauseOfActionDegreeOfDifficultyCaseDistributionEcharts {
    height: 20em;
    width: 80em;
  }
  #differentDegreeOfDifficultyCaseAgentEcharts {
    height: 20em;
    width: 40em;
  }
  #influenceOfLawyerParticipationOnTrialTimeEcharts {
    height: 20em;
    width: 40em;
  }
</style>
