import { useState, useEffect } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState();
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin);
            })
        }
    } , [email])
    return [isAdmin]
}

export default useAdmin;