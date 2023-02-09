import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaCreditCard, FaPaypal, FaLock } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import ScrollToTop from "../ScrollToTop";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Checkout = () => {
  const {user , loading} = useContext(AuthContext);

  const {
    data: checkoutItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['checkoutItems'],
    queryFn: () => fetch(`https://nerd-academy-server.vercel.app/cartdata?email=${user?.email}`)
    .then(res => res.json())
    // .then(data => console.log(data))
  });
  // console.log(checkoutItems)

  let total = 1;

  // const handleAddData = (picture, title, tutor, lectures, hours) => {
  //   // checkoutItems.map(items => setSingleData(items))
  //   const data = {
  //     picture,
  //     title,
  //     tutor,
  //     lectures,
  //     hours
  //   }

  //     fetch("https://nerd-academy-server.vercel.app/perchased-course", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify( data ),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.acknowledged) {
  //           refetch();
  //           toast.success("Course purchased Successfully");
  //       }
  //       });
  // }

  // const handlePurchasedData = (instructorEmail, picture, title, price) => {

  //   const checkoutData = {
  //     instructorEmail,
  //     picture,
  //     title,
  //     price,
  //     userName: user?.displayName,
  //     userEmail: user?.email,
  //     date: `${date}-${month}-${year}`,
  //     transactionId: ""
  //   }

  //   fetch('https://nerd-academy-server.vercel.app/checkout-data', {
  //               method: 'POST',
  //               headers: 
  //               {
  //                 'content-type': 'application/json',
  //               },
  //               body: JSON.stringify(checkoutData)
  //             })
  //               .then(res => res.json())
  //               .then(data => console.log(data))


  // }

  for(const singleItem of checkoutItems){
    total = total + singleItem.price;
    // const {picture , title , tutor , lectures , hours, instructorEmail , price} = singleItem;
    // setSingleData(singleItem);
    // handleAddData(picture, title, tutor, lectures, hours);
    // handlePurchasedData(instructorEmail, picture, title, price)
  }


  let totalAmount = total;


  
  return (
    <section className='py-24'>
        <ScrollToTop/>

      {/* another input field */}
      <div className="my-24 mx-auto w-3/12">
        <Elements stripe={stripePromise}>
            <CheckoutForm total={totalAmount} user={user?.displayName} email={user?.email} checkoutItems={checkoutItems} />
          </Elements>
      </div>


    </section>
  );
};

export default Checkout;
