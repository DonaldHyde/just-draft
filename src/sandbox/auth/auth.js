import { Auth } from "aws-amplify"

// Abstraction of the authentication methods
class Authenticator {
  constructor(config) {
    this.config = {}

    if (config) {
      this.config = config
    }
  }

  static loggedIn = false

  logIn(username, password) {
    // login
    return Auth.signIn(username, password)
  }

  logOut() {
    // logout
    return Auth.signOut()
  }

  getCurrentSession () {
    return Auth.currentSession()
  }

  getAuthenticatedUser () {
    return Auth.currentAuthenticatedUser()
  }

  isLoggedIn() {
    return this.isLoggedIn
  }
}

export { Authenticator }
