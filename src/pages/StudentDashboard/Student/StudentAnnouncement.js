import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';

const StudentAnnouncement = () => {
    return (
        <div className="py-6 card">
                <h2 className="card-title text-4xl font-bold mt-10 mb-5">Announcement</h2>
                <hr className='mb-10' />
                <div className="overflow-x-auto w-full  ">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Date</th>
                                <th>Announcement</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                   
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
                                    <button className="text-sm btn text-white border-none bg-gradient-to-r from-primary to-secondary btn-sm"><MdOutlineDeleteOutline className='text-sm' />Delete</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                   
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
                                    <button className="text-sm btn text-white border-none bg-gradient-to-r from-primary to-secondary btn-sm"><MdOutlineDeleteOutline className='text-sm' />Delete</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    
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
                                    <button className="text-sm btn text-white border-none bg-gradient-to-r from-primary to-secondary btn-sm"><MdOutlineDeleteOutline className='text-sm' />Delete</button>
                                </th>
                            </tr>

                        </tbody>

                    </table>
                </div>
           
        </div >
    );
};

export default StudentAnnouncement;