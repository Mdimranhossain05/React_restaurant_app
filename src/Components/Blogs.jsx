import { blogItems } from "../Data";

export default function Blogs() {
  return (
    <section className="mt-7" id="blog">
      <div className="text-center md:text-4xl text-xl sm:text-2xl font-extrabold uppercase mb-1 ">
        <p className="text-yellow-500">
          Our <span className="text-black">Blogs</span>
        </p>
      </div>

      <div className="flex justify-center md:m-5 m-2 flex-wrap">
        {blogItems.map((blogItem, index) => {
          return (
            <div
              key={index}
              className="md:m-3 m-1 duration-200 md:w-[22%] w-[200px]  cursor-pointer border border-black rounded-sm md:p-4 p-1 hover:bg-red-700"
            >
              <div className="">
                <img
                  src={blogItem.img}
                  alt=""
                  className=" scale-[60%] hover:scale-[70%] duration-200 "
                />
              </div>
              <div className=" ">
                <p className="font-semibold md:text-base text-sm">
                  {blogItem.name}
                </p>
                <p className="md:text-base sm:text-sm text-xs font-semibold">{blogItem.author}</p>
                <p className="w-full text-xs overflow-hidden">
                  {blogItem.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
