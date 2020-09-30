import BaseController from "./BaseController";

class AuthController extends BaseController {
    login() {
        this.response.json({
            action: 'Rota que retorna token de login caso as credenciais sejam corretas',
            authenticated: true,
            params: [
                'credentials.email',
                'credentials.password',
            ],
            rules: [
                'Deve haver validação das credenciais enviadas'
            ]
        })
    }

    logout() {
        this.response.json({
            action: 'Rota que invalida token de autenticação e desloga o usuário do sistema',
            authenticated: true,
            params: [
                'token'
            ],
            rules: []
        })
    }

    forgot() {
        this.response.json({
            action: 'Rota que reseta a senha do usuário do sistema',
            authenticated: true,
            params: [
                'token',
                'new_password'
            ],
            rules: [
                'Deve validar a nova senha'
            ]
        })
    }

    store() {
        this.response.json({
            action: 'Rota que registra nova conta de usuário',
            authenticated: true,
            params: [
                'token',
                'new_password'
            ],
            rules: [
                'Deve validar a nova senha'
            ]
        })
    }
}

export default AuthController