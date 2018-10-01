import React, { Component } from 'react';
//RHL only for front end development
import { Container, Grid } from 'semantic-ui-react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [],
      cart: [],
    }
  }
  render() {
    return (
      <Container className={style.root}>
        <Grid>
          <Grid.Column md-12='true' width={8}>
          </Grid.Column>
          <Grid.Column width={8}>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
//hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
//Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
