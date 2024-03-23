// server.js
// The server.js file is a simple Express server that uploads a video file to the server and stores it in a MongoDB database. The server uses the multer middleware to handle file uploads and the mongoose library to interact with the MongoDB database.
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const Video = require('./models/Video');

const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/api/videos', upload.single('video'), (req, res) => {
  const video = new Video({
    filename: req.file.filename,
    // Add any other video information you want to store
  });

  // Save the video to the database
  video.save()
    .then(() => {
      res.status(200).send('Video uploaded successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('An error occurred while uploading the video');
    });
});

// Connect to MongoDB and start the server
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error(error);
  });