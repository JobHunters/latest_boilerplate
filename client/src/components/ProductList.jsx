import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Product from './Product.jsx'


function ProductList(props) {
  return (
    <Segment>
      <Grid>
        <Grid.Row columns={3}>
          {props.products.map(p => {
            return (
              <Grid.Column>
                <Product
                  name={p.name}
                  picture={p.picture}
                  price={p.price}
                  onSaveProduct={() => props.onSaveProduct(p.id)}
                  onIncrementProduct={() => props.onIncrementProduct(p.id)}
                  onRemoveProduct={() => props.onRemoveProduct(p.id)}
                />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ProductList
