import facebook from "./../../assets/Social media/facebook.png";
import twitter from "./../../assets/Social media/twitter.png";
import google from "./../../assets/Social media/google.png";
import instragram from "./../../assets/Social media/instragram.png";

const Footer = () => {
  return (
    <div className="from-[#03387B] to-[#048F87] max-w-7xl mx-auto py-28 px-10 text-white lg:flex justify-between gap-5">
      <div>
        <h1>Students</h1>
        <ol className="mt-3">
          <li className="list-none transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]">Free</li>
          <li className="list-none transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]">Paid</li>
        </ol>
      </div>
      <div>
        <h1>Company</h1>
        <ol className="mt-3">
          <li className="list-none transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]">About</li>
          <li className="list-none transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]">Careers</li>
          <li className="list-none transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]">Contact Us</li>
        </ol>
      </div>
      <div>
        <h1>Further Information</h1>
        <ol className="mt-3">
          <li className="list-none transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]">Terms & conditions</li>
          <li className="list-none transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]">Privacy & Policy</li>
        </ol>
      </div>
      <div>
        <h1>Follow Us</h1>
        <div className="flex mt-3">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instragram} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
