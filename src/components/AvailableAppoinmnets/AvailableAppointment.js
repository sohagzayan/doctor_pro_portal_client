import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BooingModal from '../BookingModal/BooingModal';
import ServicesCard from '../ServicesCard/ServicesCard';

const AvailableAppointment = ({date , setDate}) => {

    const [ services , setServices] = useState([])
    const [treatment , setTreatment ] = useState(null)
    useEffect(()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='px-6'>
            <p className='text-xl my-10 text-center text-primary font-bold'>Available Appointment {format(date ,'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServicesCard 
                         key={service._id}
                         service={service} 
                         setTreatment={setTreatment}
                        />)
                }
            </div>
            {treatment && <BooingModal setTreatment={setTreatment} treatment={treatment}  date={date}/>}
        </div>
    );
};

export default AvailableAppointment;