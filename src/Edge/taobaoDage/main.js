var App = require('./app');
var React = require('react');

window.KEYREG = {
    printer: /打印/i,
    device: /设备/i,
    light: /灯/i,
    pc: /电脑/i,
    mobile: /手机/i
},
window.isPC = !(/mobile/i.test(navigator.userAgent));
var keyWordMap = {
    printer: function(kObj) {
    	var targetDOM = document.createElement('li');
    	targetDOM.id = 'targetDOM';
    	var targetBox = $("#J_SearchList").find("li").eq(0);
    	$(targetDOM).insertBefore(targetBox);
    	React.render(<App kObj={kObj}/>, document.getElementById("targetDOM"));
    }
};
var searchKeyWordMap = function(kObj) {
    for (var key in KEYREG) {
        if (KEYREG[key].test(kObj["kw"])) {
            kObj["key"] = key;
            console.log(key);
            keyWordMap[key](kObj);
            break;
        }

    }
}
var getKEYOBJ = function(reqObj) {
    var KEYOBJ = {};
    if (reqObj) {
        if (isPC) {
            KEYOBJ["kw"] = reqObj.wd;
            KEYOBJ["isPC"] = true;
        } else {
            KEYOBJ["kw"] = reqObj.q;
            KEYOBJ["isPC"] = false;
        }
    } else {
        KEYOBJ["kw"] = $("#kw").val();
        KEYOBJ["isPC"] = true;
    }
    return KEYOBJ;
}
var getRequest = function(thisHref) {
    var url = thisHref; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var action = function() {
            //遍历keyMap
            //拿到keyword的方式有两种
            //一..
            //1得到request对象
           // $("body").append(Dialog);
            var reqObj = getRequest(decodeURI(location.search));
            //2.得到用户搜索的关键字对象
            var kObj = getKEYOBJ(reqObj);
            searchKeyWordMap(kObj);
}
var ONLOAD = function() {
    if (window.Loaded !== undefined || window.Loaded === true) {
        action();
    } else {
        window.onload = function() {
            action();
        }
    }
}

var isEmptyObject = function(o) {
    for (var n in o) {
        return false;
    }
    return true;
}


ONLOAD();

