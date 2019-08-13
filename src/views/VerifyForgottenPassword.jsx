import React from 'react'
import { Auth } from 'aws-amplify'

import { Header } from '../components/Header'

import '../static/css/VerifyForgottenPassword.css'

class VerifyForgottenPassword extends React.Component {
    state = {
        username: '',
        code: '',
        password: '',
        confirmPassword: '',
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
        const { username, code, password } = this.state

        try {
            const resetPasswordResponse = await Auth.forgotPasswordSubmit(username, code, password)
            console.log(resetPasswordResponse)
            this.props.history.push('/login')
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
                <div className="VerifyForgottenPassword">
                    <h2>Create New Password</h2>
                    <input type="text" id="code" onChange={ this.handleInputChange } placeholder="Enter Code"/>
                    <input type="text" id="username" onChange={ this.handleInputChange } placeholder="Enter Username"/>
                    <input type="password" id="password" onChange={ this.handleInputChange } placeholder="New Password"/>
                    <input type="password" id="confirmPassword" onChange={ this.handleInputChange } placeholder="Confirm New Password"/>
                    <button onClick={this.registerClicked}>Submit</button>
                </div>
            </React.Fragment>
        )
    }
}

export { VerifyForgottenPassword }