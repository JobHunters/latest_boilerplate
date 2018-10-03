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
      totalItems: 0,
      productsSum: 0,
      products: [],
      cart: [],
    };

    this.sumTotalPrice = this.sumTotalPrice.bind(this);
    this.sumProductCount = this.sumProductCount.bind(this);
    this.handleSaveProduct = this.handleSaveProduct.bind(this);
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
      totalItems: 0,
      productsSum: 0,
      cart: [],
    });
    alert('Compra realizada con éxito');
  }

  sumProductCount(array) {
    let total = 0;
    array.forEach(product => (total += product.order));
    this.setState({ totalItems: total });
  }

  sumTotalPrice(array) {
    let sum = 0;
    array.forEach(product => (sum += product.itemTotal));
    this.setState({ productsSum: sum });
  }

  handlerRemoveProduct(productId) {
    const { products, cart } = this.state;
    let newCart = cart;
    const product = products[productId];
    const existingItem = newCart.find(prod => prod.title === product.title);
    const itemIdx = newCart.indexOf(existingItem);

    if (!existingItem) {
      alert('Producto no en carrito');
    }

    if (existingItem.order > 1) {
      const existingItemOrder = newCart[itemIdx].order;
      const newOrder = parseInt(existingItemOrder) - 1;
      newCart[itemIdx].order = newOrder;
      newCart[itemIdx].itemTotal = newOrder * parseInt(newCart[itemIdx].price);
      this.setState({
        cart: newCart,
      });
    } else if (existingItem.order === 1) {
      newCart.splice(itemIdx, 1);
      this.setState({
        cart: newCart,
      });
    }

    this.sumProductCount(newCart);
    this.sumTotalPrice(newCart);
  }

  handleSaveProduct(productId) {
    const { products, cart } = this.state;
    let newCart = cart;
    const product = products[productId];
    const existingItem = newCart.find(prod => prod.title === product.title);

    const productCart = {
      title: product.title,
      img: product.image,
      price: product.price,
      order: 1,
      itemTotal: product.price,
    };

    if (existingItem) {
      const itemIdx = newCart.indexOf(existingItem);
      const existingItemOrder = newCart[itemIdx].order;
      const newOrder = parseInt(existingItemOrder) + 1;
      newCart[itemIdx].order = newOrder;
      newCart[itemIdx].itemTotal = newOrder * parseInt(newCart[itemIdx].price);
    } else {
      newCart = [...newCart, ...productCart];
      this.setState({
        cart: newCart,
      });
    }
    this.sumProductCount(newCart);
    this.sumTotalPrice(newCart);
  }

  handlerOpenOrder(event) {
    event.preventDefault();
    this.setState({ openOrder: true });
  }

  renderOpenOrder() {
    if (this.state.openOrder) {
      return (
        <Order
          productsSum={this.state.productsSum}
          onClearCart={this.handlerClearCart}
        />
      );
    }
  }

  render() {
    const { products, cart, totalItems, productsSum } = this.state;
    return (
      <Container>
        <Grid>
          <Grid.Column md-12="true" width={8}>
            <ProductList
              products={products}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <CartList
              items={cart}
              totalItems={totalItems}
              productsSum={productsSum}
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
