import Router from './router'
import {Server as RestifyServer, bunyan} from 'restify'

// APENAS PARA TESTE, IREI REMOVER ISSO
const getRandomIntBetween = function (min: number, max: number) {
    return (Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)).toString() + '.0.0';
}

class Server {
    protected server: RestifyServer
    protected router: any
    protected driver: bunyan

    constructor(driver: any) {
        this.driver = driver
    }

    startServer() {
        this.server = this.driver.createServer({
            name: 'Agenda de contatos API',
            version: getRandomIntBetween(1, 200)
        })

        this.loadRoutes()

        this.server.listen(3000, () => {
            console.log('O sistema foi iniciado')
        })
    }

    loadRoutes() {
        this.router = new Router(this.server)
        this.router.handle()
    }
}

export default Server

