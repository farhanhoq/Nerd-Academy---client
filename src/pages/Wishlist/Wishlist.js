import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ScrollToTop from '../ScrollToTop';

const Wishlist = () => {

    const { user } = useContext(AuthContext);

    const { data: wishLists = [], isLoading, refetch } = useQuery({
        queryKey: ["wishLists", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`);
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    const handleRemove = (id) => {
        const proceed = window.confirm(
            "Are you sure, you want to remove this order?"
        );
        if (proceed) {
            fetch(`http://localhost:5000/wishlist/${id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                alert("Removed Order Successfully");
                }
            });
        }
    };

    return (
        <section className="py-24">
            <ScrollToTop />
            <div className="w-10/12 mx-auto p-5 shadow-xl border rounded-xl">
            <h1 className="text-5xl p-4 mb-8">Wish List ({wishLists.length})</h1>
            <div className="flex">
                <div className="overflow-x-auto w-7/12">
                <table className="table w-full">
                    {wishLists?.map((data) => (
                    <tbody>
                        <tr className="flex justify-between">
                        <td>
                            <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask w-28 rounded-lg h-20">
                                <img src={data?.course?.picture} />
                                </div>
                            </div>
                            <div className="">
                                <div className="font-bold ">{data?.course?.title}</div>
                                <div className="text-sm ">
                                By{" "}
                                <span className="badge badge-ghost">
                                    {data?.course?.tutor}
                                </span>
                                </div>
                                <div className="text-sm ">
                                Video:{" "}
                                <span className="opacity-70">
                                    {data?.course?.hours} hours
                                </span>
                                </div>
                                <div className="text-sm ">
                                Lectures:{" "}
                                <span className="opacity-70">
                                    {data?.course?.lectures}
                                </span>
                                </div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div className="text-right">
                            <p className="font-bold text-primary text-lg">
                                ${data?.course?.price}
                            </p>
                            <button
                                onClick={() => handleRemove(data._id)}
                                className="text-red-500 hover:underline cursor-pointer"
                            >
                                Remove
                            </button>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Wishlist;