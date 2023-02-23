import React from 'react';

const CookieContent = () => {
    return (
        <div>
            <div>
                <form className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="md:text-xl mb-2">Cookie Policy Edit</h2>
                        <textarea
                            //   {...register("review")}
                            name="review"
                            placeholder="Write your review here" className="textarea textarea-bordered textarea-primary
                       textarea-sm w-full h-60" ></textarea>
                        <div className="card-actions">
                            <button className="btn bg-gradient-to-r from-primary to-secondary
                       text-white border-none">Update</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CookieContent;