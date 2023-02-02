import React from 'react';

const Profile = () => {
    return (
        <div className='my-6'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">My Profile</h2>
                    <hr className='my-2' />
                    <div className='grid grid-cols-2 gap-4'>
                        <p>Registration Date</p>
                        <p>22 Dec, 2023 6.00 p.m</p>
                        <p>First Name</p>
                        <p>John</p>
                        <p>Last Name</p>
                        <p>Doe</p>
                        <p>FullName</p>
                        <p>instructor</p>
                        <p>Email</p>
                        <p>instructor@gmail.com</p>
                        <p>Phone Number</p>
                        <p>+880121212</p>
                        <p>Skill/Occupation</p>
                        <p>Web Developer</p>
                        <p>Biography</p>
                        <p>I am a Front-End Web Developer with a background in Computer Science & Engineering. I am passionately curious about learning and writing code.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;