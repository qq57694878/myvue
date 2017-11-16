/*function log(s){
  console.log(s);
}*/
let log = console.log.bind(console);
let a1 = "abchello".search(/hello/);  //  3
log(a1);
var a2 ="abchello".replace(/hello/,"hi");   //  "abchi"
log(a2);

"abchelloa".replace(/(a)/,function (full,text) {
  log(full);
  log(text);
});   //  "abchi"
//String.prototype.match用来捕获字符串中的子字符串到一个数组中。默认情况下只捕获一个结果到数组中，正则表达式有”全局捕获“的属性时(定义正则表达式的时候添加参数g)，会捕获所有结果到数组中
"abchelloasdasdhelloasd".match(/hello/);  //["hello"]
"abchelloasdasdhelloasd".match(/hello/g);  //["hello","hello"]



//RegExp.prototype.test方法
//用来测试字符串中是否含有子字符串

/hello/.test("abchello");  // true


//1. exec方法一次只能捕获一份子字符串到数组中，无论正则表达式是否有全局属性

var reg=/hello/g;
reg.exec("abchelloasdasdhelloasd");   // ["hello"]

var reg=/hello/g;
reg.lastIndex; //0
reg.exec("abchelloasdasdhelloasd"); // ["hello"]
reg.lastIndex; //8
reg.exec("abchelloasdasdhelloasd"); // ["hello"]
reg.lastIndex; //19
reg.exec("abchelloasdasdhelloasd"); // null
reg.lastIndex; //0

//懒惰模式“，就是在满足条件的情况下捕获尽可能少的字符串，使用懒惰模式的方法，就是在字符重复标识后面加上一个 "?"，写法如下

// 数字重复3~5次，满足条件的情况下返回尽可能少的数字
"test12345".match(/test\d{3,5}?/);  //["test123"]
// 数字重复1次或更多，满足条件的情况下只返回一个数字
"test12345".match(/test\d+?/);  // ["test1"]



//字符转义
//在正则表达式中元字符是有特殊的含义的，当我们要匹配元字符本身时，就需要用到字符转义，比如：

/\./.test("."); // true
//分组 & 分支条件
//正则表达式可以用 " ()  " 来进行分组，具有分组的正则表达式除了正则表达式整体会匹配子字符串外，分组中的正则表达式片段也会匹配字符串。

//分组按照嵌套关系和前后关系，每个分组会分配得到一个数字组号，在一些场景中可以用组号来使用分组。

//在 replace、match、exec函数中，分组都能体现不同的功能。

//replace函数中，第二个参数里边可以用 $+数字组号来指代第几个分组的内容，如：

" the best language in the world is java ".replace(/(java)/,"$1script"); // " the best language in the world is javascript "
"/static/app1/js/index.js".replace(/(\/\w+)\.js/,"$1-v0.0.1.js"); //"/static/app1/js/index-v0.0.1.js"    (\/\w+)分组匹配的就是 /index ，在第二个参数中为其添加上版本号
//match函数中，当正则表达式有全局属性时，会捕获所有满足正则表达式的子字符串

"abchellodefhellog".match(/h(ell)o/g); //["hello", "hello"]
//但是当正则表达式没有全局属性，且正则表达式中有分组的时候，match函数只会返回整个正则表达式匹配的第一个结果，同时会将分组匹配到的字符串也放入结果数组中：

"abchellodefhellog".match(/h(ell)o/); //["hello", "ell"]
// 我们可以用match函数来分解url，获取协议、host、path、查询字符串等信息
"http://www.baidu.com/test?t=5".match(/^((\w+):\/\/([\w\.]+))\/([^?]+)\?(\S+)$/);
// ["http://www.baidu.com/test?t=5", "http://www.baidu.com", "http", "www.baidu.com", "test", "t=5"]
//exec函数在正则表达式中有分组的情况下，表现和match函数很像，只是无论正则表达式是否有全局属性，exec函数都只返回一个结果，并捕获分组的结果

