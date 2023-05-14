import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div className="card w-[348px] border shadow-md">
      <figure className="px-6 pt-6">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#444444]">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-[#FF3811]">Price: ${price}</p>

          <div className="card-actions">
            <Link to={`/bookService/${_id}`} className="btn bg-transparent border-none hover:bg-transparent text-[#FF3811]"><FaArrowRight></FaArrowRight></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
