import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

const TermsConditions = () => {
    const [pageDetails, setpageDetails] = useState([]);

    useEffect(() => {
        fetch('https://nerd-academy-server.vercel.app/api/menu-items')
            .then(response => response.json())
            .then(data => setpageDetails(data))
            .catch(error => console.error('Error fetching menu items:', error));
    }, []);

    console.log(pageDetails);
    return (
        <div className='py-24'>
            <div className='p-8'>
                {
                    pageDetails.map(details => details.title === "terms & conditions" && <div>
                        {parse(details.pageDetails)}
                    </div>)
                }
            </div>
        </div>
    );
};

export default TermsConditions;