import React from "react"
import { Link } from "react-router-dom"

import { Header } from "../components/Header"

import "../static/css/ProjectsView.css"

class ProjectsView extends React.Component {
  state = {
    isFetching: true,
    projects: []
  }

  async componentDidMount () {
    try {
      let projects = await this.props.sb.ajax.getProjects()

      console.log(projects)

      this.setState({
        isFetching: false,
        projects
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
        <Header {...this.props} viewName="ProjectsView" />
          <div className="ProjectsView">
            <h2>Your Projects</h2>
            {!this.state.isFetching && (
              <React.Fragment>
                <ul>
                  {this.state.projects.map((item, key) => {
                    return (
                      <li key={item.id}>
                        {item.name}
                        <Link to={'/projects/' + item.id}>View</Link>
                      </li>
                    )
                  })}
                </ul>
                <button>New Project</button>
              </React.Fragment>
            )}
          </div>
      </React.Fragment>
    )
  }
}

export { ProjectsView }
