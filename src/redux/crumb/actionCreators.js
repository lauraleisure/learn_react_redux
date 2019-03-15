import {GO_BACK,LOG_OUT} from './action-types'

/*同步返回*/
export const goBack=(url)=>({type:GO_BACK,data:url});
/*同步退出*/
export const logout=(url)=>({type:LOG_OUT,data:url});

