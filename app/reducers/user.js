/**
 * Created by zhaoz on 2016-03-14.
 */
import assign from 'object-assign';
import {USER_LOGIN,USER_GET_DES_KEY,USER_GET_AUTHORIZATION} from '../constants/ActionTypes';

const defaultState = {
    isFetching:false,
    desKey:'',
    authorization:'',
    userInfo:{},
}
export default function user(state = defaultState,action){

    switch (action.type) {
        case USER_GET_DES_KEY:
            return assign({},state,{
                isFetching:true,
                desKey:action.key
            })
        case USER_GET_AUTHORIZATION:
            return assign({},state,{
                isFetching:true,
                authorization:action.authorization
            })
        case USER_LOGIN:
            return assign({},state,{
                isFetching:true,
                userInfo:action.userInfo
            })
        default:return state;

    }
}
