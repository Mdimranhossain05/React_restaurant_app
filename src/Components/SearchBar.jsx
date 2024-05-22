/* eslint-disable react/prop-types */


export default function SearchBar({searchOpen}){
    return (
        <div className= {`z-50 fixed top-20 sm:top-20 md:top-24 md:left-[25%] w-full ${searchOpen? "scale-y-100":"scale-y-0"} flex justify-center origin-top duration-200 `}>
            <div className="w-[50%] md:w-[30%]">
            <input type="search" className="pl-2 m-auto w-[100%] h-[32px] border border-solid border-black outline-none text-xs sm:text-sm" placeholder="Search Here..."/>
            </div>
            <button className="bg-black text-white h-[32px]] p-1 w-[15%] md:w-[7%] text-[11px] sm:text-[12px]">
                Search
            </button>
        </div>
    )
}