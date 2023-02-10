import { useState, useEffect } from "react";

const useTeacher = email => {
    const [isTeacher, setIsTeacher] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://nerd-academy-server.vercel.app/users/teacher/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setIsTeacher(data.isAdmin);
                })
        }
    }, [email])
    return [isTeacher]
}

export default useTeacher;