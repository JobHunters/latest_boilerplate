import React from 'react';
import { Card, Statistic, Button } from 'semantic-ui-react';
import Format from './NumberFormat';

function Order({ sum, onClearCart }) {
  return (
    <Card>
      <Card.Content header="Cantidad a pagar" />
      <Card.Content extra>
        <Statistic size="mini">
          <Statistic.Value>
            <Format number={sum} />
          </Statistic.Value>
        </Statistic>
        <Button basic color="green" compact size="medium" floated="right" onClick={onClearCart}>
          Pagar
        </Button>
      </Card.Content>
    </Card>
  );
}

export default Order;
