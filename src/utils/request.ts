import axios from 'axios'


export const service = axios.create({
    timeout: 5000, // request timeout
})
// 请求拦截器
service.interceptors.request.use(
    config => {
        // 如果能获取到Token，那么就进入if ，如果获取不到就为null,跳转到登陆页
        if (localStorage.getItem('Token')) {
            config.headers['Token'] = localStorage.getItem('Token')
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    },
)


service.interceptors.response.use(

    (res) => {
        let data = res.data;
        // 处理自己的业务逻辑，比如判断 token 是否过期等等
        if (data == 200) {
            location.href = ('/login')
        }
        // 代码块
        return data;
    },
    (error) => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        let message = "";
        if (error && error.response) {
            switch (error || error.response.status) {
                case 302:
                    message = "接口重定向了！";
                    break;
                case 400:
                    message = "参数不正确！";
                    break;
                case 401:
                    message = "您未登录，或者登录已经超时，请先登录！";
                    break;
                case 403:
                    message = "您没有权限操作！";
                    break;
                case 404:
                    message = `请求地址出错: ${error.response.config.url}`;
                    break;
                case 408:
                    message = "请求超时！";
                    break;
                case 409:
                    message = "系统已存在相同数据！";
                    break;
                case 500:
                    message = "服务器内部错误！";
                    break;
                case 501:
                    message = "服务未实现！";
                    break;
                case 502:
                    message = "网关错误！";
                    break;
                case 503:
                    message = "服务不可用！";
                    break;
                case 504:
                    message = "服务暂时无法访问，请稍后再试！";
                    break;
                case 505:
                    message = "HTTP 版本不受支持！";
                    break;
                default:
                    message = "异常问题，请联系管理员！";
                    break;
            }
        }
        return Promise.reject(message);
    }
);