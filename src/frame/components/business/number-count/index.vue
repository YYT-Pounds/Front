<script lang="tsx">
/**
 * 数字插值
 */
export default {
  name: "number-count"
}
</script>

<script lang="tsx" setup>
import {CountUp} from "countup.js"
import {nextTick, onMounted, ref, watch} from "vue"
import {getGuid} from "@/frame/utils/guid.ts"

/**
 * 定义prop
 */
const props = withDefaults(defineProps<{
  /**
   * 目标值
   */
  targetVal: number,
  /**
   * 数字小数位数
   */
  decimal?: number,
  /**
   * 初始值
   */
  startVal?: number,
  /**
   * 间隔
   */
  duration?: number,
  /**
   * 是否自动开始
   */
  autoplay?: boolean
}>(), {
  decimal: 2,
  startVal: 0,
  duration: 1,
  autoplay: true
})

/**
 * countUp实例化
 */
const countUp = ref()
/**
 * id
 */
const guid = ref(getGuid())
/**
 * 数字
 */
const number = ref(0)

/**
 * 挂载
 */
onMounted(() => {
  const option = {
    duration: props.duration,
    autoplay: props.autoplay,
    startVal: props.startVal,
    decimalPlaces: props.decimal,
  }
  countUp.value = new CountUp(guid.value, number.value, option)
})

watch(() => props.targetVal, function (newValue) {
  if (newValue) {
    number.value = newValue
    nextTick(() => {
      countUp.value.update(number.value)
    })
  }
}, {
  deep: true,
  immediate: true
})
</script>

<template>
  <span :id="guid">{{ number }}</span>
</template>