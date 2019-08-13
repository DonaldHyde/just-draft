import React from "react"

import { Header } from "../components/Header"

import "../static/css/LoginView.css"

const INVERSE_PROP = {
  username: "password",
  password: "username"
}

class LoginView extends React.Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: true
    }
  }

  handleInputChange = event => {
    let blankfield = true

    if (event.target.value && this.state[INVERSE_PROP[event.target.id]]) {
      blankfield = false
    }

    this.setState({
      [event.target.id]: event.target.value,
      errors: {
        ...this.state.errors,
        blankfield
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { username, password } = this.state

    try {
      const user = await this.props.sb.auth.logIn(username, password);

      this.props.sb.app.setAuthStatus(true)
      this.props.sb.app.setUser(user)

      // this.props.sb.ajax.get('user', {userId: user.attributes.sub})
      // this.props.history.push("/projects")
    } catch (error) {
      let err = null
      !error.message ? (err = { message: error }) : (err = error)

      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      })
      console.log("error", this.state)
    }
  }

  render() {
    if (this.props.sb.state.auth.isAuthenticated) {
        this.props.history.push('/projects')
        return null
    }
    return (
      <React.Fragment>
        <div className="login-view-container">
          <Header {...this.props} viewName="LoginView" />
          <div className="LoginView">
            <form action="">
              <input
                id="username"
                type="text"
                onChange={this.handleInputChange}
                placeholder="Username"
              />
              <input
                id="password"
                type="password"
                onChange={this.handleInputChange}
                placeholder="Password"
              />
              <input
                type="submit"
                disabled={this.state.errors.blankfield ? "disabled" : ""}
                onClick={this.handleSubmit}
                value="Login"
              />
            </form>
            <a href="/forgotpassword">Forgot Password?</a>
            <br />
            <br />
            Need an account?<br />
            <a href="/register">Click here</a> to register.
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export { LoginView }
