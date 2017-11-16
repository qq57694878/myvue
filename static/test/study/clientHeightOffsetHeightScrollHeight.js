//获得文档的大小（区别与视口）,与上面获取视口大小的方法如出一辙
function getDocumentPort () {
  if(document.compatMode == "BackCompat") {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight
    };
  } else {
    return {
      width: Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth),
      height: Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)
    }
  }
}
/*视口的大小，部分移动设备浏览器对innerWidth的兼容性不好，需要
 *document.documentElement.clientWidth或者document.body.clientWidth
 *来兼容（混杂模式下对document.documentElement.clientWidth不支持）。
 *使用方法 ： getViewPort().width;
 */
function getViewPort () {
  if(document.compatMode == "BackCompat") {   //浏览器嗅探，混杂模式
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };
  } else {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  }
}
var a  = getDocumentPort();
console.log("文档 width："+a.width+"height:"+a.height);
var b  = getViewPort();
console.log("视窗 width："+b.width+"height:"+b.height);
