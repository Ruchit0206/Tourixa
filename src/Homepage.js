/*import React from 'react';
import './Homepage.css';

export default function Home() {
  return (
    <div className='front-container'>
    
        <p>  <i className="fa-solid fa-circle-exclamation"></i><br/>Launching soon <br/> Our team is working on it</p>
    </div>
  );
}
*/



/*import React from 'react';
import './touch.css';

export default function Home() {
  return (
    <div className='front-container'>
      <div className='hero-content'>
        <p className='subtitle'>Launching Soon</p>
        <h1>Unlock the <span>Future</span> of Crypto</h1>
        <p className='description'>Our team is working hard to bring you a powerful crypto experience. Stay tuned!</p>
        <button className='cta-btn'>Notify Me</button>
      </div>
    </div>
  );
}
*/


// import React, { useState, useEffect } from 'react';
// import './touch.css';
// import backgroundvideo from './backgroundvideo.mp4';

// export default function Home() {
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const launchDate = new Date('2025-06-01T00:00:00').getTime(); // Set the launch date here

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = launchDate - now;

//       if (distance < 0) {
//         clearInterval(interval);
//         setTimeLeft({});
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='video-container'>
//       <video autoPlay loop muted playsInline className='background-video'>
//         <source src={backgroundvideo} type='video/mp4' />
//         Your browser does not support the video tag.
//       </video>

//       <div className='overlay'></div>

//       <div className='hero-content'>
//         <p className='subtitle'>Launching Soon</p>
//         <h1>
//           Unlock the <span>Future</span> of Crypto
//         </h1>
//         <p className='description'>
//           Our team is working hard to bring you a powerful crypto experience. Stay tuned!
//         </p>
//         <button className='cta-btn'>Notify Me</button>

//         {timeLeft.days !== undefined && (
//           <div className='countdown'>
//             {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import './touch.css';
// import backgroundvideo from './backgroundvideo.mp4';

// export default function Home() {
//   const [timeLeft, setTimeLeft] = useState({});
//   const [languageIndex, setLanguageIndex] = useState(0);
//   const greetings = ['Namaste', 'Hola', 'Bonjour', 'Ciao', 'こんにちは']; // Add your desired languages here

//   useEffect(() => {
//     const launchDate = new Date('2025-06-01T00:00:00').getTime(); // Set the launch date here

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = launchDate - now;

//       if (distance < 0) {
//         clearInterval(interval);
//         setTimeLeft({});
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000),
//       });
//     }, 1000);

//     // Language change interval (every 3 seconds)
//     const languageInterval = setInterval(() => {
//       setLanguageIndex((prevIndex) => (prevIndex + 1) % greetings.length);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//       clearInterval(languageInterval);
//     };
//   }, []);

//   return (
//     <div className='video-container'>
//       <video autoPlay loop muted playsInline className='background-video'>
//         <source src={backgroundvideo} type='video/mp4' />
//         Your browser does not support the video tag.
//       </video>

//       <div className='overlay'></div>

//       <div className='hero-content'>
//         <p className='subtitle'>Launching Soon</p>
//         <h1>
//           Discover The <span>Trip</span> Crafted By You        </h1>
//         <p className='description'>
//           <span className='AnimationNamaste'>{greetings[languageIndex]}! </span><br/> Our team is working hard to bring you a powerful user experience. Stay tuned!
//         </p>
//         <button className='cta-btn'>Login As Customer</button>
//         <button className='cta-btn'>Join As Agency</button>

//         {timeLeft.days !== undefined && (
//           <div className='countdown'>
//             {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// homepage.js
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation'; // 👈 Add this
import './touch.css';
import backgroundvideo from './backgroundvideo.mp4';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const greetings = ['नमः','Namaste!','નમસ્તે!', 'नमस्कार!', 'নমস্কার!','ਸਤ ਸ੍ਰੀ ਅਕਾਲ!','నమస్తే!','Vanakkam!']; // Add ! for better animation

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
    <div className='video-container'>
      {/* <video autoPlay loop muted playsInline className='background-video'>
        <source src={backgroundvideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video> */}

      <div className='overlay'></div>

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
  <button className='cta-btn'>Login As Traveller</button>
  <button className='cta-btn'>Join As Agency</button>
</div>
<div class="open-source-text">India's First Open Travel Platform</div>


        {timeLeft.days !== undefined && (
          <div className='countdown'>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        )}
      </div>
    </div>
  );
}
