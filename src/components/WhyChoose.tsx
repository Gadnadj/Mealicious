import { FaBus } from 'react-icons/fa';

const WhyChoose = () => {
    return (
        <>
            <div className="py-14 md:py-28 bg-gray-50">
                <div className="container">
                    {/* Heading section */}
                    <h1
                        data-aos='fade'
                        className="pb-16 tracking-wider text-2xl font-semibold text-dark text-center">
                        Why Choose Us
                    </h1>

                    {/* Card section */}
                    <div
                        data-aos='fade'
                        data-aos-delay='300'>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-14 sm:gap-4">
                            {/* 1st card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <p className='text-dark/70 font-semibold'>
                                    Fast and reliable delivery service tailored to your needs.
                                </p>
                                <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
                                <FaBus className="text-5xl text-primary translate-x-1" />
                            </div>

                            {/* 2nd card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <FaBus className="text-5xl text-secondary translate-x-1" />
                                <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">....</p>
                                <p className='text-dark/70 font-semibold'>
                                    Fresh and high-quality ingredients in every meal.
                                </p>
                            </div>

                            {/* 3rd card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <p className='text-dark/70 font-semibold'>
                                    Flexible meal plans to suit your lifestyle.
                                </p>
                                <p className="text-5xl rotate-90 text-secondary sm:text-primary text-center translate-x-5">....</p>
                                <FaBus className="text-5xl text-secondary sm:text-primary translate-x-1" />
                            </div>

                            {/* 4th card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <FaBus className="text-5xl text-primary sm:text-secondary translate-x-1" />
                                <p className="text-5xl rotate-90 text-primary sm:text-secondary text-center translate-x-5">....</p>
                                <p className='text-dark/70 font-semibold'>
                                    Outstanding customer support to ensure satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChoose;
