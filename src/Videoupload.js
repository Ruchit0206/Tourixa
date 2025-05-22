import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS
import './Videoupload.css';

export default function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const uploadInterval = useRef(null);

  const MAX_SIZE_MB = 100;

  // Add your EmailJS details here
  const SERVICE_ID = 'service_lr9tfn8';
  const TEMPLATE_ID = 'template_3zj5kgm';
  const USER_ID = 'rysnNr2iULZpL1x7V';
  const RECEIVER_EMAIL = 'substances0612@gmail.com';

  const resetUpload = () => {
    setVideoFile(null);
    setVideoPreview(null);
    setProgress(0);
    setUploadSuccess(false);
    setErrorMsg('');
    setDragOver(false);
  };

  const validateFile = (file) => {
    if (!file.type.startsWith('video/')) {
      setErrorMsg('Please select a valid video file.');
      return false;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setErrorMsg(`Please upload a video smaller than ${MAX_SIZE_MB} MB.`);
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && validateFile(file)) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
      setUploadSuccess(false);
      setProgress(0);
    } else {
      resetUpload();
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && validateFile(file)) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
      setUploadSuccess(false);
      setProgress(0);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  // New function: Send email with video as Base64 attachment using EmailJS
  const sendEmailWithVideo = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        // Base64 string without the prefix "data:video/xxx;base64,"
        const base64Video = reader.result.split(',')[1];

        const templateParams = {
          to_email: RECEIVER_EMAIL,
          message: `User uploaded a video: ${file.name}`,
          // EmailJS expects attachments as an array of objects with base64 content
          attachments: [
            {
              content: base64Video,
              filename: file.name,
              type: file.type,
              disposition: 'attachment',
            },
          ],
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            resolve();
          })
          .catch((error) => {
            console.error('Email send failed:', error);
            reject(error);
          });
      };

      reader.onerror = (error) => {
        console.error('File reading error:', error);
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async () => {
    if (!videoFile) {
      setErrorMsg('No video selected.');
      return;
    }
    setErrorMsg('');
    setProgress(0);

    try {
      // Start progress bar simulation
      let p = 0;
      uploadInterval.current = setInterval(() => {
        p += 10;
        if (p > 90) p = 90; // Keep below 100% until email sent
        setProgress(p);
      }, 150);

      // Send email
      await sendEmailWithVideo(videoFile);

      clearInterval(uploadInterval.current);
      setProgress(100);
      setUploadSuccess(true);

      // Reset file and preview after successful send
      setVideoFile(null);
      setVideoPreview(null);
    } catch (err) {
      clearInterval(uploadInterval.current);
      setProgress(0);
      setErrorMsg('Failed to send email. Please try again.');
    }
  };

  const handleCancel = () => {
    clearInterval(uploadInterval.current);
    resetUpload();
  };

  // Format file size to MB
  const formatFileSize = (size) => (size / (1024 * 1024)).toFixed(2);

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

        <div
          className={`upload-drag-area${dragOver ? ' dragover' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          aria-label="Drag and drop video file here"
        >
          📁 Drag & drop your video here or use the upload button below
        </div>

        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="file-input"
          disabled={uploadSuccess || progress > 0}
          aria-label="Upload video file"
        />

        {videoFile && (
          <div className="file-info" aria-live="polite">
            Selected file: <strong>{videoFile.name}</strong> ({formatFileSize(videoFile.size)} MB)
          </div>
        )}

        {videoPreview && (
          <div className="video-preview-container">
            <video
              src={videoPreview}
              controls
              className="video-preview"
              aria-label="Video preview"
            />
          </div>
        )}

        {errorMsg && (
          <p style={{ color: 'red', fontWeight: '600' }} role="alert">
            {errorMsg}
          </p>
        )}

        {progress > 0 && progress < 100 && (
          <>
            <div className="progress-bar" aria-label={`Upload progress: ${progress}%`}>
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div aria-live="polite" className="visually-hidden">
              Uploading: {progress} percent completed.
            </div>
          </>
        )}

        {!uploadSuccess && (
          <button
            onClick={handleUpload}
            disabled={!videoFile || uploadSuccess || progress > 0}
            className={`upload-button ${videoFile && !uploadSuccess && progress === 0 ? 'active' : 'disabled'}`}
            aria-disabled={!videoFile || uploadSuccess || progress > 0}
          >
            {progress > 0 && progress < 100 ? `Uploading... ${progress}%` : 'Upload Video'}
          </button>
        )}

        {progress > 0 && progress < 100 && (
          <button
            onClick={handleCancel}
            className="cancel-button"
            aria-label="Cancel video upload"
          >
            Cancel Upload
          </button>
        )}
{/* <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdcIibnGkJNuAoO0Y_yySE9Dtsfps1r10inQaHJ6IIyQWyY6A/viewform"
      width="100%"
      height="600"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Travel Video Upload Form"
    >
      Loading…
    </iframe> */}
        {uploadSuccess && (
          <p className="success-message" aria-live="polite">
            🎉 Your video is uploaded successfully! Our team will review it and post it soon.
          </p>
        )}
        
      </div>
    </div>
  );
}
