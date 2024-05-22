import { products } from "../Data"
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Product(){
    return(
        <section className="mt-7 relative" id="products">
            <div className="text-center md:text-4xl text-xl sm:text-2xl font-extrabold uppercase md:mb-3 mb-1">
                <p className="text-yellow-500">Our <span className="text-black">Products</span></p>
            </div>

            <div className="flex flex-wrap justify-center">
                {products.map((item,index)=>{
                    return(
                    <div key={index} className="border border-black md:m-5 md:p-5 m-2 p-2 w-[220px] sm:w-[250px] md:w-[320px] rounded-md hover:bg-red-700 duration-200">
                        <div className="flex justify-center md:mb-7 md:mt-2 sm:mb-3 mb-2">
                            <FaShoppingCart className="md:ml-1 md:mr-1 md:p-1 md:w-[22px] md:h-[22px] p-[5px] m-[3px] box-content sm:w-[22px] sm:h-[22px] w-[15px] h-[15px] border border-black cursor-pointer hover:scale-110 duration-200 hover:text-[#bbbbbb] hover:border-lime-50"/>
                            <FaHeart className="md:ml-1 md:mr-1 md:p-1 md:w-[22px] md:h-[22px] p-[5px] m-[3px] box-content sm:w-[22px] sm:h-[22px] w-[15px] h-[15px] border border-black cursor-pointer hover:scale-110 duration-200 hover:text-[#bbbbbb] hover:border-lime-50"/>
                            <FaEye className="md:ml-1 md:mr-1 md:p-1 md:w-[22px] md:h-[22px] p-[5px] m-[3px] box-content sm:w-[22px] sm:h-[22px] w-[15px] h-[15px] border border-black cursor-pointer hover:scale-110 duration-200 hover:text-[#bbbbbb] hover:border-lime-50"/>
                        </div>
                        <div>
                            <img src={item.img} alt="" className="md:w-[170px] sm:w-[120px] w-[100px] m-auto"/>
                        </div>
                        <div className="md:mt-3 sm:mt-2 mt-1">
                            <p className="md:text-lg sm:text-base text-sm font-semibold text-center text-black ">{item.title}</p>
                            <div className="flex justify-center md:mt-2">
                                <FaStar className="text-[#FFCC00] m-[1px]"/>
                                <FaStar className="text-[#FFCC00] m-[1px]"/>
                                <FaStar className="text-[#FFCC00] m-[1px]"/>
                                <FaStar className="text-[#FFCC00] m-[1px]"/>
                                <FaStarHalfAlt className="text-[#FFCC00] m-[1px]"/>
                            </div>
                        </div>
                        <p className="md:text-base sm:text-sm text-xs text-center md:mt-3 sm:mt-2 mt-1">$15.99 <span><del className="text-xs">$20.55</del></span></p>
                    </div>
                )})}
            </div>
        </section>
    )
}