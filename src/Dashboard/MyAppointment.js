import React from "react";
import { useQuery } from "react-query";
import Loading from "../components/Loading/Loading";
import { useAuthContext } from "../context/AuthContextProvider";

const MyAppointment = () => {

    const {username} = useAuthContext()

    const {data : services  , isLoading, error, refetch } = useQuery('peruserdata' , ()=>  fetch(`http://localhost:5000/api/booking?patient=${username?.email}`).then(res => res.json()))
    if(isLoading){
        return <Loading />
    }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>treatment</th>
            </tr>
          </thead>
          <tbody>
          {
            services?.map((item , index)=> (  <tr>
                <th>1</th>
                <td>{item.patientName}</td>
                <td>{item.date}</td>
                <td>{item.slot}</td>
                <td>{item.treatment}</td>
              </tr>
           ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
