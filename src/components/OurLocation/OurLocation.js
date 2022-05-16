import React from 'react';
import { FiClock, FiPhoneCall } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import LocationCard from '../LocationCard/LocationCard';
const OurLocation = () => {
    const ourLocationData = [
        { icons : <FiClock  className=' locationIcons text-7xl text-warning'  /> , title : 'Opening Hours' , dese : 'It is a long established fact that a reader will be distracted by the readable content of..' },
        { icons : <MdLocationOn className=' locationIcons text-7xl text-warning'   /> , title : 'Our Location' , dese : 'It is a long established fact that a reader will be distracted by the readable content of.' },
        { icons : <FiPhoneCall  className=' locationIcons text-7xl text-warning'  /> , title : 'Contact Us' , dese : 'It is a long established fact that a reader will be distracted by the readable content of.' }
    ]
    return (
        <div className='container mx-auto px-20 mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {ourLocationData.map(item => <LocationCard 
                item={item}
                />)}
            </div>
        </div>
    );
};

export default OurLocation;