<template>
  <ul>
    <slot name="item"
          v-for="item in items"
          :val="item.text">
      <!-- 这里写入备用内容 -->
    </slot>
  </ul>
</template>
<script>

export default {
  name: 'emlist',
  props: ['items'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
<style>

</style>
