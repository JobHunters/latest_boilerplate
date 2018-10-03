import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Product from './Product';

function ProductList({
  products,
  onSaveProduct,
  onIncrementProduct,
  onRemoveProduct,
}) {
  return (
    <Segment>
      <Grid>
        <Grid.Row columns={3}>
          {products.map((p, index) => (
            <Grid.Column>
              <Product
                key={index}
                name={p.title}
                picture={p.image}
                price={p.price}
                onSaveProduct={() => onSaveProduct(index)}
                onIncrementProduct={() => onIncrementProduct(index)}
                onRemoveProduct={() => onRemoveProduct(index)}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default ProductList;
