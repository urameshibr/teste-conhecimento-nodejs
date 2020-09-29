import routes from './routes'

class Router {
    router: any

    constructor(server: any) {
        this.router = server
    }

    handle() {
        this.register()
    }

    register() {
        routes.api(this.router)
        routes.auth(this.router)
        routes.user(this.router)
    }
}

export default Router