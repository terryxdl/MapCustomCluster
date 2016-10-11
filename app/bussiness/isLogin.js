/**
 * Created by terryxu on 16/4/18.
 */

module.exports = {

    isLogin(){//返回true表示已登录,返回false表示未登录
        const accessToken = window.sessionStorage.getItem('isLogin')?window.sessionStorage.getItem('isLogin'):''
        if(accessToken == null || accessToken == undefined || accessToken == ''||!accessToken){
            return false;
        }else{
            return true;
        }
    }
}
