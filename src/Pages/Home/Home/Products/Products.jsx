import React from "react";
import img1 from "../../../../assets/images/products/1.png";
import img2 from "../../../../assets/images/products/2.png";
import img3 from "../../../../assets/images/products/3.png";
import img4 from "../../../../assets/images/products/4.png";
import img5 from "../../../../assets/images/products/5.png";
import img6 from "../../../../assets/images/products/6.png";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
const Products = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
      <div className="card  border shadow-md">
        <figure className="px-6 pt-6">
          <img src={img1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <Rating
          readonly
            placeholderRating={3.5}
            emptySymbol={
              <FaRegStar className="text-warning"/>
            }
            placeholderSymbol={
              <FaStar className="text-warning" />
            }
            fullSymbol={
              <FaStar className="text-warning" />
            }
          />

          <h2 className=" text-[#444444]">Car Engine Plug</h2>
          <p className="text-[#FF3811] ">Price: $20.00</p>
        </div>
      </div>
      <div className="card  border shadow-md">
        <figure className="px-6 pt-6">
          <img src={img2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <Rating
          readonly
            placeholderRating={3.5}
            emptySymbol={
              <FaRegStar className="text-warning"/>
            }
            placeholderSymbol={
              <FaStar className="text-warning" />
            }
            fullSymbol={
              <FaStar className="text-warning" />
            }
          />

          <h2 className=" text-[#444444]">Car Engine Plug</h2>
          <p className="text-[#FF3811] ">Price: $20.00</p>
        </div>
      </div>
      <div className="card  border shadow-md">
        <figure className="px-6 pt-6">
          <img src={img3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <Rating
          readonly
            placeholderRating={3.5}
            emptySymbol={
              <FaRegStar className="text-warning"/>
            }
            placeholderSymbol={
              <FaStar className="text-warning" />
            }
            fullSymbol={
              <FaStar className="text-warning" />
            }
          />

          <h2 className=" text-[#444444]">Car Engine Plug</h2>
          <p className="text-[#FF3811] ">Price: $20.00</p>
        </div>
      </div>
      <div className="card  border shadow-md">
        <figure className="px-6 pt-6">
          <img src={img4} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <Rating
          readonly
            placeholderRating={3.5}
            emptySymbol={
              <FaRegStar className="text-warning"/>
            }
            placeholderSymbol={
              <FaStar className="text-warning" />
            }
            fullSymbol={
              <FaStar className="text-warning" />
            }
          />

          <h2 className=" text-[#444444]">Car Engine Plug</h2>
          <p className="text-[#FF3811] ">Price: $20.00</p>
        </div>
      </div>
      <div className="card  border shadow-md">
        <figure className="px-6 pt-6">
          <img src={img5} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <Rating
          readonly
            placeholderRating={3.5}
            emptySymbol={
              <FaRegStar className="text-warning"/>
            }
            placeholderSymbol={
              <FaStar className="text-warning" />
            }
            fullSymbol={
              <FaStar className="text-warning" />
            }
          />

          <h2 className=" text-[#444444]">Car Engine Plug</h2>
          <p className="text-[#FF3811] ">Price: $20.00</p>
        </div>
      </div>
      <div className="card  border shadow-md">
        <figure className="px-6 pt-6">
          <img src={img6} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <Rating
          readonly
            placeholderRating={3.5}
            emptySymbol={
              <FaRegStar className="text-warning"/>
            }
            placeholderSymbol={
              <FaStar className="text-warning" />
            }
            fullSymbol={
              <FaStar className="text-warning" />
            }
          />

          <h2 className=" text-[#444444]">Car Engine Plug</h2>
          <p className="text-[#FF3811] ">Price: $20.00</p>
        </div>
      </div>
      <div className="card  border shadow-md">
        <figure className="px-6 pt-6">
          <img src={img3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <Rating
          readonly
            placeholderRating={3.5}
            emptySymbol={
              <FaRegStar className="text-warning"/>
            }
            placeholderSymbol={
              <FaStar className="text-warning" />
            }
            fullSymbol={
              <FaStar className="text-warning" />
            }
          />

          <h2 className=" text-[#444444]">Car Engine Plug</h2>
          <p className="text-[#FF3811] ">Price: $20.00</p>
        </div>
      </div>
      <div className="card  border shadow-md">
        <figure className="px-6 pt-6">
          <img src={img2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <Rating
          readonly
            placeholderRating={3.5}
            emptySymbol={
              <FaRegStar className="text-warning"/>
            }
            placeholderSymbol={
              <FaStar className="text-warning" />
            }
            fullSymbol={
              <FaStar className="text-warning" />
            }
          />

          <h2 className=" text-[#444444]">Car Engine Plug</h2>
          <p className="text-[#FF3811] ">Price: $20.00</p>
        </div>
      </div>
      
    </div>
  );
};

export default Products;
