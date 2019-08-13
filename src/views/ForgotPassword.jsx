import React from 'react'
import { Auth } from 'aws-amplify'

import { Header } from '../components/Header'

import '../static/css/ForgotPassword.css'

class ForgotPassword extends React.Component {
    state = {
        username: '',
        errors: {
            cognito: null,
            blankfield: false,
            passwordMatch: false
        }
    }

    handleInputChange = event => {
        // error checking and validation goes here
        
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    registerClicked = async () => {
        const { username } = this.state

        try {
            const signUpResponse = await Auth.forgotPassword(username)
            console.log(signUpResponse)
            this.props.history.push('/verifyforgottenpassword')
        }

        catch (error) {
            let err = null
            !error.message ? err = { "message": error } :  err = error

            this.setState({
                errors: {
                    ...this.state.errors,
                    cognito: err
                }
            })
            console.log(this.state)
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="ForgotPassword">
                    <h2>Forgot Password</h2>
                    <input type="text" id="username" onChange={ this.handleInputChange } placeholder="Enter Username"/>
                    <button onClick={this.registerClicked}>Submit</button>
                    Or, <a href="/login">click here</a> to log in.
                </div>
            </React.Fragment>
        )
    }
}

export { ForgotPassword }