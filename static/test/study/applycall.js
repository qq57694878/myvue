function log (v) {
  console.log(v);
}
function a (v) {
  this.value =v;
  log('a:'+this.value);
  return this;
}
function b (v) {
  this.value =v;
  log('b:'+this.value);
  return this;
}
var b = new b('hhhhh');
var b1 = a.call(b,'nihao');
console.log(b1.value)

