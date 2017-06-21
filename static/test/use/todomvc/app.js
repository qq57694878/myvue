$(document).ready(function(){
 var vm = new Vue(
   {
     el:'#app',
     data:{
       inputdata:'',
       listdata:[],
       check1:false
     },
     computed:{
       checkall:{
         get:function(){
            return this.check1;
         },
         set:function(value){
           this.check1=value;
           this.listdata.forEach(function (todo) {
             todo.checked = value
           })
         }
      }
     },
     methods:{
       add:function () {
         this.listdata.push({title:this.inputdata,checked:this.checkall});
         this.inputdata = ''
       },
       remove:function (index) {
         this.listdata.splice(index,1)
       },
       edit:function (index,newvalue) {
         this.listdata.splice(index,1,{title:newvalue})
       }
     },
     // a custom directive to wait for the DOM to be updated
     // before focusing on the input field.
     // https://vuejs.org/guide/custom-directive.html
     directives: {
       'todo-focus': function (el, binding) {
         if (binding.value) {
           el.focus()
         }
       }
     }
   }
 );
});
