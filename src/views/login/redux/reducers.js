/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
import {LOGIN} from './action-types'
const loginUser={};
function login(state=loginUser,action) {
    switch (action.type) {
        case LOGIN:
            return action.data;
        default:
            return state;
    }
};


/*const nav=combineReducers({homeNav,myNav});
export default nav*/
export default  login ;