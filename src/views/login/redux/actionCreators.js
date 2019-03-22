import {LOGIN} from './action-types'


/*异步：从后台获取数据*/
export const  doLogin=()=>{
    /*   debugger*/
    return dispatch=>{
        //模拟发送ajax请求异步获取数据
        setTimeout(()=>{
            const initUser ={
                username:'18161111111',
                password:'123456',
            };
            //分发一个异步的action
            dispatch(login(initUser));
        },1000)
    }
};
/*同步刷新页面*/
export const login=(user)=>({type:LOGIN,data:user});

