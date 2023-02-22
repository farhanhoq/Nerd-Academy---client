import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {



    return (
        <div className="overflow-x-auto my-6 card shadow-xl">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name of Menu</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Privacy Policy</td>
                        <td> <Link to="/privacy-add" className='btn btn-sm text-black bg-transparent border-primary border transition ease-in-out duration-300
                             hover:text-white hover:bg-gradient-to-r hover:from-primary
                             hover:to-secondary'>Add Content</Link> </td>
                        <label
                            htmlFor="my-modal"
                            className="text-sm btn btn-sm bg-gradient-to-r from-primary to-secondary border-none text-white mt-4"
                        >
                            Edit
                        </label>
                    </tr>
                    <tr >
                        <th>2</th>
                        <td> <button>Terms & Conditions</button> </td>
                        <td> <Link to="/privacy-add" className='btn btn-sm text-black bg-transparent border-primary border transition ease-in-out duration-300
                             hover:text-white hover:bg-gradient-to-r hover:from-primary
                             hover:to-secondary'>Add Content</Link> </td>
                        <Link>
                            <label
                                htmlFor="my-modal"
                                className="text-sm btn btn-sm bg-gradient-to-r from-primary to-secondary border-none text-white mt-4"
                            >
                                Edit
                            </label>
                        </Link>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Licensing</td>
                        <td> <Link to="/privacy-add" className='btn btn-sm text-black bg-transparent border-primary border transition ease-in-out duration-300
                             hover:text-white hover:bg-gradient-to-r hover:from-primary
                             hover:to-secondary'>Add Content</Link> </td>
                        <label
                            htmlFor="my-modal"
                            className="text-sm btn btn-sm bg-gradient-to-r from-primary to-secondary text-white mt-4"
                        >
                            Edit
                        </label>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>Cookie Policy</td>
                        <td> <Link to="/privacy-add" className='btn btn-sm text-black bg-transparent border-primary border transition ease-in-out duration-300
                             hover:text-white hover:bg-gradient-to-r hover:from-primary
                             hover:to-secondary'>Add Content</Link> </td>
                        <label
                            htmlFor="my-modal"
                            className="text-sm btn btn-sm bg-gradient-to-r from-primary to-secondary border-none text-white mt-4"
                        >
                            Edit
                        </label>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Menu;