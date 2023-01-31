import React from 'react';
import cover from "../../../Assets/cover.jpg";

const StudentSettings = () => {
    return (
        <div className="p-4 card card-compact my-20 bg-base-100 shadow-xl w-10/12 mx-auto">
        <figure>
            <img className='' src={cover} alt="Shoes" />
        </figure>
        <form className='grid grid-cols-2 justify-between gap-6 my-6 p-8'>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-semibold">First Name</span>
                </label>
                <input type="text" placeholder="First Name" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-semibold">Last Name</span>
                </label>
                <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-semibold">User Name</span>
                </label>
                <input type="text" placeholder="User Name" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-semibold">Phone Number</span>
                </label>
                <input type="text" placeholder="+8801700000" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-semibold">Skill</span>
                </label>
                <input type="text" placeholder="Full stack Developer" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-semibold">Change Password</span>
                </label>
                <input type="password" placeholder="" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-semibold">Bio</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="I am a Front-End Web Developer with a background in Computer Science & Engineering. I am passionately curious about learning and writing code."></textarea>
            </div>
            
        </form>
        <div className="card-actions justify-start">
            <button className="btn btn-primary text-white">Save Change</button>
        </div>
    </div>
    );
};

export default StudentSettings;