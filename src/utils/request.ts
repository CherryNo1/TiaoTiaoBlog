import axios from "axios";

export const service = axios.create({
  timeout: 5000, // request timeout
});
// 请求拦截器
service.interceptors.request.use(
  // onFulfilled
  req => {
    const token = localStorage.getItem("token");
    if (token != null) {
      //将token添加到请求头，发送给后端
      if (req && req.headers) { // 多一步判断
        req.headers["token"] = token;
      }
      req.headers?.head?.set("token", token);
    } else {
      console.log("token is not fount");
      // 如果不是登录页，那么就强制回到登录页。否则不动
      if (window.location.pathname != '/login') {
        window.location.href = "/login";
      }
    }
    return req;
  },
  // onRejected
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (res) => {
    console.log(res);
    return res.data;
  },
  (error) => {
    console.log(error);
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
