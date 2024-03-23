import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from './Carousel';
import Search from './Search';

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch videos from YouTube API, 
  useEffect(() => {
    axios.get('mongodb://localhost:27017/myapp', {
      params: {
        searchTerm: searchTerm,
      }
    })
    .then(response => setVideos(response.data))
    .catch(error => console.error('Error fetching data: ', error));
  }, [searchTerm]); 

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Carousel videos={videos} />
      <Search value={searchTerm} onChange={handleSearch} />
    </div>
  );
}

export default HomePage;