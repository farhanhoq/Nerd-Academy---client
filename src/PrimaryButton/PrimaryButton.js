import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='btn btn-primary text-white rounded-full mt-5'>{children}</button>
        </div>
    );
};

export default PrimaryButton;