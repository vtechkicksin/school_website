import React from 'react';
import close from '../photos/closeIcon.svg';
// import 'tailwindcss/dist/base.css';
import '@fontsource/playfair-display'; // Import the Playfair Display font

const ModalImage = ({ onClose, image, selectDate, title }) => {
    const dateString = selectDate;
    const date = new Date(dateString);

    const formattedDateString = `${date.getDate()}${["st", "nd", "rd"][((date.getDate() + 90) % 100 - 10) % 10] || "th"} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 ">
      <div className="bg-none p-4 rounded-lg">
        {/* Close button */}
        <button className="absolute top-20 right-60 z-50" onClick={onClose}>
            <img src={close} className="h-6 w-6 text-gray-500"/>
        </button>
        
        {/* Image content */}
        <img src={image} alt="Selected Image" className="w-[936px] h-[591px]" />
        <div className='flex justify-between gap-40'>
            <div className='w-[464px] h-[51px] font-playfair text-[38px] text-[#FFFFFF] leading-[50px]'>
            {title}
            </div>
            <div className='w-[195px] h-[42px] font-poppins text-[28px] text-[#FFFFFF] leading-[50px]'>
                {formattedDateString}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
