import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ModalReview = ({ review, setModalReviews, refetch }) => {
    const { _id } = review;
    console.log(review);

    const { register, handleSubmit } = useForm();

    const handleSubmitReview = data => {
        const review = data.review;
        console.log(review);

        const ratedata = {
            review,
            _id
        }


        fetch(`https://nerd-academy-server.vercel.app/review/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(ratedata),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Updated the review");
                setModalReviews(false);
                refetch();
            });

    }

    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <form onSubmit={handleSubmit(handleSubmitReview)}>
                        <div>
                            <div className='grid  lg:grid-cols-2  grid-cols-1 gap-5 mt-5 '>
                                <input type="text"
                                    name='name'
                                    placeholder="Name" className="input input-bordered input-sm w-full " defaultValue={review?.userName} readOnly />
                                <input type="text" name='ratting' placeholder="ratting"
                                    defaultValue=""
                                    className="input input-bordered input-sm w-full " />
                                <textarea required
                                    {...register("review")}
                                    className="textarea textarea-primary"
                                    type="text" name='review'
                                    placeholder="Type your feedback"
                                    defaultValue={review?.review}
                                >

                                </textarea>
                                <input type="email" placeholder="email" defaultValue={review.userEmail} className="input input-bordered input-sm w-full " readOnly />
                                <button className="btn btn-active btn-secondary bg-gradient-to-r from-sky-600 to-cyan-400 text-white" type='submit'> Confirm Save </button>
                            </div>
                            <div className='text-center mt-5'>

                            </div>
                        </div>
                    </form>


                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn bg-gradient-to-r from-sky-600 to-cyan-400 text-white">X</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalReview;