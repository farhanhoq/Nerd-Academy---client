import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import ScrollToTop from '../ScrollToTop';

const Wishlist = () => {
  const { user } = useContext(AuthContext);

  const { data: wishLists = [] } = useQuery({
    queryKey: ["wishLists", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://nerd-academy-server.vercel.app/wishlist?email=${user?.email}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

    // const { data: wishLists = [] } = useQuery({
    //     queryKey: ["wishLists", user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(`https://nerd-academy-server.vercel.app/wishlist?email=${user?.email}`);
    //         const data = await res.json();
            
    //         return data;
    //     }
    // })
console.log(wishLists);
    const handleRemove = (id) => {
        const proceed = window.confirm(
            "Are you sure, you want to remove this order?"
        );
        if (proceed) {
            fetch(`https://nerd-academy-server.vercel.app/wishlist/${id}`, {
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



    const handleAddToCart = (data) => {
        const coursecart = {
          courseId: data?.course?._id,
          email: user?.email,
          name: user?.displayName,
          title: data?.course?.title,
          picture: data?.course?.picture,
          price: data?.course?.price,
          rating: data?.course?.rating,
          tutor: data?.course?.tutor,
          lectures: data?.course?.lectures,
          hours: data?.course?.hours,
          date: data?.course?.date,
          description: data?.course?.description,
          instructorEmail: data?.course?.email
        };
        // console.log(coursecart);
    
    
        fetch("https://nerd-academy-server.vercel.app/userscart", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(coursecart),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged === true) {
              toast.success("Added to cart successfully");
            }
          });
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
                                                        <img src={data?.course?.picture} alt=""/>
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
                                                <br />
                                                <button
                                                    onClick={() => handleAddToCart(data)}
                                                    className="btn btn-sm rounded bg-gradient-to-r from-primary to-secondary border-none"
                                                >
                                                    Add to cart
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
