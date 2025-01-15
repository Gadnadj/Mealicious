import React from 'react';
import HeroImg from '../assets/hero.png';
import background from '../assets/heroBg.png';

type Props = {}

const Hero = (props: Props) => {
    return (
        <>
            <div className='relative z-[-1]'>
                <div className='container'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>

                        {/* text section */}
                        <div className='space-y-7 text-dark order-2 sm:order-1'>
                            <h1 className='text-5xl'>
                                Fresh & Healthy Meal Plan <span className='text-secondary font-cursive text-7xl'>Delivery</span> in Tel Aviv
                            </h1>
                            <p>
                                Delicious Meals Delivered to Your Door From 500 ₪ per week
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className='order-1 sm:order-2'>
                            <img src={HeroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;