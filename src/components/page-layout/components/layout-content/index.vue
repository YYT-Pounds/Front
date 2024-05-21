<script lang="tsx">
export default {
  name: 'test-name'
}
</script>

<script lang="tsx" setup>
import {h, reactive, resolveComponent} from 'vue'

const props = defineProps({
  data: {}
})

const a = reactive(props.data)

function render() {
  const type = resolveComponent(a.type)
  return h(type, {
        modelValue: a.name,
        onInput(value) {
          a.name = value
        },
        style:{
          width: '100px',
          height: '100px'
        }
      }
  )
}
</script>

<template>
  <div style="background-color: #666666;width: 500px;height: 200px;">
    <render></render>
  </div>
</template>

<style lang="scss" scoped>

</style>