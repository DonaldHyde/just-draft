import React from "react"

import "../static/css/EditorView.css"

import { Header } from "../components/Header"

import { WritableArea } from "../components/WritableArea"
// import { Downloader } from "../components/Downloader"

// TODO: Cleanup, implement the return character, uploading, debnounce

class EditorView extends React.Component {
  state = {
    isFetching: true,
    content: '',
    fileName: ''
  }

  // Feels clunky
  async componentDidMount () {
    try {
      const projectId = this.props.match.params.id
      const fileId = this.props.match.params.fileId
      
      let fileData = await this.props.sb.ajax.getFileData(fileId)
      let content = await this.props.sb.ajax.getFileContent(fileData[0].asset_url)

      this.setState({
        isFetching: false,
        content: content.content,
        fileName: fileData[0].name
      })
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  componentWillMount () {
    document.addEventListener("keydown", this.handleKeystroke)
  }

  componentWillUnmount () {
    document.removeEventListener("keydown", this.handleKeystroke)
  }

  handleKeystroke = e => {
    let key = e.key

    if (key.length === 1 && (!e.altKey && !e.ctrlKey && !e.metaKey)) {
      if (/[a-zA-z1-9.,/#!$%^&*;:{}=\-_`~()@\W]/.test(key)) {
        this.addCharacter(key)
      }
    } else {
      switch (key) {
        case "Backspace":
          e.preventDefault()
          this.deleteCharacter()
          break
        case "Enter":
          e.preventDefault()
          // this.newParagraph()
          break
        default:
      }
    }
  }

  addCharacter = key => {
    const currentStateContent = this.state.content

    this.setState({
      content: currentStateContent + key
    })
  }

  deleteCharacter() {
    const currentStateContent = this.state.content

    this.setState({
      content: currentStateContent.substring(0, currentStateContent.length - 1)
    })
  }

  render() {
    if (!this.props.sb.state.auth.isAuthenticated) {
        this.props.history.push('/login')
    }
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="EditorView">
          {!this.state.isFetching && (
            <React.Fragment>
              <span>{this.state.fileName}</span>
              <WritableArea textContent={this.state.content} />
              {/* <Downloader textContent={this.state.content} /> */}
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export { EditorView }
