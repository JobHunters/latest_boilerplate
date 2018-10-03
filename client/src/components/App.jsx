import React, { Component } from 'react';
// RHL only for front end development
import axios from 'axios';
import { Container, Grid } from 'semantic-ui-react';
import { hot } from 'react-hot-loader';
import CartList from './CartList';
import ProductList from './ProductList';
import Order from './Order';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [],
      cart: [],
    };

    this.handleSaveProduct = this.handleSaveProduct.bind(this);
    this.handlerAddProduct = this.handlerAddProduct.bind(this);
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this);
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this);
    this.handlerClearCart = this.handlerClearCart.bind(this);
  }

  componentDidMount() {
    axios.get('/products').then(res => {
      const { products } = res.data;
      this.setState({ products });
    });
  }

  handlerClearCart() {
    this.setState({
      cart: [],
      sum: 0,
      total: 0,
    });
    alert('Compra realizada con éxito');
  }

  sumProducts(array) {
    let total = 0;
    array.forEach(product => (total += product.order));
    this.setState({ total });
  }

  sumTotal(array) {
    let sum = 0;
    array.forEach(product => (sum += product.total));
    this.setState({ sum });
  }

  handlerAddProduct(indexCart, indexProduct) {
    const statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].status !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price;
      statusCopy.cart[indexCart].order += 1;
      statusCopy.products[indexProduct].status -= 1;
      this.setState(statusCopy);
      this.sumProducts(statusCopy.cart);
      this.sumTotal(statusCopy.cart);
    } else {
      alert('Producto inexistente');
    }
  }

  handlerRemoveProduct(productId) {
    const { products, cart } = this.state;
    const product = products.find(p => p.id === productId);
    const indexProduct = products.findIndex(x => x.id === product.id);
    const indexCart = cart.findIndex(x => x.id === cart.id);

    const statusCopy = Object.assign({}, this.state);
    if (statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price) {
      statusCopy.cart.splice(indexCart, 1);
      this.setState(statusCopy);
      alert('El producto fue eliminado del carrito de compras');
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price;
      statusCopy.products[indexProduct].status += 1;
      statusCopy.cart[indexCart].order -= 1;
      statusCopy.total -= 1;
      statusCopy.sum -= statusCopy.cart[indexCart].price;
      this.setState(statusCopy);
    }
  }

  handleSaveProduct(productId) {
    const { products, cart } = this.state;
    const product = products.find(p => p.id === productId);
    const indexProduct = products.findIndex(x => x.id === product.id);

    const productCart = {
      name: product.name,
      img: product.picture,
      price: product.price,
      order: 1,
      total: product.price,
    };

    const filterCart = cart.find(p => p.id === productId);
    if (undefined !== filterCart && filterCart !== null) {
      const indexCart = cart.findIndex(x => x.id === filterCart.id);
      this.handlerAddProduct(indexCart, indexProduct);
    } else {
      const statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1;
      this.sumProducts(statusCopy.cart);
      this.sumTotal(statusCopy.cart);
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy,
      });
    }
  }

  handlerOpenOrder(event) {
    event.preventDefault();
    this.setState({ openOrder: true });
  }

  renderOpenOrder() {
    if (this.state.openOrder) {
      return <Order sum={this.state.sum} onClearCart={this.handlerClearCart} />;
    }
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column md-12="true" width={8}>
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
            {this.renderOpenOrder()}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
