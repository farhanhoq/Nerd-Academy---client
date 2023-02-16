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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Privacy Policy</td>
                        <td> <Link to="/privacy-add" className='btn btn-sm text-white'>Add Content</Link> </td>
                    </tr>
                    <tr className="hover">
                        <th>2</th>
                        <td> <button>Terms & Conditions</button> </td>
                        <td> <Link to="/terms-add" className='btn btn-sm text-white'>Add Content</Link> </td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Licensing</td>
                        <td> <Link to="/license-add" className='btn btn-sm text-white'>Add Content</Link> </td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>Cookie Policy</td>
                        <td> <Link to="/cookie-add" className='btn btn-sm text-white'>Add Content</Link> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Menu;