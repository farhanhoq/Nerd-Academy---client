import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const CoursesTable = ({ course, setCourse, refetch }) => {
    const {
        _id,
        category,
        description,
        email,
        picture,
        tutor,
        title,
        postingDate,
        publish,
    } = course;

    const handelApprove = id => {
        fetch(`https://nerd-academy-server.vercel.app/courses/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Make Verifiy Successful.");
                    refetch();
                }
            });

        fetch(
            `https://nerd-academy-server.vercel.app/users-publish-increase?email=${email}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
            }
        ).then((res) => res.json());

        fetch(
            `https://nerd-academy-server.vercel.app/teacher-course-qty?email=${email}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
            }
        ).then((res) => res.json());
    };

    return (
        <tbody className="text-gray-600 text-sm font-light dark:text-white">
            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:bg-accent dark:border-secondary">

                <td className="py-3 px-3 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="mr-2">
                            <img className="w-4" src={picture} alt="pic" />
                        </div>
                        <span className="font-medium">{category}</span>
                    </div>
                </td>

                <td className="py-3 px-3 text-left">
                    <div className="flex items-center">
                        <div className="mr-2">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt=""
                            />
                        </div>
                        <span>{tutor}</span>
                    </div>
                </td>

                <td className="py-3 w-3 text-left">
                    <p>{email}</p>
                </td>

                <td className="py-3 text-left ">
                    <Link
                        to={`/details/${course._id}`}
                        className="text-sm btn btn-xs bg-transparent text-black border-primary border transition ease-in-out duration-300
                            hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary dark:text-white"
                    >
                        Details
                    </Link>
                </td>

                {publish === true ? (
                    <td className="py-3 text-left">
                        <button onClick={() => handelApprove(course._id)}>
                            <span className="bg-green-600 cursor-pointer text-white py-1 px-3 rounded-full">
                                Approved
                            </span>
                        </button>
                    </td>
                ) : (
                    <td className="py-3 text-left">
                        <button onClick={() => handelApprove(course._id)}>
                            <span
                                className="
                            bg-gradient-to-r from-primary to-secondary cursor-pointer text-white
                             py-1 px-3 rounded-full"
                            >
                                Approve
                            </span>
                        </button>
                    </td>
                )}

                <td className="py-3 text-left">
                        <div className="cursor-pointer w-4 transform hover:text-error hover:scale-105">
                            <label
                                onClick={() => setCourse(course)}
                                htmlFor="admin-modal"
                                className="btn btn-outline btn-primary cursor-pointer text-white text-xs py-1 px-3 
                                font-normal hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary dark:text-secondary">
                                Suggest edit
                            </label>
                        </div>
                </td>

            </tr>
        </tbody>
    );
};

export default CoursesTable;
