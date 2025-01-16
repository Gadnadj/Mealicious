import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='overflow-x-hidden'>
        <NavBar />
        <Hero />
        <Banner />
      </div>
    </>
  );
}

export default App;
