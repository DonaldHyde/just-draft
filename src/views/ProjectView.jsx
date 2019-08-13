import React from "react"
import { Link } from "react-router-dom"

import { Header } from "../components/Header"

import "../static/css/ProjectView.css"

class ProjectView extends React.Component {
  state = {
    isFetching: true,
    projectId: '',
    projectFiles: []
  }

  async componentDidMount () {
    try {
      const projectId = this.props.match.params.id
      let projectFiles = await this.props.sb.ajax.getProjectFiles(projectId)

      console.log(projectFiles)

      this.setState({
        isFetching: false,
        projectId,
        projectFiles
      })
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  render() {
    if (!this.props.sb.state.auth.isAuthenticated) {
        this.props.history.push('/login')
    }
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="ProjectView">
          <h2>My First Novel</h2>
          {!this.state.isFetching && (
            <React.Fragment>
              <ul>
                {this.state.projectFiles.map((item, key) => {
                  return (
                    <li key={item.id}>
                      {item.name}
                      <Link to={'/projects/' + this.state.projectId + '/edit/' + item.id}>Edit</Link>
                    </li>
                  )
                })}
              </ul>
              <button>New File</button>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export { ProjectView }
