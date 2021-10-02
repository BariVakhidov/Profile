import React, { useEffect } from 'react';
import './style.scss'
import { AboutMe } from './components/AboutMe';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainInfo } from './components/MainInfo';
import { Portfolio } from './components/Potrfolio';
import { animate, moveCamera } from 'three-example';



function App() {

  useEffect(() => {
    animate();
    document.body.onscroll = moveCamera
  }, [window.innerWidth, window.innerHeight])

  return (
    <div className='content_wrapper'>
      <Header />
      <main id="content" className="wrapper">
        <MainInfo />
        <AboutMe />
        <Portfolio />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
