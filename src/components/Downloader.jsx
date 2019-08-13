import React from 'react'

// Deprecated - will do this on the server

class Downloader extends React.Component {
    constructor () {
        super()

        this.downloader = React.createRef()

        this.triggerDownload = this.triggerDownload.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        if (this.props.textContent.length > 0) {
            this.triggerDownload()
        }
    }

    triggerDownload () {
        this.downloader.current.click()
    }

    render () {
        return (
            <React.Fragment>
                <button className="downloader-button" onClick={this.handleClick}>Download</button>
                <a
                    href={'data:text/plain;charset=utf-8,' + encodeURIComponent(this.props.textContent)}
                    download={'index.txt'}
                    ref={this.downloader}
                ></a>
            </React.Fragment>
        )
    }
}

export { Downloader }
