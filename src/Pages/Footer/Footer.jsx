import facebook from "./../../assets/Social media/facebook.png";
import twitter from "./../../assets/Social media/twitter.png";
import google from "./../../assets/Social media/google.png";
import instragram from "./../../assets/Social media/instragram.png";

const Footer = () => {
  return (
    <div className="bg-black py-28 px-20 text-white lg:flex justify-between gap-5">
      <div>
        <h1>Students</h1>
        <ol className="mt-3">
          <li className="list-none text-slate-600">Free</li>
          <li className="list-none text-slate-600">Paid</li>
        </ol>
      </div>
      <div>
        <h1>Company</h1>
        <ol className="mt-3">
          <li className="list-none text-slate-600">About</li>
          <li className="list-none text-slate-600">Careers</li>
          <li className="list-none text-slate-600">Contact Us</li>
        </ol>
      </div>
      <div>
        <h1>Further Information</h1>
        <ol className="mt-3">
          <li className="list-none text-slate-600">Terms & conditions</li>
          <li className="list-none text-slate-600">Privacy & Policy</li>
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
