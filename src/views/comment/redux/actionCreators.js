import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENT} from './action-types'

/*同步添加*/
export const addComment=(comment)=>({type:ADD_COMMENT,data:comment});
/*同步删除*/
export const deleteComment=(index)=>({type:DELETE_COMMENT,data:index});
/*同步接受comments*/
export const receiveComments=(comments)=>({type:RECEIVE_COMMENT,data:comments});

/*异步：从后台获取数据*/
export const  getComments=()=>{
 /*   debugger*/
    return dispatch=>{
        //模拟发送ajax请求异步获取数据
        setTimeout(()=>{
            const initComments =[
                {username: 'XXX',content:'React Redux状态管理真不错'},
                {username: 'YYY',content:'React Redux好难'}
            ];
            //分发一个异步的action
            dispatch(receiveComments(initComments));
        },1000)
    }
};