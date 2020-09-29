import {Request, Response, Next, Server} from "restify";

export default function (server: Server) {
    server.get('/api/version', (request: Request, response: Response, next: Next) => {
        response.json({
            name: 'Agenda de contatos API',
            version: '0.0.1'
        })

        return next()
    })
}