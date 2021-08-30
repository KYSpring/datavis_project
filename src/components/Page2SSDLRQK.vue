<!-- 代理人参与案件整体情况 -->
<template>
<div id = "mainFrame">
    <el-row type="flex" :gutter="20"  justify="space-between">
      <dv-border-box-7 :color="['#080f35']" style="height:34em;width:50%;margin-right:5px;padding:1em;">
        <el-row type="flex" :gutter="20"  justify="space-between">
          <el-col :span="12">
            <span style="color:white;font-weight:bold;margin-left:-16em">性别分布</span>
            <div id='sexDistributionEcharts'>
              <!-- 复用 性别分析 finish-->
            </div>
          </el-col>
          <el-col :span="12">
            <span style="color:white;font-weight:bold;margin-left:-14em">诉讼代理类型</span>
            <div id='litigationAgentTypeDistributionEcharts'>
              <!-- 复用 诉讼代理类型 finish-->
            </div>
          </el-col>
        </el-row>

        <span style="color:white;font-weight:bold;margin-left:-36em">代理人类型分布</span>
        <el-row type="flex" :gutter="20"  justify="space-between">
          <div id='agentTypeDistributionEcharts3' style="margin-top:2em">
            <!-- 非律师诉讼代理人情况-代理人类型 doing-->
          </div>
        </el-row>
      </dv-border-box-7>

      <dv-border-box-7 :color="['#080f35']" style="height:34em;width:50%;margin-right:5px;padding:1em;">
        <el-row type="flex" :gutter="20"  justify="space-between">
          <el-col :span="12">
            <span style="color:white;font-weight:bold;margin-left:-16em">性别分布</span>
            <div id='sexDistributionEchartsSec'>
              <!-- 复用 性别分析 finish-->
            </div>
          </el-col>
          <el-col :span="12">
            <span style="color:white;font-weight:bold;margin-left:-14em">诉讼代理类型</span>
            <div id='litigationAgentTypeDistributionEchartsSec'>
              <!-- 复用 诉讼代理类型 finish-->
            </div>
          </el-col>
        </el-row>

          <el-row type="flex" :gutter="20"  justify="space-between">
            <el-col :span="14">
              <span style="color:white;font-weight:bold;margin-left:-16em">执业时长</span>
              <div id='practiceDurationDistributionEcharts'>
                  <!-- 当事人聘请代理人情况分析-执业时长 finish-->
              </div>
            </el-col>
            <el-col :span="10">
              <span style="color:white;font-weight:bold;margin-left:-14em">执业形式</span>
              <el-row>
                <el-col :span="12">
                  <div id='practiceTypeDistributionEcharts'>
                    <!-- 当事人聘请代理人情况分析-执业类型 finish  warning 需替换echarts-liquidfill position-->
                  </div>
                </el-col>
                <el-col :span="12">
                  <div id='practiceTypeDistributionEcharts2'>
                    <!-- 当事人聘请代理人情况分析-执业类型 finish  warning 需替换echarts-liquidfill position-->
                  </div>
                </el-col>
              </el-row>

            </el-col>
          </el-row>
              

      </dv-border-box-7>
    </el-row>
      
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
    this.drawSexDistributionEcharts()
    this.drawSexDistributionEchartsSec()
    this.drawLitigationAgentTypeDistributionEcharts()
    this.drawLitigationAgentTypeDistributionEchartsSec()
    this.drawPracticeDurationDistributionEcharts()
    this.drawPracticeTypeDistributionEcharts()
    this.drawPracticeTypeDistributionEcharts2()
    this.drawAgentTypeDistributionEcharts3()
  },
  methods: {
    drawDemo () {
      var agencyAnalysisEcharts = this.$echarts.init(document.getElementById('agencyAnalysisEcharts'))
      var agencyAnalysisEchartsOption = {
      }
      agencyAnalysisEcharts.setOption(agencyAnalysisEchartsOption)
    },
    drawSexDistributionEcharts () {
      var img = 'data:image/png;base64,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'
      const man = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAByCAMAAADzq6aiAAABpFBMVEUAAAAA//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A///ZqXRjAAAAi3RSTlMAAQIDBAYICQoMDQ4RExQWGBkaGxweHyAmJyksLTU4OTo7PD5AQkZHTk9QUVJTVFVYWVpgZGhqa21ucXJzdHZ5fX+AgYKDhoeIi5CRk5WWmZqbn6ChoqOlpqeoqaqsrrW2t7i5uru8vcPFx8jQ0tTX293e4OHi4+Tl5+jr7e7v8PHy8/T2+fr7/P3+d8xxFQAAAmtJREFUaN7t2vlb0zAYB/AAm1zeyKGIByKiQ9zwxgMRhifMCYooh4qgzrMw2awKKhZs80+7jbqkkGzpm/mDz/N+f1rfJZ9nT9ulTVNCiqfu0nTSspJPL9eRUmTnyBp1s/Zgt753/BvlshzS9c7a1BP7nJ53coOXEbt0vPoluinfGzTAJ1SQCbi31xaB9j4weJMKcwsMvhODH6BetS0GnRog2Ewl2Q8ED8vAQ0CwRQa2AMFdMnAP9Kh8EXtLZVBwQgxOgc/DTjF4CgwGDJE3H4D/mbtEoNb4NbbZG9MaYCtfbfQSVXpDdvW013tWq3tRKe/5wbifV8pLcB3dfv3jOmf07wBdRyIDsdH4bZZYLPZ8cXU1NZP5cIeV46P3Brrri2ll4YRDfcR5Eym4ExpeU99JNMq9ps8UELNZ5m01KCjJbRJwhALzUDJA21DQOSgE71Na2p9owMGUELRYA2u2qG7Mcu0dIcifCaSvGNhHTG4LQQQRRBBBBBFEEEG/4C/2/aIKuMDd/gnBt6zBSxXwBdt4LwSjrEGPCniBbdwQPxtdzu/CWhWwJp2fU0qepHb+dvdIO1EBSZt7U2xHZDOfjtxMauEoUQNJW+64mCcKTODDg9FQkKiCJBiKDobVpvhqoI/8Y3AlnclKCcHhbGkYQQQRRBBBBBFEEMH/Brzm6T2ULd3VAs97ekezpX5P6aJP8ICnd+79iw5PqdXvYtk8v1ybu9Gv/MqVPlX4Xes6zfXuXS9d5Upn/K+ePc53nnNXVwNz+dIkYDmuYshdPxvf8rdU5b6Z4cSDoBXC1kcpy5w6xpfaJ00rPX6kQKc/RsXweS7aQLIAAAAASUVORK5CYII='
      const woman = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAByCAMAAADzq6aiAAACtVBMVEUAAAD/AP+AAP//AP+qAP+/AP/MAP+qAP+qK//VK/+2JP+/IP/GHP/MGv+5F/+/Ff/EFP/IJP+7Iv/MIv+/IP/DHv/GHP/JG/+/Gv/CJP/FI//IIf+/IP/CH//EHf+9HP/GJv+/JP/IJP/BI//DIv/FIf/HIP/BH//DHv/DJv+9JP/FJP/GI//EIf/GIP/BJf/HH//CHv/CJP/EJP/CIf+/IP/HJP/DI//EIv/CIf/GI//CI//DIv/EIf/DJP/EI//CIv/DIv/FJP/CJP/FJP/CI//DI//GI//EIv/FIv/CJP/FIf/EJP/EI//EIv/FJP/DJP/DI//EI//CI//DIv/DJP/GIv/EJP/GI//EI//EIv/DJP/DI//EIv/EJP/EIv/EJP/DJP/FJP/DI//EI//CI//FI//DJP/EJP/CJP/EJP/FI//DI//EI//CIv/EIv/DJP/DI//FI//DI//FI//EI//EJP/DJP/EJP/EI//DI//DJP/EJP/EJP/DI//FI//FI//EI//EI//FJP/EJP/EI//DI//FI//DI//DJP/EJP/EJP/EI//EJP/EJP/DJP/EJP/EI//EI//DI//FI//FJP/EI//EJP/EI//DI//EI//EJP/EI//EJP/EJP/EI//EJP/EJP/DJP/FJP/EJP/EI//DI//EI//FJP/EI//EJP/DJP/EJP/EJP/FJP/EI//EJP/DJP/DI//FI//EI//EJP/EJP/DJP/EJP/EJP/EJP/EI//EI//DJP/FJP/EJP/EJP/EI//DI//EI//EI//EJP/EJP/DJP/EJP/DJP/EJP/EJP/EJP/EI//DI//EI//DJP/FJP/EJP/EJP/EJP/DJP/EJP/EI//EI//DI//EJP/DJP/EJP/EJP/FJP/EJP/EJP/DI//EI//EI//FI//EJP/EJP9RKXftAAAA5nRSTlMAAQICAwQFBgYGBwgJCgsMDQ4PDxAREhMUFRYXGBkaGxscHB0eHyAhIiIjIyQnKCkpKiorLjAyMzQ2Ojs8PUBBQ0RGR09QUVFSU1RUVldaXF1eX2BiYmJjZmdoa25wcHFxcnJzdXZ2eHl6ent8fX5+f4ODhISFhoeHi4yNjo+QkJGSk5WWl5mZmqKjpaioqausra6vr6+wsLS2tra3ubq7vr/AwMHCw8TFxsbHx8jJys/Q0dLT09TW193e3+Dj4+Tl5ufn6Ojp6urr6+zt7u/v8PDx8vP09PX29/f4+Pn5+vv8/P39/p4n5f0AAAPkSURBVGje7dnpX0xRGAfw02LLUkjWkiSKLNkqW0rZKmUnJfsg+1ZIqEjWSJt9S5KikqXVXtYQYpKSOX+HmWruPM3cO/ecc73ymd+rOc+95/tiZu7ZLkLicd+d+aa+/k3mbnf0LzIzD3PJmyGZ65WKWyS1lzTPuRBrpdBZimdXinVS2o/dM83CPLllygyGYN4sYfU6vuYHX3RgBGdjgQQygmeEwJOM4BMhsITxKxTysKI9E2gtCOKeTGA3YbALE2j0Rcj7zPijZAmB6YzgZiFwAyPo+JvfqxvI+uwd5QePMA8ONpV83gcb9vFraoOu1+AjZYQN+qPjBUmbA/w+a/0FfaXOUoNTFOAhTnH6B/Ooa1x5E1cR5ypNMnMYN21e6MbwvdFXy37+LLu8Pyp808qF0ycOYRlsRocmFCkEh6+ihNDRNJp9VDEWTXGEPann9RET5ZMXmTf2OyZM9Rii2b0AE+c+yZzvjyniTzBO59OA+UaioDemyhRRMIcOzBHzPDFlPEXA67TgNf3eeEyd8XrB8/Rgmt6HREEPKsbqARMwQ04Jey4NLGCDiyAYj5kSL+Q51bGBdYMEwMOYMYf4PdsaVlBuywtGYuZE8nk9v7GDX/nWyDuxhOzQ9SwrpYCVXXXAMLiAIVPgbeu1vU5wX3eODIS3VXTSApfBjVIUGbivBDSWai1jysC14HQyMD0Y7svNWoCLwaWXltWE87zlK9BaBL1Wj8EVmRvpb+u2FjQetQJgILjwvnMIKRjS5QNoBWg844egvgWdIAWPo62g9cCYA31Auao7KiYFi1GPKtD05sAkUI1A/ckfEDu0B7SSOPC5pvjdGvmSg77I5gc43OBAMFJHIxRFDu5DKEbT+s2B5VytdgBC2eTgHYQcfnGt1xyYyNUOINShlhysVZ7gHORayRw4ST2/F5gjNIFyHWKhXvEqPHQG19u9lZ9X04CrlB36NO/8d7XY0mXL5RlzG1fMyTRgYuOqfH6GXJ7tJzQ7v6QBnxNsFunG/sGiYAAdOEsUjKEDY0TBe3TgXTHPop4OrDcXAT1oZ2QPEXADLRgmAqbRgqkiO713tOBb/bs9F/plzTC94AJ6cIH+065RLso4KhMLO91UVW7CSqyqorp3FOlJWDjsfklVuQQr4dTnLAbQABpAA2gADaAB/I/B7bD7BVXlIqxsowZXwO7HVJUWG/3l1OBk2F2mqqyjWQnrpl0FOAgeqqoMB0fI5W3p30rJNN1PN1XOaiprGF5ztclU937at/kI9Jm6ktma5S2c1ZXmE54R6srIR02VK1Zs7/VM5tyoqsmVga2NuSy3purGbBM9nf4Cg6UP2KvUECgAAAAASUVORK5CYII='
      var sexData = [{
        name: '男性',
        value: 10971
      }, {
        name: '女性',
        value: 6247
      }]

      var data = []
      var color = ['#00FFFF', '#C424FF', '#ffa800', '#ff5b00', '#ff3000']
      for (var i = 0; i < sexData.length; i++) {
        data.push({
          value: sexData[i].value,
          name: sexData[i].name,
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
        radius: [85, 89],
        emphasis: {
          scale: false
        },
        itemStyle: {
          label: {
            show: true,
            x: 0,
            y: -20,
            color: '#ddd',
            formatter: function (params) {
              var percent = 0
              var total = 0
              for (var i = 0; i < sexData.length; i++) {
                total += sexData[i].value
              }
              percent = ((params.value / total) * 100).toFixed(0)
              if (params.name !== '') {
                return params.name + '：' + percent + '%'
              } else {
                return ''
              }
            }
          },
          labelLine: {
            length: 30,
            length2: 50,
            show: true,
            color: '#00ffff'
          }
        },
        data: data
      }]
      var sexDistributionEcharts = this.$echarts.init(document.getElementById('sexDistributionEcharts'))
      var sexDistributionEchartsOption = {
        // backgroundColor: '#0A2E5D',
        color: color,
        graphic: {
          elements: [
            {
              type: 'image',
              z: 3,
              style: {
                image: img,
                width: 138,
                height: 138
              },
              left: 'center',
              top: 'center',
              x: 100,
              y: 100
            },
            {
              type: 'image',
              z: 3,
              style: {
                image: woman,
                width: 45,
                height: 80
              },
              left: '50%',
              top: 'center'
            },
            {
              type: 'image',
              z: 3,
              style: {
                image: man,
                width: 45,
                height: 80
              },
              right: '50%',
              top: 'center'
            }
          ]
        },
        tooltip: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesOption
      }
      sexDistributionEcharts.setOption(sexDistributionEchartsOption)
    },
     drawSexDistributionEchartsSec () {
      var img = 'data:image/png;base64,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'
      const man = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAByCAMAAADzq6aiAAABpFBMVEUAAAAA//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A///ZqXRjAAAAi3RSTlMAAQIDBAYICQoMDQ4RExQWGBkaGxweHyAmJyksLTU4OTo7PD5AQkZHTk9QUVJTVFVYWVpgZGhqa21ucXJzdHZ5fX+AgYKDhoeIi5CRk5WWmZqbn6ChoqOlpqeoqaqsrrW2t7i5uru8vcPFx8jQ0tTX293e4OHi4+Tl5+jr7e7v8PHy8/T2+fr7/P3+d8xxFQAAAmtJREFUaN7t2vlb0zAYB/AAm1zeyKGIByKiQ9zwxgMRhifMCYooh4qgzrMw2awKKhZs80+7jbqkkGzpm/mDz/N+f1rfJZ9nT9ulTVNCiqfu0nTSspJPL9eRUmTnyBp1s/Zgt753/BvlshzS9c7a1BP7nJ53coOXEbt0vPoluinfGzTAJ1SQCbi31xaB9j4weJMKcwsMvhODH6BetS0GnRog2Ewl2Q8ED8vAQ0CwRQa2AMFdMnAP9Kh8EXtLZVBwQgxOgc/DTjF4CgwGDJE3H4D/mbtEoNb4NbbZG9MaYCtfbfQSVXpDdvW013tWq3tRKe/5wbifV8pLcB3dfv3jOmf07wBdRyIDsdH4bZZYLPZ8cXU1NZP5cIeV46P3Brrri2ll4YRDfcR5Eym4ExpeU99JNMq9ps8UELNZ5m01KCjJbRJwhALzUDJA21DQOSgE71Na2p9owMGUELRYA2u2qG7Mcu0dIcifCaSvGNhHTG4LQQQRRBBBBBFEEEG/4C/2/aIKuMDd/gnBt6zBSxXwBdt4LwSjrEGPCniBbdwQPxtdzu/CWhWwJp2fU0qepHb+dvdIO1EBSZt7U2xHZDOfjtxMauEoUQNJW+64mCcKTODDg9FQkKiCJBiKDobVpvhqoI/8Y3AlnclKCcHhbGkYQQQRRBBBBBFEEMH/Brzm6T2ULd3VAs97ekezpX5P6aJP8ICnd+79iw5PqdXvYtk8v1ybu9Gv/MqVPlX4Xes6zfXuXS9d5Upn/K+ePc53nnNXVwNz+dIkYDmuYshdPxvf8rdU5b6Z4cSDoBXC1kcpy5w6xpfaJ00rPX6kQKc/RsXweS7aQLIAAAAASUVORK5CYII='
      const woman = 'data:image/png;base64,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'
      var sexData2 = [{
        name: '男性',
        value: 46554
      }, {
        name: '女性',
        value: 22209
      }]

      var data = []
      var color = ['#00FFFF', '#C424FF', '#ffa800', '#ff5b00', '#ff3000']
      for (var i = 0; i < sexData2.length; i++) {
        data.push({
          value: sexData2[i].value,
          name: sexData2[i].name,
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
        radius: [85, 89],
        emphasis: {
          scale: false
        },
        itemStyle: {
          label: {
            show: true,
            x: 0,
            y: -20,
            color: '#ddd',
            formatter: function (params) {
              var percent = 0
              var total = 0
              for (var i = 0; i < sexData2.length; i++) {
                total += sexData2[i].value
              }
              percent = ((params.value / total) * 100).toFixed(0)
              if (params.name !== '') {
                return params.name + '：' + percent + '%'
              } else {
                return ''
              }
            }
          },
          labelLine: {
            length: 30,
            length2: 50,
            show: false,
            color: '#00ffff'
          }
        },
        data: data
      }]
      var sexDistributionEcharts2 = this.$echarts.init(document.getElementById('sexDistributionEchartsSec'))
      var sexDistributionEcharts2Option = {
        // backgroundColor: '#0A2E5D',
        color: color,
        graphic: {
          elements: [
            {
              type: 'image',
              z: 3,
              style: {
                image: img,
                width: 138,
                height: 138
              },
              left: 'center',
              top: 'center',
              x: 100,
              y: 100
            },
            {
              type: 'image',
              z: 3,
              style: {
                image: woman,
                width: 45,
                height: 80
              },
              left: '50%',
              top: 'center'
            },
            {
              type: 'image',
              z: 3,
              style: {
                image: man,
                width: 45,
                height: 80
              },
              right: '50%',
              top: 'center'
            }
          ]
        },
        tooltip: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesOption
      }
      sexDistributionEcharts2.setOption(sexDistributionEcharts2Option)
    },
    drawLitigationAgentTypeDistributionEcharts () {
      var giftImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADICAYAAACK9i92AAAU50lEQVR4nO2d7XXbuBKGXUJKUAnuIOwg7sDowOnA6iDpgOzA7sDqIO5A6kDq4NkfINeMog9iZvBBEs85Pufu3RUxAPESwGAweHioVAwAvgHf+7/X/u8N+Ljz1/b/7XP/203uulQqWQE2vSBee5EcsecP8KsvZ5O7zpVKNPrR6bkfbfYRxDSFY1/+j9ztUamoAR6BF/xIUhqD2J5zt1OlMhn81K9UUV3jiJ+qbnK332rAd5Tv+M7yyuXF9Zjzf/er/92P/jnfctcpJn093+z7fnJaoMndnosCP5V57hs35pf3iO+EryxAdPh11Qv51lQx+aAKTQZf05g34nivQhg8XY+522Uq+PZ7JX/bpaClTh3vwzzWBkV7ufBt2OZsoIy0zHzGYQ5fruE5rg2O+JFtU0g7vrKOEesWR+Ap9/vIDsvrEB9kciezrHa04o01jmYsfwqzJ5HQgCfSOy8OwDuwBX4CDXccDfh33gCu/10HfCawdT2jGcsX1jl7IgkN35apptQ7vCgajEcE/Cym6Z8fU3Ctpd1FwddUcK3sMXQl451AMaeDJ/wI80TiKRb+w/GTOGL7k7o+0SHPFKZUPlA4Q/Cd7yOife8UNJ3q69sZ1/HIjLZarkL8zjBnXgXtGWvUOuBHjGK/7PgZ0BY/slrhctdLDH4hWz1at/nDhC8pvnPFWGvtmFkn40toVsxrXUa8zmDBCd+pxn+HrBZ5Xm605yP2H6odMw8tws+O3o3aYx4iw3eGvVGlJYxdx47ATsSXG/mpf8YO2ynJLT44m6L1dbBk9sI6B/++LD6SZe+XYd8ZpnDAL4AdEaMo8MJ76suKKbj/PVzYbmUcmNlUMAT8rMnCEVKmhxEfJpSKA/CbjF4g/Ej9mzjTyz12jqETsM3VTqnBfwS1H8CyREa6TeOOgtzHA/iXarUWsGRHAbGRqcHPNrT7Z2+56zEMyx/KikyhYwYdBf9if5NuzXaNE/Azd3vkBN83tR+9fI6PvgKxj5JsmYGwziHOfs1UVjlqXQP/wdOwzWF0bHEtopMQJwLhFqseta6B3vmWdllCvDXXIXllEoB3I8cMYD2xhLCfiKAT2ZFUH3ziies3JXluIoBt9MHA59LbzQp0IvtIYWBr0iX+5sQCR61r4N37Vq79Lnd95gY6N/42pmExNpE/WcBaKxT8Gla7+O5y12Ou4KfsUuyn4sSJhevMDZ0R6GYDLrf9cwf5gPHH2pAYHsPfpkbODOTiOlHFZQbyWYSzNMI6Kt7OuBmCTlzVU2gMsm2UIxaOJfwBPEucvknmC3JxfVLFFQ1kWyhbbaHfsF13OZPWmCnoxFXd8BHB+xgkbDSFWk4Nt2atMUOQi6ujiisJyGZrMl8COjfmP53EtinmBQpx5bZ9beBD9EIIX4vhp4Z7Yac45zNSW8wCqrhmBT52NJRtaCFW4TwnVriJPEAV1ywR9P99yMMtHRtNvGYoF3Rn5Lrc9q+d/v2FhlK5qQ+3Gr22UVuhUNBtyne57a94CHd4vE95qNXodWCFni+quBYF4QHZt/s8dqNXk6YJyoEqrsUh0IO79TCr0ev+ULkwqOJaJIR7FK/3fWyOopxY2dSQKq5FQ3ic4uX+j01mqFVFyFPFtXgID7hoLj1Esrl2iU3yFsgEVVyrgTCX/fbSAyycG13ymmeCKq5VQdg0cXfpAXthZxmzSV7zDFDFtToI9E+c/9giqHcVnkOquFZJ/95DeBz/2GJ6uPiMUFRxrRrCDmS68Q9Dw/PPOeWrdhrQ3XfW5ba/ooewddh2+FHo0HeJRbvm0WXT6nLbL4GvYOWaoqCHsJleN/zoSdhxxjRZax4RViiuh4e/TrIfqSJ7eHgI9lXshh9pE18udnrIesV1/qWuInsI3iveDz/Srr8W6T1kveK69pVOd/FBwYR0guAfXGFxV+WwXnFt7tS7rCtVMxDSEawcHIuaOrBecU3dgli1yEI6g8kGc+4KW8JKxfXwEJw7ZLUiI+AApkXG3sVki2Ld4pL0g1WKjACfhYUHcREODtYtLs0sZnUiI1BgWg/iNneFtbBucVlcR7UqkZFYYC53hTWwbnFZJpZdjchILLAmd4WloEuP0OW2XwNx7nqzvZCuUKgCuw9VXNbiGmhz1y82IY1hscnc5K5wKFRxxRLXwKJFFtAOn6sTGFVcHwbvfAqLFBlhgRk7C4HNZmFLFVfskeucxYmM0Gh6g0Zscld6CujEtcttvwbyiGtgUSIjrB9tVyGwwEY5Z9bXtpJXXAOLERlhBy5/huZ6u0STu9K3oIrLQlzv6PvJIkRGmNe9sXDTF5vohnWLS5M/ZEw3ep5WZNu8raInsL6bxYZKoctSPHdxNdhc4NGdPddCZC5Pq+jp6z+Z4Ufvygbb5q32dZClojswb3G9KN/nQHfl+asVGWEnDnbDjySd8N8HFQrht2LADDsAfr3VKt/lQHenrFWKjLDB6PfwI63AjpnrfRfCkkUOvOS2eyr4Dm/lKewCylyVyAibdrvhR+oTzRQ+pcJ/3SefQh1RvOcLuykhBOa2ZEUiIzy14Wb4ocYZMNBkrf0EkHeGPxSYSal/bx8G727ACe1YhcgIO5h8OP+xtoFmkdUX+Wh9BJ5z2z8AvCrf15gTyg7OCkRG2JZHd/5jrat+NueA0O2NfZBxNAOesTsgCV4UJhnBsBFZY2GLNYR/mN35A7R5OaDwddgYZJ7FgSN+BElWX7ywrMOdPjH+WKAXWZHZg9Hez4xNbnqXp/oy0F/2HlVoeMfMM7Yj1kAX0e5FiQz/HkK8h/8mgcIm+ejsskuhF9nAG/DDyKYf+P0si0iMS0TPwsyCREZ4H7ncvsj2is6ZzTRxQNCAtzjixfYCfJ9Y/vf+v3+78VwLDiTstCxEZIRPzTfXHmSxDptljnr8FFm7QL/GHu8cOf+LNUJdItqU8E67zlpkhDs3rs/iCAxkvMI+Yf1N6etvMYqXxInMpx2YscgId264ew+URDucU+zxlXvg16LaLYtSyDJqXYIZiozwAIzT3fbGZpr4kagNooGPmo41ZYzNgQL3k9CLbE/arZHQ0aub8lCLaSIU+IJDwX/B5jSaqSMyYoNeZEmyB3P/jrRLTBthsZkmzn4UG8B7GUsezU74ExFFTAfvwQxERvjoNf2GIezc1tnWYvi11PezP/Ecvn/elrKENithjaFgkSELfnchBXxTVn5gH6sRLtj8iI+qmHo7Y4tgY5gvoVmM8lI+KXwqOAUKFRnho9dBUoiFswMiphPAd/ZXdKFE4nAn/Eifao12wL+T7BuvllCYyIg9eikLuoZ5p8CLwnKj9oj8PNQ3vNg6bKeQO/xouShRnUNBIiP8fN191/yNwjQR52PM9jCwPRp/CfUJ5t7GJ7w43vFCubaBfer//SAmxwI8sKFQgMiQBbzLI5ewHcXUIsN3vhThRcWnCVgi6EX2pix/H1jewaLSVqMYeHGIPIvYnuCdglM3XiUY9CITfRyRJX5yFhXeKCusNgy7VGQhFBHJvUZILDJkM7WDZYUl6r6Hm1h2G6HsqcwmDcLSIKHIkCUOaqwrHCPK3N0ps41QZig3bazEgwQiIyxT78AuRmVDz8VMxV0pr41UXiizPX6zBIgosv7ZEqfZJlZltTnsr+HOymkFzzjhN2Kf8B+DBru9KXe5RSopIJLIkG33bGNX1irC4xzXP78V/PZmPB5+I1hj9+xyjSwNjEUm7A/TA3qVlbUKBj7nQ/Abl8LuiM1ZmQh6kf3snyNd7qTzKhNPZCE4gd1Sj+hsT2kvCfTpBV+Rrbu2OSqbU2ROaLP0EoitbetVpJC+36WZGhZSWdDnUZdEp8wi934p8JU0teXvTFpv/f+vjRtM1e9O5L74I2FlwcCjJ7R3p2+pdcC062v3KKfdwvcYShlLg0SVdUa2Sha5O4uylw7he0tOWV7MflfWrCVyZZ2hnRahX3v8lOcXEzP4Lh38tHCf+t0Sp9/tbFrFGGyusDnHGdsYY8M8+Y0rpYHuw+WUZVuK7JOS3yO2InPGtlmecbvEEXi1tHkuoD+r55TlW4hMfkI5JUaVdcY2fSPuaegxSfL3lQJ2+TSd0g5tvyv/mBLyIEqzhr5iV6u0KZQ9pb8sI7ANBndKW5YrMqq4zjmSex8lAdiftnBKe7QiK28GQhXXNVZxcDNCuzmlPVqRleOmp4rrHotPpINt/pYBp7RJK7LGpnV0lQi9w9a8Ia/YlMqhMZXGso6lQZz8LZBXZHnvWMCmI7sCbYrBYi7EuAbxgg1cRrsam9aRGa6NinDG9liIazgd/Th67iM+f4MkEn9MY1nfEmF5Istz4Bb9pq0ztsdCXHd38ZElShnoLOtcKpQrMmkQRHqPIrpFrTO2xUJcXUB50he1miQ6lCsyyZZC2qh6fIfO0kBXbEkmrlG50g5U5iZmBBRtdA+ntCt0cEjrskfecM7YjiziGpVfT0ffgQJFRnjqgZ1di0wzUBKRLr+J4rINWcXV2yDJTrS1aYF44KfAz8ALBsdxKExkhE8Tj9o2CDUwlINx+dnF1dsh8aKqy40Ft6+HekWx2KcgkSFIniOttwhBI2wNyy5CXL0tEoHtLMq2hmnROKoYPQoRGYL3Jq1zMMjc841R2cWIq7dHMlXe85UE5hd+ZHgho/MD/06nRuPMXmQI3pu0vsEgc3M2BuWWJi6rM1Bj9njRbazsnFiX0A43W5EhGyBO0roGg8xF3xiUWZK4UoRjtSTY4ES+5TJLkeFTx4Wyk9ZThMDAraKsNYprQHw5e0B9NGe5ShVZy9ksAPiB/L112nYObZjQKIadsJw1i2tMtDwf6A9LliqyAYt7vZ1hk09qFMnifhNYRhXX30Q7U4b+mEnpItOSNhYRWYNsA55fxXUZ0836Uf12BrYtVWTpo+mRLYwnJROhiusejVXdRnXUHjsaWKLIGsOmDmoMSTT9EXi+8cyGKq57mEfk4+tpdQ/3kkS2M2zm4Ib4hnzuvudrk3X4s+jInXH9ShPXwNaqnmf11RxBGrMEkRVxs4rV1MKCzrBeluI64DvudvSnHS2ORFp4U0U2UMzNKlZTCw2dYX2sxHXihlMCHwmiabsoDo/etrWvyZxhc+rAdv4uoTOui5W4JsUWIh8xonq3sOvccxLZiRLzppBPZJ1xHZKKa1S26MYXq7rfsGtNIttR8mlzfAe12E+ZSmdsexZxjcqX0Fi1wQ3bShFZrL51oJT11hSQnfINpTO0N6u4RnZIRrGtVTvcsS27yAxtAP+uOuYkrDH4IwExLroDw1vfKURcvS0Sx8LWqCmm2JdVZOhiJj/x7esocY0lpW+UDn3CzjGNkW3FiKu3RyKwpNmOyCgyZdnzHKlCwLulh32gDj+n3hG2WW1y8I3CxNXbJPEm/gG+kzAYFZ/PwiIHfZDI0C09ynVexIawxevOoLwSxWVxgQb4CJkWnxEqmuiwuyZ4kshQtk+sdpgFJBQYBYqrtyuWY6glUrgPCUWGbuM7T275UiDcGSL1QpUqrhR7PG9EGNGwE9meK2trfEIgDctff92C8K9TcIgQ6xbXwBF4sbJ9VAcrkYF/R0MQeIt+2pwuWU2pEJ4EMuiSaqq4zmkxnjZiKzJLtpb1nCWUf3gTliOuMXsMRzTKE9mB0i4yzwWyTembUx68J83CM7dEcY35wKgj4kVmueepYd1rrzHoOt0RP+155Wvuvte9m/9ZurgGVHGCZ3XMfboCCs7/nw3K+fINrEVcA0sR2c6iDouDsjpgyeL6xE+pO+w78dxF9mll/yLJ8EIuUaq4Oi54//AdeYvdDOAPthEqqd7pO1Vct0GXSMeCUsXlJradVWcO2gq5Y9fGyKZbdBa2rgLi3FoyhdmKa1SmZWe2FFmso0vzOixZCthFbE9l9uIala2J2zvHRGTGNsGdhEKVCZBuT2Ux4urLl6YfuIZaZAiubL3AAR8UXUcsK7BNhnkJa3H9MrLLKe2wnpIdUXRsZAJ7xx/YbTRtUZkAfm0RcqxlKmbTDPwGtwXOwBbrKZnKNmTHcdTtUAkEP6I5/NfNYo1mtefTGtgCRp2KuImHgm1EFlnTWLRFRQledA3hHrSdUfmtoPNcwlnY09tkEYNpYivyNenGqj0qRhC2D7QzKK8Vdp5znL72/9sUa3oYbDPeUSUR+8GqPSqGELZOU10DRJniSh1u9uuGLc/IR9Kk2bIqEyHcESLyIFLFNabFZ7Ya/l7Qn8FbbxaokiF8evQhKKNVdp4BZ1jvkgKltZgllq0YgyzMavLl4ixLXDvFb2PSWLVNJQLI3Pc3sy7hPZWtUQdyhnXVCMQZPMOazqptKpFAHvlxxEdifMe7/Df9//6FndvbGdZTI4xPw2dZkf/K1sp9SHM8QoIzrKM2V+A/TgTyisw0ZK0SGeLGL0pwhnVrY9lCvju3q7jmBH4UKyWFmDOsV6u0pZtQRsrcKGVe2Vq5D2WsK5xhfVqlLd3EclKNYp/UkWvekHeq6Azr0SptmXxqAPvzZJfoqPkzlgHxjqvfwhna36a2xaD+1/ikTgmXB2kX787Q7jaHLdglbh3YSW2pzAT8qdrYC3hnZKvVxvbkKJWz8i34xJ9L21i0SWUm4EezGB5Gkwhw7C6sGHCB5Wuyer1Tp4AVvk5Gd9iJbWNkl6W4Bibn00DnGGq0bVBZIPivdoOfRm4JX7MdDGyIJS6Yft2TNidl9QxWphHYsXbKsmKKa+CIv31mc8WGR3TOjXrMpDIdwg5vHhXlpBDXOX/4+8qnN4Nnbg2bv7J0SHA6mjziisUmwmuoLBXCF/tvgc9/ZDnieo/1HioLBVkso5v4bGm2pVKpMYWVMJDH5N3c3EUvrhNe/KWcFqgZoCoykKfr/gP8OHvWI/rc9f8fTOyfl1tkJ6prviKFMo68DPxz6pe8dyHXU8gVPZRxOfvVu4fJJzKX+FVUlgg2d1tpuHuxN+lF5hI1f2UNkOdMGUwQ15mdsQ+Y1iP+FXvIMw0LEtfI1lgexk/qZnIlFqT12onENbLV8mbQA3VKWEkBXmSxR7Ktob0b/KFHiaOmnkKupAc/OsRYkx2IuL7Bfxx+9rbv+PpQnPp/3uFHvSfq3lYlN/jzYxajWZ2CVSrX4OvO6BBO/W9cbvsrldnA14nobjTt2vViGk5K1+iHFfEfr+O3U1DnXBYAAAAASUVORK5CYII='
      var litigationAgentTypeDistributionEcharts = this.$echarts.init(document.getElementById('litigationAgentTypeDistributionEcharts'))
      var litigationAgentTypeDistributionEchartsOption = {  
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}% <br/> {c}'
        },
        graphic: {
          elements: [{
            type: 'image',
            style: {
              image: giftImageUrl,
              width: 50,
              height: 50
            },
            left: 'center',
            top: 'center'
          }]
        },
        legend: {
          orient: 'horizontal',
          icon: 'circle',
          bottom: 0,
          x: 'center',
          textStyle: {
            color: '#fff'
          },
          data: ['律师', '法律工作者', '承担法律援助的律师', '亲友', '法定代理人', '法院许可的其他公民', '所在单位推荐的人']
        },
        series: [{
          type: 'pie',
          radius: ['40%', '50%'],
          center: ['50%', '50%'],
          color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0', '#808080'],
          data: [
            {
              value: 291,
              name: '律师'
            },
            // {
            //   value: 7,
            //   name: '法律工作者'
            // },
            // {
            //   value: 1,
            //   name: '承担法律援助的律师'
            // },
            {
              value: 1008,
              name: '亲友'
            },
            // {
            //   value: 10,
            //   name: '法定代理人'
            // },
            {
              value: 9574,
              name: '法院许可的其他公民'
            }
            // {
            //   value: 1,
            //   name: '所在单位推荐的人'
            // }
          ],
          labelLine: {
            show: true,
            length: 20,
            length2: 20,
            lineStyle: {
              color: '#12EABE',
              width: 2
            }
          },
          label: {
            formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
            rich: {
              b: {
                fontSize: 12,
                color: '#12EABE',
                align: 'left',
                padding: 4
              },
              hr: {
                borderColor: '#12EABE',
                width: '100%',
                borderWidth: 2,
                height: 0
              },
              d: {
                fontSize: 12,
                color: '#fff',
                align: 'left',
                padding: 4
              },
              c: {
                fontSize: 12,
                color: '#fff',
                align: 'left',
                padding: 4
              }
            }
          }
        }]
      }
      litigationAgentTypeDistributionEcharts.setOption(litigationAgentTypeDistributionEchartsOption)
    },
    drawLitigationAgentTypeDistributionEchartsSec () {
      var giftImageUrl = 'data:image/png;base64,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'
      var litigationAgentTypeDistributionEcharts = this.$echarts.init(document.getElementById('litigationAgentTypeDistributionEchartsSec'))
      var litigationAgentTypeDistributionEchartsOption = {
        // backgroundColor: '#031845',
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}% <br/> {c}'
        },
        graphic: {
          elements: [{
            type: 'image',
            style: {
              image: giftImageUrl,
              width: 50,
              height: 50
            },
            left: 'center',
            top: 'center'
          }]
        },
        legend: {
          orient: 'vertical',
          icon: 'circle',
          x: '200',
          textStyle: {
            color: '#fff'
          },
          data: ['律师', '法律工作者', '承担法律援助的律师', '亲友', '法定代理人', '法院许可的其他公民', '单位推荐']
        },
        series: [{
          type: 'pie',
          radius: ['40%', '50%'],
          center: ['50%', '50%'],
          color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0', '#808080'],
          data: [
            {
              value: 47696,
              name: '律师'
            },
            // {
            //   value: 5,
            //   name: '法律工作者'
            // },
            // {
            //   value: 2,
            //   name: '承担法律援助的律师'
            // },
            // {
            //   value: 15,
            //   name: '亲友'
            // },
            // {
            //   value: 10,
            //   name: '法定代理人'
            // },
            // {
            //   value: 12,
            //   name: '法院许可的其他公民'
            // },
            {
              value: 5354,
              name: '单位推荐'
            }
          ],
          labelLine: {
            show: true,
            length: 10,
            length2: 10,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          label: {
            formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
            rich: {
              b: {
                fontSize: 13,
                color: '#fff',
                align: 'left',
                padding: 2
              },
              hr: {
                borderColor: '#fff',
                width: '100%',
                borderWidth: 2,
                height: 0
              },
              d: {
                fontSize: 13,
                color: '#fff',
                align: 'left',
                padding: 2
              },
              c: {
                fontSize: 13,
                color: '#fff',
                align: 'left',
                padding: 2
              }
            }
          }
        }]
      }
      litigationAgentTypeDistributionEcharts.setOption(litigationAgentTypeDistributionEchartsOption)
    },
    drawPracticeDurationDistributionEcharts () {
      var practiceDurationDistributionEcharts = this.$echarts.init(document.getElementById('practiceDurationDistributionEcharts'))
      var practiceDurationDistributionEchartsOption = {
        backgroundColor: '#000',
        'animation': true,
        'title': {
          'text': '11.34年',
          'subtext': '平均工作年限',
          'x': 'center',
          'y': 'center',
          'textStyle': {
            'color': '#fff',
            'fontSize': 20,
            'fontWeight': 'normal',
            'align': 'center',
            'width': '200px'
          },
          'subtextStyle': {
            'color': '#fff',
            'fontSize': 10,
            'fontWeight': 'normal',
            'align': 'center'
          }
        },
        'legend': {
          // 'width': '30%',
          // 'left': 'center',
          // 'textStyle': {
          //   'color': '#fff',
          //   'fontSize': 10
          // },
          // 'icon': 'circle',
          // 'right': '0',
          // 'bottom': '0',
          // 'padding': [0, 60],
          // 'itemGap': 40,
          orient: 'horizontal',
          icon: 'circle',
          bottom: 0,
          x: 'center',
          textStyle: {
            color: '#fff'
          },
          'data': ['五至十年', '十至十五年', '十五至二十年', '二十年以上']
        },
        'series': [
          {
            'type': 'pie',
            'center': ['50%', '50%'],
            'radius': ['40%', '53%'],
            'color': ['#FEE449', '#00FFFF', '#00FFA8', '#9F17FF', '#FFE400', '#F76F01', '#01A4F7', '#FE2C8A'],
            'startAngle': 135,
            'labelLine': {
              'length': 15
            },
            'label': {
              'formatter': '{b|{b}:}  {per|{d}%} ',
              'backgroundColor': 'rgba(255, 147, 38, 0)',
              'borderColor': 'transparent',
              'borderRadius': 4,
              'rich': {
                'a': {
                  'color': '#999',
                  'lineHeight': 12,
                  'align': 'center'
                },
                'hr': {
                  'borderColor': '#aaa',
                  'width': '100%',
                  'borderWidth': 1,
                  'height': 0
                },
                'b': {
                  'color': '#b3e5ff',
                  'fontSize': 12,
                  'lineHeight': 33
                },
                'c': {
                  'fontSize': 12,
                  'color': '#eee'
                },
                'per': {
                  'color': '#FDF44E',
                  'fontSize': 12,
                  'padding': [5, 8],
                  'borderRadius': 2
                }
              },
              'color': '#fff',
              'fontSize': 16
            },
            'emphasis': {
              'label': {
                'show': true,
                'formatter': '{b|{b}:}  {per|{d}%}  ',
                'backgroundColor': 'rgba(255, 147, 38, 0)',
                'borderColor': 'transparent',
                'borderRadius': 4,
                'rich': {
                  'a': {
                    'color': '#999',
                    'lineHeight': 12,
                    'align': 'center'
                  },
                  'hr': {
                    'borderColor': '#aaa',
                    'width': '100%',
                    'borderWidth': 1,
                    'height': 0
                  },
                  'b': {
                    'color': '#fff',
                    'fontSize': 12,
                    'lineHeight': 13
                  },
                  'c': {
                    'fontSize': 12,
                    'color': '#eee'
                  },
                  'per': {
                    'color': '#FDF44E',
                    'fontSize': 12,
                    'padding': [5, 6],
                    'borderRadius': 2
                  }
                }
              }
            },
            'data': [{
              'name': '五至十年',
              'value': 8381
            }, {
              'name': '十至十五年',
              'value': 2586
            }, {
              'name': '十五至二十年',
              'value': 689
            }, {
              'name': '二十年以上',
              'value': 3694
            }]
          },
          {
            'type': 'pie',
            'center': ['50%', '50%'],
            'radius': ['35%', '36%'],
            'label': {
              'show': false
            },
            'data': [{
              'value': 78,
              'name': '实例1',
              'itemStyle': {
                'color': {
                  'x': 0,
                  'y': 0,
                  'x2': 1,
                  'y2': 0,
                  'type': 'linear',
                  'global': false,
                  'colorStops': [{
                    'offset': 0,
                    'color': '#9F17FF'
                  }, {
                    'offset': 0.2,
                    'color': '#01A4F7'
                  }, {
                    'offset': 0.5,
                    'color': '#FE2C8A'
                  }, {
                    'offset': 0.8,
                    'color': '#FEE449'
                  }, {
                    'offset': 1,
                    'color': '#00FFA8'
                  }]
                }
              }
            }]
          }]
      }
      practiceDurationDistributionEcharts.setOption(practiceDurationDistributionEchartsOption)
    },
    drawPracticeTypeDistributionEcharts () {
      var practiceTypeDistributionEcharts = this.$echarts.init(document.getElementById('practiceTypeDistributionEcharts'))
      var practiceTypeDistributionEchartsOption = {
        series: [
          {
            type: 'liquidFill',
            radius: '45%',
            center: ['50%', '50%'],
            data: [0.5, 0.5, 0.5], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: (0.5 * 100).toFixed(2) + '%',
              fontSize: 20
            },
            outline: {
              show: false
            }
          },
          {
            'type': 'pie',
            'center': ['50%', '50%'],
            'radius': ['50%', '52%'],
            emphasis: {
              scale: false
            },
            'data': [
              {
                'name': '',
                'value': 0.1,
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
      practiceTypeDistributionEcharts.setOption(practiceTypeDistributionEchartsOption)
    },
    drawPracticeTypeDistributionEcharts2 () {
      var practiceTypeDistributionEcharts = this.$echarts.init(document.getElementById('practiceTypeDistributionEcharts2'))
      var practiceTypeDistributionEchartsOption = {
        series: [
          {
            type: 'liquidFill',
            radius: '45%',
            center: ['50%', '50%'],
            data: [0.5, 0.5, 0.5], // data个数代表波浪f数
            backgroundStyle: {
              borderWidth: 1,
              color: 'rgb(255,0,255,0.1)'
            },
            label: {
              formatter: (0.5 * 100).toFixed(2) + '%',
              fontSize: 20
            },
            outline: {
              show: false
            }
          },
          {
            'type': 'pie',
            'center': ['50%', '50%'],
            'radius': ['50%', '52%'],
            emphasis: {
              scale: false
            },
            'data': [
              {
                'name': '',
                'value': 0.1,
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
      practiceTypeDistributionEcharts.setOption(practiceTypeDistributionEchartsOption)
    },
    drawAgentTypeDistributionEcharts3 () {
      var xdata = ['买卖合同纠纷', '机动车交通事故责任纠纷', '劳动争议', '合同纠纷', '物业服务合同纠纷', '著作权权属、侵权纠纷', '民间借纠纷承揽合同纠纷', '承揽合同纠纷', '金融借款合同纠纷', '房屋租赁合同纠纷']
      var data = [973, 456, 455, 355, 323, 182, 173, 143, 112, 104]
      var maxArr = [100, 100, 100]
      var agentTypeDistributionEcharts = this.$echarts.init(document.getElementById('agentTypeDistributionEcharts3'))
      var agentTypeDistributionEchartsOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          // borderRadius: 5,
          // borderColor: '#6baab2',
          // borderWidth: 1,
          formatter: function (params) { // params[0].data.nameCode
            // let dot = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>'
            return (
              params[0].name +
              '<br>' +
              '杆塔数量 ：' +
              params[0].value
            )
          }
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '3%',
          top: '15%',
          containLabel: true
        },
        xAxis: {
          data: xdata,
          triggerEvent: true,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            rotate: 40,
            interval: 0,
            padding: [14, 0, 0, 0],
            fontSize: 14,
            color: 'rgba(255,255,255,1)'
          }
        },
        yAxis: {
          name: '单位：人',
          triggerEvent: true,
          nameTextStyle: {
            color: 'rgba(255,255,255,1)',
            fontSize: 16,
            padding: [0, 0, 10, -20]
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            show: true,
            color: 'rgb(148,159,167)',
            fontSize: 16
          }
        },
        // color: ['#e54035'],
        series: [
          {
            name: '数量',
            barMinHeight: 10,
            type: 'pictorialBar',
            barCategoryGap: '60%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              // barBorderRadius: 5,
              // 渐变色
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#01EAED'
                },
                {
                  offset: 0.5,
                  color: '#02C4DD'
                },
                {
                  offset: 1,
                  color: '#029ED9'
                }
              ])
            },
            label: {
              show: true,
              position: 'top',
              color: '#fff',
              fontSize: 20
            },
            data: data,
            z: 10
          },
          {
            name: 'hill',
            type: 'bar',
            barWidth: '20%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              color: 'rgba(11,47,68,.8)'
            },
            data: maxArr,
            z: 9
          }
        ]
      }
      agentTypeDistributionEcharts.setOption(agentTypeDistributionEchartsOption)
    }
  }
}
</script>

<style scoped>
  html, body {
    /* 获取浏览器的定高，body和div也就有了依赖 */
    margin: 0;
    height: 100%;
  }
  #mainFrame{
    width:100%;
    height:100%;
    padding: 1em;
  }
  #sexDistributionEcharts {
    height: 17em;
    width: 18em;
  }
  #sexDistributionEchartsSec {
    height: 17em;
    width: 18em;
  }
  #litigationAgentTypeDistributionEcharts {
    height: 17em;
    width: 18em;
  }
  #litigationAgentTypeDistributionEchartsSec {
    height: 17em;
    width: 18em;
  }
  #practiceDurationDistributionEcharts {
    height: 17em;
    width: 26em;
  }
  #practiceTypeDistributionEcharts {
    height: 12em;
    width: 12em;
  }
  #practiceTypeDistributionEcharts2 {
    height: 12em;
    width: 12em;
  }
  #agentTypeDistributionEcharts3 {
    height: 17em;
    width: 44em;
  }
</style>
