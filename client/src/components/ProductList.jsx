import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Product from './Product';

function ProductList({
  products, onSaveProduct, onIncrementProduct, onRemoveProduct,
}) {
  return (
    <Segment>
      <Grid>
        <Grid.Row columns={3}>
          {products.map(p => (
            <Grid.Column>
              <Product
                name={p.title}
                picture={p.iamge}
                price={p.price}
                onSaveProduct={() => onSaveProduct(p.id)}
                onIncrementProduct={() => onIncrementProduct(p.id)}
                onRemoveProduct={() => onRemoveProduct(p.id)}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default ProductList;
