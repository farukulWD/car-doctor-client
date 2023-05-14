import React from "react";
import Swal from "sweetalert2";

const BookingRow = ({ booking, control, setControl }) => {
  const { _id, img, date, service, price,status } = booking;
  
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-dorctor-server.vercel.app/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Booking has been deleted.", "success");
              setControl(!control);
            }
          });
      }
    });
  };

  const handleBookingConfirm = id=>{
    fetch(`https://car-dorctor-server.vercel.app/bookings/${id}
    `,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({status:"confirm"})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        Swal.fire("Confirmed!", "Your Booking has been Confirm.", "success");
      }
      setControl(!control);
    })
  }


  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-square btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={img} alt="booking image" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        {status?<span className="text-red-600">Confirmed</span>:<button  onClick={()=>handleBookingConfirm(_id)}  className="btn btn-ghost btn-xs">Confirm</button>}
      </th>
    </tr>
  );
};

export default BookingRow;
