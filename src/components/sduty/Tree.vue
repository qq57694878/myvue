<template>
  <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
      {{td.name}}
    </div>
    <ul v-show="open" v-if="isFolder">

      <tree
        class="item"
        v-for="td in td.children"
        :treeData="td" :key="td.key">
      </tree>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
<script>
  var gdata = {
    keyinit: -1
  }
  export default{
    name: 'tree',
    props: {
      treeData: { type: Object, required: true }
    },
    computed: {
      isFolder () {
        let f = this.td.children && this.td.children.length > 0
        return f
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      changeType: function () {
        if (!this.isFolder) {
          window.Vue.set(this.td, 'children', [])
          this.addChild()
          this.open = true
        }
      },
      findMaxKey: function (max, trees) {
        max = trees.key > max ? trees.key : max
        if (trees.children && trees.children.length > 0) {
          for (let i = 0; i < trees.children.length; i++) {
            max = this.findMaxKey(max, trees.children[i])
          }
        }
        return max
      },
      nextKey: function () {
        if (gdata.keyinit < 0) {
          gdata.keyinit = this.findMaxKey(gdata.keyinit, this.td)
        }
        return ++gdata.keyinit
      },
      addChild: function () {
        this.td.children.push({
          name: 'new stuff',
          key: this.nextKey()
        })
        this.$emit('treeDataChange', this.td)
      }
    },
    data: function () {
      return {
        td: this.treeData,
        open: false
      }
    }
  }

</script>
<style scoped="">
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
  ul,li {
    list-style: none;
  }
  img {
    border: none;
  }
  /*一般链接*/
  a {
    text-decoration: none;
    color: #555;
  }
  a:hover {
    color: #3366ff;
  }
</style>
