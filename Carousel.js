import React from 'react';
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent({ videos }) {
  return (
    <Carousel>
      {videos.map(video => (
        <div key={video.id}>
          <img src={video.thumbnail} alt={video.title} />
          <p>{video.title}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;