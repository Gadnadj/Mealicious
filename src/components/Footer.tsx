import { FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
    return (
        <>
            <div className="text-white mt-20">
                <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-3xl">

                    <div>
                        <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact Us</h1>
                        {/* Address Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6 justify-center">
                            <div className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <IoLocationSharp className='text-5xl' />
                                </div>
                                <p>
                                    #92, 3rd Main, virgo Nagar, Post <br /> Seegehalli, Bengaluru, Karnataka 560049
                                </p>
                            </div>

                            {/* Email Section */}
                            <div className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <MdEmail className='text-5xl' />
                                </div>
                                <p>gadnadjar@gmail.com</p>
                            </div>

                            {/* Number Section */}
                            <div className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <FaPhone className='text-5xl' />
                                </div>
                                <p>0586305529 <br /> Whatsapp: 0586305529</p>
                            </div>
                        </div>
                    </div>
                    {/* copyright section */}
                    <div className='flex justify-between p-4 items-center'>
                        <p>© 2024 Mealicious. All rights reserved</p>
                        <div className='flex items-center gap-6'>
                            <a className='hover:text-secondary' href="#">Privacy Policy</a>
                            <a className='hover:text-secondary' href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;