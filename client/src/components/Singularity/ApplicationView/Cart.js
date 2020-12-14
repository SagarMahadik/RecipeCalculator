import React from 'react';
import cartImage from '../../../img/piatto/icons/cartfinal2.png';

function Cart() {
  return (
    <div style={{ display: 'inline-block' }}>
      <img src={cartImage} style={{ height: '120px', width: '100px' }} />
    </div>
  );
}

export default Cart;
