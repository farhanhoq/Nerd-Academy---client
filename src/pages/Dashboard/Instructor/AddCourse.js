import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const AddCourse = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const navigation = useNavigate();

    const [learnings, setLearning] = useState([]);
    const [contents, setContent] = useState([
        { chp_name: '', lecture_num: '', chp_duration: '' }
    ]);

    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // const imgbbHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddLearn = () => {
        const newLearning = [...learnings, []];
        setLearning(newLearning);
    };

    const handleDeleteLearn = (i) => {
        const deleteData = [...learnings];
        deleteData.splice(i, 1);
        setLearning(deleteData);
    };

    const handleChangeLearn = (onChangeData, i) => {
        const inputData = [...learnings];
        inputData[i] = onChangeData.target.value;
        setLearning(inputData);
    };

    const handleAddContent = () => {
        const object = {
            chp_name: '', lecture_num: '', chp_duration: ''
        }
        const newContent = [...contents, object];
        setContent(newContent);
    };

    const handleDeleteContent = (i) => {
        const deleteData = [...contents];
        deleteData.splice(i, 1);
        setContent(deleteData);
    };

    const handleChangeContent = (e, i) => {
        let data = [...contents];
        data[i][e.target.name] = e.target.value;
        setContent(data);
    };

    const handleAddCourse = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=218ccec0a78d63b33e00278172e1c053`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
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
                        learning: learnings,
                        content: contents,
                    };

                    fetch("https://nerd-academy-server.vercel.app/courses", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(addCourse),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            toast.success("Course Uploaded Successfully");
                            navigation("/dashboard/myCourse");
                        });
                }
            });
    };

    return (
        <div>
            <h2 className="mt-8 text-3xl font-bold text-primary">Add a Course</h2>
            <div className="my-6 flex justify-center items-center">
                <div className="w-full card shadow-2xl p-8">
                    <form onSubmit={handleSubmit(handleAddCourse)}>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("tutor")}
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Instructor Name"
                                    defaultValue={user.displayName}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("email")}
                                    type="email"
                                    className="input input-bordered w-full max-w-xs"
                                    defaultValue={user?.email}
                                    readOnly
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("courseTitle", {
                                        required: "Please provided course title",
                                    })}
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Course Title"
                                />
                                {errors.courseTitle && (
                                    <span className="text-error">
                                        {errors.courseTitle.message}
                                    </span>
                                )}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <textarea
                                    {...register("description", {
                                        required: "Please provided description",
                                    })}
                                    className="textarea textarea-bordered"
                                    placeholder="Course description"
                                ></textarea>
                                {errors.description && (
                                    <span className="text-error">
                                        {errors.description.message}
                                    </span>
                                )}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("price", {
                                        required: "Please provided course price",
                                    })}
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Price"
                                />
                                {errors.price && (
                                    <span className="text-error">{errors.price.message}</span>
                                )}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("hours", {
                                        required: "Please provided course hours",
                                    })}
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Course hours"
                                />
                                {errors.hours && (
                                    <span className="text-error">{errors.hours.message}</span>
                                )}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <div className="input-group">
                                    <select
                                        required
                                        {...register("category")}
                                        className="select select-bordered"
                                    >
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="Programming">Programming</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Artificial Intelligence">
                                            Artificial Intelligence
                                        </option>
                                    </select>
                                </div>
                            </div>

                        
                            <div className="form-control w-full mt-6">
                                <h2 className="text-xl font-bold">Student Will Learn</h2>

                                <button
                                    onClick={() => handleAddLearn()}
                                    className="btn btn-primary text-white my-4"
                                >
                                    Add
                                </button>

                                {learnings.map((data, i) => {
                                    return (
                                        <div className="flex">
                                            <textarea
                                                {...register("learnings", {
                                                    required: "Student will learn",
                                                })}
                                                className="textarea textarea-bordered my-2 w-full"
                                                value={data}
                                                onChange={(e) => handleChangeLearn(e, i)}
                                                placeholder="Please write what student will learn"
                                            ></textarea>
                                            <button
                                                onClick={() => handleDeleteLearn(i)}
                                                className="btn btn-sm ml-2 btn-primary"
                                            >
                                                x
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="form-control w-full mt-6">
                                <h2 className="text-xl font-bold">Course Content</h2>

                                <button
                                    onClick={() => handleAddContent()}
                                    className="btn btn-primary text-white my-4"
                                >
                                    Add
                                </button>

                                {contents.map((data, i) => {
                                    return (
                                        <div>
                                             <div className="flex justify-between items-center">

                                            <textarea
                                                className="textarea textarea-bordered my-2"
                                                name="chp_name"
                                                value={data.chp_name}
                                                onChange={(e) => handleChangeContent(e, i)}
                                                placeholder="Chapter Name"
                                            ></textarea>
                                            <input
                                                className="input input-bordered my-2 w-1/3"
                                                name="lecture_num"
                                                value={data.lecture_num}
                                                onChange={(e) => handleChangeContent(e, i)}
                                                placeholder="Lecture Numbers"
                                            ></input>
                                            <input
                                                className="input input-bordered w-1/6 my-2"
                                                name="chp_duration"
                                                value={data.chp_duration}
                                                onChange={(e) => handleChangeContent(e, i)}
                                                placeholder="Duration"
                                            ></input>

                                            <button
                                                onClick={() => handleDeleteContent(i)}
                                                className="btn btn-primary btn-sm ml-2"
                                            >
                                                x
                                            </button>
                                        </div>
                                            <div className="form-control border border-primary p-3 rounded-lg mt-5">
                                                <h1 className="text-xl font-bold mb-3">Select your video</h1>
                                                <input
                                                 {...register("video")}
                                                 type="file" 
                                                 className="file-input file-input-bordered file-input-primary w-full" />
                                            </div>

                                            
                                        </div>
                                       
                                    );
                                })}
                                            <div className="form-control border border-primary p-3 rounded-lg mt-5">
                                            <h1 className="text-xl font-bold mb-3">Upload an image</h1>
                                                <input
                                                    {...register("image")}
                                                    type="file"
                                                    className="input input-bordered file-input-primary w-full"
                                                    placeholder="Upload a Image"
                                                />
                                                {errors.img && (
                                                    <span className="text-error">{errors.img.message}</span>
                                                )}
                                            </div>
                            </div>
                        </div>

                        <input
                            className="btn btn-primary w-full text-white mt-6 text-center"
                            type="submit"
                            value="Add Course"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;
