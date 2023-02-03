import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ total , user , email}) => {
  console.log(total , user , email);
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    
    fetch("https://nerd-academy-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]);
console.log(typeof total);
    const handleSubmit = async (event) => {
        event.preventDefault();
        // || !elements
        if (!stripe || !elements) {
          return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log(error);
            setCardError(error.message);
          } else {
            setCardError('');
          }

          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user,
                  email: email
                },
              },
            },
          );

          if(confirmError){
            setCardError(confirmError.message);
            return;
          }
          console.log('paymentIntent' , paymentIntent);
      }
    return (<>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-sm mt-2 btn-primary' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    <p className='text-red-500'>{cardError}</p>
    </>
        
    );
};

export default CheckoutForm;