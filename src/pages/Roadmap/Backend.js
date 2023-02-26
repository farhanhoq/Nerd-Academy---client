import React from 'react';

const Backend = () => {
    return (
        <div className='text-center w-10/12 mx-auto'>
            <h1 className='text-3xl text-primary mb-1 font-bold'>BACK-END</h1>
            <h5>Timeline - 4 Months</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                <div className='w-10/12 mx-auto'>
                    <h1 className='border-2 border-primary rounded-lg p-4 mb-5 text-lg font-bold'>Language</h1>
                    <div>
                        <p className='border-2 p-2'>Python</p>
                        <p className='border-2 p-2'>Node.js</p>
                        <p className='border-2 p-2'>PHP</p>
                        <p className='border-2 p-2'>Ruby</p>
                    </div>
                </div>
                <div className='w-10/12 mx-auto'>
                    <h1 className='border-2 border-primary rounded-lg p-4 mb-5 text-lg font-bold'>Framework</h1>
                    <div>
                        <p className='border-2 p-2'>Django</p>
                        <p className='border-2 p-2'>Express.js</p>
                        <p className='border-2 p-2'>Laravel</p>
                        <p className='border-2 p-2'>CakePHP</p>
                        <p className='border-2 p-2'>Flask</p>
                        <p className='border-2 p-2'>Asp .NET</p>
                    </div>
                </div>
                <div className='w-10/12 mx-auto'>
                    <h1 className='border-2 border-primary rounded-lg p-4 mb-5 text-lg font-bold'>Others</h1>
                    <div>
                        <p className='border-2 p-2'>Mongo DB</p>
                        <p className='border-2 p-2'>Github</p>
                        <p className='border-2 p-2'>No SQL DB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;