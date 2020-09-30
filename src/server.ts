import Router from './Router'
import {createServer, Server, plugins} from 'restify'

class ServerInit {
    protected server: Server
    protected router: any

    constructor() {
        this.server = createServer({
            name: 'Agenda de contatos API'
        })
        this.router = new Router(this.server)
        this.configureServer()
    }

    configureServer() {
        this.server.use(plugins.bodyParser());
        this.server.use(plugins.queryParser());
        this.loadRoutes()
        this.server.listen(3000, () => {
            console.log('O sistema foi iniciado')
        })
    }

    loadRoutes() {
        this.router.handle()
    }
}

export default ServerInit

