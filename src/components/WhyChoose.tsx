import { FaBus } from 'react-icons/fa';


const WhyChoose = () => {
    return (
        <>
            <div className="py-14 md:py-28 bg-gray-50">
                <div className="container">
                    {/* heading section */}
                    <h1 className="pb-16 tracking-wider text-2xl font-semibold text-dark text-center">Why Choose Us</h1>

                    {/* card section  */}
                    <div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-14 sm:gap-4">
                            {/* 1st card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolar sit amet ipsum dolar sit amet</p>
                                <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
                                <FaBus className="text-5xl text-primary translate-x-1" />
                            </div>

                            {/* second card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <FaBus className="text-5xl text-secondary translate-x-1 " />
                                <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">....</p>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolar sit amet ipsum dolar sit amet</p>
                            </div>

                            {/* third card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolar sit amet ipsum dolar sit amet</p>
                                <p className="text-5xl rotate-90 text-secondary sm:text-primary text-center translate-x-5">....</p>
                                <FaBus className="text-5xl text-secondary sm:text-primary translate-x-1 " />
                            </div>

                            {/* fourth card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <FaBus className="text-5xl text-primary sm:text-secondary translate-x-1 " />
                                <p className="text-5xl rotate-90 text-primary sm:text-secondary text-center translate-x-5">....</p>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolar sit amet ipsum dolar sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChoose;