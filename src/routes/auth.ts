import {Request, Response, Next, Server} from "restify";

export default function (server: Server) {
    server.get('/login', (request: Request, response: Response, next: Next) => {
        response.json({
            action: '',
            authenticated: true,
            params: [],
            rules: []
        })

        return next()
    })

    server.post('/api/login', (request: Request, response: Response, next: Next) => {
        response.json({
            action: '',
            authenticated: true,
            params: [],
            rules: []
        })

        return next()
    })

    server.get('/new-account', (request: Request, response: Response, next: Next) => {
        response.json({
            action: '',
            authenticated: true,
            params: [],
            rules: []
        })

        return next()
    })

    server.post('/api/new-account', (request: Request, response: Response, next: Next) => {
        response.json({
            action: '',
            authenticated: true,
            params: [],
            rules: []
        })

        return next()
    })
}
