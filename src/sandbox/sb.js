import { Auth } from './auth/auth'

// TODO: Abstract the sandbox out of the main code

class Sandbox {
    constructor (authConfig) {
        this.auth = new Auth(authConfig);
    }
}

export { Sandbox }