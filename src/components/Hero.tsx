import React from 'react';
import HeroImg from '../assets/hero.png';
import HeroBg from '../assets/heroBg.png';
import PrimaryButton from './PrimaryButton';

const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
};

const Hero = () => {
    return (
        <div style={bgStyle} className="relative">
            <div className="container py-16 sm:py-0 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px] max-h-screen">
                    {/* text section */}
                    <div className="space-y-7 text-dark mt-[300px] sm:mt-0 order-2 sm:order-1 z-10">
                        <h1
                            data-aos='fade-up'
                            className="text-5xl">
                            Fresh & Healthy Meal Plan{' '}
                            <span className="text-secondary font-cursive text-7xl">Delivery</span> in Tel Aviv
                        </h1>
                        <p
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className="lg:pr-64">
                            Delicious Meals Delivered to Your Door From 500 ₪ per week
                        </p>
                        {/* button section */}
                        <div data-aos='fade-up'
                            data-aos-delay='500'>
                            <PrimaryButton />
                        </div>
                    </div>

                    {/* Image Section */}
                    <div
                        data-aos='zoom-in'
                        data-aos-delay='500'
                        className="absolute left-0 sm:left-auto right-0 top-0 w-full sm:w-1/2 h-[400px] sm:h-full order-1 sm:order-2">
                        <img
                            src={HeroImg}
                            alt=""
                            className="w-full h-full object-contain transform sm:translate-y-16 sm:scale-110 z-20"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;