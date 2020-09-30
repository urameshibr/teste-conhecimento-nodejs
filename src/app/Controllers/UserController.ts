import BaseController from './BaseController'

class UserController extends BaseController {

    me() {
        this.response.json({
            action: 'Rota para autenticar o token de acesso retornando os dados do usuário',
            authenticated: false,
            params: ['token'],
            rules: []
        })
    }

    users() {
        this.response.json({
            action: 'Retorna lista de todos os usuários cadastrados que são referência do usuário logado',
            authenticated: true,
            params: [],
            rules: [
                'Deve conter paginação',
                'Deve ser acessado apenas por um usuário logado'
            ]
        })
    }

    show() {
        this.response.json({
            action: 'Buscar os dados de um usuário em especifico',
            authenticated: true,
            params: ['token'],
            rules: []
        })
    }

    store() {
        this.response.json({
            action: 'Adicionar um novo usuário',
            authenticated: true,
            params: [
                'token',
                'user'
            ],
            rules: [
                'Deve existir validação do parâmetro "user"'
            ]
        })
    }

    update() {
        this.response.json({
            action: 'Edita um usuário',
            authenticated: true,
            params: [
                'token',
                'user'
            ],
            rules: [
                'Deve existir validação do parâmetro "user"'
            ]
        })
    }

    delete() {
        this.response.json({
            action: 'Remove um usuário',
            authenticated: true,
            params: [
                'token'
            ],
            rules: [
                'Verificar se a doc com o user_id está registrado na collection'
            ]
        })
    }

    filter() {
        this.response.json({
            action: 'Filtrar usuários com base em uma query passada pela url',
            authenticated: true,
            params: [
                'token',
                'filter'
            ],
            rules: [
                'Desejável: Filtrar usuário por data de cadastro maior e/ou menor que determinada data'
            ]
        })
    }
}

export default UserController