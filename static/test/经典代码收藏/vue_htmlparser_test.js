
var parseHTML=require("./vue_htmlparser.js");
var results = "";
var template="<p>hello <b style='test foo' disabled align='b\"ar'>john <a href='http://ejohn.org/'>resig</b><img src=test.jpg></img><div>test</div><p>hello world";

parseHTML(template, {
  start: function( tag, attrs, unary ) {
    results += "<" + tag;

    for ( var i = 0; i < attrs.length; i++ )
      results += " " + attrs[i].name + '="' + attrs[i].value + '"';

    results += (unary ? "/" : "") + ">";
  },
  end: function( tag ) {
    results += "</" + tag + ">";
  },
  chars: function( text ) {
    results += text;
  },
  comment: function( text ) {
    results += "<!--" + text + "-->";
  }

});
console.log( results);

