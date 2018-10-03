import React from 'react';
import {
  Card, Image, Label, Button,
} from 'semantic-ui-react';
import Format from './NumberFormat';

function Product({
  picture,
  name,
  price,
  marca,
  status,
  onSaveProduct,
  onIncrementProduct,
  onRemoveProduct,
}) {
  return (
    <Card style={{ marginTop: 15 }}>
      <Image size="medium" src={picture} />
      <Card.Content>
        <Card.Header style={{ fontSize: 15 }}>{name}</Card.Header>
        <Card.Meta>
          <Format number={price} />
        </Card.Meta>
        <Card.Description>
          <Label>{marca}</Label>
          <Label>
            {status}
            {' '}
en inventario
          </Label>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic compact color="blue" floated="right" onClick={onSaveProduct}>
          Agregar al carrito
        </Button>
      </Card.Content>
      <Card.Content extra>
        <Button.Group floated="right">
          <Button compact onClick={onIncrementProduct}>
            +
          </Button>
          <Button compact onClick={onRemoveProduct}>
            -
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

export default Product;
