import {Request, Response, Next, Server} from "restify";

export default function (server: Server) {

    server.get('/api/users', (request: Request, response: Response, next: Next) => {
        response.json({
            action: 'Retorna lista de todos os usuários cadastrados que são referência do usuário logado',
            authenticated: true,
            params: [],
            rules: [
                'Deve conter paginação',
                'Deve ser acessado apenas por um usuário logado'
            ]
        })

        return next()
    })

    server.get('/api/me', (request: Request, response: Response, next: Next) => {
        response.json({
            action: 'Rota para autenticar o token de acesso retornando os dados do usuário',
            authenticated: false,
            params: ['token'],
            rules: []
        })

        return next()
    })

    server.get('/api/user/:user_id', (request: Request, response: Response, next: Next) => {
        response.json({
            action: 'Buscar os dados de um usuário em especifico',
            authenticated: true,
            params: ['token'],
            rules: []
        })

        return next()
    })

    server.post('/api/user', (request: Request, response: Response, next: Next) => {
        response.json({
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

        return next()
    })

    server.patch('/api/user/:user_id', (request: Request, response: Response, next: Next) => {
        response.json({
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

        return next()
    })

    server.del('/api/user/:user_id', (request: Request, response: Response, next: Next) => {
        response.json({
            action: 'Remove um usuário',
            authenticated: true,
            params: [
                'token'
            ],
            rules: [
                'Verificar se a doc com o user_id está registrado na collection'
            ]
        })

        return next()
    })

    server.get('/api/user/filter', (request: Request, response: Response, next: Next) => {
        response.json({
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

        return next()
    })
}
