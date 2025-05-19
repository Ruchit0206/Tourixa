import React from 'react'
import videowe from './newvideo.mp4'
import './Secondpage.css'

export default function Secondpage() {
  return (
    <div>
        {/* <img src='logo.jpg'></img> */}
        
       <video width="100%" height="auto"  autoPlay muted loop playsInline>
  <source src={videowe} type="video/mp4" />
  Your browser does not support the video tag.
</video>

    </div>
  )
}
