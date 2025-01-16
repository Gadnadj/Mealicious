import { FaFacebook } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import { IoCloseOutline } from 'react-icons/io5';


type Props = {
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup = ({ showPopup, setShowPopup }: Props) => {

    return (
        <>
            {
                showPopup && (
                    <div>
                        <div
                            data-aos='zoom-in-up'

                            className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-[9999]">
                            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md
                            duration-200 w-[300px]">
                                {/* header section */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h1 className='text-2xl font-bold text-dark'>
                                            Login
                                        </h1>
                                    </div>
                                    <div>
                                        <IoCloseOutline
                                            onClick={() => setShowPopup(false)}
                                            className='text-2xl cursor-pointer hover:scale-125 duration-300' />
                                    </div>
                                </div>

                                {/* Login form section */}
                                <div className='mt-4'>
                                    <input
                                        className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4'
                                        type="email"
                                        placeholder='your@email.com'
                                    />

                                    <input
                                        className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4'
                                        type="password"
                                        placeholder='*********'
                                    />

                                    {/* Login button */}
                                    <div className='flex justify-center'>
                                        <button
                                            onClick={() => setShowPopup(false)}
                                            className='bg-primary text-white w-full rounded-xl py-2 hover:scale-105 hover:duration-300'>
                                            Login
                                        </button>
                                    </div>

                                    {/* login with google or facebook */}
                                    <div className='flex justify-center mt-3'>
                                        <p>or login with</p>
                                    </div>

                                    <div className='flex items-center justify-center gap-3 mt-3'>
                                        <GrGoogle
                                            className='size-8 cursor-pointer hover:text-primary duration-300' />

                                        <FaFacebook
                                            className='size-8 cursor-pointer hover:text-blue-500 duration-300' />
                                    </div>



                                </div>
                            </div>


                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Popup;