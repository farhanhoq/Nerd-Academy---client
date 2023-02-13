import React from 'react';

const StudentFeedback = () => {
    return (
        <div>
            {/* Review added */}
            <div className='p-10'>
                <h1 className='text-center text-5xl font-semibold '> Services Feedback</h1>
            </div>

            <div>
                <div className="">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="" alt="" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <label htmlFor="my-modal-4" className="btn bg-gradient-to-r from-sky-600 to-cyan-400">Add Review</label>
                        </div>
                    </div>
                </div>


                <div>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">

                            <form data-aos="zoom-in-down">
                                <div className='justify-center'>
                                    <div className='gap-5 mt-5 '>

                                        <textarea required className="textarea textarea-primary w-full"
                                            name='feedback'
                                            placeholder="Type your feedback">

                                        </textarea>


                                    </div>
                                    <button className="btn btn-active btn-secondary mt-6 " type='submit'>Place Review</button>

                                </div>
                            </form>
                        </label>
                    </label>

                </div>

                <div>

                </div>

            </div >

        </div>
    );
};

export default StudentFeedback;