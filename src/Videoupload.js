import React, { useState } from 'react';
import './Videoupload.css';

export default function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
      setUploadSuccess(false);  // reset success message if new file chosen
    } else {
      alert('Please select a valid video file');
      setVideoFile(null);
      setVideoPreview(null);
      setUploadSuccess(false);
    }
  };

  const handleUpload = () => {
    if (!videoFile) {
      alert('No video selected');
      return;
    }
    // Simulate upload
    // After upload success:
    setUploadSuccess(true);
    setVideoFile(null);
    setVideoPreview(null);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to Our Travel Video Gallery</h1>
      <p className="page-description">
        Be part of our vibrant community by sharing your travel videos. Inspire others and explore new destinations together!
      </p>

      <div className="upload-box">
        <h2>Upload Your Travel Video</h2>
        <p className="upload-instruction">
          Share your amazing travel moments with our community! Your video will inspire fellow travellers around the world.
        </p>

        <input 
          type="file" 
          accept="video/*" 
          onChange={handleFileChange} 
          className="file-input"
          disabled={uploadSuccess} // disable input if uploaded
        />

        {videoPreview && (
          <div className="video-preview-container">
            <video 
              src={videoPreview} 
              controls 
              className="video-preview"
            />
          </div>
        )}

        <button 
          onClick={handleUpload} 
          disabled={!videoFile || uploadSuccess}
          className={`upload-button ${videoFile && !uploadSuccess ? 'active' : 'disabled'}`}
        >
          Upload Video
        </button>

        {uploadSuccess && (
          <p className="success-message">
            🎉 Your video is uploaded successfully! Our team will review it and post it soon.
          </p>
        )}
      </div>
    </div>
  );
}
