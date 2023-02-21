import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const StudentFeedback = ({ course }) => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const { courseId, instructorEmail, tutor, title } = course;

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, reset } = useForm();


    const handlePost = review => {
        const handleAddPost = {
            courseId,
            review: review?.feedback,
            title,
            tutor,
            instructorMail: instructorEmail,
            userName: user?.displayName,
            userEmail: user?.email,
            date: `${date}-${month}-${year}`,
        }
        console.log(handleAddPost);

        fetch('https://nerd-academy-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(handleAddPost),
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Review added successfully');
            })
            .catch(error => console.error(error));
        reset();
    };


    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <label htmlFor="my-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <form onSubmit={handleSubmit(handlePost)} data-aos="zoom-in-down">
                        <div className='justify-center'>
                            <div className='gap-5 mt-5 form-control'>
                                <textarea {...register('feedback')} required className="textarea textarea-primary w-full"
                                    name='feedback'
                                    placeholder="Type your feedback">
                                </textarea>
                            </div>
                            <div className='form-control'>
                                <button>
                                    <label htmlFor="my-modal" className="btn btn-active btn-secondary mt-6" type='submit'>Place Review</label>
                                </button>
                            </div>
                        </div>
                    </form>
                </label>
            </label>
        </div>

    );
};

export default StudentFeedback;