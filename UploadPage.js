// UploadPage.js
// The UploadPage.js file is a simple React component that allows users to upload a video file to the server. The component uses the axios library to make a POST request to the server endpoint that handles video uploads.
import React, { useState } from 'react';
import axios from 'axios';

function VideoUpload() {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('video', file);

    axios.post('/api/videos', formData)
      .then((response) => {
        console.log(response);
      })
      // Handle errors
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="file" onChange={onFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default VideoUpload;