// import img from "../../assets/Instructors/pexels-simon-robben-614810.jpg"
// import img3 from "../../assets/man3.png"
// import img4 from "../../assets/man2.png"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

// import img5 from "../../assets/man1.png"
const Instructor = ({ instructor }) => {
  const { image, name, email } = instructor;
  return (
    <div className="w-full">
      <div className="w-96 h-96 bg-white object-fill shadow-xl">
        <figure className="">
          <img
            className="rounded-e-full w-4/5"
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body mb-0  bg-white">
          <h2 className="card-title text-black text-3xl font-bold font-sans mt-3 "> {name}</h2>
          <p className="text-[#FF7350] font-semibold">{email}</p>
          <div className="flex items-center justify-start gap-5 mt-3">
          <FaFacebook className=" h-7 w-7"></FaFacebook>
          <FaInstagram className=" h-7 w-7"></FaInstagram>
          <FaTwitter className=" h-7 w-7"></FaTwitter>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
