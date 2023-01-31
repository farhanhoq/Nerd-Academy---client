import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDeleteOutline } from 'react-icons/md';

const StudentAnnouncement = () => {
    return (
        <div className="py-6 card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold my-10">Announcement</h2>
                <hr />
               
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div>
                        <p className="text-xl">Courses</p>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>All</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div>
                        <p className="text-xl">Sort By</p>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>Default</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div>
                        <p className="text-xl">Sort By Offer</p>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>Free</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                </div>
                <hr className='my-4' />


                <div className="overflow-x-auto w-full  ">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Date</th>
                                <th>Announcement</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        {/* <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div> */}
                                        <div>
                                            <div className="font-bold">March 16,2023</div>
                                            <div className="text-sm opacity-50">10 a.m</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Web Design
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Course Fundamental 101</span>
                                </td>
                                {/* <td><FiEdit /> Edit</td> */}
                               
                                <th>
                                    <button className="text-sm btn btn-warning btn-sm"><MdOutlineDeleteOutline className='text-sm' />Delete</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        {/* <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div> */}
                                        <div>
                                            <div className="font-bold">March 16,2023</div>
                                            <div className="text-sm opacity-50">10 a.m</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Web Design
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Course Fundamental 101</span>
                                </td>
                                {/* <td><FiEdit /> Edit</td> */}
                                
                                <th>
                                    <button className="text-sm btn btn-warning btn-sm"><MdOutlineDeleteOutline className='text-sm' />Delete</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        {/* <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div> */}
                                        <div>
                                            <div className="font-bold">March 16,2023</div>
                                            <div className="text-sm opacity-50">10 a.m</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Web Design
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Course Fundamental 101</span>
                                </td>
                                {/* <td><FiEdit /> Edit</td> */}
                               
                                <th>
                                    <button className="text-sm btn btn-warning btn-sm"><MdOutlineDeleteOutline className='text-sm' />Delete</button>
                                </th>
                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>
        </div >
    );
};

export default StudentAnnouncement;