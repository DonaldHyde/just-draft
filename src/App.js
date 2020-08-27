import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Route, Switch } from "react-router"

import { Auth } from "aws-amplify"

import "./static/css/App.css"

import { LoginView } from "./views/LoginView"
import { ForgotPassword } from "./views/ForgotPassword"
import { VerifyForgottenPassword } from "./views/VerifyForgottenPassword"

import { RegisterView } from "./views/RegisterView"
import { VerifyRegistrationView } from "./views/VerifyRegistrationView"

import { ProjectsView } from "./views/ProjectsView"
import { ProjectView } from "./views/ProjectView"
import { EditorView } from "./views/EditorView"

import { Authenticator } from './sandbox/auth/auth'

import { ajax } from './core/ajax'

const auth = new Authenticator({})

class App extends React.Component {
  state = {
    auth: {
      isAuthenticated: false,
      isAuthenticating: true,
      user: null,
      sessionToken: null
    }
  }

  constructor () {
    super()

    this.sandbox = this.configureSandbox()
  }

  configureSandbox = () => {
    return {
      app: {
        setAuthState: authState => {
          this.setState({
            ...this.state,
            auth: authState
          })
        },
      
        setAuthStatus: authStatus => {
          this.sandbox.app.setAuthState({
            ...this.state.auth,
            isAuthenticated: authStatus
          })
        },
      
        setSessionToken: token => {
          this.sandbox.app.setAuthState({
            ...this.state.auth,
            sessionToken: token
          })
        },
      
        setUser: user => {
          this.sandbox.app.setAuthState({
            ...this.state.auth,
            user
          })
        }
      },
      state: this.state,
      auth,
      ajax
    }
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession()
      this.sandbox.app.setAuthStatus(true)

      const user = await Auth.currentAuthenticatedUser()

      await user.getSession((err, session) => {
        if (!session.isValid()) {
          console.log("no session")
        } else {
          this.sandbox.app.setSessionToken(session.getIdToken().getJwtToken())
        }
      })

      this.sandbox.app.setUser(user)
    } catch (error) {
      console.log(error)
      this.sandbox.app.setAuthState({
        isAuthenticated: false,
        isAuthenticating: false,
        user: null,
        sessionToken: null
      })
    }

    this.sandbox.app.setAuthState({
      ...this.state.auth,
      isAuthenticating: false
    })
  }

  render() {
    this.sandbox.state = this.state
    return (
      !this.state.auth.isAuthenticating && (
        <BrowserRouter basename={process.env.PUBLIC_URL} >
          <div className="app">
            <Switch>
              <Route
                exact
                path="/"
                render={props => <LoginView {...props} sb={this.sandbox} />}
              />
              <Route
                exact
                path="/login"
                render={props => <LoginView {...props} sb={this.sandbox} />}
              />

              <Route
                exact
                path="/forgotpassword"
                render={props => <ForgotPassword {...props} sb={this.sandbox} />}
              />
              <Route
                exact
                path="/verifyforgottenpassword"
                render={props => (
                  <VerifyForgottenPassword {...props} sb={this.sandbox} />
                )}
              />

              <Route
                exact
                path="/register"
                render={props => <RegisterView {...props} sb={this.sandbox} />}
              />
              <Route
                exact
                path="/register/success"
                render={props => (
                  <VerifyRegistrationView {...props} sb={this.sandbox} />
                )}
              />

              <Route
                exact
                path="/projects"
                render={props => <ProjectsView {...props} sb={this.sandbox} />}
              />
              <Route
                exact
                path="/projects/:id"
                render={props => <ProjectView {...props} sb={this.sandbox} />}
              />
              {/* <Route exact path='/projects/:id' render={ (props) => <ProjectView {...props} sb={this.sandbox} /> }/> */}
              <Route
                exact
                path="/projects/:id/edit/:fileId"
                render={props => <EditorView {...props} sb={this.sandbox} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      )
    )
  }
}

export default App
