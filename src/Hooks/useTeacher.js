import { useState, useEffect } from "react";

const useTeacher = email => {
    const [isTeacher, setIsTeacher] = useState(false);
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/users/teacher/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsTeacher(data.isAdmin);
            })
        }
    } , [email])
    return [isTeacher]
}

export default useTeacher;