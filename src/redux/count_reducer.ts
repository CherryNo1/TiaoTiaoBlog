/**
 * 后厨
 * 1、该文件时用户创建一个为count服务的reducer reducer本质是个函数
 *  
 * 2、reducer函数的两个参数 之前的状态(preState) ,动作对象(action)
 * action的数据结构：{type:string,data :any}
 */
// 1. 定义初始化值
export type ActionType = {
    type: string,
    data: number
}
function countReducer(preState: number = 0, action: ActionType) {
    console.log(preState, action);

    //从action对象获取type、data
    const { type, data } = action;
    // 根据type决定如何加工数据
    switch (type) {
        //如果是加
        case 'increment':
            return preState + data
        //如果是减
        case 'decrement':
            return preState - data
        default:
            //初始化
            return 0
    }
}
export default countReducer