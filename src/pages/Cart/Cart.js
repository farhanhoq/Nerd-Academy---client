import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Cart = () => {
  const {
    data: cartDatas = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['cartDatas'],
    queryFn: () => fetch('ourCourses.json').then(res => res.json()),
  });
  console.log(cartDatas);
  return (
    <div className="h-screen">
      <div className="w-10/12 mx-auto my-10 p-5 shadow-xl border rounded-xl">
        <h1 className="text-5xl p-4 mb-8">Shopping Cart</h1>
        <div className="flex">
          <div className="overflow-x-auto w-7/12">
            <table className="table w-full">
              {cartDatas?.map(data => (
                <tbody>
                  <tr className="flex justify-between">
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask w-28 rounded-lg h-20">
                            <img src={data?.picture} />
                          </div>
                        </div>
                        <div className="">
                          <div className="font-bold ">{data?.name}</div>
                          <div className="text-sm ">
                            By{' '}
                            <span className="badge badge-ghost">
                              {data?.creator}
                            </span>
                          </div>
                          <div className="text-sm ">
                            Video:{' '}
                            <span className="opacity-70">
                              {data?.hours} hours
                            </span>
                          </div>
                          <div className="text-sm ">
                            Lectures:{' '}
                            <span className="opacity-70">{data?.lectures}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-right">
                        <p className="font-bold text-primary text-lg">
                          ${data?.price}
                        </p>
                        <a className="text-red-500 hover:underline cursor-pointer">
                          Remove
                        </a>
                        <br />
                        <a className="hover:underline cursor-pointer">
                          Save for later
                        </a>
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
              <h1 className="text-4xl font-bold">$13.99</h1>
              <div className="divider mt-[-3px]"></div>

              <button className="btn btn-primary rounded text-white btn-wide w-full mt-5">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
