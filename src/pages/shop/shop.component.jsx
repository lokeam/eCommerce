import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import SHOP_DATA from './shop.mockData';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };  
  }

  render() {
      const { collections } = this.state;
      return (
        <div className="shop__page">
          { collections.map( ({id, ...otherCollectionProps}) => (
          <PreviewCollection key={collections.id} {...otherCollectionProps} />
          ) ) }
        </div>
      );
  }
}

export default ShopPage;