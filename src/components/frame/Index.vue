<template>

  <div class="l-wrap">
    <div class="l-left">
      <tree
        class="item"
        :treeData="treeData"
        @treeDataChange="childTreeChange">
      </tree>
    </div>
    <div class="l-right">
      {{treeData}}
    </div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">custom header</h3>
      <div slot="footer">
        parent footer

      </div>
      <h3 slot="body">parent bodyparent bodyparent bodyparent bodyparent bodyparent body</h3>
    </modal>
  </div>


</template>
<script>
  import Tree from '../sduty/Tree.vue'
  import Modal from '../sduty/Modal.vue'
export default {
    components: { Tree, Modal },
    name: 'Index',
    data: function () {
      return {
        treeData: data,
        showModal: false
      }
    },
    methods: {
      childTreeChange (d) {
        this.treeData = d
      }
    }
}

  // demo data
  var data = {
    name: 'My Tree',
    key: 1,
    children: [
      { name: 'hello', key: 2 },
      { name: 'wat', key: 3 },
      {
        name: 'child folder',
        key: 4,
        children: [
          {
            name: 'child folder',
            key: 6,
            children: [
              { name: 'hello', key: 7 },
              { name: 'wat', key: 8 }
            ]
          },
          { name: 'hello', key: 9 },
          { name: 'wat', key: 10 },
          {
            name: 'child folder',
            key: 11,
            children: [
              { name: 'hello', key: 13 }
            ]
          }
        ]
      }
    ]
  }
</script>
<style type="text/css">
.l-wrap{

}


</style>
