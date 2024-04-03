import React from 'react'
import CustomIcon from '../photos/top.svg';
import twitter from '../photos/twitter.svg';
import linkedIn from '../photos/linkedIn.svg';
import instagram from '../photos/instagram.png';
import facebook from '../photos/facebook.png';
import youTube from '../photos/youTube.png';
import pepper from '../photos/Pepper_Square_Logo.svg'

const Footer = () => {
  return (
    <div className='bg-[#EAEAEA] w-full h-[485px] border border-solid'>
      <div className='mt-[20px] mx-auto flex flex-wrap gap-8 justify-start w-8/12 m-auto'>
        <div>
          <img src={CustomIcon} alt="" className='w-[118px] h-[138px]'/>
        </div>
        <div className='2 cols'>
          <div className='w-[206px] h-[50px] font-poppins text-[18px] font-[500] leading-[24px]'>
            DBTR National Higher Secondary School
          </div>
          <div className='w-[179px] h-[25px] font-poppins text-[14px] text-[#232C95] leading-[24px]'>
          Virtuousness is Life
          </div>
          <div className='w-[193px] h-[75px] mt-4 font-poppins text-[14px] text-[#404040] leading-[24px]'>
          Established in 1901, DBTR is situated in the temple town of Mayiladuthurai.
          </div>
        </div>
        <div className='3 cols'>
          <div className='w-[206px] h-[50px] font-poppins text-[#4A4A4A] text-[16px] font-[500] leading-[35px]'>
          QUICK LINKS
          </div>
          <div className='w-[92] h-[36px] font-poppins text-[16px] text-[#191919] font-[400] leading-[35px]'>
          Admissions
          </div>
          <div className='w-[92] h-[36px] font-poppins text-[16px] text-[#191919] font-[400] leading-[35px]'>
          Alumni association
          </div>
          <div className='w-[92] h-[36px] font-poppins text-[16px] text-[#191919] font-[400] leading-[35px]'>
          Donate
          </div>
          <div className='w-[92] h-[36px] font-poppins text-[16px] text-[#191919] font-[400] leading-[35px]'>
          Events
          </div>
        </div>
        <div className='4 cols'>
          <div className='w-[206px] h-[50px] font-poppins text-[#4A4A4A] text-[16px] font-[500] leading-[35px]'>
          CONTACT
          </div>
          <div className='w-[173] h-[120px] font-poppins text-[16px] text-[#191919] font-[400] leading-[35px]'>
          DBTR NHSS,<br/> Mahadhana Street,<br/>  Kamarajar Salai,<br/> Mayiladuthurai,<br/> Tamilnadu – 609001
          </div>
          <div className='w-[92] h-[36px] mt-10 font-poppins text-[16px] text-[#191919] font-[400] leading-[35px]'>
          +91.436.422.3272
          </div>
          <div className='w-[92] h-[36px] font-poppins text-[16px] text-[#191919] font-[400] leading-[35px]'>
          contact@nationalhighschool.in
          </div>
          
        </div>

        <div className='mt-[20px]'>
        <div className='w-[192px] h-[54px] mt-10 font-poppins text-[#191919] text-[20px] font-[500] leading-[26px]'>
          Big or small, you can make an impact.
        </div>
        <button className='w-[154px] h-[60px] mt-4 bg-[#F54E39] rounded-lg text-white'>
            Donate 🤍
        </button>
        </div>
      </div>

      <div class="border-t border-[#CCCCCC] w-8/12 flex mx-auto mt-[40px]"></div>

      <div className='flex justify-between w-8/12 mx-auto'>
        <div className='w-[381px] h-[36px] font-poppins text-[#4A4A4A] text-[16px] font-[300] leading-[36px]'>
        © DBTR 2023, All Rights Reserved | Sitemap
        </div>
        <div className='w-[218px] h-[24px] text-[#2B306A] flex justify-evenly items-center mt-2'>
          <img alt="" src={twitter} className='w-[22px] h-[18px]'/>
          <img alt="" src={linkedIn} className='w-[22px] h-[18px]'/>
          <img alt="" src={instagram} className='w-[22px] h-[18px]'/>
          <img alt="" src={facebook} className='w-[22px] h-[18px]'/>
          <img alt="" src={youTube} className='w-[22px] h-[18px]'/>
        </div>
      </div>

      <div className='flex w-8/12 mx-auto mt-4'>
        <div className='w-[99px] h-[24px] font-[300] font-poppins text-[#4A4A4A] text-[16px] leading-[24px]'>
        Designed by
        </div>
        <div className='w-[259px] h-[21px]'>
          <img alt="" src={pepper}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
