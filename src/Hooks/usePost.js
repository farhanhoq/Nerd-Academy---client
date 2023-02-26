import { useState } from 'react';
import { toast } from 'react-hot-toast';

const usePost = (url, data) => {

    const [errorMessage, setErrorMessage] = useState(null);
    
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => {
            if (result.acknowledged === true) {
            toast.success('Added to wishlist successfully')
            } else {
            toast.error(result.message)
            }
        })
    
    return { errorMessage };
};

export default usePost;