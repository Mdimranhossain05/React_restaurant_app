import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";


export default function Footer(){

    const Links = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#home" },
        { name: "Menu", link: "#home" },
        { name: "Products", link: "#home" },
        { name: "Review", link: "#home" },
        { name: "Contact", link: "#home" },
        { name: "Blog", link: "#home" },
      ];

    return (
        <section className="">
            <section className="sm:p-5 p-2 bg-[#423b3b] relative">
                <div className="flex justify-center items-center">
                <FaFacebookF className="scale-[240%] border border-black sm:m-4 m-3 sm:rounded-full sm:p-[2px] p-[1px] duration-200 cursor-pointer hover:bg-[#bbbbbb] hover:border-[#bbbbbb]"/>
                <FaTwitter className="scale-[240%] border border-black border-spacing-3 sm:m-4 m-3 sm:rounded-full sm:p-[2px] p-[1px] duration-200 cursor-pointer hover:bg-[#bbbbbb] hover:border-[#bbbbbb]"/>
                <FaInstagram className="scale-[240%] border border-black border-spacing-3 sm:m-4 m-3 sm:rounded-full sm:p-[2px] p-[1px] duration-200 cursor-pointer hover:bg-[#bbbbbb] hover:border-[#bbbbbb]"/>
                <FaLinkedin className="scale-[240%] border border-black border-spacing-3 sm:m-4 m-3 sm:rounded-full sm:p-[2px] p-[1px] duration-200 cursor-pointer hover:bg-[#bbbbbb] hover:border-[#bbbbbb]"/>
                <TbBrandPicsart className="scale-[240%] border border-black border-spacing-3 sm:m-4 m-3 sm:rounded-full sm:p-[2px] p-[1px] duration-200 cursor-pointer hover:bg-[#bbbbbb] hover:border-[#bbbbbb]"/>

                </div>
                
                <ul className="sm:flex justify-center flex-col sm:flex-row flex-wrap mt-2 sm:mt-0">
                    {Links.map((link, index)=>{
                        return (
                            <li className="sm:m-3 sm:pl-3 sm:pr-3 sm:pt-1 sm:pb-1 m-1 p-1 border-black cursor-pointer hover:bg-[#bbbbbb] hover:border-[#bbbbbb] duration-200 border-2 text-[14px] sm:text-[18px] text-center" key={index}>{link.name}</li>
                        )
                    })}
                </ul>
                <p className="mt-2 sm:mt-0 text-center text-[11px] md:text-[18px] sm:text-[14px]">Created by <span className="font-black">Md. Imran Hossain</span>.	&#169;All right reserved <span className="font-black">Md. Imran Hossain</span>.</p>
            </section>
        </section>
    )
}