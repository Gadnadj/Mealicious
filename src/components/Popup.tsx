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
                        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-[9999]">
                            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md
                            duration-200 w-[300px]">
                                {/* header section */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h1 className='text-2xl font-bold text-dark'>
                                            Login
                                        </h1>
                                    </div>
                                    <IoCloseOutline
                                        onClick={() => setShowPopup(false)}
                                        className='text-2xl cursor-pointer' />
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