/h(ell)o/g.exec("abchellodefhellog"); //["hello", "ell"]
//当正则表达式需要匹配几种类型的结果时，可以用到分支条件，例如

"asdasd hi  asdad hello asdasd".replace(/hi|hello/,"nihao"); //"asdasd nihao  asdad hello asdasd"
"asdasd hi  asdad hello asdasd".split(/hi|hello/); //["asdasd ", "  asdad ", " asdasd"]
//注意，分支条件影响它两边的所有内容， 比如 hi|hello  匹配的是hi或者hello，而不是 hiello 或者 hhello

//分组中的分支条件不会影响分组外的内容

"abc acd  bbc bcd ".match(/(a|b)bc/g); //["abc", "bbc"]
//后向引用
//正则表达式的分组可以在其后边的语句中通过  \+数字组号来引用
// 匹配重复的单词
/(\b[a-zA-Z]+\b)\s+\1/.exec(" asd sf  hello hello asd"); //["hello hello", "hello"]


//断言
//(?:exp) , 用此方式定义的分组，正则表达式会匹配分组中的内容，但是不再给此分组分配组号，此分组在replace、match等函数中的作用也会消失，效果如下：

/(hello)\sworld/.exec("asdadasd hello world asdasd") ; // ["hello world", "hello"],正常捕获结果字符串和分组字符串
/(?:hello)\sworld/.exec("asdadasd hello world asdasd") ; // ["hello world"]

"/static/app1/js/index.js".replace(/(\/\w+)\.js/,"$1-v0.0.1.js"); //"/static/app1/js/index-v0.0.1.js"
"/static/app1/js/index.js".replace(/(?:\/\w+)\.js/,"$1-v0.0.1.js"); //"/static/app1/js$1-v0.0.1.js"


//(?=exp) 这个分组用在正则表达式的后面，用来捕获exp前面的字符，分组中的内容不会被捕获，也不分配组号

/hello\s(?=world)/.exec("asdadasd hello world asdasd");  // ["hello "]


//(?!exp)  和前面的断言相反，用在正则表达式的后面，捕获后面不是exp的字符，同样不捕获分组的内容，也不分配组号

/hello\s(?!world)/.exec("asdadasd hello world asdasd") ;//null
//在默认的模式下，元字符 ^ 和 $ 分别匹配字符串的开头和结尾处，模式 m 改变了这俩元字符的定义，让他们匹配一行的开头和结尾

"aadasd\nbasdc".match(/^[a-z]+$/g);  //null  字符串^和$之间有换行符，匹配不上 [a-z]+ ,故返回null
"aadasd\nbasdc".match(/^[a-z]+$/gm);  // ["aadasd", "basdc"] ，改变^$的含义，让其匹配一行的开头和末尾，可以得到两行的结果



// 匹配字母 a-z 之间所有字母
/[a-z]/.test("aaa");
// 匹配Unicode中 数字 0 到 字母 z 之间的所有字符
/[0-z]/.test("aaa");
// unicode编码查询地址：
//https://en.wikibooks.org/wiki/Unicode/Character_reference/0000-0FFF
//根据上面的内容，我们可以找出汉字的Unicode编码范围是 \u4E00 到 \u9FA5，所以我们可以写一个正则表达式来判断一个字符串中是否有汉字
/[\u4E00-\u9FA5]/.test("测试");  // true

/*console.log("\u4E01");
for(i=0x4E01;i<0x9FA5;i++){
  var s = String.fromCharCode(i.toString(10));
 // s = "\\u"+i.toString(16).toUpperCase();
  console.log(s);
}*/



var sss= "12111111111112343.1231256";
var ss =new Number(sss).toFixed(2);
log(ss);



function Fibonacci (n) {
  if ( n <= 1 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

/*Fibonacci(10) // 89
Fibonacci(100) // 堆栈溢出
Fibonacci(500) // 堆栈溢出*/

function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

//Fibonacci2(100) // 573147844013817200000
//Fibonacci2(1000) // 7.0330367711422765e+208
//Fibonacci2(10000) // Infinity
