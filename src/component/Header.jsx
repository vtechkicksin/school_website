import React from 'react'
import CustomIcon from '../photos/top.svg';
const Header = () => {
  return (
    <div className="w-full flex justify-evenly mx-auto">
      <div className="flex items-center justify-center">
        <img src={CustomIcon} alt="Custom Icon" className="w-[82px] h-[96px] mt-[14px] ml-[80px]"/> 
      </div>
      
      <div className="flex items-center justify-center gap-4 text-[#1A1A1A]">
        <span className="flex items-center justify-center w-[131px] h-[36px] top-[43px] left-[308px] font-poppins text-lg font-normal leading-36 text-center">The school</span>
        <span className="flex items-center justify-center w-[136px] h-[36px] top-[43px] left-[475px] font-poppins text-lg font-normal leading-36 text-center">Academics</span>
        <span className="flex items-center justify-center w-[136px] h-[36px] top-[43px] left-[647px] font-poppins text-lg font-normal leading-36 text-center">Life @DBTR</span>
        <span className="flex items-center justify-center w-[136px] h-[36px] top-[43px] left-[819px] font-poppins text-lg font-normal leading-36 text-center">Contact us</span>
        <button className='w-[154px] h-[60px] border border-solid font-poppins border-[#F54E39] rounded-lg text-[#F54E39]'>
            CSR
        </button>
        <button className='w-[154px] h-[60px] bg-[#F54E39] rounded-lg text-white'>
            Donate 🤍
        </button>
        
      </div>
    </div>
  )
}

export default Header
