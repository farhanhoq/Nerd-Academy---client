import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { BiEdit } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const { data: profile = [], refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch(`https://nerd-academy-server.vercel.app/users/?email=${user?.email}`);
      const data = await res.json();
      return data;
    }
  })
  // const { email, fullName, eductaion, phone, address, picture } = profile;
  refetch();

  // console.log(profile.body.picture);

  return (
    <div className="card bg-base-100 shadow-xl p-12">

      <div className="flex flex-row justify-between">
        <h3 className="text-2xl font-bold">My profile</h3>
        <Link to="/dashboard/my-profile-edit" className="text-primary "><BiEdit></BiEdit> Edit</Link>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center gap-0 md:gap-12 mt-6 md:items-center">

        <div className="flex flex-col gap-4 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {/* <img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1670098851032.png" /> */}
              <img src={profile?.body?.picture} alt="" />
            </div>
          </div>
          <Link to="/dashboard/my-profile-edit" className="border p-2 bg-gradient-to-r from-primary to-secondary text-white rounded cursor-pointer">
            Edit Profile
          </Link>
        </div>

        <div className="card-body flex flex-col gap-4">
          <div>
            <span className="text-sm">Full Name</span>
            <p className="text-lg">{profile?.body?.fullName}</p>
          </div>

          <div>
            <span className="text-sm">Email Adress</span>
            <p className="text-lg">{profile?.body?.email}</p>
          </div>

          <div>
            <span className="text-sm">Phone</span>
            <p className="text-lg">{profile?.body?.phone}</p>
          </div>

          <div>
            <span className="text-sm">Skill</span>
            <p className="text-lg">{profile?.body?.skill}</p>
          </div>
        </div>

        <div className="card-body flex flex-col gap-4">
          <div>
            <span className="text-sm">Address</span>
            <p className="text-lg">{profile?.body?.address}</p>
          </div>

          <div>
            <span className="text-sm">About me</span>
            <p className="text-lg">{profile?.body?.about}</p>
          </div>

          <div>
            <span className="text-sm">Education</span>
            <p className="text-lg">{profile?.body?.education}</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyProfile;
