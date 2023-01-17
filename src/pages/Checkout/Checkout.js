import React from 'react';

const Checkout = () => {
    return (
        <div className='h-screen'>
            <div className='w-10/12 mx-auto my-10 p-5 shadow-xl border rounded-xl'>
                <h1 className='text-5xl p-4 mb-8'>Checkout</h1>
                <div className='flex'>

                    <div className="w-7/12 p-5">
                        <h1 className='text-3xl font-bold'>Billing address</h1>
                        
                    </div>

                    <div className='w-5/12'>
        <div className='border border-primary rounded-xl p-4 w-7/12 mx-auto'>
             <h4 className='text-xl font-bold mb-2'>Summary</h4>
             <div className='flex justify-between'>
                <h1 className=''>Total Price:</h1>
                <h1 className=''>$13.99</h1>
             </div>

            <div className="divider mb-[-3px]"></div>

            <div className='flex justify-between font-bold'>
                <h1 className=''>Total:</h1>
                <h1 className=''>$13.99</h1>
             </div>

                        <button className='btn btn-primary rounded text-white btn-wide w-full mt-5'>Proceed</button>
        </div>
                       
                    </div>

                    

                </div>
                
            </div>
            
        </div>
    );
};

export default Checkout;