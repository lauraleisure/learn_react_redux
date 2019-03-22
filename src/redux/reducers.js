import {combineReducers} from 'redux'

import comments from '../views/comment/redux/reducers';
import userAvatar from '../component/user/redux/reducers'
import crumbs from '../component/page_layout/crumb/redux/reducers'
import layoutConfig from '../component/page_layout/layout/redux/reducers'
import nav from '../component/page_layout/nav/redux/reducers'
import home from '../views/home/redux/reducers'
import userDetail from '../views/users/redux/reducers'
import login from '../views/login/redux/reducers'
/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */

export default combineReducers({crumbs,layoutConfig,nav,home,comments,userAvatar,userDetail,login})