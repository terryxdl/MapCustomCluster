/**
 * Created by terryxu on 16/6/22.
 */

module.exports = {

    userAuth(nextState, replace) {
        //console.log("in userAuth .. ")
        let {thirdId} = nextState.params;
        let {query} = nextState.location;
        let from = query.from;
        //console.log("thirdId = " + thirdId);
        //console.log("from=" + from);

        if (thirdId == "" || from == "") {
            replace({
                pathname: '/error',
                query: {errmsg: "请求参数不合法！"},
                state: {nextPathname: nextState.location.pathname}
            })
        }
    },

    isLogin(){
        const accessToken = window.localStorage.getItem('accessToken')?window.localStorage.getItem('accessToken'):''
        if(accessToken == null || accessToken == undefined || accessToken == ''){
            return false;
        }else{
            return true;
        }
    }
}