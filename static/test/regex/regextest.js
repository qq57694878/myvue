const encodedAttr = /&(?:lt|gt|quot|amp);/g
const decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
}
var a= '&lt;a href="http://www.baidu.com" &gt;gobaidu&lt;/a&gt;'.replace(encodedAttr,function(match){return decodingMap[match]});
console.log(a);

var str = "Is is the cost of of gasoline going up up";
var patt1 = /\b([a-z]+) \1\b/ig;
console.log(str.match(patt1));
const doctype = /^<!DOCTYPE [^>]+>/i

var m = '<!DOCTYPE fdg>asdfsdfadfad</DOCTYPE>'.match(doctype);
console.log(m[0]);

