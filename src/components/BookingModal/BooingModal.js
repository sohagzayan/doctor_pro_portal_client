import { format } from "date-fns";
import React, { useState } from "react";

const BooingModal = ({treatment , date ,setTreatment}) => {
    const {name , slots , _id} = treatment
    const [userName , setUserName] = useState('')
    const [userEmail , setUserEmail] = useState('')
    const [userPhone , setUserPhone] = useState('')
    const [userTime , setUserTime] = useState(slots[0])

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({
            userName,
            userEmail,
            userPhone,
            userTime,
            name , 
        });

        setUserName('')
        setUserEmail('')
        setUserPhone('')
        setTreatment(null)
    }
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  p-10">
        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle bg-warning border-warning text-white font-bold absolute right-2 top-2">✕</label>
           
          <h3 className="font-bold text-lg text-center text-primary ">
           <span className="text-sm text-secondary">Booking For</span> {name}
          </h3>
           <form onSubmit={handleSubmit} className="grid  w-full col-span-1 gap-3 mt-4 ">
                    <input type="text" placeholder="date" disabled value={format(date , 'PP')} className="input input-bordered w-full text-lg  " />
                    <select onChange={(e)=> setUserTime(e.target.value)} value={userTime} className="select select-bordered w-full ">
                        {slots.map((time , index) => <option value={time} key={index}>{time}</option>)}
                    </select> 
                    <input onChange={(e)=> setUserName(e.target.value)} value={userName} type="text" placeholder="Your Name" className="input input-bordered w-full text-lg " />
                    <input onChange={(e)=> setUserEmail(e.target.value)} value={userEmail} type="text" placeholder="Email Address" className="input input-bordered w-full text-lg " />
                    <input onChange={(e)=> setUserPhone(e.target.value)} value={userPhone} type="text" placeholder="Phone Number" className="input input-bordered w-full  text-lg" />
                    <button className="btn btn-primary text-white border-primary font-bold ">SUBMIT</button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default BooingModal;
