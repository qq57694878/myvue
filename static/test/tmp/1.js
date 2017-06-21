/*

var a =[11,22,33];
a.splice(0,2,44,55);

console.log(a.slice(1))
console.log(a)
var b='1234567890';
console.log(b.slice(1))
console.log(b)
*/

var name = "The Window";
var object = {
  name : "My Object",
  getNameFunc : function(){
    var that = this;
    return function(){
      return that.name;
    };
  }
};
console.log(object.getNameFunc()());
