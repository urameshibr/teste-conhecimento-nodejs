import {RouterInterface} from '../Router'
import UserController from '../app/Controllers/UserController'

export default function (router: RouterInterface) {
    router.assign('get', '/api/me', UserController, 'me')
    router.assign('get', '/api/users', UserController, 'users')
    router.assign('get', '/api/user/:user_id', UserController, 'show')
    router.assign('post', '/api/user', UserController, 'store')
    router.assign('patch', '/api/user/:user_id', UserController, 'update')
    router.assign('del', '/api/user/:user_id', UserController, 'delete')
    router.assign('get', '/api/user/filter', UserController, 'filter')
}
