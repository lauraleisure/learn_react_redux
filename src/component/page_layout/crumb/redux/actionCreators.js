import {GO_BACK,LOG_OUT,SET_TITLE} from './action-types'

/*同步返回*/
export const goBack=(url)=>({type:GO_BACK,data:url});
/*同步退出*/
export const logout=(url)=>({type:LOG_OUT,data:url});

export const setTitle=(title)=>({type:SET_TITLE,data:title});

