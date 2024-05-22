import bg from "../assets/bg4.jpg"

export default function Home(){
    return (
        <div id="home" className={` block h-[250px] md:h-[620px] sm:h-[400px] md:top-20 sm:w-full bg-top bg-opacity-80 bg-no-repeat`} style={{background : `url(${bg})`, backgroundSize: "cover", backgroundPosition:"center"}} >
            <div className=" text-center flex flex-col justify-center items-center relative md:w-[40%] md:h-[70%] h-[80%] md:top-20 top-8 md:left-28 backdrop-blur-sm bg-black/5 md:p-5 p-2 m-5 md:m-0 rounded-md">
                <p className="md:mt-5 text-white md:text-4xl sm:text-2xl text-sm font-extrabold sm:tracking-wide uppercase">Fresh <span className="text-yellow-500">food in the</span> morinng</p>
                <p className="text-white sm:text-sm text-xs md:mt-6 md:leading-loose ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illum animi! Eaque tempora quas culpa voluptatem .</p>
                <button className=" md:mt-6 mt-2 text-[11px] sm:text-[12px] md:text-[14px] w-[80%] sm:w-[55%] md:w-[50%] md:h-[10%] order-12 bg-black text-white px-7 py-1.5 hover:tracking-widest duration-500 ">Get Yours Now</button>
            </div>
        </div>
    )
}