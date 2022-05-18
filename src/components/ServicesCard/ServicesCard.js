import React from 'react';

const ServicesCard = ({service ,setTreatment}) => {
    const {name , slots} = service
    return (
        <div className="card lg-max-w-96 bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl text-primary font-bold">{name}</h2>
          <p>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-400 font-bold '>Try Another Day</span> }</p>
          <p className='text-lg text-neutral'>{slots.length} spaces available</p>
          <div className="card-actions justify-center">
           <label onClick={()=> setTreatment(service)} disabled={slots.length === 0 }  htmlFor="my-modal-6" className="btn text-white border-2 border-white font-bold modal-button bg-primary">Book Appointment</label>
          </div>

        </div>
      </div>
    );
};

export default ServicesCard;