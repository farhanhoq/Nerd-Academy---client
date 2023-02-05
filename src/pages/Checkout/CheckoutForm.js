import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FaCreditCard, FaPaypal, FaLock } from 'react-icons/fa';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';

const CheckoutForm = ({ total  , email, handleAddData}) => {

  const {user , loading} = useContext(AuthContext)
  
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

  useEffect(() => {
    
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]);
  // console.log(total);


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
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-5"
          type="submit"
          disabled={!stripe}
          onClick={handleAddData}
        >
          Pay
        </button>
      </form>
      <p className='text-red-500'>{ cardError }</p>
    </>
  );
};

export default CheckoutForm;