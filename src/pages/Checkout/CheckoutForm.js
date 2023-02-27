import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { send } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ total, email }) => {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const navigate = useNavigate();

  const serviceIdEmailJs = "service_ot97gvb";
  const templateIdEmailJs = "template_gspkcpk";
  const templateId1EmailJs = "template_e8htsjl";
  const privateKeyEmailJs = "rzRvJcoC-kdagZoBH";

  const { user } = useContext(AuthContext);

  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState("");
  // const [transactionId , setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false);

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

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    // setPayment(paymentIntent)
    if (paymentIntent.status === "succeeded") {

      const emailInfoClient = {
        to: user?.email,
        subject: 'Payment Confirmation',
        name: user?.displayName,
        paymentAmount: paymentIntent.amount,
        transactionID: paymentIntent.id
      };


      send(
        serviceIdEmailJs,
        templateIdEmailJs,
        emailInfoClient,
        privateKeyEmailJs
      )
        .then(res => {
          console.log('Email sent:', res.status, res.text);
        })
        .catch(err => {
          console.error('Error sending email:', err);
        });
      toast.success("Course purchased Successfully");

      // setTransactionId(paymentIntent.id);
      handleDeleteCartData();
      checkoutItems?.forEach(singleItem => {
        handleAddData(singleItem?.courseId, singleItem?.picture, singleItem?.title, singleItem?.tutor, singleItem?.lectures, singleItem?.hours, singleItem?.instructorEmail, singleItem?.price);
        handlePurchasedData(singleItem?.courseId, singleItem?.instructorEmail, singleItem?.picture, singleItem?.title, singleItem?.price, paymentIntent.id, singleItem?.tutor);
      });
      
      navigate('/student-dashboard/student-courses')
    }
    setProcessing(false);


  }

  const {
    data: checkoutItems = []
  } = useQuery({
    queryKey: ['checkoutItems'],
    queryFn: () => fetch(`https://nerd-academy-server.vercel.app/cartdata?email=${user?.email}`).then(res => res.json()),
  });

  const handleAddData = (courseId, picture, title, tutor, lectures, hours, instructorEmail, price) => {
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
    // console.log(data);

    fetch("https://nerd-academy-server.vercel.app/perchased-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  const handlePurchasedData = (courseId, instructorEmail, picture, title, price, transactionId, tutor) => {

    const checkoutData = {
      courseId,
      instructorEmail,
      picture,
      title,
      price,
      userName: user?.displayName,
      userEmail: user?.email,
      date: `${date}-${month}-${year}`,
      transactionId
    }
    console.log(courseId);


    fetch('https://nerd-academy-server.vercel.app/checkout-data', {
      method: 'POST',
      headers:
      {
        'content-type': 'application/json',
      },
      body: JSON.stringify(checkoutData)
    })
      .then(res => res.json())
      .then(data => {

        const emailInfoInstructor = {
          to: instructorEmail,
          subject: 'Course Purchased',
          name: tutor,
          title: title,
          transactionId: transactionId,
          client: user?.displayName
        }
        console.log(emailInfoInstructor);

        send(
          serviceIdEmailJs,
          templateId1EmailJs,
          emailInfoInstructor,
          privateKeyEmailJs
        )
          .then(res => {
            console.log('Email sent:', res.status, res.text);
          })
          .catch(err => {
            console.error('Error sending email:', err);
          });


      })
    
    fetch(
      `http://nerd-academy-server.vercel.app/users-purchase-spend?email=${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      }
    ).then((res) => res.json());
    
    fetch(
      `http://nerd-academy-server.vercel.app/users-income?email=${instructorEmail}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      }
    ).then((res) => res.json());

    fetch(`http://nerd-academy-server.vercel.app/course-bought/${courseId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(checkoutData),
    }).then((res) => res.json())


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