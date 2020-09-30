import Router from "../Router";
import AuthController from "../app/Controllers/AuthController";

export default function (router: Router) {
    router.assign('post', '/login', AuthController, 'login')
    router.assign('post', '/logout', AuthController, 'logout')
    router.assign('post', '/api/new-account', AuthController, 'store')
    router.assign('post', '/api/password/forgot', AuthController, 'forgot')
}
