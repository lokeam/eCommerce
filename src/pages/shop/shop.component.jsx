import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => (
  <div className="shop__page">
    { collections.map( ({id, ...otherCollectionProps}) => (
    <PreviewCollection key={collections.id} {...otherCollectionProps} />
    ) ) }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);