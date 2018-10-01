import React, { Component } from 'react';
//RHL only for front end development
import { Container, Grid } from 'semantic-ui-react';
import CartList from '../CartList.jsx';
import Menu from '../Menu';
import ProductList from '../ProductList';
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
          <ProductList
              products={this.state.products}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
          </Grid.Column>
          <Grid.Column width={8}>
          <CartList
             items={this.state.cart}
             total={this.state.total}
             onOpenOrder={this.handlerOpenOrder}
           />
           
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
