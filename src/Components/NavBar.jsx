/* eslint-disable no-unused-vars */
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CartList from "./CartList";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Menu", link: "#menu" },
    { name: "Products", link: "#products" },
    { name: "Review", link: "#review" },
    { name: "Contact", link: "#contact" },
    { name: "Blog", link: "#blog" },
  ];

  return (
    <div className="z-50">
      <header className="shadow-md w-full fixed top-0 left-0 z-50">
        <div className="md:flex items-center justify-around bg-white py-5 px-7 md:py-10 h-16 ">
          <div className=" w-[50px] sm:w-[60px] md:w-[80px] absolute left-5 sm:left-10 md:static md:left-auto top-3">
            <a href="">
              {" "}
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="absolute top-4 right-20 md:static flex justify-center md:order-3 text-xl md:text-2xl gap-3">
            <BsSearch
              className="cursor-pointer hover:text-red-400"
              onClick={() => {
                setSearchOpen(!searchOpen);
                if (open) {
                  setOpen(false);
                }
                if (cartOpen) {
                  setCartOpen(false);
                }
              }}
            />
            <BsFillCartFill
              className="cursor-pointer hover:text-red-800"
              onClick={
                () => {
                  setCartOpen(!cartOpen);
                  if(open){
                    setOpen(false);
                  }
                  if(searchOpen){
                    setSearchOpen(false);
                  }
                }
              }
            />
          </div>

          <div
            onClick={() => {
              setOpen(!open);
              if (searchOpen) {
                setSearchOpen(false);
              }
              if (cartOpen) {
                setCartOpen(false);
              }
            }}
            className="text-3xl absolute top-3 right-8 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:bg-white bg-[#FFCC00] md:flex md:items-center md:space-around pb-12 md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-[auto]  md:pl-0 transition-all duration-500 ease-in ${
              open ? "top-16" : "top-[-320px]"
            } overflow-y-scroll sm:overflow-hidden `}
          >
            {Links.map((Link) => {
              return (
                <li
                  key={Link.name}
                  className="md:ml-8 my-3 md:my-0 text-center"
                >
                  <a
                    href={Link.link}
                    className="text-black hover:text-gray-400 duration-500 text-[14px] sm:text-[18px]"
                  >
                    {Link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
      <SearchBar searchOpen={searchOpen} />
      <CartList cartOpen={cartOpen} />
    </div>
  );
}
