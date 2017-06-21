/**
 * Created by Administrator on 2017/6/9.
 */
function isFunction (f) {
  return typeof f === 'function';
}

function hasProperty (obj, propName) {
  return obj != null && typeof obj === 'object' && (propName in obj);
}

function lookup(src,key){
  var keys=[];
  var value=src;
  var hit=false;
  if(key.indexOf('.')>0){
    keys = String(key).split('.');
    var index=0;
    while(value != null && index<keys.length){
      if(index===keys.length-1){
        hit = hasProperty(value,keys[index])
      }
      value = value[keys[index++]];
    }
  }else{
    value = value[key];
    hit =hasProperty(value,key);
  }

    if(isFunction(value)){
      value = value.call(src);
    }
  return {hit:hit,value:value};
}

function log (v) {
  console.log(v);
}

var testObj={
  a:{
    b:{
      c: function(){
        log('c is function call');
        return this;
      },
      d:'d'
    }
  }
}

log(lookup(testObj,"a.b.c"));

log(lookup(testObj,"a.b.d"));


function escapeRegExp (string) {
  return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}


var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
    return entityMap[s];
  });
}
var fs = require('fs'),
  path = require('path');


function translateHtml(cb) {
  var view =   fs.createReadStream('./flex.html');
  streamToStr(view,function (str) {
    console.log(escapeHtml(str));
  });

}

function streamToStr (stream, cb) {
  var data = '';

  stream.on('data', function onData (chunk) {
    data += chunk;
  }).once('end', function onEnd () {
    cb(data.toString());
  }).on('error', function onError (err) {
    if (wasNotFound(err)) {
      console.error('Could not find file:', err.path);
    } else {
      console.error('Error while reading file:', err.message);
    }
  });
}

//translateHtml();

var a1 = [11,12,13];
var b1 = a1.slice();
//b1.slice(1,44);
b1.splice(1,1,44)

var c2  = b1.forEach(function (e) {
  log(e);
});
var c1  = b1.map(function (e) {
   return e+10;
  //log(e);
});
log(c1);
