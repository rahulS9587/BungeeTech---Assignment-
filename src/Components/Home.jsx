import React from 'react';
import Banner from './Banner';
import Movies from './Movies';

function Home() {
  const featuredMovie = {
    Title: 'The Batman',
    Year: '2022',
    Plot: 'Batman ventures into Gotham City’s underworld when a sadistic killer leaves behind a trail of cryptic clues.'
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
     
      <div className="px-4 py-8 sm:px-8">
        <Banner featuredMovie={featuredMovie} />
      </div>
      
     
      <div className="px-4 py-8 sm:px-8">
        <Movies />
      </div>
    </div>
  );
}

export default Home;
