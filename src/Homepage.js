


// homepage.js
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation'; // 👈 Add this
import './touch.css';
import Secondpage from './Secondpage';
import AboutUs from './Aboutus';
import { Link } from 'react-router-dom';
// import backgroundvideo from './backgroundvideo.mp4';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const greetings = ['नमः','Namaste!','નમસ્તે!', 'नमस्कार!', 'নমস্কার!','ਸਤ ਸ੍ਰੀ ਅਕਾਲ!','నమస్తే!','Vadakkam!']; // Add ! for better animation

  useEffect(() => {
    const launchDate = new Date('2025-06-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className='video-container'>
      

      

      <div className='hero-content'>
        <p className='subtitle'>Launching Soon</p>
        <h1>
          Discover The <span>Trip</span> Crafted By You
        </h1>

        <p className='description'>
          <span className='AnimationNamaste'>
            <TypeAnimation
              sequence={greetings.flatMap((greet) => [greet, 2000])}
              speed={80}
              repeat={Infinity}
              cursor={true}
            />
          </span>
          <br />
          Our team is working hard to bring you a powerful user experience. Stay tuned!
        </p>

        <div className='button-group'>
   <Link className="nav-link active" to="/underde/Login As Traveller"><button className='cta-btn'>Login As Traveller</button></Link>
  <Link className="nav-link active" to="/underde/Join As Agency"><button className='cta-btn'>Join As Agency</button></Link>
  <Link to="VideoUpload"><button className='cta-btn'>Upload Your Travel Moments</button></Link>
</div>
<div className="open-source-text">India's First Open Travel Platform</div>


        {timeLeft.days !== undefined && (
          <div className='countdown'>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        )}
      </div>
      </div>
      <AboutUs></AboutUs>
        <Secondpage></Secondpage>

      </div>

  );
}