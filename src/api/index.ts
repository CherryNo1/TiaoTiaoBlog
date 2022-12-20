export const isLogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    console.log("校验登录失败");
    return false;
}