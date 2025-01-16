import { useState } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import Footer from './components/Footer';
import Popup from './components/Popup';

function App() {

  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <>
      <div className='overflow-x-hidden overflow-y-hidden'>
        <NavBar setShowPopup={setShowPopup} />
        <Hero />
        <Banner />
        <WhyChoose />
        <About />
        <Footer />
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </>
  );
}

export default App;
