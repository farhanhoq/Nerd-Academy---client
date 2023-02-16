import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ total  , email }) => {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const {user } = useContext(AuthContext);
  
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId , setTransactionId] = useState('');
    const [processing , setProcessing] = useState(false);

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
  // console.log(total);


  const handleSubmit = async (event) => {
    event.preventDefault();
    // || !elements
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError('');
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email
          },
        },
      },
    );

        if(confirmError){
          setCardError(confirmError.message);
          return;
        }
        // setPayment(paymentIntent)
        if(paymentIntent.status === "succeeded"){
          toast.success("Course purchased Successfully");
          setTransactionId(paymentIntent.id);
          handleDeleteCartData();
           checkoutItems?.map(singleItem => {
            handleAddData(singleItem?.courseId, singleItem?.picture, singleItem?.title, singleItem?.tutor, singleItem?.lectures, singleItem?.hours, singleItem?.instructorEmail, singleItem?.price);
            handlePurchasedData(singleItem?.instructorEmail, singleItem?.picture, singleItem?.title, singleItem?.price);
          });
        }
        setProcessing(false);
       
    }

      const {
        data: checkoutItems = []
      } = useQuery({
        queryKey: ['checkoutItems'],
        queryFn: () => fetch(`https://nerd-academy-server.vercel.app/cartdata?email=${user?.email}`).then(res => res.json()),
      });

      const handleAddData = (courseId, picture, title, tutor, lectures, hours, instructorEmail ,price) => {
        const data = {
          courseId,
          picture,
          title,
          tutor,
          lectures,
          hours,
          instructorEmail,
          price,
          buyerEmail: user?.email
        }
        console.log(data);
      
          fetch("https://nerd-academy-server.vercel.app/perchased-course", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( data ),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
      }

      const handlePurchasedData = (instructorEmail, picture, title, price) => {

          const checkoutData = {
            instructorEmail,
            picture,
            title,
            price,
            userName: user?.displayName,
            userEmail: user?.email,
            date: `${date}-${month}-${year}`,
            transactionId: transactionId
          }
      
          fetch('https://nerd-academy-server.vercel.app/checkout-data', {
                      method: 'POST',
                      headers: 
                      {
                        'content-type': 'application/json',
                      },
                      body: JSON.stringify(checkoutData)
                    })
                      .then(res => res.json())
                      .then(data => console.log(data))
      
      
      }


      const handleDeleteCartData = () => {
        fetch(`https://nerd-academy-server.vercel.app/usercart/${user?.email}`, {
        method: 'DELETE',
      });
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
          className="btn btn-sm mt-5 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>
    </>
  );
};

export default CheckoutForm;