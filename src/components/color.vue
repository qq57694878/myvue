<template>
  <div class="color-root">
    <div class="color-value">
         {{t}}
    </div>
    <div class="color-container" :style="s">

    </div>

    <div><input type="text" v-model="r"><input type="text" v-model="g"><input type="text" v-model="b"></div>

  </div>
</template>

<script>

  export default {
    name: 'color',
    data () {
      return {
        message: '',
        r: '00',
        g: '00',
        b: '00'
      }
    },
    computed: {
      s: function () {
        return {backgroundColor: '#' + this.r + '' + this.g + '' + this.b}
      },
      t: function () {
        return '#' + this.r + '' + this.g + '' + this.b
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .color-root{
    margin:0 auto;
    padding:0;
    text-align: center;
  }
  .color-value{
    margin:20px;
    padding:10px;
  }
  .color-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: #2c3e50 1px solid;
  }
</style>
