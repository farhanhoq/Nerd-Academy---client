import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Loader/Loader';

const StudentProfile = () => {
  const { user, loading } = useContext(AuthContext);


  if(loading){
    return <Loader></Loader>
  }
  return (
    <div className="my-10">
      <div className="card bg-base-100 shadow-xl dark:bg-accent dark:text-white dark:border 
      dark:border-secondary">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold mb-10">My Profile</h2>
          <div className="">
  <table className="table w-full">
    <tbody>

      <tr>
        <td className='font-bold text-xl'>Registration Date</td>
        <td className='text-slate-400'>No Data</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>First Name</td>
        <td className='text-slate-400'>No Data</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>Last Name</td>
        <td className='text-slate-400'>No Data</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>UserName</td>
        <td className='text-slate-400'>{
          user?.email ?
          user?.displayName
          :
          <p>No Data</p>
        }</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>Email</td>
        <td className='text-slate-400'>{
          user?.email ?
          user?.email
          :
          <p>No Data</p>
        }</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>Phn Number</td>
        <td className='text-slate-400'>No Data</td>
      </tr>
      <tr>
        <td className='font-bold text-xl'>Skill/Occupation</td>
        <td className='text-slate-400'>No Data</td>
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
