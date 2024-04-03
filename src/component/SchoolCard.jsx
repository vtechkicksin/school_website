import React from 'react'
import calender from '../photos/calender.png'
// import ModalImage from './ModalImage';

const SchoolCard = (props) => {
    
    const dateString = props.resData.attributes.createdAt;
    const date = new Date(dateString);

    const formattedDateString = `${date.getDate()}${["st", "nd", "rd"][((date.getDate() + 90) % 100 - 10) % 10] || "th"} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
    
    return (
        <div className="relative w-[542px] h-[400px] shadow-lg" >
        <img
            alt=""
            className="absolute inset-0 w-[542px] h-[400px]"
            src={props.resData.attributes.PhotoUrl}
            onClick={props.onClick}
        />
        <div className='absolute bottom-0 bg-white w-[542px] h-[100px] rounded-b-lg'>
            <div className='absolute m-4 font-poppins font-'>
            {props.resData.attributes.Title}
            </div>
        </div>
        <div className='absolute bottom-0 mx-4 mb-6 flex justify-center items-center gap-4'>
            <img alt="" src={calender} className='w-[14px] h-[14px] '/>
            <div className=''>
                {formattedDateString}
            </div>
        </div>
        </div>
    );
}

export default SchoolCard
