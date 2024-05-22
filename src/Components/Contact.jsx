export default function Contact() {
  return (
    <section id="contact">
      <div className="text-center md:text-4xl text-xl sm:text-2xl font-extrabold uppercase mb-3 ">
        <p className="text-yellow-500">
          Contact <span className="text-black">Us</span>
        </p>
      </div>

      <div className=" flex md:ml-10 md:mr-10 h-[400px] flex-col md:flex-row">
        <iframe
          className=" md:w-3/6 m-3 md:m-4 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.70252898353!2d90.34355869131993!3d23.79456235824064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1703527052786!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className=" md:w-3/6 shadow-2xl flex flex-col m-2 sm:m-3 md:m-5">
          <form
            action=""
            className="flex items-center m-1 sm:m-5 flex-col justify-between md:h-full sm:h-[250px] h-[200px]"
          >
            <div className="text-center md:text-2xl text-lg sm:text-xl font-extrabold uppercase mb-1 ">
              <p className="text-black">Get in touch</p>
            </div>

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Name"
                className="m-1 sm:m-2 md:m-0 border border-zinc-950 w-full rounded-md p-1 sm:p-2 md:p-3 text-[11px] sm:text-[12px] md:text-[14px] outline-[#007bff]"
              />
            

            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Mail"
              className="m-1 sm:m-2 md:m-0 border border-zinc-950 w-full rounded-md p-1 sm:p-2 md:p-3 text-[11px] sm:text-[12px] md:text-[14px] outline-[#007bff]"
            />
            <textarea
              name=""
              id=""
              placeholder="Enter Your Message"
              cols="30"
              rows="5"
              className="m-1 sm:m-2 md:m-0 w-full border border-zinc-950 p-1 sm:p-2 md:p-3 rounded-md text-[11px] sm:text-[12px] md:text-[14px] outline-[#007bff] resize-none"
            ></textarea>
            <input
              type="button"
              value="Send"
              className=" cursor-pointer text-[11px] sm:text-[12px md:text-[14px] w-full rounded-md bg-black text-white px-7 py-1.5 hover:tracking-widest duration-500 "
            />
          </form>
        </div>
      </div>
    </section>
  );
}
