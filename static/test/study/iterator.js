function List(...array){
  this.index = 0;
  this.array = array;
  this[Symbol.iterator]= function(){return this;};
   this.next=function () {
      return this.index<this.array.length?{value:array[this.index++],done:false}:{done:true};
    };
}
for (i of new List(1111,2222,12,32,1,231,2,312,321,3,21,3,213,12,3)){
  console.log(i);
}
let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // 'a', 'b', 'c'
}

let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};
for( i of generator()){
  console.log(i);
}

for( i of "asdf"){
  console.log(i);
}


class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
arr.length // 1

arr.length = 0;
arr[0] ;// undefined
function* gen() {
  yield  123 + 456;
  yield  123 + 456;
}
for( i of gen()){
  console.log(i);
}
var s ="";
for(i=0;i<200;i++){
  s+="𠮷";
}
var s1 ="";
for(i=0;i<200;i++){
  s1+="年";
}
console.log(s1);
console.log(s1.length);
console.log("你好大打架".substr(0,3));
;
