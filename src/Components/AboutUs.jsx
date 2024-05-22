import aboutUsImg from "../assets/food.jpg";
export default function AboutUs() {
  return (
    <div id="about" className="relative mt-10">
      <p className="text-center md:text-4xl text-xl sm:text-2xl font-extrabold uppercase mb-3">
        <span className="text-yellow-500">About</span>{" "}
        <span className="">US</span>
      </p>

      <div className=" flex flex-col md:flex-row mt-3 md:w-[95%] m-3 md:m-auto shadow-2xl rounded-lg border p-2">
        <div className="md:w-[45%] ">
          <img src={aboutUsImg} alt="" className=" object-cover w-[100%] h-[100%] rounded-md"/>
        </div>

        <div className="rounded-md md:w-[40%] mt-2  md:mt-0 md:pl-5 flex-grow flex flex-col justify-center ">
          <p className="md:text-3xl sm:text-2xl font-bold md:font-normal text-lg mb-1">What Makes Our Food Special?</p>
          <p className="mb-1 text-sm sm:font-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            maxime commodi soluta ipsa aperiam nam nostrum deserunt quos iure
            distinctio, enim velit. Facere, voluptates cupiditate!
          </p>
          
          <p className="text-sm sm:font-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odio
            cum beatae inventore officiis veritatis pariatur corporis earum
            cupiditate amet aperiam minima, quas nostrum vero.
          </p>
          <button className="w-[100%] sm:w-[50%] md:mt-6 mt-2 text-[11px] sm:text-[12px] md:text-[14px] h-[10%] md:py-0 py-2 bg-black text-white hover:tracking-widest duration-500 ">Get Yours Now</button>
        </div>
      </div>
    </div>
  );
}
