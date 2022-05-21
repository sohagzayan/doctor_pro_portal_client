import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import BooingModal from "../BookingModal/BookingModal";
import Loading from "../Loading/Loading";
import ServicesCard from "../ServicesCard/ServicesCard";

const AvailableAppointment = ({ date, setDate }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date , "PP")


  const {data : services  , isLoading, error, refetch } = useQuery(['available', formattedDate] , ()=>  fetch(`http://localhost:5000/api/service?date=${formattedDate}`).then(res => res.json()))



 if(isLoading){
  return <Loading />
 }


  return (
    <div className="px-6">
      <p className="text-xl my-10 text-center text-primary font-bold">
        Available Appointment {format(date, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <ServicesCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BooingModal
        refetch={refetch}
          setTreatment={setTreatment}
          treatment={treatment}
          date={date}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
