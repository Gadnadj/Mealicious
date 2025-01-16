import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import Footer from './components/Footer';
import Popup from './components/Popup';

function App() {

  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  }, []);

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
