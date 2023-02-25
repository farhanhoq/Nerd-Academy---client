import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Loader/Loader';

const MyProfileEditStudent = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { user, updateUser } = useContext(AuthContext);
    // console.log(user);
    // const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await fetch(`https://nerd-academy-server.vercel.app/users/?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const { _id } = users;
    refetch();
    console.log(users);


    const handleEdit = (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);


        const url = `https://api.imgbb.com/1/upload?key=218ccec0a78d63b33e00278172e1c053`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const userImage = {
                        photoURL: imgData.data.url,
                    };
                    updateUser(userImage);

                    const profileData = {
                        fullName: data.name,
                        email: user?.email,
                        skill: data.skill,
                        phone: data.number,
                        address: data.address,
                        education: data.education,
                        picture: imgData.data.url
                    };

                    console.log(profileData);

                    fetch(`https://nerd-academy-server.vercel.app/users/${_id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(profileData),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            toast.success("Saved Changed")
                            reset();
                            navigate("/student-dashboard/my-profile");
                        });

                }
            })


        if (isLoading) {
            return <Loader></Loader>
        }
    }


    return (
        <form onSubmit={handleSubmit(handleEdit)} className="card bg-base-100 dark:bg-accent
         dark:text-white dark:border dark:border-secondary shadow-xl p-12">

            <div className="flex flex-row justify-between">
                <h3 className="text-2xl font-bold dark:text-white">My profile</h3>
                <button type='submit' className='btn btn-primary dark:text-white bg-gradient-to-r from-primary to-secondary border-none'>Save Changes</button>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-0 lg:gap-12 mt-6 items-center">

                <div className="flex flex-col gap-4 items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {/* <img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1670098851032.png" alt='' /> */}
                            <img src={users?.body?.picture} alt="" />
                        </div>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("image")}
                            type="file" className="input input-bordered w-full max-w-xs dark:text-white dark:bg-accent dark:border-secondary" placeholder='Upload a Image' />
                        {errors.image && <span className='text-error'>{errors.image.message}</span>}
                    </div>
                </div>

                <div className="card-body flex flex-col gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold dark:text-white">Full Name</span>
                        </label>

                        <input
                            defaultValue={users?.body?.fullName}
                            type="text"
                            {...register("name")}
                            placeholder="Name"
                            className="input input-bordered w-full dark:text-white dark:bg-accent dark:border-secondary"
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold dark:text-white">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder={user?.email}
                            className="input input-bordered w-full dark:text-white dark:bg-accent dark:border-secondary"
                            disabled
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold dark:text-white">Phone Number</span>
                        </label>
                        <input
                            defaultValue={users?.body?.phone}
                            type="text"
                            {...register("number")}
                            placeholder="Enter your number"
                            className="input input-bordered w-full dark:text-white dark:bg-accent dark:border-secondary"
                        />
                    </div>

  
                </div>

                <div className="card-body flex flex-col gap-4">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold dark:text-white">Skill</span>
                        </label>
                        <input
                            defaultValue={users?.body?.skill}
                            type="text"
                            {...register("skill")}
                            placeholder="Enter your skill"
                            className="input input-bordered w-full dark:text-white dark:bg-accent dark:border-secondary"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold dark:text-white">Address</span>
                        </label>
                        <input
                            defaultValue={users?.body?.address}
                            type="text"
                            {...register("address")}
                            placeholder="Enter your Address"
                            className="input input-bordered w-full dark:text-white dark:bg-accent dark:border-secondary"
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold dark:text-white">Education</span>
                        </label>
                        <input
                            defaultValue={users?.body?.education}
                            type="text"
                            {...register("education")}
                            placeholder="Enter your Last Education"
                            className="input input-bordered w-full dark:text-white dark:bg-accent dark:border-secondary"
                        />
                    </div>
                </div>

            </div>
        </form>
    );
};

export default MyProfileEditStudent;