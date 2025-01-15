import React from 'react';
import HeroImg from '../assets/hero.png';
import HeroBg from '../assets/heroBg.png';
import PrimaryButton from './PrimaryButton';


const bgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
};


const Hero = () => {

    return (
        <>
            <div style={bgStyle} className='relative z-[-1]'>
                <div className='container py-16 sm:py-0'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px] max-h-screen overflow-hidden'>

                        {/* text section */}
                        <div className='space-y-7 text-dark order-2 sm:order-1'>
                            <h1 className='text-5xl'>
                                Fresh & Healthy Meal Plan{' '} <span className='text-secondary font-cursive text-7xl'>Delivery</span> in Tel Aviv
                            </h1>
                            <p className='lg:pr-64 '>
                                Delicious Meals Delivered to Your Door From 500 ₪ per week
                            </p>

                            {/* button section */}
                            <div>
                                <PrimaryButton />
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className='relative z-30 order-1 sm:order-2'>
                            <img
                                className='w-full sm:translate-y-16 '
                                src={HeroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;