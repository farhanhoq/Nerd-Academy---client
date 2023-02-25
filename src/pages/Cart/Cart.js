import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import ScrollToTop from "../ScrollToTop";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const url = `https://nerd-academy-server.vercel.app/cartdata?email=${user?.email}`;
  const { data: cartDatas = [] } = useQuery({
    queryKey: ["cartDatas", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  let total = 0;

  for (const singledata of cartDatas) {
    total = total + parseFloat(singledata.price);
  }

  const handleRemove = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to remove this order?"
    );
    if (proceed) {
      fetch(`https://nerd-academy-server.vercel.app/usercartdata/${id}`, {
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
    <section className="py-32">
      <ScrollToTop/>
      <div className="w-10/12 mx-auto p-5 shadow-xl border rounded-xl">
        <h1 className="text-5xl p-4 mb-8 dark:text-white">Shopping Cart</h1>
        <div className="flex">
          <div className="overflow-x-auto w-7/12">
            <table className="table w-full">
              {cartDatas?.map((data) => (
                <tbody>
                  <tr className="flex justify-between">
                    <td className="dark:bg-accent">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask w-28 rounded-lg h-20">
                            <img src={data?.picture} alt="" />
                          </div>
                        </div>
                        <div className="">
                          <div className="font-bold dark:text-white">{data?.title}</div>
                          <div className="text-sm dark:text-white">
                            By{" "}
                            <span className="badge badge-ghost">
                              {data?.tutor}
                            </span>
                          </div>
                          <div className="text-sm dark:text-white">
                            Video:{" "}
                            <span className="dark:text-white">
                              {data?.hours} hours
                            </span>
                          </div>
                          <div className="text-sm dark:text-white">
                            Lectures:{" "}
                            <span className="opacity-70 dark:text-white">{data?.lectures}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="dark:bg-accent">
                      <div className="text-right">
                        <p className="font-bold text-primary text-lg dark:text-white">
                          ${data?.price}
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

          <div className="w-5/12">
            <div className="border border-primary rounded-xl p-4 w-7/12 mx-auto">
              <h4 className="text-xl font-bold mb-2">Total</h4>
              <h1 className="text-4xl font-bold">${total.toFixed(2)}</h1>
              <div className="divider mt-[-3px]"></div>

              <Link to="/checkout" className="btn bg-gradient-to-r from-primary to-secondary rounded text-white w-full mt-5">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
