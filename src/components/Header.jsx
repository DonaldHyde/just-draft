import React from 'react'

// TODO: User preferences/settings, dropdown menu?

class Header extends React.Component {
    handleLogoutClick = async event => {
        try {
            const user = await this.props.sb.auth.logOut();
            console.log(this.props)

            this.props.sb.setAuthStatus(false)
            this.props.sb.setUser(null)
        }

        catch (error) {
            let err = null
            !error.message ? err = { "message": error } :  err = error

            console.log('error', err)
        }
    }

    getLogout = () => {
        if (this.props.sb.state.auth.isAuthenticated) {
            return (
                <a href="" onClick={this.handleLogoutClick}>Log Out</a>
            )
        }

        return
    }

    getUser () {
        if (this.props.sb.state.auth.isAuthenticated) {
            return (
                <span>{this.props.sb.state.auth.user.username}</span>
            )
        }

        return
    }

    render () {
        return (
            <header className={"app-header app-header-" + this.props.viewName}>
                <div className='app-title'>Just Draft</div>
                {this.getLogout()}
                {/* {this.getUser()} */}
            </header>
        )
    }
}

export { Header }