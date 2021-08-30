<template>
  <div id="basicFrame">
    <el-container>
      <el-header>
          <el-row id="topBar">
            <el-col :span="9">
              <div class="grid-content">
                <el-col :span="8" style="color:white;font-size:2vh;font-weight:bold;color:white;margin-top:1vh">北京市</el-col>
                <el-col :span="8" style="color:white;font-size:2vh;font-weight:bold;color:white;margin-top:1vh">2018年 至  2020年</el-col>
              </div>
            </el-col>
            <el-col :span="6"><div id="title" class="grid-content2"><div id="text">案件代理人情况分析</div></div></el-col>
            <el-col :span="9" type="flex" class="row-bg" justify="end"><div class="grid-content"></div></el-col>
          </el-row>
      </el-header>
      <el-main id="mainArea">
          <el-row id="tabBar">
            <el-col :span="3" id="tabItem" v-for="item in tabList" :key="item.id" :style="{color: selectedPage === item.id? '#ffd04b':''}"><span @click="whichPage(item)">{{item.text}}</span></el-col>
          </el-row>
          <el-row style="margin-top:1em;width:100%" type="flex"  justify="space-between">
            <el-col :span="9">
              <el-col :span="22" class="beauline"></el-col>
              <el-col :span="2"><i class="el-icon-d-arrow-right" style="color:#005eff"></i></el-col>
            </el-col>
            <el-col :span="6">
              <div id="title" style="font-size:16px">可&nbsp;视&nbsp;化&nbsp;区&nbsp;域</div>
            </el-col>
            <el-col :span="9">
              <el-col :span="2"><i class="el-icon-d-arrow-left" style="color:#005eff"></i></el-col>
              <el-col :span="22" class="beauline"></el-col>
            </el-col>
         </el-row>
          <el-row type="flex"  justify="space-between">
            <!-- 单页面组件插入 -->
            <Page0QY v-show="selectedPage === '0'? true:false"></Page0QY>
            <Page1DLRCYAJZTQK v-show="selectedPage === '1'? true:false"></Page1DLRCYAJZTQK>
            <Page2SSDLRQK v-show="selectedPage === '2'? true:false"></Page2SSDLRQK>
            <Page3LSDLAJAYFB v-show="selectedPage === '3'? true:false"></Page3LSDLAJAYFB>
            <Page4LSYFGGLDFX v-show="selectedPage === '4'? true:false"></Page4LSYFGGLDFX>
            <Page5LSCYAJSC v-show="selectedPage === '5'? true:false"></Page5LSCYAJSC>
            <Page6AJNYYDLFX v-show="selectedPage === '6'? true:false"></Page6AJNYYDLFX>
            <Page7JY v-show="selectedPage === '7'? true:false"></Page7JY>
          </el-row>
      </el-main>
      <el-footer>Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Page0QY from './components/Page0QY.vue'
import Page1DLRCYAJZTQK from './components/Page1DLRCYAJZTQK.vue'
import Page2SSDLRQK from './components/Page2SSDLRQK.vue'
import Page3LSDLAJAYFB from './components/Page3LSDLAJAYFB.vue'
import Page4LSYFGGLDFX from './components/Page4LSYFGGLDFX.vue'
import Page5LSCYAJSC from './components/Page5LSCYAJSC.vue'
import Page6AJNYYDLFX from './components/Page6AJNYYDLFX.vue'
import Page7JY from './components/Page7JY.vue'

export default {
  name: 'App',
  components: {
    Page0QY,
    Page1DLRCYAJZTQK,
    Page2SSDLRQK,
    Page3LSDLAJAYFB,
    Page4LSYFGGLDFX,
    Page5LSCYAJSC,
    Page6AJNYYDLFX,
    Page7JY
  },
  data(){
    return{
      tabList : [
        {text:'前言', id:'0'},
        {text:'案件代理人概况',id:'1'},
        {text:'诉讼代理人情况',id:'2'},
        {text:'律师代理案由分布',id:'3'},
        {text:'律师与法官关联度',id:'4'},
        {text:'律师参与案件时长',id:'5'},
        {text:'案件难易分析',id:'6'},
        {text:'结语',id:'7'}
      ],
      selectedPage: '0',
    }
  },
  methods:{
    whichPage(item){
      this.selectedPage = item.id;
    }
  }
}
</script>

<style scoped>
#basicFrame {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/00.jpeg');
}
#topBar{
  width:100%;
  height:6vh;
}
#title{
  font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 3.5vh;
  font-weight: bold;
  color: white;
  background-image:-webkit-linear-gradient(bottom,#4da6ff,white);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}
#text{
  margin: 1vh;
}
#mainArea{
  padding:0;
}
#tabBar{
  margin-top:0.5em;
  color:white;
  font-weight:normal;
  font-size: 16px;
}
#tabItem{
  border-right:1px solid #0062ff;
  border-radius: 0;
  cursor:pointer;
}
#tabItemSelected{
  color:#ffd04b
}
#tabItem:hover{
  color:#ffd04b
}

.el-row {
    margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  min-height: 36px;
  border-bottom: 2px solid #005eff;
}
.grid-content2 {
  border-radius: 20px;
  min-height: 36px;
  border-bottom: 2px solid #00d7ff;
}
.el-menu-demo1{
  background-image: url('./assets/bgimg.png');
}
.beauline{
  border-top: 2px solid #005eff;
  margin-top:0.5em;
}
.chartItem{
  z-index:1;
}


</style>
