import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Routes from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Routes />
        </div>
      </div>
    )
  }
}

export default withRouter(App)
