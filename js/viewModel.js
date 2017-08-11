
//测试环境
var pageUrl = "http://dev.f.pc.pingbyt.cn";
var interfaceUrl = "http://dev.pc.pingbyt.cn";

//生产环境
//var pageUrl = "http://f.pc.pingbyt.cn";
//var interfaceUrl = "http://pc.pingbyt.cn";

localStorage.setItem("pageUrl",pageUrl);
localStorage.setItem("interfaceUrl",interfaceUrl);


//
function loadData() {

}

//获取url参数 id 方法
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
