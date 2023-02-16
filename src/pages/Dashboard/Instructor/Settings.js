import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import cover from "../../../Assets/cover.jpg";
import { AuthContext } from "../../../Context/AuthProvider";

const Settings = () => {
  const {
    register,
    reset,
    handleSubmit,
  } = useForm();
  const { user } = useContext(AuthContext);

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
    <div className="p-4 card card-compact my-20 bg-base-100 shadow-xl">
      <figure>
        <img className="" src={cover} alt="Shoes" />
      </figure>

      <form
        onSubmit={handleSubmit(handleEdit)}
        className="grid grid-cols-2 justify-between gap-6 my-6">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Full Name</span>
          </label>

          <input
            defaultValue={user?.displayName}
            type="text"
            {...register("name")}
            placeholder="name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">User Name</span>
          </label>
          <input
            type="text"
            {...register("username")}
            placeholder="User Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Phone Number</span>
          </label>
          <input
            type="text"
            {...register("number")}
            placeholder="Enter your number"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Skill</span>
          </label>
          <input
            type="text"
            {...register("skill")}
            placeholder="Enter your skill"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="email"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Bio</span>
          </label>

          <textarea
            type="text"
            {...register("bio")}
            className="textarea textarea-bordered"
            placeholder="Enter your bio"
          ></textarea>
        </div>
        <div className="card-actions justify-start">
          <button
            className="btn btn-primary text-white"
            type="submit"
            value="Save Change"
          >
            Save Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
