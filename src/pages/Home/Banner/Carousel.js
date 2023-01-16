import React from 'react';
import ScrollCarousel from 'scroll-carousel';

const Carousel = () => {

    new ScrollCarousel(".my-carousel", {
        smartSpeed: true,
        direction: 'ltr',
        margin: 20
    });

    return (
        <div className="hidden lg:block my-carousel mt-[-215px]">
            <div className='flex gap-8 justify-center items-center'>
                <div className="my-slide">
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/222/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-slide">
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-slide">
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/220/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Carousel;