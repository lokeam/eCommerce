import React from 'react';
import { connect } from 'react-redux';
import CTABtn from '../cta-btn/cta-btn.component';
import styles from './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
    <div className="collection-item__image"
         style={{
           backgroundImage: `url(${imageUrl})`
         }}
    ></div>
    <div className="collection-item__footer">
      <span className='collection-item__name'>{ name }</span>
      <span className='collection-item__price'>{ price }</span>
    </div>
    <CTABtn onClick={ () => addItem(item) } inverted>Add to cart</CTABtn>
  </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch (addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);