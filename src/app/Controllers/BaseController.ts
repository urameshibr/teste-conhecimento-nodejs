import {Request, Response, Next} from 'restify'

class BaseController implements ControllerInterface{
    protected request: Request
    protected response: Response
    protected next: Next

    constructor(request: Request, response: Response, next: Next) {
        this.request = request
        this.response = response
        this.next = next

        return this
    }
}

export interface ControllerInterface {}

export default BaseController
