import {GO_BACK, LOG_OUT} from "./action-types";
/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
const initCrumb={
    title:'首页',
}
function crumbs(state=initCrumb,action) {
    switch (action.type) {
        case GO_BACK:
            return  action.data?window.location.href=action.data:window.history.go(-1);
        case LOG_OUT:
            return  action.data?window.location.href=action.data:window.location.href;
        default:
            return {...state};
    }
};

export default crumbs;