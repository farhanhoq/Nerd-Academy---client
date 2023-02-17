import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='btn bg-gradient-to-r from-primary to-secondary text-white
             rounded-full mt-5 border-none'>{children}</button>
        </div>
    );
};

export default PrimaryButton;