import React from 'react'

import { Auth } from 'aws-amplify'

import { Header } from '../components/Header'
import '../static/css/RegisterView.css'
import { ConsoleLogger } from '@aws-amplify/core';

const PASSWORD_INVERSE_PROP = {
    password: 'confirmPassword',
    confirmPassword: 'password'
}

const INVERSE_PROP = {
    username: [
        'email',
        'password',
        'confirmPassword'
    ],
    email: [
        'username',
        'password',
        'confirmPassword'
    ],
    password: [
        'username',
        'email',
        'confirmPassword'
    ],
    confirmPassword: [
        'username',
        'email',
        'password'
    ],
}

class RegisterView extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {
            cognito: null,
            blankfield: true,
            passwordMatch: true,
            validEmail: true
        }
    }

    handleInputChange = event => {
        // error checking and validation goes here
        let blankfield = true
        // let passwordMatch = false
        // let validEmail = false

        if (event.target.value) {
            for (let i=0, len=INVERSE_PROP[event.target.id].length;i<len;i++) {
                if (!this.state[INVERSE_PROP[event.target.id][i]]) {
                    blankfield = true
                    break
                } else {
                    blankfield = false
                }
            }
        }

        this.setState({
            [event.target.id]: event.target.value,
            errors: {
                ...this.state.errors,
                blankfield
            }
        })
    }

    isMatchedPassword () {
        let passwordMatch = false

        if (this.state.password === this.state.confirmPassword) {
            passwordMatch = true
        }

        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                passwordMatch
            }
        })

        return passwordMatch
    }

    isValidEmail () {
        let validEmail = false

        if (/\S+@\S+\.\S+/.test(this.state.email)) {
            validEmail = true
        }

        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                validEmail
            }
        })

        return validEmail
    }

    isFormValid () {
        let passwordMatch = false
        let validEmail = false

        if (this.state.password === this.state.confirmPassword) {
            passwordMatch = true
        }

        if (/\S+@\S+\.\S+/.test(this.state.email)) {
            validEmail = true
        }

        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                passwordMatch,
                validEmail
            }
        })

        return (passwordMatch && validEmail)
    }

    handleSubmit = async () => {

        if (this.isFormValid()) {
            const { username, email, password } = this.state

            try {
                const signUpResponse = await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        email: email
                    }
                })
                console.log(signUpResponse)
                this.props.history.push('/register/success')
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
    }
    
    render() {
        if (this.props.sb.state.auth.isAuthenticated) {
            this.props.history.push('/projects')
        }
        return (
            <React.Fragment>
                <Header />
                <div className="RegisterView">
                    <h2>Register</h2>
                    <input type="text" id="username" onChange={ this.handleInputChange } placeholder="Username"/>
                    <input type="text" className={!this.state.errors.validEmail ? 'invalid' : ''} id="email" onChange={ this.handleInputChange } placeholder="Email"/>
                    <input type="password" className={!this.state.errors.passwordMatch ? 'invalid' : ''} id="password" onChange={ this.handleInputChange } placeholder="Password"/>
                    <input type="password" className={!this.state.errors.passwordMatch ? 'invalid' : ''} id="confirmPassword" onChange={ this.handleInputChange } placeholder="Confirm Password"/>
                    { !this.state.errors.validEmail ? <p className="error">Invalid Email Address</p> : '' }
                    { !this.state.errors.passwordMatch ? <p className="error">Passwords do not match</p> : '' }
                    <button disabled={this.state.errors.blankfield ? 'disabled' : ''} onClick={this.handleSubmit}>Register</button>
                    Already a user? <a href="/login">Click here</a> to log in.
                </div>
            </React.Fragment>
        )
    }
}

export { RegisterView }