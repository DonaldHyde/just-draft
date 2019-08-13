import React from 'react'

class WritableArea extends React.Component {
    render () {
        return (
            <div className="writable-area">
                {this.props.textContent}
            </div>
        )
    }
}

export { WritableArea };