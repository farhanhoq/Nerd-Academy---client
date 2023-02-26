import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../Loader/Loader';

const useProfileAPI = (url, queryName, query, params) => {

    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    const { data: datas = [], refetch, isLoading } = useQuery({
        queryKey: ["datas"],
        queryFn: async () => {
                const res = await fetch(`${url}?${queryName}=${`${query}`}`);
                const data = await res.json();
                return data;
        }
    })

    refetch()

    if (isLoading) {
        return <Loader></Loader>
    }
    

    return {datas, refetch, isLoading}
    
};

export default useProfileAPI;