import {RELOAD_PAGE} from './action-types';

/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
const initTabs=[
    {title:'首页',url:'/',class:'icon-home',width:'30%',activeItem:'home',pages:'home'},
    {title:'评论',url:'/comment',class:'icon-comment',width:'30%',activeItem:'comment',pages:'comment'},
    {title:'我的',url:'/my',class:'icon-my',width:'30%',activeItem:'my',pages:'my'}
    ];

function navTabs(state=initTabs,action) {
    switch (action.type) {
        case RELOAD_PAGE:
            return  action.data?window.location.href=action.data:window.location.href;
        default:
            return state;
    }
};

export default navTabs;