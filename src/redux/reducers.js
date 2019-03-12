import {combineReducers} from 'redux'
import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENT} from './action-types'
/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
/*const initComments =[];*/
const initComments =[ ];

  function counter(state=0,action) {
    switch (action.type) {
        case ADD_COMMENT:
            return  [action.data,...state];
        case DELETE_COMMENT:
            return  state.filter((comment,index)=>index!==action.data);
        case RECEIVE_COMMENT:
            return  action.data;
        default:
            return state;
    }
}
 const comments=(state=initComments,action)=>{

    switch (action.type) {
        case ADD_COMMENT:
            return  [action.data,...state];
        case DELETE_COMMENT:
            return  state.filter((comment,index)=>index!==action.data);
        case RECEIVE_COMMENT:
            return  action.data;
        default:
            return state;
    }
};
export default combineReducers({counter,comments})