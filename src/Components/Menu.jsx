import { menuItem } from "../Data";
import { cart } from "../Data";

export default function Menu() {
  return (
    <section className="mt-7 relative" id="menu">
      <div className="text-center md:text-4xl text-xl sm:text-2xl font-extrabold uppercase mb-3 ">
        <p className="text-yellow-500">
          Our <span className="text-black">Menu</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        {menuItem.map((item, index) => {
          return (
            <div
              key={index}
              className="md:m-5 md:p-5 sm:m-2 sm:p-2 p-1 m-1 md:w-[320px] sm:[w-250px] w-[220px] border rounded-md border-black hover:bg-red-700 duration-200 "
            >
              <img
                src={item.img}
                alt=""
                className={`md:w-[170px] sm:w-[130px] w-[100px] m-auto`}
              />
              <div className="text-center mt-5">
                <p className=" font-semibold md:text-base text-sm">
                  {item.name}
                </p>
                <p className="md:text-base text-sm">
                  {item.price}{" "}
                  <span>
                    <del className="text-xs">$8.55</del>
                  </span>
                </p>
                <button
                  className="mt-3 text-[11px] sm:text-[12px] md:text-[12px] w-[80%] sm:w-[55%] md:w-[70%] order-12 bg-black text-white px-7 py-1.5 hover:tracking-widest duration-500 "
                  onClick={() => {
                    cart.push(item);
                    alert(item.name + " Added to your cart list");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
