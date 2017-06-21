/*import exp, {pi, e} from "mathplus.js";
 console.log("e^π = " + exp(pi));*/
let a = Array.from(['a', 'b', 'c'])
a.forEach((i) => {
  console.log(i)
})
var b = a.map((i, j) => {
  i = i + j
  return i
})
console.log(b.join(','))
let c = b.filter(x => true) // ['a','b']
console.log(c.join(','))

var d = c.every(x => x === 'a0') // true
console.log(d)

var e = c.some(x => x === 'a0') // true
console.log(e)

for (let [i, v] of c.entries()) {
  console.log(i + ':' + v)
}

var fibonacci = {
  [Symbol.iterator] () {
    let pre = 0
    let cur = 1
    return {
      next () {
        [pre, cur] = [cur, pre + cur]
        return {done: false, value: cur}
      }
    }
  }
}
function invoke () {
  let n = 0
  for (let i of fibonacci) {
    if (n++ > 10) {
      break
    }
    console.log(i)
  }
}
invoke()
var s = String.fromCodePoint(0x20BB7)
console.log('\uD842\uDFB7 \u{20BB7} \u{61}\u{62}\u{63}\u{41}\u{42}\u{43}')
console.log(s)
// 字符串中嵌入变量
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`

s = 'Hello world!'

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
console.log('2'.repeat(10))

var Person = {

  name: '张三',

  //等同于birth: birth
  birth: 'birth',

  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name) }

}

var target = {a: 1, b: 1}

var source1 = {b: 2, c: 2}
var source2 = {c: 3}

Object.assign(target, source1, source2)
log(target)
function log (...s) {
  let index = 0
  if (s.length === 1) {
    console.log(...s)
    return
  }
  for (i of s) {
    console.log('index%d:%s', index, i)
  }

}
log(1)
let symbol = Symbol('test')

let a1 = {}

a1[symbol] = '1'
log(a1)
Object.defineProperty(a1, symbol, {value: '2'})
log(a1)
a1 = {
  [symbol]: '3'
}
log(a1)

var o = {}
o.a = '2'
o.b = '1'
function observer (changes) {
  changes.forEach(function (change) {
    console.log('发生变动的属性：' + change.name)
    console.log('变动前的值：' + change.oldValue)
    console.log('变动后的值：' + change.object[change.name])
    console.log('变动类型：' + change.type)
  })
}

//Object.observe(o, observer);
o.a = '1'
o.b = '2'

let t1 = [1, 2, 3].map(x => x * x)
log(t1)

var s = new Set()

var aaa = [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x))
log('------------------------------')

log('------------------------------')
for (i of s) {log(i)}
let set = new Set([1, 2, 3])

set.forEach((value, key) => value * 2)
log(set)

class Iterator {

  constructor (target) {
    this.value = Array.from(target)
    this.curindex = 0
  }

  [Symbol.iterator] () {
    const self = this
    return {
      next: function () {
        return {
          value: self.value[self.curindex],
          done: self.curindex++ >= self.value.length
        }
      }
    }
  }
}
var iter1 = new Iterator([1, 2, 3])
for (i of iter1) {
  log(i)
}
function* helloWorldGenerator () {
  yield 'hello'
  yield 'world'
  return 'ending'
}
log('-----------------------------------------------')
var hw = helloWorldGenerator()
log(hw.next())
log(hw.next())
log(hw.next())
log(hw.next())
function* f () {
  let pre = 0, cur = 1
  while (true) {
    [pre, cur] = [cur, pre + cur]
    yield cur
  }
}
var iter2 = f()
let indexi = 0
while (indexi++ < 10) {
  // log(iter2.next().value);
}
function* fibonacciyeild () {
  let [prev, curr] = [0, 1]
  for (; ;) {
    [prev, curr] = [curr, prev + curr]
    yield curr
  }
}

for (let n of fibonacciyeild()) {
  if (n > 1000) break
  console.log(n)
}
log('---------------------------------------------')

let delegatedIterator = (function* () {
  yield 'Hello!'
  yield 'Bye!'
}())

let delegatingIterator = (function* () {
  yield 'Greetings!'
  yield* [1, 2, 3] //  yield* delegatedIterator;
  yield 'Ok, bye.'
}())

for (let value of delegatingIterator) {
  console.log(value)
}

function* iterTree (tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* iterTree(tree[i])
    }
  } else {
    yield tree
  }
}

const tree = ['a', ['b', 'c'], ['d', 'e'], [[['f']], 'g']]

for (let x of iterTree(tree)) {
  console.log(x)
}
log('---------------------------------------------')
// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree (left, label, right) {
  this.left = left
  this.label = label
  this.right = right
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder (t) {
  if (t) {
    yield* inorder(t.left)
    yield t.label
    yield* inorder(t.right)
  }
}

function* preorder (t) {
  if (t) {
    yield t.label
    yield* inorder(t.left)
    yield* inorder(t.right)
  }
}
function* suborder (t) {
  if (t) {
    yield* inorder(t.left)
    yield* inorder(t.right)
    yield t.label
  }
}
function makeTree (array) {
  // 判断是否为叶节点
  if (array.length == 1) return new Tree(null, array[0], null)
  return new Tree(makeTree(array[0]), array[1], makeTree(array[2]))
}
var treeData = makeTree([['d', 'b', 'e'], 'a', ['f', 'c', 'g']])
for (i of inorder(treeData)) {
  log(i)
}
log('---------------------------------------------')
function step1 () {
  log('step1')
  return 'step1'
}
function step2 (value) {
  log('step2')
  return 'step2'
}
function step3 (value) {
  log('step3')
  return 'step3'
}
function step4 (value) {
  log('step4')
  return 'step4'
}
function * longTask () {
  var v1 = yield step1()
  var v2 = yield step2(v1)
  var v3 = yield step3(v2)
  var v4 = yield step4(v3)
}
function scheduler (task) {
  /* setTimeout(function () {
   var r = task.next(task.value)
   task.value= r.value;
   if (!r.done) {
   scheduler(task);
   }
   }, 1000);*/
  var r = task.next(task.value)
  task.value = r.value
  if (!r.done) {
    scheduler(task)
  }
}
var task = longTask()
scheduler(task)
log('-----------------------------------')
function* iterEntries (obj) {
  let keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    yield [key, obj[key]]
  }
}

let myObj = {foo: 3, bar: 7}

for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value)
}

/*var getJSON = function(url) {
 var promise = new Promise(function(resolve, reject){
 var client = new XMLHttpRequest();
 client.open("GET", url);
 client.onreadystatechange = handler;
 client.responseType = "json";
 client.setRequestHeader("Accept", "application/json");
 client.send();

 function handler() {
 if (this.status === 200) {
 resolve(this.response);
 } else {
 reject(new Error(this.statusText));
 }
 };
 });

 return promise;
 };

 getJSON("city.json").then(function(json) {
 console.log('Contents: ' + json);
 }, function(error) {
 console.error('出错了', error);
 });*/
log('------------------------------')

/*
 var p1 = new Promise(function(resolve, reject){
 log('p1 start');
 setTimeout(function(){resolve(1)},1000);
 }).then(function (v) {
 log('p1 end'+v);
 });

 var p2 = new Promise(function(resolve, reject){
 log('p2 start');
 resolve(p1);
 }).then(function (v) {
 log('p2 end');
 })
 */
var p1 = new Promise(function (resolve, reject) {
  log('p1 start')
  setTimeout(function () {resolve(1)}, 1000)
})

var p2 = new Promise(function (resolve, reject) {
  log('p2 start')
  resolve(p1)
})

function timeout (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function asyncValue (value) {
  log(`asyncValue start`)
  await timeout(5000)
  return value
}
log(asyncValue(1))


