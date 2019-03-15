
/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
const initLayout={
    showCrumb:false,
    showNav:true
}
function layoutConfig(state=initLayout,action) {
    switch (action.type) {
        default:
            return {...state};
    }
};

export default layoutConfig;