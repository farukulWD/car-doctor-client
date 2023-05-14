import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const {_id, title, service_id, price,img } = service;

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const servicePrice = form.price.value;
    const booking = {
       customerName: name,
        email,
        date,
        img,
        price: servicePrice,
        service: title,
        service_id: _id,
        
    }
    console.log(booking);
    fetch("https://car-dorctor-server.vercel.app/bookings",{
        method:"POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
          Swal.fire({
            title: 'Your Booking success',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
        console.log(data);
    })
  };

  return (
    <div>
      <h3 className="text-center text-3xl">Book services: {title}</h3>

      <div className="card-body">
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Your name"
                name="name"
                required
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" required name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={`$${price}`}
                readOnly
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-[#ff3811]"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookService;
