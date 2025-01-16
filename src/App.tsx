import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='overflow-x-hidden overflow-y-hidden'>
        <NavBar />
        <Hero />
        <Banner />
        <WhyChoose />
        <About />
      </div>
    </>
  );
}

export default App;
