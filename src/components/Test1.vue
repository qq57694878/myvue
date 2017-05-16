<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{$route.params.id}}
    <emlist v-bind:items="items">
      <template slot="item" scope="p">
        <li class="my-fancy-item">{{ p.val }}</li>
      </template>
    </emlist>
  </div>
</template>

<script>

  import emlist from '../components/common/emlist.vue'
export default {
    name: 'test1',
    components: {'emlist': emlist},
    data () {
      return {
        msg: '你好',
        items: [
          {text: 'A'},
          {text: 'B'},
          {text: 'C'}
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
