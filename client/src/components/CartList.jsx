import React, { Component } from 'react';
// import Format from '../numberFormat'
import { Card, Icon, Button } from 'semantic-ui-react';

import Cart from './Cart';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.numberFormat = this.numberFormat.bind(this);
  }

  numberFormat(amount, decimals) {
    decimals = decimals || 0;
    if (isNaN(amount) || amount === 0) return parseFloat(0).toFixed(decimals);
    amount = `${amount.toFixed(decimals)}`;
    const amountParts = amount.split('.');

    const regexp = /(\d+)(\d{3})/;
    while (regexp.test(amountParts[0]))
      amountParts[0] = amountParts[0].replace(regexp, '$1', '$2');
    return amountParts.join('.');
  }

  render() {
    const { items, onOpenOrder, total } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            Carrito de Compras
            <Icon size="large" />
          </Card.Header>
        </Card.Content>
        <Card.Content>
          {items.map(p => (
            <Cart
              img={p.img}
              name={p.name}
              total={this.numberFormat(p.total)}
              order={p.order}
            />
          ))}
        </Card.Content>
        <Card.Content extra>
          <Button
            basic
            color="blue"
            compact
            size="medium"
            onClick={onOpenOrder}
          >
            Proceder al Pago ({total} productos)
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default CartList;
