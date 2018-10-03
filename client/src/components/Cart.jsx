import React from 'react';
import { Feed } from 'semantic-ui-react';

function Cart({ img, name, itemTotal, order }) {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label image={img} />
        <Feed.Content>
          <Feed.Date content={name} />
          <Feed.Summary>
            $ {itemTotal} ({order} Productos)
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default Cart;
