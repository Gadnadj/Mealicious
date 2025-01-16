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
            <div style={bgStyle} className='py-14'>
                <div className="container min-h-[500px] relative z-10">
                    <h1 className="pt-20 tracking-wider text-4xl font-semiboldtext-white text-center">
                        About Us
                    </h1>

                    {/* card section */}
                    <div className='bg-white/80 p-10 my-10 rounded-md'>
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs
                        Lorem ipsum dolor sir amet consectetur adisds e;it. fuga dolorisdfs.
                        <div className='pt-10 flex justify-center'>
                            <button className='flex items-center gap-2 bg-primary rounded-full text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-200'>
                                <FaUser />
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                {/* wave vector */}
                <div className='absolute top-0  w-full'>
                    <img
                        className='mx-auto'
                        src={Vector} />
                </div>
            </div>
        </>
    );
};

export default About;