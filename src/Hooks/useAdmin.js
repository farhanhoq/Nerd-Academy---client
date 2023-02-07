import { useState, useEffect } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState();
    useEffect(() => {
        if (email) {
            fetch(`https://nerd-academy-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                })
        }
    }, [email])
    return [isAdmin]
}

export default useAdmin;