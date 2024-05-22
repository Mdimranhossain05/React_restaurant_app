import { customers } from "../Data";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Review() {
  return (
    <section className="mt-7 relative" id="review">
      <div className="text-center md:text-4xl text-xl sm:text-2xl font-extrabold uppercase md:mb-3 mb-1">
        <p className="text-yellow-500">
          {" "}
          {"Customer's"} <span className="text-black">Review</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        {customers.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-black md:m-5 md:p-5 m-2 p-1 w-[220px] sm:w-[250px] md:w-[320px] rounded-md"
            >
              <div className="">
                <FaQuoteRight className="m-auto md:w-[30px] md:h-[30px] sm:w-[22px] sm:h-[22px] w-[18px] h-[18px]" />
              </div>
              <p className="text-center mt-2 sm:text-sm text-xs">{item.comment}</p>
              <img
                src={item.img}
                alt=""
                className="mt-2 object-cover sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-[100px] m-auto"
              />
              <p className="text-center md:text-base sm:text-sm text-xs font-semibold">{item.name}</p>
              <div className="flex justify-center">
                <FaStar className="text-[#FFCC00] m-[1px]" />
                <FaStar className="text-[#FFCC00] m-[1px]" />
                <FaStar className="text-[#FFCC00] m-[1px]" />
                <FaStar className="text-[#FFCC00] m-[1px]" />
                <FaStarHalfAlt className="text-[#FFCC00] m-[1px]" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
