import React from 'react';

const StudentProfile = () => {
  return (
    <div className="my-10">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold mb-10">My Profile</h2>
          {/* <hr className="my-2 mb-10" /> */}
          {/* <div className="flex gap-4">
            <div className='mr-10 font-bold'>
              <p>Registration</p>
              <p>First Name</p>
              <p>Last Name</p>
              <p>UserName</p>
              <p>Email</p>
              <p>Phn Number</p>
              <p>Skill/Occupation</p>
              <p>Biography</p>
            </div>
            <div>
              <p>22 Dec, 2023 6.00 p.m</p>
              <p>John</p>
              <p>Doe</p>
              <p>instructor</p>
              <p>instructor@gmail.com</p>
              <p>+880121212</p>
              <p>Web Developer</p>
              <p>
                I am a Front-End Web Developer with a background in Computer
                Science & Engineering. I am passionately curious about learning
                and writing code.
              </p>
            </div>
            
          </div> */}
          <div className="">
  <table className="table w-full">
    <tbody>

      <tr>
        <td className='font-bold text-xl'>Registration Date</td>
        <td className='text-slate-400'>22 Dec, 2023 6.00 p.m</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>First Name</td>
        <td className='text-slate-400'>John</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>Last Name</td>
        <td className='text-slate-400'>Doe</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>UserName</td>
        <td className='text-slate-400'>instructor</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>Email</td>
        <td className='text-slate-400'>instructor@gmail.com</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>Phn Number</td>
        <td className='text-slate-400'>+880121212</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>Skill/Occupation</td>
        <td className='text-slate-400'>Web Developer</td>
      </tr>
      
      
      
    </tbody>
  </table>
</div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
