import React from 'react'

import { LoginView } from '../views/LoginView'

// Unused

class AuthValidator extends React.Component {
    constructor () {
        super()
    }

    hasValidCredentials () {
        return true
    }

    render () {
        if (this.hasValidCredentials()) {
            return (
                <React.Fragment>
                    { this.props.children }
                </React.Fragment>
            )
        }

        else {
            // should set state to 0 instead?
            return (
                <React.Fragment>
                    <LoginView />
                </React.Fragment>
            )
        }
    }
}

export { AuthValidator }