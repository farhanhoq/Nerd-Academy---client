import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import ModalReview from "./ModalReview";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [modalReviews, setModalReviews] = useState({});

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        `https://nerd-academy-server.vercel.app/studentsReviews?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  refetch();

  console.log(reviews)

  const deleteProduct = (id) => {
    fetch(`https://nerd-academy-server.vercel.app/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.error("Deleted Item Successfully");
        }
      });
  };

  return (
    <div className="my-12">
      <h2 className="card-title dark:text-white">My Reviews</h2>
      <hr className="my-2" />

      <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-x-40 my-6 bg-base-100  dark:bg-accent dark:text-white">
        {reviews.map((review) => (
          <div className="flex justify-center">
            <div className="max-w-7xl h-auto">
              <div className="block p-6 rounded-lg shadow-sm bg-white dark:bg-accent
                 dark:text-white dark:border dark:border-secondary">
                <div className="md:flex md:flex-row">
                  <div className="md:w-80 w-36 flex lg:flex-none md:flex-none justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avat ars/img%20%2810%29.jpg"
                      className="rounded-full shadow-md w-20 h-20 mr-2"
                      alt="woman avatar"
                    />
                  </div>
                  <div className="md:mr-10">
                    <div>

                      <p className="font-semibold text-xl mb-2 text-gray-800 dark:text-white">
                        {review?.title}
                      </p>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-gray-500 font-light mb-6 dark:text-white">
                            {review?.review}
                          </p>
                          <p className="font-semibold text-gray-500 mb-0 dark:text-white">
                            {review?.userEmail}
                          </p>
                          <p className="text-gray-500 font-light dark:text-white">
                            {review?.date}
                          </p>

                        </div>
                        <div className="flex items-center justify-end space-x-3.5 rounded-lg ml-12">
                          <label
                            onClick={() => setModalReviews(review)}
                            htmlFor="my-modal"
                            className="text-sm btn btn-sm bg-gradient-to-r from-primary to-secondary border-none text-white"
                          >
                            Edit
                          </label>

                          <Link onClick={() => deleteProduct(review._id)}>
                            <button className="items-center px-2 py-2 text-white bg-red-500 dark:bg-gray-500 rounded-md hover:bg-red-600 dark:hover:bg-gray-600 focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                ></path>
                              </svg>
                            </button>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalReviews && (
        <ModalReview
          review={modalReviews}
          setModalReviews={setModalReviews}
          refetch
        />
      )}
    </div>
  );
};

export default MyReviews;
