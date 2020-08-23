import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51HFbVQAyqvVFkiPLTHjp7U25HKnd42lPGVU1Ab212pUQm47tZ3xPffk7zl0sN8IQCQKLOLCl5D0beS0Ry0tWFa3m00mL1uKC5Y';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount:priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error=>{
            console.log('Payment error ' , JSON.parse(error));
            alert('There was an issue with your payment. Please sure you use the provided credit card.');
        });
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