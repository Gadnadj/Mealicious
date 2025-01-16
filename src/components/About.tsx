import { FaUser } from 'react-icons/fa';
import BgPolygon from '../assets/polygon.png';
import Vector from '../assets/vector-wave.png';

const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'relative'
};

const About = () => {
    return (
        <>
            <div style={bgStyle} className="py-14">
                <div className="container min-h-[500px] relative z-10">
                    {/* Heading Section */}
                    <h1
                        data-aos="fade"
                        className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
                        About Us
                    </h1>

                    {/* Card Section */}
                    <div
                        data-aos="fade"
                        data-aos-delay="300"
                        className="bg-white/80 p-10 my-10 rounded-md">
                        <p className="text-dark/70 text-lg leading-7">
                            Welcome to our platform! We are dedicated to providing top-notch services
                            tailored to meet your unique needs. Our team is passionate about delivering
                            innovative solutions that drive success and create meaningful connections.
                        </p>
                        <p className="text-dark/70 text-lg leading-7 mt-4">
                            With years of experience in the industry, we are committed to excellence,
                            continuous improvement, and ensuring customer satisfaction. Let us help you
                            achieve your goals with our expertise and dedication.
                        </p>

                        {/* Contact Us Button */}
                        <div className="pt-10 flex justify-center">
                            <button className="flex items-center gap-2 bg-primary rounded-full text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-200">
                                <FaUser />
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Wave Vector */}
                <div className="absolute top-0 w-full">
                    <img
                        className="mx-auto"
                        src={Vector}
                        alt="Wave vector"
                    />
                </div>
            </div>
        </>
    );
};

export default About;
