

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
                    
                </div>
            )
        }
        </>
    );
};

export default Popup;