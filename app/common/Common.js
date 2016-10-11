/**
 * Created by BillZhao on 16/3/10.
 */



export function formatDate(longDate) {
    if (!longDate) {
        return "";
    }
    var d = new Date(parseInt(longDate));
    var m = parseInt(d.getMonth(), 10) + 1;
    var da = parseInt(d.getDate(), 10);
    var hour = parseInt(d.getHours(), 10);
    var min = parseInt(d.getMinutes(), 10);
    var sec = parseInt(d.getSeconds(), 10);
    if (m < 10) {
        m = "0" + m;
    }
    if (da < 10) {
        da = "0" + da;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return d.getFullYear() + "-" + m + "-" + da + " " + hour + ":" + min + ":" + sec;
}

export function formatDateWithDay(longDate) {
    if (!longDate) {
        return "";
    }
    var d = new Date(parseInt(longDate));
    var m = parseInt(d.getMonth(), 10) + 1;
    var da = parseInt(d.getDate(), 10);

    if (m < 10) {
        m = "0" + m;
    }
    if (da < 10) {
        da = "0" + da;
    }

    return d.getFullYear() + "-" + m + "-" + da + " ";
}

export function formatDateWithTime(longDate) {
    if (!longDate) {
        return "";
    }
    var d = new Date(parseInt(longDate));
    var m = parseInt(d.getMonth(), 10) + 1;
    var da = parseInt(d.getDate(), 10);
    var hour = parseInt(d.getHours(), 10);
    var min = parseInt(d.getMinutes(), 10);
    var sec = parseInt(d.getSeconds(), 10);
    if (m < 10) {
        m = "0" + m;
    }
    if (da < 10) {
        da = "0" + da;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return hour + ":" + min + ":" + sec;
}

//2015/02/09样式
export function formatDateWithDay2(date) {
    if (!date) {
        return "";
    }
    var d = new Date(parseInt(date));
    var m = parseInt(d.getMonth(), 10) + 1;
    var da = parseInt(d.getDate(), 10);
    var hour = parseInt(d.getHours(), 10);
    var min = parseInt(d.getMinutes(), 10);
    var sec = parseInt(d.getSeconds(), 10);
    if (m < 10) {
        m = "0" + m;
    }
    if (da < 10) {
        da = "0" + da;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return d.getFullYear() + "/" + m + "/" + da;
}

//02/09样式
export function formatDateWithDay3(date) {
    if (!date) {
        return "";
    }
    var d = new Date(parseInt(date));
    var m = parseInt(d.getMonth(), 10) + 1;
    var da = parseInt(d.getDate(), 10);
    var hour = parseInt(d.getHours(), 10);
    var min = parseInt(d.getMinutes(), 10);
    var sec = parseInt(d.getSeconds(), 10);
    if (m < 10) {
        m = "0" + m;
    }
    if (da < 10) {
        da = "0" + da;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return m + "/" + da;
}

//12:39样式
export function formatDateWithTime2(date) {
    if (!date) {
        return "";
    }
    var d = new Date(parseInt(date));
    var m = parseInt(d.getMonth(), 10) + 1;
    var da = parseInt(d.getDate(), 10);
    var hour = parseInt(d.getHours(), 10);
    var min = parseInt(d.getMinutes(), 10);
    var sec = parseInt(d.getSeconds(), 10);
    if (m < 10) {
        m = "0" + m;
    }
    if (da < 10) {
        da = "0" + da;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return hour + ":" + min;
}

//2016-06-06 17:08:00 样式
export function formatDate2(longDate) {
    if (!longDate) {
        return "";
    }
    var d = new Date(parseInt(longDate));
    var m = parseInt(d.getMonth(), 10) + 1;
    var da = parseInt(d.getDate(), 10);
    var hour = parseInt(d.getHours(), 10);
    var min = parseInt(d.getMinutes(), 10);
    var sec = parseInt(d.getSeconds(), 10);
    if (m < 10) {
        m = "0" + m;
    }
    if (da < 10) {
        da = "0" + da;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return d.getFullYear()+  '-' + m +  '-' +  da + " " + hour + ":" + min + ":" + sec;
}


//============================清除空格和回车===============================
export function trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}


export function in_array(needle, haystack) {
    var i = 0, n = haystack.length;

    for (;i < n;++i)
        if (haystack[i] === needle)
            return true;
    return false;
}


export function loadJS(url, success, obj) {
    //对于必须动态附加到文档的外部 js 文件，要保证动态引入的脚本全部执行完成后，才能执行后续代码
    var domScript = document.createElement('script');
    domScript.src = url;
    success = success || function () {
        };
    domScript.onload = domScript.onreadystatechange = function () {
        if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
            success(obj);
            this.onload = this.onreadystatechange = null;
            this.parentNode.removeChild(this);
        }
    }
    document.getElementsByTagName('head')[0].appendChild(domScript);
}


/*========================IE8兼容XDR===========================*/
export function crossDomainAjax (url,type, jsonData,successCallback) {

    // IE8 & 9 only Cross domain JSON GET request
    if ('XDomainRequest' in window && window.XDomainRequest !== null) {

        var xdr = new XDomainRequest(); // Use Microsoft XDR
        xdr.open(type, url);
        xdr.onload = function () {
            var dom  = new ActiveXObject('Microsoft.XMLDOM'),
                JSON = $.parseJSON(xdr.responseText);

            dom.async = false;

            if (JSON == null || typeof (JSON) == 'undefined') {
                JSON = $.parseJSON(data.firstChild.textContent);
            }

            successCallback(JSON); // internal function
        };

        xdr.onerror = function() {
            _result = false;
            //alert(_result);
        };
        //var dataA = {
        //    "area": this.state.area,
        //    "assId": "",
        //    "assType": 3,
        //    "content": this.state.content,
        //    "fbType": this.state.fbType,
        //    "gssLl": location,
        //    "mobile": this.state.mobile,
        //    "ext01": "",
        //    "ext03": this.state.address,
        //    "scenicType": "",
        //    "status": 0,
        //    "picPath":this.state.picPath
        //}
        //xdr.send("area=3101&assId=''&assType=3&content='111111'&fbType=3&gssLl=''&mobile='13109876543'&ext01=''&ext03='上海市'&scenicType=''&status=0&picPath=''");
        xdr.send(JSON.stringify(jsonData)+ '&ie=1');
    }


    // IE7 and lower can't do cross domain
    else if (navigator.userAgent.indexOf('MSIE') != -1 &&
        parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1], 10) < 8) {
        return false;
    }

    // Do normal jQuery AJAX for everything else
    else {
        console.log(jsonData);
        $.ajax({
            url: url,
            cache: false,
            dataType: 'json',
            data:JSON.stringify(jsonData),
            contentType: "application/json",
            type: type,
            async: false, // must be set to false
            success: function (data, success) {
                successCallback(data);
            },
            error: ((xhr, status, err)=> {
                console.error(status, err);
                alert('服务器异常,操作失败')
                })
        });
    }
}

export function getStatistics(){
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?33577d269b38e90e67086a26a1543ac5";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}

/**
 * des + base64 字符串解密
 * @param key  加密密钥
 * @param text  需要解密的文本
 * @returns {*}
 */
export function decodeCrypto(key,text){
    let decodeBuffer = $.base64.decode(text);
    let keyValue = des(key,decodeBuffer,0);
    return keyValue;
}


/**
 * des + base64 字符串解密
 * @param key 加密密钥
 * @param text 需要加密的文本
 * @returns {*}
 */
export function encodeCrypto(key,text){
    if(key && key != ""){
        var ciphertext = des(key,text,1,0,0,1);
        var res = ($.base64.encode(ciphertext));
        return res;
    }else{
        return text;
    }
}


/*==============告警详情===============*/
export function showDetail(des,flag, e) {
    var oEvent = e || event;
    clearTimeout(this.state.timeOut);
    document.getElementById('showDetail').style.display = 'block';
    var oDiv = document.getElementById('showDetail');
    oDiv.id = 'showDetail';
    oDiv.style.left = oEvent.clientX + 'px';  // 指定创建的DIV在文档中距离左侧的位置
    oDiv.style.top = oEvent.clientY + document.body.scrollTop + 'px';  // 指定创建的DIV在文档中距离顶部的位置
    oDiv.innerHTML = des;
    //this.state.timeOut = setTimeout(function () {
    //    oDiv.style.display = 'none';
    //}, 3000)
    if(flag){
        oDiv.style.display = '';
    }else{
        oDiv.style.display = 'none';
    }
}