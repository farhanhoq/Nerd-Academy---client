import { useEffect, useState } from "react"

const useRole = email => {
    const [isRole, setIsRole] = useState(false);
    const [isRoleLoading, setIsRoleLoading] = useState(true);
    console.log(isRole)

    useEffect(() => {
        if (email) {
            fetch(`https://nerd-academy-server.vercel.app/users/role/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setIsRole(data.role)
                    setIsRoleLoading(false)
                })
        }
    }, [email])
    return [isRole, isRoleLoading]
}

export default useRole;