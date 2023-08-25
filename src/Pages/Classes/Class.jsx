import { useContext } from "react";
import {
  FaAngleLeft,
  FaArrowRight,
  FaBookmark,
  FaStar,
  FaUserFriends,
} from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Slider from "../Home/Slider/Slider";
import { FaBookBookmark } from "react-icons/fa6";
import bookmark from "../../assets/Social media/bookmark.png";
import avatar from "../../assets/AllClasses/pngwing.com.png";
const Class = ({ EveryClass }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { name, rating, topic, image, instructorName, price, availableSeats } =
    EveryClass;
  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        title: "You have to login first",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const savedClass = {
        name,
        image,
        instructorName,
        availableSeats,
        price,
        email: user.email,
      };
      fetch("https://assignment-12-server-puce.vercel.app/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire("Selected", "Your class has been selected", "success");
          }
        });
    }
  };
  return (
    //   <motion.div
    // whileHover={{ scale: 1.2, rotate: 90 }}
    // whileTap={{
    //   scale: 0.8,
    //   rotate: -90,
    //   borderRadius: "100%"
    // }}
    <div>
      {
        <Slide>
          <div className="card w-96  bg-white shadow-sm">
            <figure>
              <img src={image} />
            </figure>
            <div className="absolute top-2 right-2 p-2 rounded-full glass drop-shadow-lg">
              <img src={bookmark} className="w-6 h-6" alt="" />
            </div>
            <div className="card-body">
              <a
                role="button"
                className="bg-[#41246D] w-28 border-none hover:bg-[#6c4c9b] -mt-12 text-white text-sm px-4 py-2  border rounded-full"
              >
                {topic}
              </a>
              <div className="">
                <div>
                  <h2 className="text-2xl font-bold text-black opacity-80">
                    {name}
                  </h2>
                </div>
                <div className="flex items-center mt-3 mb-2">
                  ( <span>{rating} ratings</span> )
                  <div className="flex items-center gap-2 ml-5">
                    <FaStar className="text-[#F24080]"></FaStar>
                    <FaStar className="text-[#F24080]"></FaStar>
                    <FaStar className="text-[#F24080]"></FaStar>
                    <FaStar className="text-[#F24080]"></FaStar>
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={avatar} />
                    </div>
                  </div>
                  <p className="text-lg font-semibold font-[Poppins] tracking-wide drop-shadow-xl">
                    Prof.{instructorName}
                  </p>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="card-actions items-center mt-2 w-full ">
                <FaUserFriends />
                <p className="ml-3">60+ Students</p>
                <button
                  onClick={handleSelect}
                  className="flex items-center gap-2 "
                >
                  <span className="font-semibold">Enroll Course</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </Slide>
      }
    </div>
  );
};

export default Class;
