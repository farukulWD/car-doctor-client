import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [control, setControl] = useState(false);
  const navigate = useNavigate()
  const {logOut}=useContext(AuthContext)

  useEffect(() => {
    fetch(`https://car-dorctor-server.vercel.app/bookings?email=${user?.email}`,{
      method:"GET",
      headers:{
        authorization: `Bearer ${localStorage.getItem("car-doctor-token")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(!data.error){
          setBookings(data);

        }else{
          logOut()
          navigate('/')
        }
      });
  }, [control,navigate]);
  return (
    <div>
      <h2 className="text-5xl text-center my-5">
        Your Bookings: {bookings.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Avatar</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                control={control}
                setControl={setControl}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
