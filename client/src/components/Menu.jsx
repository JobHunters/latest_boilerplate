import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SearchForm from '../SearchForm.jsx'

class Navigation extends Component {

  render() {
    return(
      <Segment textAlign='center' clearing style={{ marginTop: 15}}>
        <SearchForm />
      </Segment>
    )
  }
}

export default Navigation;
