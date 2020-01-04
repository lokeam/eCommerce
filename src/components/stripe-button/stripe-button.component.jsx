import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_API_KEY from './stripe-key';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = STRIPE_API_KEY;

  const _onToken = token => {
    console.log('token: ', token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='lokeam eCommerce Project'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={_onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;