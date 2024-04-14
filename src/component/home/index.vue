<script>
export default {
  name: "home"
}
</script>

<script setup>
import {ref} from 'vue';
import VChart from 'vue-echarts';
import {use} from 'echarts/core'
import {LineChart} from 'echarts/charts'
import {CanvasRenderer} from 'echarts/renderers'
import {BarChart} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components'

use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer, LineChart])

const option = ref({
  title: {
    text: "养老人数流入图",
    left: "center"
  },
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [32, 21, 24, 20, 25, 31, 21, 31, 21, 31, 21, 31],
      type: 'line',
      smooth: true
    }
  ]
});

const option2 = ref({
  title: {
    text: "养老人数流出图",
    left: "center"
  },
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [32, 21, 24, 20, 25, 31, 21, 31, 21, 31, 21, 31],
      type: 'line',
      smooth: true
    }
  ]
});

const option3 = ref(
    {
      title: {
        text: "第一，第二季度用户满意度反馈",
        left: "center"
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '满意度百分比',
          type: 'bar',
          barWidth: '60%',
          data: [56, 62, 68, 72, 70, 75]
        }
      ]
    })
</script>

<template>
  <div class="page-wrap">
    <div class="page-container">
      <div class="page-left">
        <div class="page-left-header">
          <div class="list">
            <div class="item">
              <div class="item-header">
                <div class="item-left">
                  <img alt="" class="item-left-logout" src="http://118.178.254.102:1254/index_1.png"/>
                </div>
                <div class="item-right">
                  <div class="item-right-header">本月营业额</div>
                  <div class="item-right-footer">
                    <div class="title">较上月</div>
                    <div class="text">38%</div>
                  </div>
                </div>
              </div>
              <div class="item-footer">
                <span class="title">￥</span>
                <span class="text">2000000.0</span>
              </div>
            </div>
            <div class="item">
              <div class="item-header">
                <div class="item-left">
                  <img alt="" class="item-left-logout" src="http://118.178.254.102:1254/index_2.png"/>
                </div>
                <div class="item-right">
                  <div class="item-right-header">本月入住人数</div>
                  <div class="item-right-footer">
                    <div class="title">较上月</div>
                    <div class="text">38%</div>
                  </div>
                </div>
              </div>
              <div class="item-footer">
                <span class="text">139</span>
                <span class="title">人</span>
              </div>
            </div>
            <div class="item">
              <div class="item-header">
                <div class="item-left">
                  <img alt="" class="item-left-logout" src="http://118.178.254.102:1254/index_3.png"/>
                </div>
                <div class="item-right">
                  <div class="item-right-header">本月搬出人数</div>
                  <div class="item-right-footer">
                    <div class="title">较上月</div>
                    <div class="text">-38%</div>
                  </div>
                </div>
              </div>
              <div class="item-footer">
                <span class="text">36</span>
                <span class="title">人</span>
              </div>
            </div>
            <div class="item">
              <div class="item-header">
                <div class="item-left">
                  <img alt="" class="item-left-logout" src="http://118.178.254.102:1254/index_4.png"/>
                </div>
                <div class="item-right">
                  <div class="item-right-header">本月入住率</div>
                  <div class="item-right-footer">
                    <div class="title">较上月</div>
                    <div class="text">38%</div>
                  </div>
                </div>
              </div>
              <div class="item-footer">
                <span class="text">75</span>
                <span class="title">%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="page-left-body">
          <div class="left">
            <div class="item">
              <div class="item-title">
                总销售额：
              </div>
              <div class="item-text">
                <span class="title">￥</span>
                <span class="text">2000000.0</span>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="item">
              <div class="item-title">
                入住人数：
              </div>
              <div class="item-text">
                <span class="text">135</span>
                <span class="title">人</span>
              </div>
            </div>
          </div>
        </div>
        <div class="page-left-footer">
          <v-chart :option="option" autoresize class="chart" style="height: 230px"/>
          <v-chart :option="option2" autoresize class="chart" style="height: 230px"/>
        </div>
      </div>
      <div class="page-right">
        <div class="page-right-header">
          <div class="title">
            <p>快捷链接</p>
          </div>
          <div class="list">
            <div class="item">
              <div class="icon">
                <img alt="" class="icon-logout" src="http://118.178.254.102:1254/10.png"/>
              </div>
              <div class="content">
                <p>用户管理</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <img alt="" class="icon-logout" src="http://118.178.254.102:1254/11.png"/>
              </div>
              <div class="content">
                <p>健康管理</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <img alt="" class="icon-logout" src="http://118.178.254.102:1254/12.png"/>
              </div>
              <div class="content">
                <p>餐饮管理</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <img alt="" class="icon-logout" src="http://118.178.254.102:1254/13.png"/>
              </div>
              <div class="content">
                <p>工单管理</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <img alt="" class="icon-logout" src="http://118.178.254.102:1254/14.png"/>
              </div>
              <div class="content">
                <p>员工管理</p>
              </div>
            </div>
          </div>
        </div>
        <div class="page-right-footer">
          <v-chart :option="option3" autoresize class="chart" style="height: 280px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped src="../../style/home.less">

</style>
