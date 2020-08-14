import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51HFbVQAyqvVFkiPLTHjp7U25HKnd42lPGVU1Ab212pUQm47tZ3xPffk7zl0sN8IQCQKLOLCl5D0beS0Ry0tWFa3m00mL1uKC5Y';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
 
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};


export default StripeCheckoutButton;