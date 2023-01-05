import { service } from '@/utils/request';
const PREFIX = "/api"
class ArticleApi {
    public static getArticle(articleId: number) {
        return service.get(`${PREFIX}/tiaotiao/article/${articleId}`)
    }
    public static getArticleList(current: number, size: number) {
        return service.get(`${PREFIX}/tiaotiao/article/all/${current}/${size}`)
    }
}

export default ArticleApi