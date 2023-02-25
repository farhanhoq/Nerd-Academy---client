import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ScrollToTop from "../ScrollToTop";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_51M7InvAbbSTlGyeuin3DBD1lpNqKQB1As3LAI2cEa1DIoSidt5XyEVaT1AKyXlh5QWPH1tv1c5e7yTJe4dJmIxUE00GAFEKTgx");
// console.log(stripePromise);

const Checkout = () => {
  const {user} = useContext(AuthContext);

  const {
    data: checkoutItems = []
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
