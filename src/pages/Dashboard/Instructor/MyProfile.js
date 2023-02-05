import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import { BiEdit } from 'react-icons/bi';

const MyProfile = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);
  const [isLoading, setisLoading] = useState(false);

  const handleEdit = (data) => {
    console.log(data);
    const profileData = {
      fullname: data.name,
      username: data.username,
      email: data.email,
      skill: data.skill,
      bio: data.bio,
      phone: data.number,
    };

    fetch("https://nerd-academy-server.vercel.app/profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(`${data.name} is added!`);
        reset();
      });
  };

  return (
    <div className="card bg-base-100 shadow-xl p-12">

      <div className="flex flex-row justify-between">
      <h3 className="text-2xl font-bold">My profile</h3>
      <button className="text-primary"><BiEdit></BiEdit> Edit</button>
      </div>

      <div className="flex flex-row justify-center gap-12 mt-6 items-center">

        <div className="flex flex-col gap-4 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1670098851032.png" />
            </div>
          </div>
          <button className="border p-2 bg-primary text-black rounded cursor-pointer">
            Edit Profile
          </button>
        </div>

        <div className="card-body flex flex-col gap-4">
          <div>
            <span className="text-sm">Full Name</span>
            <p className="text-lg">Neasher Ahmed</p>
          </div>

          <div>
            <span className="text-sm">Email Adress</span>
            <p className="text-lg">Neasher75@gmail.com</p>
          </div>

          <div>
            <span className="text-sm">Phone</span>
            <p className="text-lg">01212121</p>
          </div>

          <div>
            <span className="text-sm">Skill</span>
            <p className="text-lg">Web Developer</p>
          </div>
        </div>

        <div className="card-body flex flex-col gap-4">
        <div>
            <span className="text-sm">Adress</span>
            <p className="text-lg">Pabna, Bangladesh</p>
          </div>

          <div>
            <span className="text-sm">Education</span>
            <p className="text-lg">Hon's CSE</p>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
