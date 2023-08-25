// import { Swiper, SwiperSlide } from "swiper/react";
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Tooltip } from "@mui/material";
// import { AuthContext } from "../../../Providers/AuthProviders";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./Slider.css"
// import { Keyboard, Pagination, Navigation } from "swiper/modules";
// // import slide from "../../../assets/slider-image/boy.png"
// import logo from "../../../assets/slider-image/logo.png"
// // import slide3 from "../../../assets/slider-image/slide3.png"
// // import slide4 from "../../../assets/slider-image/all.png"
// import slide1 from "../../../assets/slider-image/Engish/1.png"
// import slide3 from "../../../assets/slider-image/Engish/3.png"
// import slide4 from "../../../assets/slider-image/Engish/4.jpg"
// import slide5 from "../../../assets/slider-image/Engish/5.jpg"
// import slide6 from "../../../assets/slider-image/Engish/6.jpg"
// import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from "react-icons/fa";

// const Slider = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   return (
//     <div className="">
     
//       <Swiper
//           style={{
//             "--swiper-pagination-color": "#D9D9D9",
//             "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
//             "--swiper-pagination-bullet-inactive-opacity": "1",
//             "--swiper-pagination-bullet-size": "22px",
//             "--swiper-pagination-bullet-horizontal-gap": "8px",
//           }}
//           slidesPerView={1}
//           spaceBetween={30}
//           keyboard={{
//             enabled: true,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Keyboard, Pagination, Navigation]}
//           className="mySwiper text-white w-full h-full"
//         >
//           <SwiperSlide
//             style={{
//               width: "100%",
//               height: "100vh",
//               backgroundImage: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 10%),linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 20%),linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 20%), url(${slide5})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             className="text-white hero bg-cover bg-no-repeat h-full w-full"
//           >
//             <div className=" pt-40  md:pt-32 hero-overlay bg-opacity-60 flex space-x-5 justify-between">
//               <div className="mx-auto flex flex-col ml-56 text-center mt-12">
//                 <h1 className="first-slide-subtitle mt-20 uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm font-[300]">
//                   Raising money is Easy Now
//                 </h1>
//                 <h1 className="uppercase opacity-75 title-left-margin first-slide-title text-7xl   mb-3  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]">
//                   Join The Journey <br /> Of learning english
//                 </h1>
//                 <div className=" md:mt-0 lg:mt-0">
//                   <Link to="/contact">
//                   <button
//                     type="button"
//                     className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Start a Course
//                   </button>
//                   </Link>
//                   <Link to="/donate">
//                   <button
//                     type="button"
//                     className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-slate-200 text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Join Now
//                   </button>
//                   </Link>
                 
                 
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide
//             style={{
//               width: "100%",
//               height: "100vh",
//               backgroundImage: ` url(${slide1})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             className="text-white hero bg-cover bg-no-repeat h-full w-full"
//           >
//             <div className="pt-40 second-slide-padding-top hero-overlay bg-opacity-70 flex space-x-5 justify-between">
//               <div className="mx-auto text-center mt-24">
//                 <h1 className="example second-slid-subtitle  second-slid-margin uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm font-[300]">
//                   Raising money is Easy Now
//                 </h1>
//                 <h1 className="title-left-margin second-slid-title lg:text-7xl md:text-6xl sm:text-4xl uppercase mb-3 opacity-70  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]">
//                   English learning 
//                   <br />  Platforms
//                 </h1>
              
//                 <button
//                   type="button"
//                   className="text-white mt-8
//                   font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   Start a Project
//                 </button>
//                 <button
//                   type="button"
//                   className=" ml-5 mt-8 button-sm  text-xl font-semibold h-14 w-48 bg-slate-200 text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   See More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide
//             style={{
//               width: "100%",
//               height: "100vh",
//               backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 10%), url(${slide6})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             className="text-white hero bg-cover bg-no-repeat h-full w-full"
//           >
//             <div className="pt-40 items hero-overlay  bg-opacity-70 flex space-x-5  justify-end">
//               <div className="mt-12 flex flex-col items-center mx-auto">
//                 <h1 className="uppercase example font-sans tracking-widest mb-8 text-xl font-[300]">
//                   Raising money is Easy Now
//                 </h1>
//                 <h1 className="lg:text-7xl text-center md:text-6xl sm:text-4xl uppercase mb-3 opacity-90  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]">
//                   Help
//                    To <br /> Learn
//                   English
//                 </h1>
                
