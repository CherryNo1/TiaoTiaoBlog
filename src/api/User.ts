import { service } from '@/utils/request';

const PREFIX = "/api"
class User {
    public static login(data: any) {

        return service.post(`${PREFIX}/oauth/login`, data)
    }
    public static logout(data?: any) {

        return service.post(`${PREFIX}/oauth/logout`, data)
    }
}
export default User