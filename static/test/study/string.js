var startTag = /^<([-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
  endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
  attr = /([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
var html='<div id ="id11" name ="name1" scoded >123</div>';

var matches = html.match(startTag);
//console.log(matches);
matches[0].replace( startTag, parseStartTag );
function parseStartTag( tag, tagName, rest, unary ) {
   console.log([tag, tagName, rest, unary]);
   console.log(arguments[0])
}


console.log(  /([^\s"'=<>`]+)/.source);
console.log(/[^abc]/.test('abc'));
console.log(/[^abc]/.test('def'))
console.log(/[^abc]/.test('abcd'));

// Regular Expressions for parsing tags and attributes
const singleAttrIdentifier = /([^\s"'<>/=]+)/
const singleAttrAssign = /(?:=)/
const singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
]
const attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
)
var s='<div id="1111" name="nnn"></div>';

//var matchs1 = s.match(attribute);
//console.log(matchs1[0]);
s.repeat(attribute,function (tag, key) {
 console.log(tag);
});

console.log(attribute.source);

console.log('aaa123sss'.match(/(\d+)/));
