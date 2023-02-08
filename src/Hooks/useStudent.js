import { useState, useEffect } from "react";

const useStudent = email => {
    const [isStudent, setIsStudent] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://nerd-academy-server.vercel.app/users/student/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setIsStudent(data.isStudent);
                })
        }
    }, [email])
    return [isStudent]
}

export default useStudent;