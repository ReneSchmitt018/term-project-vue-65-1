import http from '../http-common'
class BoardService{
    create(data){
        return http.post('/boards',data)
    }
}
export default new BoardService;

