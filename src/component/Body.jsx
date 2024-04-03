import React, { useEffect, useState } from 'react'
import SchoolCard from './SchoolCard';
import ModalImage from './ModalImage';

const Body = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDate,setSelectedDate] = useState(null);
  const [selectedTitle,setSelectedTitle ]= useState(null);
  const [listOfEvent,setListOfEvent] = useState([]);
  const [filteredData,setfilteredData] = useState([]);


  useEffect(()=>{
    fetchData();
  },[])
  const openModal = (image,date,title) => {
    setSelectedImage(image);
    setShowModal(true);
    setSelectedDate(date);
    setSelectedTitle(title);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const fetchData = async()=>{
    const data = await fetch("http://localhost:1337/api/schools"); // starpi local  
    const json = await data.json();
    setfilteredData(json.data);
    setListOfEvent(json.data);
  }
  return (
    <div className='mt-[72px] mx-[160px] mb-[100px]'>
      <div className='p-4 w-10/12 flex flex-wrap justify-center  m-auto border-red'>
      <button onClick={() => {
          setfilteredData(listOfEvent);
        }} className='m-1 px-4 hover:bg-[#3481E8] items-center justify-center bg-[#D0D0D0] rounded-full text-black'>
          All
      </button>

      {listOfEvent.map((e) => (
        <button key={e.attributes.Tags} onClick={() => {
          const filteredListEvents = listOfEvent.filter(
            (item) => item.attributes.Tags === e.attributes.Tags
          );
          setfilteredData(filteredListEvents);
        }} className='m-1 p-4 flex hover:bg-[#3481E8] border border-[#D0D0D0]-100 items-center text-[18px] justify-center bg-[#D0D0D0] rounded-full text-black'>
          {e.attributes.Tags === "plantation"?"Plantation Day":e.attributes.Tags === "Alumni" ? "Alumni association":e.attributes.Tags === "annual"?"Annual day":e.attributes.Tags === "NCC"?"NCC(National cadet corps)":e.attributes.Tags === "labs"?"Science labs":e.attributes.Tags.includes("cleanliness")?"Cleanliness drive":""}
        </button>
          ))}
      </div>
      <div className='p-4 m-4 flex flex-wrap gap-4 justify-center w-10/12 m-auto'>
        {filteredData.map((e) => (
            <SchoolCard key={e.attributes.Tags} resData={e} onClick={() => openModal(e.attributes.PhotoUrl,e.attributes.createdAt,e.attributes.Title)}/>
          ))}
          
      </div>

      <button className='w-[154px] h-[60px] ml-[680px] mt-[70px] border border-solid font-poppins border-[#F54E39] rounded-lg text-[#F54E39]'>
            View More
      </button>
      {showModal && (
                <ModalImage onClose={closeModal} image={selectedImage} selectDate={selectedDate} title={selectedTitle}/>
              )}
    </div>
  )
}

export default Body
