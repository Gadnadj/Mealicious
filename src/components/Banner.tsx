import apple from '../assets/apple.png';
import kiwi from '../assets/kiwi.png';
import lemon from '../assets/lemon.png';
import leaf from '../assets/leaf.png';
import tomato from '../assets/tomato.png';
import PrimaryButton from './PrimaryButton';

const Banner = () => {
    return (
        <>
            <div className='container py-14 relative'>
                <div className='relative z-20'>
                    <h1
                        data-aos='fade-up'
                        data-aos-delay='300'
                        className='py-8 tracking-wider text-2xl font-semibold text-dark text-center'>
                        Taste the Fresh Difference
                    </h1>

                    <div
                        data-aos='fade-up'
                        data-aos-delay='500'
                        className='space-y-10'>
                        <div
                            data-aos='fade-up'
                            data-aos-delay='500'
                            className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                            <div>
                                <p className='text-justify'>
                                    We understand that <span className='text-primary'>time</span> is one of the most valuable resources in today’s fast-paced world.
                                    Our healthy meal delivery service, Mealicious, based in Tel Aviv, is here to help you save time while enjoying
                                    fresh, delicious, and healthy meals. No more grocery shopping or cooking hassle!
                                </p>
                            </div>
                            <div></div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                            <div></div>
                            <div>
                                <p className='text-justify'>
                                    With Mealicious, eating healthy has never been easier.
                                    Enjoy a variety of nutritious meal plans designed to suit your lifestyle.
                                    Let us handle the preparation while you focus on what matters most.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        data-aos='fade-up'
                        data-aos-delay='500'
                        className='flex justify-center mt-10 sm:mt-14'>
                        <PrimaryButton />
                    </div>
                </div>

                {/* Background fruits */}
                <div
                    data-aos='fade-right'
                    className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                    <img
                        data-aos='fade-right'
                        src={leaf} className='max-w-[160px]' />
                </div>

                <div
                    data-aos='fade-right'
                    className='absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                    <img
                        src={tomato} className='max-w-[280px]' />
                </div>

                <div
                    data-aos='fade-left'
                    className='absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100'>
                    <img src={lemon} className='max-w-[200px]' />
                </div>

                <div
                    data-aos='fade-left'
                    className='hidden sm:block absolute bottom-0 right-0'>
                    <img src={apple} className='max-w-[200px]' />
                </div>

                <div
                    data-aos='fade'
                    className='absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'>
                    <img src={kiwi} className='max-w-[180px]' />
                </div>
            </div>
        </>
    );
};

export default Banner;
