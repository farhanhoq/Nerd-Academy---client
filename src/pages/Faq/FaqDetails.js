import React from 'react';

const FaqDetails = ({ qa }) => {
    const { question, answer } = qa;
    return (
        <div>
            <details className="mb-4 cursor-pointer">
                <summary className="font-semibold  bg-primary text-white rounded-md py-2 px-4">{question}</summary>
                <p className="py-6 px-2 border border-primary rounded-lg dark:text-white">{answer}</p>
            </details>
        </div>
    );
};

export default FaqDetails;