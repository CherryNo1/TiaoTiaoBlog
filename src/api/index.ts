import ArticleApi from './ArticleApi'
import User from './User'
export const isLogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    console.log("校验登录失败");
    return false;
}
export { ArticleApi, User }