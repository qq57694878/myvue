/*
var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core')
  .transform(es6Code, {
    presets: ['latest']
  })
  .code;
console.log(es5Code);
*/

const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
console.log(foo);
//冻结函数
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};


let [a, b, c] = [1, 2, 3];



const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}


let sss="𠮷a";
console.log(sss.length);
for(let i of sss){
  console.log(i);
}
function p (s) {
  console.log(s);
}
p(sss.charCodeAt(0)) // 55362
p(sss.charCodeAt(1)) // 57271
