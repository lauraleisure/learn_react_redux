import {RELOAD_PAGE} from './action-types'


/*同步刷新页面*/
export const reloadPage=(url)=>({type:RELOAD_PAGE,data:url});

