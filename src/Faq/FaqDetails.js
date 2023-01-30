import React from 'react';

const FaqDetails = ({ qa }) => {
    const { question, answer } = qa;
    return (
        <div>
            <details className="mb-4 cursor-pointer">
                <summary className="font-semibold  bg-cyan-100 rounded-md py-2 px-4">{question}</summary>
                <p className="py-6 px-2 border border-cyan-400 rounded-lg dark:text-white">{answer}</p>
            </details>
        </div>
    );
};

export default FaqDetails;