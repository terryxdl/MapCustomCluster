/**
 * Created by zhaoz on 2016-02-24.
 */

import * as types from '../constants/ActionTypes';
import * as Common from '../common/Common';
import * as Global from '../constants/Global.js';
import {browserHistory} from 'react-router';
import * as ConstData from '../constants/ConstData.js';


//==================获取authorizationToken====================
export function getAuthorization(authorization) {
    //window.sessionStorage.setItem('accessToken', authorization);
    return {
        type: types.USER_GET_AUTHORIZATION,
        authorization
    }
}


//==================获取key====================

export function fetchKey(name, password,channel,captcha) {
    return dispatch => {
        return $.ajax({
            url: Global.HTTP_URL + 'ao/getKey',
            contentType: 'application/json',
            dataType: 'json',
            cache: false,
            success: ((jsonData) => {
                const dkey = Common.decodeCrypto(ConstData.DES_KEY, jsonData.msg).substring(0, 8);
                //const dkey = ConstData.DES;

                //
                //dispatch(getKey(dkey));
                //if (name) {
                //    password = Common.encodeCrypto(dkey, password);
                //    dispatch(Login(name, password,channel,captcha));
                //}

            })
        })
    }
}

export function getKey(key) {
    window.sessionStorage.setItem('desKey', key);
    return {
        type: types.USER_GET_DES_KEY,
        key
    }
}

//==================获取用户信息====================
export function Login(name, password,channel,captcha) {

    return dispatch => {
        var ajax = $.ajax({
            url: Global.HTTP_URL + 'ao/login',
            type: 'post',
            timeout: '5000',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                adminName: name,
                password: password,
                captcha:captcha,
                channel:channel
            }),
            cache: false,
            success: ((jsonData) => {
                if (jsonData.code == '10000') {
                    //dispatch(getUser(jsonData.adminOperator));
                    window.sessionStorage.setItem('isLogin', 'yes');
                    window.sessionStorage.setItem('admin', JSON.stringify(jsonData.adminOperator));
                    window.sessionStorage.setItem('accessToken', jsonData.accessToken);
                    window.sessionStorage.setItem('refresh', '1');
                    window.sessionStorage.setItem('userName', name);
                    window.sessionStorage.setItem('password', password);
                    browserHistory.push({pathname: 'index', state: {admin: jsonData.adminOperator}});
                } else {

                }
            }),
            complete: function (XMLHttpRequest, status) { //请求完成后最终执行参数
                if (status == 'timeout') {//超时,status还有success,error等值的情况
                    ajax.abort(); //取消请求
                    alert("超时");
                }
            },
            error: ((xhr, status, err)=> {
                //console.error(this.props.url, status, err);
                //alert(status);
            })
        })
        return ajax;
    }
}

export function getUser(userInfo) {
    return {
        type: types.USER_LOGIN,
        userInfo
    }
}


