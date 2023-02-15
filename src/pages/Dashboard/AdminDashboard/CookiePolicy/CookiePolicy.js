import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
const CookiePolicy = () => {
    const [pageDetails, setpageDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/menu-items')
            .then(response => response.json())
            .then(data => setpageDetails(data))
            .catch(error => console.error('Error fetching menu items:', error));
    }, []);

    console.log(pageDetails);
    return (
        <div className='py-24'>
            <div className='p-8'>
                {
                    pageDetails.map(details => details.title === "cookie policy" && <div>
                        {parse(details.pageDetails)}
                    </div>)
                }
            </div>
        </div>
    );
};

export default CookiePolicy;