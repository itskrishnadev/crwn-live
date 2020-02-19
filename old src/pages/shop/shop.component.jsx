import React, { Component } from 'react';

import Shop_Data from './shop.data';

import './shop.style.scss';
import PreviewCollection from '../../components/preview-collections/preview-colletions.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Shop_Data
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

