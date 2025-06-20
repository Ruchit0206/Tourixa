import React from 'react';
import video from '/newvideo.mp4'; // adjust the path as needed

export default function SecondPage() {
  return (
    <div className="mt-4">
      <video
        className="w-full h-auto"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
