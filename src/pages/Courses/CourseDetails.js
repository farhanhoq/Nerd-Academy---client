import React, { useEffect, useState } from "react";
import DetailsPage from "./DetailsPage";

const CourseDetails = () => {
    const [overview, setOverview] = useState([]);
    useEffect(() => {
        fetch('overview.json')
            .then(res => res.json())
            .then(data => setOverview(data))
    }, [])

    // const [rotate, setRotate] = useState(false);
    // const [count, setCount] = useState(0);

    // const addCount = () => {
    //     setCount((prev) => prev + 1);
    // };

    // const minusCount = () => {
    //     if (count > 0) {
    //         setCount((prev) => prev - 1);
    //     }
    // };

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">

        </div>
    );
};

export default CourseDetails;
