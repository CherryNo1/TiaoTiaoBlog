import { service } from '@/utils/request';

const PREFIX = "/api/mocks"
class User {
    public static auth(data: any) {

        return service.post(`${PREFIX}/auth/login.json`, data)
    }
}
export default User