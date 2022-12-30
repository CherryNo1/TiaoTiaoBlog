import Article from './Article'
import User from './User'
export const isLogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    console.log("校验登录失败");
    return false;
}
export { Article, User }