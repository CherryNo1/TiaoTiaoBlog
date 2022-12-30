import { service } from '@/utils/request';
const PREFIX = "/api/mocks"
class Article {
    public static getArticle(data?: any) {
        return service.get(`${PREFIX}/article.json`, data)
    }
}

export default Article