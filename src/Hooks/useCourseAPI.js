import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCourseAPI = (queryName, query, params) => {

    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

        const { data: courses = [], refetch, isLoading } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            if (!query && !params) {
                const res = await fetch("https://nerd-academy-server.vercel.app/courses");
                const data = await res.json();
                return data;
            } else if (query && !params) {
                const res = await fetch(`https://nerd-academy-server.vercel.app/courses?${queryName}=${query}`);
                const data = await res.json();
                return data;
            } else {
                const res = await fetch(`https://nerd-academy-server.vercel.app/courses/${params}`);
                const data = await res.json();
                return data;
            }
        }
    })

    

    return {courses, refetch, isLoading}
    
};

export default useCourseAPI;