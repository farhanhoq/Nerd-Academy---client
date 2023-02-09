import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddCourse = () => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const navigation = useNavigate();

    const [learnings, setLearning] = useState([]);

    const { user } = useContext(AuthContext);
    console.log(learnings)
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const imgbbHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddLearn = () => {
        const newLearning = [...learnings, []];
        setLearning(newLearning);
    }

    const handleDeleteLearn = (i) => {
        const deleteData = [...learnings];
        deleteData.splice(i, 1);
        setLearning(deleteData)
    }

    const handleChangeLearn = (onChangeData, i) => {
        const inputData = [...learnings]
        inputData[i] = onChangeData.target.value;
        setLearning(inputData)
    }

    const handleAddProduct = (data) => {
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

                    const addCourse = {
                        tutor: data.tutor,
                        email: user?.email,
                        picture: imgData.data.url,
                        title: data.courseTitle,
                        description: data.description,
                        price: data.price,
                        hours: data.hours,
                        category: data.category,
                        postingDate: `${date}.${month}.${year}`,
                        learning: learnings
                    }

                    console.log(addCourse);

                    fetch('https://nerd-academy-server.vercel.app/courses', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(addCourse)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Course Uploaded Successfully');
                            navigation('/dashboard/myCourse');
                        })

                }
            })
    }

    return (
        <div>
            <h2 className="mt-8 text-3xl font-bold text-primary">Add a Course</h2>
            <div className='my-6 flex justify-center items-center'>
                <div className='w-full card shadow-2xl p-8'>
                    <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div className='grid grid-cols-2 gap-6'>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("tutor")}
                                    type="text" className="input input-bordered w-full max-w-xs" placeholder='Instructor Name' defaultValue={user.displayName
}/>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("email")}
                                    type="email" className="input input-bordered w-full max-w-xs" defaultValue={user?.email} readOnly />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("courseTitle", {
                                        required: "Please provided course title",
                                    })}
                                    type="text" className="input input-bordered w-full max-w-xs" placeholder='Course Title' />
                                {errors.courseTitle && <span className='text-error'>{errors.courseTitle.message}</span>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <textarea
                                    {...register("description", {
                                        required: "Please provided description",
                                    })}
                                    className="textarea textarea-bordered" placeholder="Course description"></textarea>
                                {errors.description && <span className='text-error'>{errors.description.message}</span>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("price", {
                                        required: "Please provided course price",
                                    })}
                                    type="text" className="input input-bordered w-full max-w-xs" placeholder='Price' />
                                {errors.price && <span className='text-error'>{errors.price.message}</span>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("hours", {
                                        required: "Please provided course hours",
                                    })}
                                    type="text" className="input input-bordered w-full max-w-xs" placeholder='Course hours' />
                                {errors.hours && <span className='text-error'>{errors.hours.message}</span>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <div className='input-group'>
                                    <select required {...register("category")} className="select select-bordered">
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="Programming">Programming</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("image", {
                                        required: "Image is required"
                                    })}
                                    type="file" className="input input-bordered w-full max-w-xs" placeholder='Upload a Image' />
                                {errors.img && <span className='text-error'>{errors.img.message}</span>}
                            </div>

                            <div className='form-control w-full max-w-xs'>
                                <h2 className='text-xl font-bold'>Student Will Learn</h2>

                                <button onClick={() => handleAddLearn()} className="btn btn-primary text-white my-4">Add</button>

                                {learnings.map((data, i) => {
                                    return (
                                        <div className='flex'>
                                            <textarea
                                                {...register("learnings", {
                                                    required: "Student will learn",
                                                })}
                                                className="textarea textarea-bordered my-2" value={data} onChange={e => handleChangeLearn(e, i)} placeholder="Please write what student will learn"></textarea>
                                            <button onClick={()=>handleDeleteLearn(i)} className="btn btn-sm ml-2">x</button>
                                        </div>
                                    )
                                })}
                                
                            </div>

                        </div>

                        <input className='btn btn-primary w-full text-white mt-6 text-center' type="submit" value="Add Course" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;