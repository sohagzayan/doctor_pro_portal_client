import React from 'react';
import { BsCalendar2Date } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';

const OurServicesCard = ({item}) => {
    const {img, profile , title , name , date} = item
    return (
        <div className='m-4'>
            <div className='bg-white shadow-lg p-5 rounded-lg flex justify-between flex-col'>
                <div>
                <img  className='rounded-lg' src={img} alt="img" />
                </div>
                <div className='my-4 flex justify-between items-center'>
                    <div>
                        <a className='flex items-center text-warning font-bold' href="/">
                            <img width="40px" className='rounded-full mr-2' src={profile} alt="" />
                            {name}
                        </a>
                    </div>
                    <div className='flex items-center '>
                        <BsCalendar2Date className='mr-2 text-warning' />
                        <h4 className='text-warning font-bold'>
                            {date}
                        </h4>
                    </div>
                </div>
                <h2 className='text-2xl text-left text-primary font-bold mb-4'>{title}</h2>
                <button className='border-2 rounded-lg text-primary font-bold  border-primary px-8 py-2 flex items-center'>Read More <span className='bg-primary ml-4 py-2 px-2 rounded-full '><FaChevronRight className='text-white' /></span> </button>
            </div>
        </div>
    );
};

export default OurServicesCard;