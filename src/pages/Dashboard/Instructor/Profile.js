import React, { useEffect } from 'react';
import { useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState();
    useEffect(() => {
        fetch('https://nerd-academy-server.vercel.app/profile')
            .then(res => res.json())
            .then(data => setProfile(data));
    }, [])
    return (
        <div className='my-6'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">My Profile</h2>
                    <hr className='my-2' />
                    {
                        profile?.map(p => <div className='grid grid-cols-2 gap-4'>
                            <p>Registration Date</p>
                            <p>22 Dec, 2023 6.00 p.m</p>


                            <p>Full Name</p>
                            <p>{p.fullname}</p>
                            <p>User Name</p>
                            <p>{p.username}</p>
                            <p>Email</p>
                            <p>{p.email}</p>
                            <p>Phone Number</p>
                            <p>{p.phone}</p>
                            <p>Skill/Occupation</p>
                            <p>{p.skill}</p>
                            <p>Biography</p>
                            <p>{p.bio}</p>
                        </div>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Profile;