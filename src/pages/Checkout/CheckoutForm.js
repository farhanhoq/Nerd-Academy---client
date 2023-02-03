import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FaCreditCard, FaPaypal, FaLock } from 'react-icons/fa';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';

const CheckoutForm = ({ total  , email}) => {

  const {user , loading} = useContext(AuthContext)

  // const {
  //   data: checkoutItems = [],
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ['checkoutItems'],
  //   queryFn: () => fetch(`https://nerd-academy-server.vercel.app/cartdata?email=${user?.email}`).then(res => res.json()),
  // });

  // console.log(total , user , email);
  
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
    return (<>
        <form onSubmit={handleSubmit}>

      {/* <CardElement>
      <div className="w-8/12 mx-auto p-5 shadow-xl border rounded-xl">
        <h1 className="text-5xl p-4 mb-8">Checkout</h1>
        <div className="flex">
          <div className="w-7/12 p-5">
            <h1 className="text-3xl font-bold">Billing address</h1>
            <div className="mt-10">
              <label className="label">
                <span className="label-text font-bold mb-[-5px]">
                  Country
                </span>
              </label>
              <select className="select select-bordered w-full max-w-xs rounded border-primary">
                <option disabled selected>
                  Bangladesh
                </option>
                <option>America</option>
                <option>Canada</option>
              </select>
            </div>

            <div className="mt-16 ">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-2">Payment method</h1>
                <div className="flex mr-1">
                  <p className="text-sm mr-2">Secured connection</p>
                  <FaLock />
                </div>
              </div>

              <div className="collapse mb-1">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-white  peer-checked:bg-primary border border-primary">
                  <div className="flex justify-between font-bold">
                    <p>Credit/Debit Card</p>
                    <p>
                      <FaCreditCard className="text-2xl" />
                    </p>
                  </div>
                </div>
                <div className="collapse-content bg-white  peer-checked:bg-primary ">
                  <div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-white">
                          Name or card
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name or card"
                        className="input input-bordered w-full rounded"
                      />
                    </div>
                    <div className="form-control w-full mt-3">
                      <label className="label">
                        <span className="label-text text-white">
                          Card number
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="input input-bordered w-full rounded"
                      />
                    </div>
                    <div className="flex mt-3 gap-x-3">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">
                            CVC/CVV
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="CVC"
                          className="input input-bordered w-full rounded"
                        />
                      </div>

                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">
                            Expiry date
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="input input-bordered w-full rounded"
                        />
                      </div>
                    </div>

                    <div className="flex text-white mt-5 py-5">
                      <input
                        type="checkbox"
                        className="checkbox border border-white"
                      />
                      <p className="ml-2">
                        Securely save this card for my later purchase
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-white text-white-content peer-checked:bg-primary peer-checked:text-white-content border border-primary">
                  <div className="flex justify-between  font-bold">
                    <p>Paypal</p>
                    <p>
                      <FaPaypal className="text-2xl" />
                    </p>
                  </div>
                </div>
                <div className="collapse-content bg-white  peer-checked:bg-primary text-white">
                  <p className="p-5 text-center font-bold">
                    In order to complete your transaction, we will transfer
                    you over to PayPal's secure servers.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h1 className="font-bold text-2xl mb-1">Order details</h1>
              <div>
                <table className="table w-full">
                  {checkoutItems?.map(data => (
                    <tbody>
                      <tr className="flex justify-between">
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask w-16 rounded h-10">
                                <img src={data?.picture} />
                              </div>
                            </div>
                            <div className="">
                              <div className="font-bold ">{data?.title}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="text-right">
                            <p className="font-bold text-primary text-lg">
                              ${data?.price}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>

          <div className="w-5/12">
            <div className="border border-primary rounded-xl p-4 w-7/12 mx-auto">
              <h4 className="text-xl font-bold mb-2">Summary</h4>
              <div className="flex justify-between">
                <h1 className="">Total Price:</h1>
                <h1 className="">${total}</h1>
              </div>

              <div className="divider mb-[-3px]"></div>

              <div className="flex justify-between font-bold">
                <h1 className="">Total:</h1>
                <h1 className="">${total}</h1>
              </div>

              <button className="btn btn-primary rounded text-white btn-wide w-full mt-5" type="submit" disabled={!stripe || !clientSecret}>
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      </CardElement> */}
      
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