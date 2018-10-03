import React from 'react';
import { Feed } from 'semantic-ui-react';

function Cart({
  img, name, total, order,
}) {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label image={img} />
        <Feed.Content>
          <Feed.Date content={name} />
          <Feed.Summary>
            $
            {' '}
            {total}
            {' '}
(
            {order}
            {' '}
Productos)
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default Cart;
