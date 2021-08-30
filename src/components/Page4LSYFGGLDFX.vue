<!-- 律师与法官关联度分析 -->
<template>
    <div id="mainFrame">
      <dv-border-box-7 :color="['#080f35']" style="width:98%;height:16em;padding:1em">
        <el-row type="flex">
          <el-col :span="4" style="color:white;margin-bottom:1em">律师与法官关联度情况分析</el-col>
        </el-row>
        <el-row type="flex" gutter="22" justify="space-around">

        <!--复用1-->
          <el-col :span="4">
            <div id="lawyerAndJudgeCorrelationDegreeAnalysisEcharts1">
              <!-- 律师与法官关联度分析 复用 3个 finish-->
            </div>
          </el-col>
          <el-col :span="4" style="margin:auto">
              <el-row type="flex" >
                <el-col :span="18" style="color:#ffa916;font-size:32px;font-weight:bold;">26716</el-col>
                <el-col :span="2" style="color:#00ffff;font-size:16px;font-weight:bold;margin-top:0.5em">件</el-col>
              </el-row>
              <el-row>
                <el-col :span="24" style="color:#00ffff;font-size:32px;font-weight:bold;">不知.0%</el-col>
              </el-row>
          </el-col>
        
        <!--复用2-->
          <el-col :span="4">
            <div id="lawyerAndJudgeCorrelationDegreeAnalysisEcharts2">
              <!-- 律师与法官关联度分析 复用 3个 finish-->
            </div>
          </el-col>
          <el-col :span="4" style="margin:auto">
              <el-row><el-col :span="18" style="color:#ffa916;font-size:32px;font-weight:bold;">6112</el-col><el-col :span="2" style="color:#00ffff;font-size:16px;font-weight:bold;margin-top:0.5em">件</el-col></el-row>
              <el-row><el-col :span="24" style="color:#00ffff;font-size:32px;font-weight:bold;">不知.0%</el-col></el-row>
          </el-col>

        <!--复用3-->
          <el-col :span="4">
            <div id="lawyerAndJudgeCorrelationDegreeAnalysisEcharts3">
              <!-- 律师与法官关联度分析 复用 3个 finish-->
            </div>
          </el-col>
          <el-col :span="4" style="margin:auto">
              <el-row><el-col :span="18" style="color:#ffa916;font-size:32px;font-weight:bold;">41273</el-col><el-col :span="2" style="color:#00ffff;font-size:16px;font-weight:bold;margin-top:0.5em">件</el-col></el-row>
              <el-row><el-col :span="24" style="color:#00ffff;font-size:32px;font-weight:bold;">不知.0%</el-col></el-row>
          </el-col>
        </el-row>     
      </dv-border-box-7>

      <!--律师与法官关联度对案件基本情况影响分析-->
      <dv-border-box-7 :color="['#080f35']" style="width:98%;height:26em;padding:1em">
        <el-row type="flex">
          <el-col :span="6" style="color:#00ffff;margin-bottom:1em">律师与法官关联度对案件基本情况影响分析</el-col>
        </el-row>
        <el-row type="flex" gutter="22" justify="center">
          <el-col :span="7">
            <el-row type="flex">
              <el-col :span="18" style="color:white;margin-bottom:1em">律师与法官关联度涉及法院层级分布</el-col>
            </el-row>
            <div id="lawyerAndJudgeCorrelationDegreeInvolveCourtHierarchyDistributionEcharts">
              <!-- 律师与法官关联度涉及法院层级分布 finish 复用 4个 即关联度 全部、高、中、底-->
            </div>
          </el-col>
          <el-col :span="10">
            <el-row type="flex">
              <el-col :span="13" style="color:white;margin-bottom:1em">律师与法官关联度涉及案由TOP10分布</el-col>
            </el-row>
            <div id="lawyerAndJudgeCorrelationDegreeInvolveCauseOfActionTop10Echarts">
              <!-- 律师与法官关联度涉及案由top10 finish 复用 4个-->
            </div>
          </el-col>
          <el-col :span="7">
            <el-row type="flex">
              <el-col :span="18" style="color:white;margin-bottom:1em">律师与法官关联度涉及案件类型分布</el-col>
            </el-row>
            <div id="lawyerAndJudgeCorrelationDegreeInvolveCauseTypeDistributionEcharts">
              <!-- 律师与法官关联度涉及案件类型分布 finish 复用 4个-->
            </div>
          </el-col>
        </el-row>
      </dv-border-box-7>

      <!--律师与法官关联度对审判过程的影响分析-->
      <dv-border-box-7 :color="['#080f35']" style="width:98%;height:26em;padding:1em">
        <el-row type="flex">
          <el-col :span="6" style="color:#00ffff;margin-bottom:1em">律师与法官关联度对审判过程的影响分析</el-col>
        </el-row>
        <el-row type="flex" gutter="22" justify="center">
          <el-col :span="10">
            <el-row type="flex">
              <el-col :span="8" style="color:white;margin-bottom:1em">律师意见采纳情况</el-col>
            </el-row>
            <div id="lawyerOpinionAdoptSituationEcharts">
              <!-- 律师意见采纳情况 finish-->
            </div>
          </el-col>
          <el-col :span="10">
            <el-row type="flex">
              <el-col :span="10" style="color:white;margin-bottom:1em">案件审理时长分析</el-col>
            </el-row>
            <div id="caseHearDurationAnalysisEcharts">
              <!-- 案件审理时长分析 finish-->
            </div>
          </el-col>
        </el-row>
      </dv-border-box-7>
      
      <!--律师对法官裁判结果的影响分析-->
      <dv-border-box-7 :color="['#080f35']" style="width:98%;height:26em;padding:1em">
        <el-row type="flex">
          <el-col :span="5" style="color:#00ffff;margin-bottom:1em">律师对法官裁判结果的影响分析</el-col>
        </el-row>
        <el-row type="flex" gutter="22" justify="center">
          <el-col :span="10">
            <el-row type="flex">
              <el-col :span="14" style="color:white;margin-bottom:1em">对一审案件裁判结果影响</el-col>
            </el-row>
            <div id="firstInstanceCaseRefereeResultInfluenceEcharts">
              <!-- 对一审案件裁判结果影响 finish-->
            </div>
          </el-col>
          <el-col :span="10">
            <el-row type="flex">
              <el-col :span="14" style="color:white;margin-bottom:1em">对二审案件裁判结果影响</el-col>
            </el-row>
            <div id="secondInstanceCaseRefereeResultInfluenceEcharts">
              <!-- 对二审案件裁判结果影响 finish-->
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
    }
  },
  mounted () {
    this.drawLawyerAndJudgeCorrelationDegreeAnalysisEcharts1()
    this.drawLawyerAndJudgeCorrelationDegreeAnalysisEcharts2()
    this.drawLawyerAndJudgeCorrelationDegreeAnalysisEcharts3()

    this.drawLawyerAndJudgeCorrelationDegreeInvolveCourtHierarchyDistributionEcharts()
    this.drawLawyerAndJudgeCorrelationDegreeInvolveCauseOfActionTop10Echarts()
    this.drawLawyerAndJudgeCorrelationDegreeInvolveCauseTypeDistributionEcharts()
    this.drawLawyerOpinionAdoptSituationEcharts()
    this.drawCaseHearDurationAnalysisEcharts()
    this.drawFirstInstanceCaseRefereeResultInfluenceEcharts()
    this.drawSecondInstanceCaseRefereeResultInfluenceEcharts()
    this.drawAppealSituationInfluenceEcharts()
    this.drawAppealSituationInfluenceEcharts2()
  },
  methods: {
    drawDemo () {
      var agencyAnalysisEcharts = this.$echarts.init(document.getElementById('agencyAnalysisEcharts'))
      var agencyAnalysisEchartsOption = {
      }
      agencyAnalysisEcharts.setOption(agencyAnalysisEchartsOption)
    },
    drawLawyerAndJudgeCorrelationDegreeAnalysisEcharts1 () {
      var lawyerAndJudgeCorrelationDegreeAnalysisEcharts = this.$echarts.init(document.getElementById('lawyerAndJudgeCorrelationDegreeAnalysisEcharts1'))
      var lawyerAndJudgeCorrelationDegreeAnalysisEchartsOption = {
        // backgroundColor: '#050038',
        title: {
          textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)'
          }
        },
        series: [
          {
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            data: [0.5, 0.5, 0.5], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: '高',
              fontSize: 30
            },
            outline: {
              show: false
            },
            shape: 'pin' // 6别针
          }
        ]
      }
      lawyerAndJudgeCorrelationDegreeAnalysisEcharts.setOption(lawyerAndJudgeCorrelationDegreeAnalysisEchartsOption)
    },
    drawLawyerAndJudgeCorrelationDegreeAnalysisEcharts2 () {
      var lawyerAndJudgeCorrelationDegreeAnalysisEcharts = this.$echarts.init(document.getElementById('lawyerAndJudgeCorrelationDegreeAnalysisEcharts2'))
      var lawyerAndJudgeCorrelationDegreeAnalysisEchartsOption = {
        // backgroundColor: '#050038',    
        title: {
          textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)'
          }
        },
        series: [
          {
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            data: [0.5, 0.5, 0.5], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: '中',
              fontSize: 30
            },
            outline: {
              show: false
            },
            shape: 'pin' // 6别针
          }
        ]
      }
      lawyerAndJudgeCorrelationDegreeAnalysisEcharts.setOption(lawyerAndJudgeCorrelationDegreeAnalysisEchartsOption)
    },
    drawLawyerAndJudgeCorrelationDegreeAnalysisEcharts3 () {
      var lawyerAndJudgeCorrelationDegreeAnalysisEcharts = this.$echarts.init(document.getElementById('lawyerAndJudgeCorrelationDegreeAnalysisEcharts3'))
      var lawyerAndJudgeCorrelationDegreeAnalysisEchartsOption = {
        // backgroundColor: '#050038',
        title: {
          textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)'
          }
        },
        series: [
          {
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            data: [0.5, 0.5, 0.5], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: '低',
              fontSize: 30
            },
            outline: {
              show: false
            },
            shape: 'pin' // 6别针
          }
        ]
      }
      lawyerAndJudgeCorrelationDegreeAnalysisEcharts.setOption(lawyerAndJudgeCorrelationDegreeAnalysisEchartsOption)
    },
    drawLawyerAndJudgeCorrelationDegreeInvolveCourtHierarchyDistributionEcharts () {
      var lawyerAndJudgeCorrelationDegreeInvolveCourtHierarchyDistributionEcharts = this.$echarts.init(document.getElementById('lawyerAndJudgeCorrelationDegreeInvolveCourtHierarchyDistributionEcharts'))
      var lawyerAndJudgeCorrelationDegreeInvolveCourtHierarchyDistributionEchartsOption = {
        // backgroundColor: '#2c343c',
        // title: {
        //   text: '律师与法官关联度涉及法院层级分布',
        //   left: 'center',
        //   top: 20,
        //   textStyle: {
        //     color: '#ccc'
        //   }
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            // colorLightness: [0, 1]
          }
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], // '#FBFE27','rgb(11,228,96)','#FE5050'
          data: [
            {
              value: 400,
              name: '最高法院'
            },
            {
              value: 154,
              name: '高级法院'
            },
            {
              value: 3189,
              name: '中级法院'
            },
            {
              value: 41273,
              name: '基层法院'
            }
          ].sort(function (a, b) {
            return a.value - b.value
          }),
          // roseType: 'radius',
          label: {
            formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
            rich: {
              c: {
                color: 'rgb(241,246,104)',
                fontSize: 20,
                fontWeight: 'bold',
                lineHeight: 5
              },
              b: {
                color: 'rgb(98,137,169)',
                fontSize: 15,
                height: 40
              }
            }
          },
          labelLine: {
            lineStyle: {
              color: 'rgb(98,137,169)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowBlur: 50
          }
        }]
      }
      lawyerAndJudgeCorrelationDegreeInvolveCourtHierarchyDistributionEcharts.setOption(lawyerAndJudgeCorrelationDegreeInvolveCourtHierarchyDistributionEchartsOption)
    },
    drawLawyerAndJudgeCorrelationDegreeInvolveCauseOfActionTop10Echarts () {
      var lawyerAndJudgeCorrelationDegreeInvolveCauseOfActionTop10Echarts = this.$echarts.init(document.getElementById('lawyerAndJudgeCorrelationDegreeInvolveCauseOfActionTop10Echarts'))
      var lawyerAndJudgeCorrelationDegreeInvolveCauseOfActionTop10EchartsOption = {
        // backgroundColor: '#00265f',
        // 'title': {
        //   'text': '律师与法官关联度涉及案由top10',
        //   x: 'center',
        //   y: '4%',
        //   textStyle: {
        //     color: '#fff',
        //     fontSize: '22'
        //   },
        //   subtextStyle: {
        //     color: '#90979c',
        //     fontSize: '16'
        //   }
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '15%',
          right: '3%',
          left: '5%',
          bottom: '12%'
        },
        xAxis: [{
          type: 'category',
          data: ['金融借款合同纠纷', '侵害作品信息网络传播权纠纷', '作品著作权属、侵权纠纷', '民间借贷纠纷', '合同纠纷', '买卖合同纠纷', '机动车交通事故责任纠纷', '劳动争议', '股权转让纠纷', '信用卡纠纷'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.12)'
            }
          },
          axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            fontSize: 14
          }
        }],
        yAxis: [{
          name: '单位：万元',
          axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff'
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,1)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.12)'
            }
          }
        }],
        series: [{
          type: 'bar',
          data: [1017, 2007, 1104, 1544, 2050, 3201, 1316, 868, 554, 509],
          barWidth: '20px',
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0,244,255,1)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(0,77,167,1)' // 100% 处的颜色
            }], false),
            borderRadius: [30, 30, 30, 30],
            shadowColor: 'rgba(0,160,221,1)',
            shadowBlur: 4
          },
          label: {
            show: true,
            lineHeight: 30,
            width: 80,
            height: 30,
            backgroundColor: 'rgba(0,160,221,0.1)',
            borderRadius: 200,
            position: ['-8', '-60'],
            distance: 1,
            formatter: [
              '    {d|●}',
              ' {a|{c}}     \n',
              '    {b|}'
            ].join(','),
            rich: {
              d: {
                color: '#3CDDCF'
              },
              a: {
                color: '#fff',
                align: 'center'
              },
              b: {
                width: 1,
                height: 30,
                borderWidth: 1,
                borderColor: '#234e6c',
                align: 'left'
              }
            }
          }
        }]
      }
      lawyerAndJudgeCorrelationDegreeInvolveCauseOfActionTop10Echarts.setOption(lawyerAndJudgeCorrelationDegreeInvolveCauseOfActionTop10EchartsOption)
    },
    drawLawyerAndJudgeCorrelationDegreeInvolveCauseTypeDistributionEcharts () {
      var lawyerAndJudgeCorrelationDegreeInvolveCauseTypeDistributionEcharts = this.$echarts.init(document.getElementById('lawyerAndJudgeCorrelationDegreeInvolveCauseTypeDistributionEcharts'))
      var lawyerAndJudgeCorrelationDegreeInvolveCauseTypeDistributionEchartsOption = {
        // backgroundColor: '#03141c',
        // title: {
        //   text: '律师与法官关联度涉及案件类型分布',
        //   textStyle: {
        //     color: '#fff',
        //     fontSize: 30,
        //     fontWeight: 'normal'
        //   }
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   x: 'center',
        //   y: 'bottom',
        //   data: ['面积模式1', '面积模式2']
        // },
        calculable: true,
        series: [
          {
            name: '民事一审案件',
            type: 'pie',
            radius: [60, 85],
            center: ['50%', '50%'],
            data: [
              {
                value: 22027 + 3284,
                // name: '吴际帅\n牛亚莉',
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#f6e3a1'
                  }, {
                    offset: 1,
                    color: '#ff4236'
                  }])
                },
                label: {
                  color: 'rgba(255,255,255,.45)',
                  fontSize: 14,
                  formatter: '一审案件\n{a|22027}个',
                  rich: {
                    a: {
                      color: '#fff',
                      fontSize: 20,
                      lineHeight: 30
                    }
                  }
                }
              },
              {
                value: 1 ,
                // name: 'rose2',
                itemStyle: {
                  color: 'transparent'
                }
              }
            ]
          },
          {
            name: '民事二审案件',
            type: 'pie',
            radius: [60, 85],
            center: ['50%', '50%'],
            data: [
              {
                value: 3284 + 22027 ,
                // name: '吴际帅\n牛亚莉',
                itemStyle: {
                  color: 'transparent'
                }
              },
              {
                value: 3284,
                // name: 'ynz',
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#348fe6'
                  }, {
                    offset: 1,
                    color: '#625bef'
                  }]),
                  labelLine: {
                    show: true
                  }
                },
                label: {
                  color: 'rgba(255,255,255,.45)',
                  fontSize: 14,
                  formatter: '二审案件\n{a|3284}个',
                  rich: {
                    a: {
                      color: '#fff',
                      fontSize: 18,
                      lineHeight: 30
                    }
                  }
                }
              }
            ]
          }
        ]
      }
      lawyerAndJudgeCorrelationDegreeInvolveCauseTypeDistributionEcharts.setOption(lawyerAndJudgeCorrelationDegreeInvolveCauseTypeDistributionEchartsOption)
    },
    drawLawyerOpinionAdoptSituationEcharts () {
      var lawyerOpinionAdoptSituationEcharts = this.$echarts.init(document.getElementById('lawyerOpinionAdoptSituationEcharts'))
      var lawyerOpinionAdoptSituationEchartsOption = {
        // backgroundColor: '#323a5e',
        // title: {
        //   text: '律师意见采纳情况',
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
          data: ['全部采纳', '部分采纳', '不予采纳'],
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
          // max: '00',
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
          data: ['关联度低', '关联度中', '关联度高'],
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
            name: '全部采纳',
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
            data: [1485, 1289, 5155]
          },
          {
            name: '部分采纳',
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
            data: [4, 500, 500]
          },
          {
            name: '不予采纳',
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
            label: {
              show: true,
              position: 'right'
            },
            data: [400, 600, 700]
          }]
      }
      lawyerOpinionAdoptSituationEcharts.setOption(lawyerOpinionAdoptSituationEchartsOption)
    },
    drawCaseHearDurationAnalysisEcharts () {
      var caseHearDurationAnalysisEcharts = this.$echarts.init(document.getElementById('caseHearDurationAnalysisEcharts'))
      var caseHearDurationAnalysisEchartsOption = {
        // backgroundColor: '#323a5e',
        // title: {
        //   text: '案件审理时长分析',
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
          data: ['高关联度', '中关联度', '低关联度'],
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
          data: ['1个月以内', '1-3个月', '3-6个月', '6个月以上'],
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
            name: '高关联度',
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
            data: [1267, 561, 338, 471]
          },
          {
            name: '中关联度',
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
            data: [853, 876, 554, 424]
          },
          {
            name: '低关联度',
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
            data: [3314, 7653, 6300, 8044]
          }]
      }
      caseHearDurationAnalysisEcharts.setOption(caseHearDurationAnalysisEchartsOption)
    },
    drawFirstInstanceCaseRefereeResultInfluenceEcharts () {
      var firstInstanceCaseRefereeResultInfluenceEcharts = this.$echarts.init(document.getElementById('firstInstanceCaseRefereeResultInfluenceEcharts'))
      var firstInstanceCaseRefereeResultInfluenceEchartsOption = {
        // backgroundColor: '#323a5e',
        // title: {
        //   text: '对一审案件裁判结果影响',
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
          data: ['高关联度', '中关联度', '低关联度'],
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
          data: ['判决', '调撤', '其他'],
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
            name: '高关联度',
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
            data: [2541, 186, 0]
          },
          {
            name: '中关联度',
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
            data: [2123, 584, 0]
          },
          {
            name: '低关联度',
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
            data: [16385, 4410, 1232]
          }]
      }
      firstInstanceCaseRefereeResultInfluenceEcharts.setOption(firstInstanceCaseRefereeResultInfluenceEchartsOption)
    },
    drawSecondInstanceCaseRefereeResultInfluenceEcharts () {
      var secondInstanceCaseRefereeResultInfluenceEcharts = this.$echarts.init(document.getElementById('secondInstanceCaseRefereeResultInfluenceEcharts'))
      var secondInstanceCaseRefereeResultInfluenceEchartsOption = {
        // title: {
        //   text: '对二审案件裁判结果影响',
        //   textStyle: {
        //     color: '#fff',
        //     fontSize: 20,
        //     fontWeight: '100'
        //   }
        // },
        // backgroundColor: '#050d19',
        color: ['#e43446', '#ebc017', '#43c798'], // 数据蛛网线条的颜色，示例中为红黄绿
        legend: { // 图例的设置
          show: true, // 是否显示图例
          icon: 'circle', // 图例形状，示例为原型
          bottom: 15, // 图例离底部的距离
          itemWidth: 14, // 图例标记的图形宽度。
          itemHeight: 14, // 图例标记的图形高度。
          itemGap: 20, // 图例每项之间的间隔。
          textStyle: { // 图例文字的样式设置
            fontSize: 14,
            color: '#ade3ff'
          },
          // data: ['高关联度', '中关联度', '低关联度'] // 图例的名称数据
        },
        radar: [{ // 每个网格的指数名称，类似于X轴或Y轴上的数据的值大小
          indicator: [
            {
              text: '改判',
              max: 500
            },
            {
              text: '发回重审',
              max: 300
            },
            {
              text: '维持',
              max: 2000
            },
            {
              text: '调解',
              max: 100
            },
            {
              text: '其他',
              max: 500
            }
          ],
          center: ['50%', '50%'], // 统计图位置，示例是居中
          radius: '70%', // 统计图大小
          startAngle: 90, // 统计图起始的角度
          splitNumber: 3, // 统计图蛛网的网格分段，示例分为三段
          // shape: 'circle',//蛛网是圆角还是尖角
          axisName: {
            formatter: '{value}', // 蛛网轴尖的数据名称
            textStyle: { // 蛛网轴尖的文字样式
              fontSize: 14, // 外圈标签字体大小
              color: '#5b81cb' // 外圈标签字体颜色
            }
          },
          splitArea: { // 蛛网在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
              color: ['rgba(76, 140, 200, 0.05)', 'rgba(76, 140, 200, 0.1)'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
          },
          axisLine: { // 蛛网轴线上的颜色，由内向外发散的那条
            lineStyle: {
              color: '#153269'
            }
          },
          splitLine: { // 蛛网环形的线条颜色
            lineStyle: {
              color: '#113865', // 分隔线颜色
              width: 1 // 分隔线线宽
            }
          }
        }],
        series: [{
          name: '',
          type: 'radar', // 统计图专业名称为雷达图，这里叫做蛛网图
          emphasis: { // 鼠标悬浮效果
            lineStyle: {
              width: 4 // 线条粗细变成4
            }
          },
          data: [
            {
              // name: '张䉈', // 数据名称
              value: [438, 227, 2193, 3, 423],
              areaStyle: {
                color: {
                  x: 0, // 右
                  y: 0, // 下
                  x2: 1, // 左
                  y2: 1, // 上
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(228,52,70,0.5)'
                  }, {
                    offset: 0.5,
                    color: 'rgba(0,0,0,0)'
                  }, {
                    offset: 1,
                    color: 'rgba(228,52,70,0.5)'
                  }]
                },
                opacity: 1 // 区域透明度
              },
              symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
              label: { // 单个拐点文本的样式设置
                position: 'top', // 标签的位置。[ default: top ]
                distance: 4, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                color: '#ccc', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                fontSize: 14 // 文字的字体大小
              },
              emphasis: {
                label: {
                  show: true,
                  formatter: '{c}' // 显示分析的数字值，a为统计图名称，b为学生姓名,c为学生这项能力的值
                }
              },
              itemStyle: {
                borderColor: '#ccc', // 单个数据标记描边的颜色
                borderWidth: 2.5 // 单个数据标记描边的大小
              }
            },
            // {
            //   name: '李鸶',
            //   value: [50, 20, 45, 30, 75],
            //   symbolSize: 2.5,
            //   itemStyle: {
            //     borderColor: '#ccc',
            //     borderWidth: 2.5
            //   },
            //   areaStyle: {
            //     color: {
            //       type: 'linear',
            //       x: 0,
            //       y: 0,
            //       x2: 1,
            //       y2: 1,
            //       colorStops: [{
            //         offset: 0,
            //         color: 'rgba(235,192,23,0.5)'
            //       }, {
            //         offset: 0.5,
            //         color: 'rgba(0,0,0,0)'
            //       }, {
            //         offset: 1,
            //         color: 'rgba(235,192,23,0.5)'
            //       }]
            //     },
            //     opacity: 1
            //   },
            //   label: {
            //     position: 'top',
            //     distance: 4,
            //     color: '#ccc',
            //     fontSize: 14
            //   },
            //   emphasis: {
            //     label: {
            //       show: true,
            //       formatter: '{c}' // 显示分析的数字值，a为统计图名称，b为学生姓名,c为学生这项能力的值
            //     }
            //   }
            // },
            // {
            //   name: '王鋈',
            //   value: [37, 80, 12, 50, 25],
            //   symbolSize: 2.5,
            //   itemStyle: {
            //     borderColor: '#ccc',
            //     borderWidth: 2.5
            //   },
            //   areaStyle: {
            //     color: {
            //       type: 'linear',
            //       x: 0,
            //       y: 0,
            //       x2: 1,
            //       y2: 1,
            //       colorStops: [{
            //         offset: 0,
            //         color: 'rgba(67,199,152,0.5)'
            //       }, {
            //         offset: 0.5,
            //         color: 'rgba(0,0,0,0)'
            //       }, {
            //         offset: 1,
            //         color: 'rgba(67,199,152,0.5)'
            //       }],
            //       globalCoord: false
            //     },
            //     opacity: 1
            //   },
            //   label: {
            //     position: 'top',
            //     distance: 4,
            //     color: '#ccc',
            //     fontSize: 14
            //   },
            //   emphasis: {
            //     label: {
            //       show: true,
            //       formatter: '{c}' // 显示分析的数字值，a为统计图名称，b为学生姓名,c为学生这项能力的值
            //     }
            //   }
            // }
            ]
        }]
      }
      secondInstanceCaseRefereeResultInfluenceEcharts.setOption(secondInstanceCaseRefereeResultInfluenceEchartsOption)
    },
    drawAppealSituationInfluenceEcharts () {
      var img = 'data:image/png;base64,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'
      var trafficWay = [{
        name: '正高级教师',
        value: 20
      }, {
        name: '高级教师',
        value: 10
      }, {
        name: '一级教师',
        value: 30
      }]

      var data = []
      var color = ['#006ced', '#ffe000', '#ff5b00', '#ff3000']
      for (var i = 0; i < trafficWay.length; i++) {
        data.push({
          value: trafficWay[i].value,
          name: trafficWay[i].name,
          itemStyle: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: color[i],
            shadowColor: color[i]
          }
        }, {
          value: 2,
          name: '',
          itemStyle: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
          }
        })
      }

      var seriesOption = [{
        name: '',
        type: 'pie',
        clockwise: false,
        radius: [105, 109],
        emphasis: {
          scale: false
        },
        itemStyle: {
          label: {
            show: true,
            position: 'outside',
            color: '#ddd',
            formatter: function (params) {
              var percent = 0
              var total = 0
              for (var i = 0; i < trafficWay.length; i++) {
                total += trafficWay[i].value
              }
              percent = ((params.value / total) * 100).toFixed(0)
              if (params.name !== '') {
                return '教师职称：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%'
              } else {
                return ''
              }
            }
          },
          labelLine: {
            length: 30,
            length2: 100,
            show: true,
            color: '#00ffff'
          }
        },
        data: data
      }]
      var appealSituationInfluenceEcharts = this.$echarts.init(document.getElementById('appealSituationInfluenceEcharts'))
      var appealSituationInfluenceEchartsOption = {
        title: {
          text: '对上诉情况影响',
          textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '100'
          }
        },

        backgroundColor: '#0A2E5D',
        color: color,
        graphic: {
          elements: [{
            type: 'image',
            z: 3,
            style: {
              image: img,
              width: 178,
              height: 178
            },
            left: 'center',
            top: 'center',
            x: 100,
            y: 100
          }]
        },
        tooltip: {
          show: false
        },
        legend: {
          icon: 'circle',
          orient: 'horizontal',
          // x: 'left',
          data: ['正高级教师', '高级教师', '一级教师'],
          right: 340,
          bottom: 150,
          align: 'right',
          textStyle: {
            color: '#fff'
          },
          itemGap: 20
        },
        toolbox: {
          show: false
        },
        series: seriesOption
      }
      appealSituationInfluenceEcharts.setOption(appealSituationInfluenceEchartsOption)
    },
    drawAppealSituationInfluenceEcharts2 () {
      var img = 'data:image/png;base64,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'
      var trafficWay = [{
        name: '正高级教师',
        value: 20
      }, {
        name: '高级教师',
        value: 10
      }, {
        name: '一级教师',
        value: 30
      }]

      var data = []
      var color = ['#006ced', '#ffe000', '#ff5b00', '#ff3000']
      for (var i = 0; i < trafficWay.length; i++) {
        data.push({
          value: trafficWay[i].value,
          name: trafficWay[i].name,
          itemStyle: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: color[i],
            shadowColor: color[i]
          }
        }, {
          value: 2,
          name: '',
          itemStyle: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
          }
        })
      }

      var seriesOption = [{
        name: '',
        type: 'pie',
        clockwise: false,
        radius: [105, 109],
        emphasis: {
          scale: false
        },
        itemStyle: {
          label: {
            show: true,
            position: 'outside',
            color: '#ddd',
            formatter: function (params) {
              var percent = 0
              var total = 0
              for (var i = 0; i < trafficWay.length; i++) {
                total += trafficWay[i].value
              }
              percent = ((params.value / total) * 100).toFixed(0)
              if (params.name !== '') {
                return '教师职称：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%'
              } else {
                return ''
              }
            }
          },
          labelLine: {
            length: 30,
            length2: 100,
            show: true,
            color: '#00ffff'
          }
        },
        data: data
      }]
      var appealSituationInfluenceEcharts = this.$echarts.init(document.getElementById('appealSituationInfluenceEcharts2'))
      var appealSituationInfluenceEchartsOption = {
        title: {
          text: '对上诉情况影响',
          textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '100'
          }
        },

        backgroundColor: '#0A2E5D',
        color: color,
        graphic: {
          elements: [{
            type: 'image',
            z: 3,
            style: {
              image: img,
              width: 178,
              height: 178
            },
            left: 'center',
            top: 'center',
            x: 100,
            y: 100
          }]
        },
        tooltip: {
          show: false
        },
        legend: {
          icon: 'circle',
          orient: 'horizontal',
          // x: 'left',
          data: ['正高级教师', '高级教师', '一级教师'],
          right: 340,
          bottom: 150,
          align: 'right',
          textStyle: {
            color: '#fff'
          },
          itemGap: 20
        },
        toolbox: {
          show: false
        },
        series: seriesOption
      }
      appealSituationInfluenceEcharts.setOption(appealSituationInfluenceEchartsOption)
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
  #lawyerAndJudgeCorrelationDegreeAnalysisEcharts1 {
    height: 12em;
    width: 14em;
  }
  #lawyerAndJudgeCorrelationDegreeAnalysisEcharts2 {
    height: 12em;
    width: 14em;
  }
  #lawyerAndJudgeCorrelationDegreeAnalysisEcharts3 {
    height: 12em;
    width: 14em;
  }
  #lawyerAndJudgeCorrelationDegreeInvolveCourtHierarchyDistributionEcharts {
    height: 20em;
    width: 24em;
  }
  #lawyerAndJudgeCorrelationDegreeInvolveCauseOfActionTop10Echarts {
    height: 20em;
    width: 34em;
  }
  #lawyerAndJudgeCorrelationDegreeInvolveCauseTypeDistributionEcharts {
    height: 20em;
    width: 22em;
  }
  #lawyerAndJudgeCorrelationDegreeHearProcessInfluenceAnalysisEcharts {
    height: 20em;
    width: 24em;
  }
  #lawyerOpinionAdoptSituationEcharts {
    height: 20em;
    width: 32em;
  }
  #caseHearDurationAnalysisEcharts {
    height: 20em;
    width: 32em;
  }
  #firstInstanceCaseRefereeResultInfluenceEcharts {
    height: 20em;
    width: 32em;
  }
  #secondInstanceCaseRefereeResultInfluenceEcharts {
    height: 24em;
    width: 32em;
  }
  #appealSituationInfluenceEcharts {
    height: 20em;
    width: 16em;
  }
  #appealSituationInfluenceEcharts2 {
    height: 20em;
    width: 16em;
  }
</style>
