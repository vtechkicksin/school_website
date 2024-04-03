import React from 'react';
import studentGallery from '../photos/Mask.png';

const Gallery = () => {
  return (
    <div className='relative mt-10 w-full h-[449px]'>
        <img src={studentGallery} alt="Custom Icon" className="w-full h-full opacity-100 " />
        <div className="absolute inset-0  from-transparent to-black"></div>
        <div className="absolute mt-40 inset-0 items-center justify-center text-white">
          <p className="text-6xl font-playfair font-bold text-center">
            Our events gallery
          </p>
          <br/>
          <p className="font-poppins text-28 font-normal leading-42 text-center w-915 h-84 top-369 left-262 mt-4">
          Events at DBTR are filled with joyous occasions, cultural <br/> gatherings, and learning opportunities that bring us all together.
        </p>
        </div>
    </div>
  );
};

export default Gallery;
