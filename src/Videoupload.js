import React, { useState, useRef } from 'react';
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

  const handleUpload = () => {
    if (!videoFile) {
      setErrorMsg('No video selected.');
      return;
    }
    setErrorMsg('');
    setProgress(0);

    // Simulate upload progress
    let p = 0;
    uploadInterval.current = setInterval(() => {
      p += 10;
      if (p >= 100) {
        clearInterval(uploadInterval.current);
        setProgress(100);
        setUploadSuccess(true);
        setVideoFile(null);
        setVideoPreview(null);
      } else {
        setProgress(p);
      }
    }, 150);
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

        {uploadSuccess && (
          <p className="success-message" aria-live="polite">
            🎉 Your video is uploaded successfully! Our team will review it and post it soon.
          </p>
        )}
      </div>
    </div>
  );
}
