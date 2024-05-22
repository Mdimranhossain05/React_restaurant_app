/* eslint-disable react/prop-types */
import { cart} from "../Data";
import { AiOutlineClose } from "react-icons/ai";



export default function CartList({cartOpen}){
    return (
      <div className="absolute top-16 sm:top-17 md:top-20">
    <div className={`z-50 w-[100%] sm:w-[35%] h-screen sm:h-[400px] md:h-[600px] fixed overflow-y-scroll overflow-x-hidden  bg-[#FFCC00] p-5 flex flex-col items-center ${cartOpen ? "right-0" : "right-[-100%]"} duration-500`} >
        {cart.map((item, index) => (
          <div key={index} className=" w-full">
            <div className="flex justify-between items-center mb-5 cursor-pointer hover:bg-red-700 p-3 duration-300 rounded-sm">
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-[50px] sm:w-[60px]"
                />
                <div className="flex flex-col gap-0.5 ml-2">
                  <p className="text-sm sm:text-[17px]">{item.name}</p>
                  <p className="text-xs sm:text-[13px] font-medium">Price: {item.price}</p>
                </div>
              </div>
              <AiOutlineClose className="text-2xl cursor-pointer hover:text-gray-400 duration-300" onClick={()=>{}}/>
            </div>
          </div>
        ))}
        <button className="text-[11px] sm:text-[12px] md:text-[14px] w-[80%] sm:w-[55%] md:w-[35%] mb-20 bg-black text-white px-7 py-1.5 hover:tracking-widest duration-500 ">Check Now</button>
      </div>
      </div>
    )
}