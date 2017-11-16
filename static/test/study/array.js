var log = console.log.bind(console);
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
var list =[...arr1, ...arr2, ...arr3];
log(list);
// ES5
var a = list[0], rest = list.slice(1)
// ES6
var[a,...rest] = list;
//const [first, ...rest] = [1, 2, 3, 4, 5];

const go = function*(){
  yield 1;
  yield 2;
  yield 3;
};

var g =[...go()] // [1, 2, 3]
log([...go()]);
log(g);
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// ES5的写法
var arr3 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr4 = Array.from(arrayLike); // ['a', 'b', 'c']
Array.of(3, 11, 8) // [3,11,8]
var c =["a","b","c"];
for (let index of c.keys()) {
  console.log(index);
}
/*for (let elem of c.values()) {
  console.log(elem);
}*/
for (let [index, elem] of c.entries()) {
  console.log(index, elem);
}
// forEach方法
['a'].forEach((x,i) => console.log(i)); // 1

// filter方法
['a','b'].filter(x => true); // ['a','b']

// every方法
  ['a','b'].every(x => x==='a'); // true

// some方法
  ['a','b'].some(x => x !== 'a'); // false

// map方法
  ['a','c'].map(x => 1); // [,1]

// join方法
  ['a',undefined,null].join('#'); // "#a##"

// toString方法
  ['a',undefined,null].toString(); // ",a,,"
var d1 =['a','c'].map(x => x+"1"); // [,1]
log(d1);
// entries()
/*
[...[,'a'].entries()] // [[0,undefined], [1,"a"]]

// keys()
  [...[,'a'].keys()] // [0,1]

// values()
[...[,'a'].values()] // [undefined,"a"]

// find()
  [,'a'].find(x => true) // undefined

// findIndex()
  [,'a'].findIndex(x => true) // 0*/
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
for(i in target){
  log(i+":"+target[i]);
}

class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
  [Symbol.hasInstance](obj){
    return obj instanceof Array;
  }

}
let a7 = new MyArray(1,2,3);
let mapped = a7.map(x => x * x);
a7 instanceof MyArray // true
mapped instanceof new MyArray(); // true
mapped instanceof Array // true
