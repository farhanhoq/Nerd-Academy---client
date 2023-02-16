import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MyReviewEdit = () => {
    // const router = useParams();
    // const [review, setReview] = useState({});
    // const { id } = router;
    // const navigate = useNavigate();

    // useEffect(() => {
    //     fetch(`https://nerd-academy-server.vercel.app/studentsReviews/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.success) {
    //                 setReview(data.data);
    //             } else {
    //                 toast.error(data.error);
    //             }
    //         })
    //         .catch((err) => toast.error(err.message));
    // }, [id]);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const reviews = {
    //         review: e.target.review.value,


    //     }

    //     fetch(`https://nerd-academy-server.vercel.app/review/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(reviews)
    //     }).then(res => res.json())
    //         .then(data => {
    //             if (data.success) {
    //                 toast.success(data.message);
    //                 navigate("/dashboard/products")
    //             } else {
    //                 toast.err(data.error)
    //             }
    //         })
    //         .catch(err => toast.error(err.message))
    // }

    return (
        <div className="py-32 px-10 min-h-screen w-full">
            {/* {
                review.map(r => <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center mb-5">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                defaultValue={r?.review}
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            />
                        </div>



                        <div className="text-right">
                            <button className="py-3 px-8 bg-green-400 text-white font-bold">Add</button>
                        </div>
                    </form>
                </div>)
            } */}
        </div>
    );
};

export default MyReviewEdit;