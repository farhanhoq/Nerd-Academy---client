import React from 'react';

const DetailsPage = ({ ov }) => {
    const { title, description, icon } = ov;
    return (
        <div>
            <div className="">
                <div className="flex">
                    <img className="h-10 w-auto" src={icon} alt="" srcset="" />
                    <h1 className="font-semibold text-xl leading-5 text-gray-800 lg:mt-2 ml-3">{title}</h1>
                </div>
                <hr className=' border border-cyan-700 mt-2' />

                <div>
                    <p className="text-normal text-base leading-6 text-gray-600 mt-4"> {description}</p>
                </div>

            </div>





        </div>

    );
};

export default DetailsPage;