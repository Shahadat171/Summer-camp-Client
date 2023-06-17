import { useContext } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Slider from "../Home/Slider/Slider";
const Class = ({ EveryClass }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { name, image, instructorName, price, availableSeats } = EveryClass;
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
      fetch("http://localhost:5000/selectedClasses", {
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
          <div className="card w-96 glass">
            <figure>
              <img className="h-52" src={image} alt="car!" />
            </figure>
            <div className="card-body">
              <div className="flex items-center justify-between gap-x-5">
                <div>
                  <h2 className="card-title">{name}</h2>
                  <p>Instructor: {instructorName}</p>
                </div>
                <div>
                  <p>Price: ${price}</p>
                  <div>
                    <p className="flex items-center">
                      Seats: <FaAngleLeft />
                      {availableSeats}
                      <FaAngleRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-actions mt-5 w-full justify-end">
                <button
                  onClick={handleSelect}
                  className="btn w-full btn-primary"
                >
                  Select
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
