<script lang="tsx" setup>
/**
 * 验证码
 */
import {nextTick, onMounted, ref} from "vue";
import {processRequest} from "@/frame/apis";

/**
 * 定义props
 */
const props = withDefaults(defineProps<{
  /**
   * 服务器验证码
   */
  url?: string,
  /**
   * 最小随机数
   */
  minValue?: number,
  /**
   * 最大随机数
   */
  maxValue?: number,
  /**
   * 最小字体
   */
  minFontSize?: number,
  /**
   * 最大字体
   */
  maxFontSize?: number,
  /**
   * 最小背景色
   */
  minBackgroundColor?: number,
  /**
   * 最大背景色
   */
  maxBackgroundColor?: number,
  /**
   * 最小线条色
   */
  minLineColor?: number,
  /**
   * 最大线条色
   */
  maxLineColor?: number,
  /**
   * 最小倾斜角
   */
  minDeg?: number,
  /**
   * 最大倾斜角
   */
  maxDeg?: number,
  /**
   * 宽度
   */
  width?: number,
  /**
   * 高度
   */
  height?: number
}>(), {
  minValue: 1000,
  maxValue: 9999,
  minFontSize: 25,
  maxFontSize: 35,
  minLineColor: 100,
  maxLineColor: 200,
  minBackgroundColor: 100,
  maxBackgroundColor: 200,
  minDotColor: 60,
  maxDotColor: 120,
  minDeg: -30,
  maxDeg: 30,
  width: 90,
  height: 38
})

/**
 * 值
 */
const value = ref()

/**
 * guid
 */
const guid = ref()

/**
 * 初始化
 */
onMounted(() => {
  guid.value = "id_" + Math.random() + Math.random()
  handleRefresh()
})

/**
 * 刷新
 */
const handleRefresh = async () => {
  if (props.url) {
    value.value = await processRequest.get(props.url)
  } else {
    value.value = randomNum(props.minValue, props.maxValue)
  }
  await nextTick(() => {
    drawCanvas()
  })
}

/**
 * 获取随机数
 */
const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 获取背景色
 */
const randomColor = (min: number, max: number) => {
  const r = randomNum(min, max);
  const g = randomNum(min, max);
  const b = randomNum(min, max);
  return "rgb(" + r + "," + g + "," + b + ")";
}

/**
 * 绘图初始化
 */
const drawCanvas = () => {
  const canvas: any = document.getElementById(guid.value);
  if (canvas) {
    //创建一个2D对象作为上下文。
    const ctx = canvas.getContext("2d");
    ctx.textBaseline = "bottom";
    // 绘制背景
    ctx.fillStyle = "#e6ecfd";
    ctx.fillRect(0, 0, (props.width || 90), (props.height || 38));
    // 绘制文字
    for (let i = 0; i < String(value.value).length; i++) {
      drawText(ctx, String(value.value)[i], i);
    }
    drawLine(ctx);
    drawDot(ctx);
  }
}

/**
 * 绘制文本
 */
const drawText = (ctx: any, txt: any, i: any) => {
  ctx.fillStyle = randomColor(props.minFontSize, props.maxFontSize);
  ctx.font = randomNum(props.minFontSize, props.maxFontSize) + "px SimHei";
  const x = (i + 1) * (props.width / (String(value.value).length + 1));
  const y = randomNum(props.maxFontSize, props.height - 5);
  const deg = randomNum(-30, 30);
  ctx.translate(x, y);
  ctx.rotate((deg * Math.PI) / 180);
  ctx.fillText(txt, 0, 0);
  ctx.rotate((-deg * Math.PI) / 180);
  ctx.translate(-x, -y);
}

/**
 * 绘制干扰线
 */
const drawLine = (ctx: any) => {
  for (let i = 0; i < 4; i++) {
    ctx.strokeStyle = randomColor(props.minLineColor, props.maxLineColor);
    ctx.beginPath();
    ctx.moveTo(
        randomNum(0, props.width),
        randomNum(0, props.height)
    );
    ctx.lineTo(
        randomNum(0, props.width),
        randomNum(0, props.height)
    );
    ctx.stroke();
  }
}

/**
 * 绘制干扰点
 */
const drawDot = (ctx: any) => {
  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = randomColor(props.minDotColor, props.maxDotColor);
    ctx.beginPath();
    ctx.arc(
        randomNum(0, props.width),
        randomNum(0, props.height),
        1,
        0,
        2 * Math.PI
    );
    ctx.fill();
  }
}

/**
 * 获取value
 */
const getValue = () => {
  return value.value
}

/**
 * 暴露
 */
defineExpose({
  getValue,
  handleRefresh
})

/**
 * 初始化
 */
</script>

<template>
  <div @click="handleRefresh">
    <canvas
        :id="guid"
        :height="height"
        :width="width"
    ></canvas>
  </div>
</template>