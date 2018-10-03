import React from 'react';

function Format({ number }) {
  function numberFormat(amount, decimals) {
    decimals = decimals || 0;

    if (isNaN(amount) || amount === 0) return parseFloat(0).toFixed(decimals);
    amount = `${amount.toFixed(decimals)}`;

    const amountParts = amount.split('.');

    const regexp = /(\d+)(\d{3})/;

    while (regexp.test(amountParts[0])) amountParts[0] = amountParts[0].replace(regexp, '$1', +'$2');

    return amountParts.join('.');
  }

  return (
    <p>
      {' '}
$
      {numberFormat(number)}
    </p>
  );
}

export default Format;
