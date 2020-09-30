import routes from './routes'
import {Next, Request, Response} from "restify";
import {ControllerInterface} from './app/Controllers/BaseController'

class Router implements RouterInterface {
    router: any

    constructor(server: any) {
        this.router = server
    }

    handle() {
        this.register()
    }

    private register() {
        routes.auth(this)
        routes.user(this)
    }

    assign(method: string, uri: string, controller: ControllerInterface, action: string): void {
        this.router[method](uri, (request: Request, response: Response, next: Next) => {
            // @ts-ignore
            (new controller(request, response, next))[action]()

            return next()
        })
    }
}

export interface RouterInterface {
    assign(method: string, uri: string, controller: ControllerInterface, action: string): void
}

export default Router