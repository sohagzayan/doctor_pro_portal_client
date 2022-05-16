import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const LocationCard = ({item}) => {
    const {icons , title , dese} = item
    return (
        <div className={title === "Our Location" ? 'bg-white active transform md:-translate-y-5 shadow-md m-3 py-6 px-6 rounded-xl locationCard' : 'bg-white  shadow-md m-3 py-6 px-6 rounded-xl locationCard'}>
            <span className='inline-block mb-5'>{icons}</span>
            <h2 className='text-2xl mb-4 text-warning font-bold'>{title}</h2>
            <p className='mb-4 text-neutral font-light'>{dese}</p>
            <button className='flex btn-location mt-8 items-center bg-info px-8 py-3 rounded-md text-secondary font-bold tracking-wider'>View More <span className='cardInnerIconsLocation'><FaAngleDoubleRight  /></span> </button>
        </div>
    );
};

export default LocationCard;