//                 <div>
//                 <button
//                   type="button"
//                   className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   Start a Project
//                 </button>
//                 <button
//                   type="button"
//                   className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-white text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   See More
//                 </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//     </div>
//   );
// };

// export default Slider;
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import slide1 from "../../../assets/slider-image/Engish/1.png";
import slide5 from "../../../assets/slider-image/Engish/5.jpg";
import slide6 from "../../../assets/slider-image/Engish/6.jpg";
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from "react-icons/fa";

const Slider = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-pagination-color": "#D9D9D9",
          "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "22px",
          "--swiper-pagination-bullet-horizontal-gap": "8px",
        }}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper text-white w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 10%),linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 20%),linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 20%), url(${slide5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="text-white hero bg-cover bg-no-repeat h-full w-full"
        >
         <div className=" pt-40  md:pt-32 hero-overlay bg-opacity-60 flex space-x-5 justify-between">
             <div className="mx-auto flex flex-col ml-56 text-center mt-12">
                 <h1 className="first-slide-subtitle mt-20 uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm font-[300]">
                   Raising money is Easy Now
                 </h1>
                 <h1 className="uppercase opacity-75 title-left-margin first-slide-title text-7xl   mb-3  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]">
                   Join The Journey <br /> Of learning english
                 </h1>
                 <div className=" md:mt-0 lg:mt-0">
                   <Link to="/contact">
                   <button
                     type="button"
                     className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   >
                     Start a Course
                   </button>
                   </Link>
                  <Link to="/donate">
                  <button
                    type="button"
                    className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-slate-200 text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Join Now
                 </button>
                 </Link>
                 
                 
               </div>
             </div>
           </div> 
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage: ` url(${slide1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="text-white hero bg-cover bg-no-repeat h-full w-full"
        >
         <div className=" pt-40  md:pt-32 hero-overlay bg-opacity-60 flex space-x-5 justify-between">
             <div className="mx-auto flex flex-col ml-56 text-center mt-12">
                 <h1 className="first-slide-subtitle mt-20 uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm font-[300]">
                   Raising money is Easy Now
                 </h1>
                 <h1 className="uppercase opacity-75 title-left-margin first-slide-title text-7xl   mb-3  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]">
                   Join The Journey <br /> Of learning english
                 </h1>
                 <div className=" md:mt-0 lg:mt-0">
                   <Link to="/contact">
                   <button
                     type="button"
                     className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   >
                     Start a Course
                   </button>
                   </Link>
                  <Link to="/donate">
                  <button
                    type="button"
                    className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-slate-200 text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Join Now
                 </button>
                 </Link>
                 
                 
               </div>
             </div>
           </div> 
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 10%), url(${slide6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="text-white hero bg-cover bg-no-repeat h-full w-full"
        >
        <div className=" pt-40  md:pt-32 hero-overlay bg-opacity-60 flex space-x-5 justify-between">
             <div className="mx-auto flex flex-col ml-56 text-center mt-12">
                 <h1 className="first-slide-subtitle mt-20 uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm font-[300]">
                   Raising money is Easy Now
                 </h1>
                 <h1 className="uppercase opacity-75 title-left-margin first-slide-title text-7xl   mb-3  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]">
                   Join The Journey <br /> Of learning english
                 </h1>
                 <div className=" md:mt-0 lg:mt-0">
                   <Link to="/contact">
                   <button
                     type="button"
                     className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   >
                     Start a Course
                   </button>
                   </Link>
                  <Link to="/donate">
                  <button
                    type="button"
                    className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-slate-200 text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Join Now
                 </button>
                 </Link>
                 
                 
               </div>
             </div>
           </div> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

