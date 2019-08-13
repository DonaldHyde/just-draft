import React from 'react'

import { Header } from '../components/Header'

class VerifyRegistrationView extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header />
                <div className="VerifyRegistrationView">
                    <p>Please check your email and click on the verification link we've sent to you.</p>
                    <p>Then, <a href="/login">click here</a> to log in.</p>
                </div>
            </React.Fragment>
        )
    }
}

export { VerifyRegistrationView }