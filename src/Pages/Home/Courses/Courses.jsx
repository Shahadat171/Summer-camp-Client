
import course1 from "../../../assets/Basic/1.png"
import course2 from "../../../assets/Basic/2.png"
import course3 from "../../../assets/Basic/3.png"
import course4 from "../../../assets/Basic/6.png"
import course5 from "../../../assets/Basic/7.png"
import course6 from "../../../assets/Basic/5.png"
import { Slide } from "react-awesome-reveal";
import { FaFileSignature, FaVideo } from "react-icons/fa"

const Courses = () => {
  return (
    // <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-0 pt-24 pb-8">
    //   <div className="pr-16">
    //     <h1 className="text-5xl text-slate-950 font-semibold pb-12">
    //       Most trending online courses
    //     </h1>
    //     <p className="text-lg ">
    //       Explore a diverse range of cutting-edge courses on our EdTech
    //       platform, designed to enhance your skills and knowledge in educational
    //       technology. Our carefully curated selection offers practical, hands-on
    //       learning experiences that empower you to thrive in the digital age of
    //       education.Join our community of
    //       passionate learners, unlock new possibilities, and embark on a
    //       transformative learning journey that equips you with the skills to
    //       revolutionize education.
    //     </p>
    //     <div className="mt-12">
    //       <button className="btn btn-primary text-white">View More</button>
    //     </div>
    //   </div>
    //   <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-7 ">
    //     <div className="card w-72 h-52 bg-base-100 shadow-xl image-full">
    //       <figure>
    //         <img src={IELTS} alt="Shoes" />
    //       </figure>
    //       <div className="card-body relative">
    //         <div className="card-actions justify-end absolute bottom-2 left-24 ">
    //           <button className="btn btn-primary">Buy Now</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card w-72 h-52 bg-base-100 shadow-xl image-full">
    //       <figure>
    //         <img src={speaking} alt="Shoes" />
    //       </figure>
    //       <div className="card-body relative">
            
    //         <div className="card-actions justify-end absolute bottom-2 left-24 ">
    //           <button className="btn btn-primary">Buy Now</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card w-72 h-52 bg-base-100 shadow-xl image-full">
    //       <figure>
    //         <img src={tofel} alt="Shoes" />
    //       </figure>
    //       <div className="card-body relative">
           
    //         <div className="card-actions justify-end absolute bottom-2 left-24 ">
    //           <button className="btn btn-primary">Buy Now</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card w-72 h-52 bg-base-100 shadow-xl image-full">
    //       <figure>
    //         <img src={Writing} alt="Shoes" />
    //       </figure>
    //       <div className="card-body relative">
           
    //         <div className="card-actions justify-end absolute bottom-2 left-24 ">
    //           <button className="btn btn-primary">Buy Now</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="mt-28 mb-16">
      <Slide>
      <h1 className="text-4xl font-sans text-black text-center my-16 mb-14 tracking-[0.09em] drop-shadow-2xl font-[700]">
          Most trending online courses
        </h1>
        </Slide>
        <div className="grid grid-cols-3 gap-x-5 gap-y-10 mt-7 mb-7">
          <div className="p-3 hover:shadow-2xl hover:drop-shadow-xl w-96 border-2 shadow-xl">
            <div className=" h-52">
            <img src={course1} className="rounded h-full w-96 object-fill" alt="" />
            </div>
              <h1 className="text-xl my-2 text-center mb-3 font-sans tracking-[0.09em] drop-shadow-2xl font-[700] text-black">Spoken English</h1>
              <div className="flex items-center justify-between my-1">
              <div className="flex items-center justify-start space-x-3">
                <button className=" bg-[#E0F5E2] p-2 flex items-center justify-center rounded font-[400]"><FaVideo className="mr-1 text-[#27B737]"></FaVideo><span className="text-sm opacity-90">50 Classes</span></button>
              <button className=" bg-[#EFE1F5] p-2 flex items-center justify-center rounded font-[400]"><FaFileSignature className="mr-1 text-[#8F41B0]"></FaFileSignature><span className="text-sm opacity-90">70 Exams</span></button>
              </div>
              <button className="bg-[#FFEAE3] rounded p-1 px-2 font-semibold">$ <span className="text-[#FF5722] font-bold">800</span></button>
              </div>
          </div>
          <div className="p-3 hover:shadow-2xl hover:drop-shadow-xl w-96 border-2 shadow-xl">
            <div className=" h-52">
            <img src={course2} className="rounded h-full w-96 object-fill" alt="" />
            </div>
              <h1 className="text-xl my-2 text-center mb-3 font-sans tracking-[0.09em] drop-shadow-2xl font-[700] text-black">Spoken English</h1>
              <div className="flex items-center justify-between my-1">
              <div className="flex items-center justify-start space-x-3">
                <button className=" bg-[#E0F5E2] p-2 flex items-center justify-center rounded font-[400]"><FaVideo className="mr-1 text-[#27B737]"></FaVideo><span className="text-sm opacity-90">40 Classes</span></button>
              <button className=" bg-[#EFE1F5] p-2 flex items-center justify-center rounded font-[400]"><FaFileSignature className="mr-1 text-[#8F41B0]"></FaFileSignature><span className="text-sm opacity-90">20 Exams</span></button>
              </div>
              <button className="bg-[#FFEAE3] rounded p-1 px-2 font-semibold">$ <span className="text-[#FF5722] font-bold">500</span></button>
              </div>
          </div>
          <div className="p-3 hover:shadow-2xl hover:drop-shadow-xl w-96 border-2 shadow-xl">
            <div className=" h-52">
            <img src={course3} className="rounded h-full w-96 object-fill" alt="" />
            </div>
              <h1 className="text-xl my-2 text-center mb-3 font-sans tracking-[0.09em] drop-shadow-2xl font-[700] text-black">General English</h1>
              <div className="flex items-center justify-between my-1">
              <div className="flex items-center justify-start space-x-3">
                <button className=" bg-[#E0F5E2] p-2 flex items-center justify-center rounded font-[400]"><FaVideo className="mr-1 text-[#27B737]"></FaVideo><span className="text-sm opacity-90">25 Classes</span></button>
              <button className=" bg-[#EFE1F5] p-2 flex items-center justify-center rounded font-[400]"><FaFileSignature className="mr-1 text-[#8F41B0]"></FaFileSignature><span className="text-sm opacity-90">10 Exams</span></button>
              </div>
              <button className="bg-[#FFEAE3] rounded p-1 px-2 font-semibold">$ <span className="text-[#FF5722] font-bold">350</span></button>
              </div>
          </div>
          <div className="p-3 hover:shadow-2xl hover:drop-shadow-xl w-96 border-2 shadow-xl">
            <div className=" h-52">
            <img src={course4} className="rounded h-full w-96 object-fill" alt="" />
            </div>
              <h1 className="text-xl my-2 text-center mb-3 font-sans tracking-[0.09em] drop-shadow-2xl font-[700] text-black">Spoken English</h1>
              <div className="flex items-center justify-between my-1">
              <div className="flex items-center justify-start space-x-3">
                <button className=" bg-[#E0F5E2] p-2 flex items-center justify-center rounded font-[400]"><FaVideo className="mr-1 text-[#27B737]"></FaVideo><span className="text-sm opacity-90">15 Classes</span></button>
              <button className=" bg-[#EFE1F5] p-2 flex items-center justify-center rounded font-[400]"><FaFileSignature className="mr-1 text-[#8F41B0]"></FaFileSignature><span className="text-sm opacity-90">15 Exams</span></button>
              </div>
              <button className="bg-[#FFEAE3] rounded p-1 px-2 font-semibold">$ <span className="text-[#FF5722] font-bold">130</span></button>
              </div>
          </div>
          <div className="p-3 hover:shadow-2xl hover:drop-shadow-xl w-96 border-2 shadow-xl">
            <div className=" h-52">
            <img src={course5} className="rounded h-full w-96 object-fill" alt="" />
            </div>
              <h1 className="text-xl my-2 text-center mb-3 font-sans tracking-[0.09em] drop-shadow-2xl font-[700] text-black">Grammatical English</h1>
              <div className="flex items-center justify-between my-1">
              <div className="flex items-center justify-start space-x-3">
                <button className=" bg-[#E0F5E2] p-2 flex items-center justify-center rounded font-[400]"><FaVideo className="mr-1 text-[#27B737]"></FaVideo><span className="text-sm opacity-90">90 Classes</span></button>
              <button className=" bg-[#EFE1F5] p-2 flex items-center justify-center rounded font-[400]"><FaFileSignature className="mr-1 text-[#8F41B0]"></FaFileSignature><span className="text-sm opacity-90">20 Exams</span></button>
              </div>
              <button className="bg-[#FFEAE3] rounded p-1 px-2 font-semibold">$ <span className="text-[#FF5722] font-bold">450</span></button>
              </div>
          </div>
          <div className="p-3 hover:shadow-2xl hover:drop-shadow-xl w-96 border-2 shadow-xl">
            <div className=" h-52">
            <img src={course6} className="rounded h-full w-96 object-fill" alt="" />
            </div>
              <h1 className="text-xl my-2 text-center mb-3 font-sans tracking-[0.09em] drop-shadow-2xl font-[700] text-black">Native English</h1>
              <div className="flex items-center justify-between my-1">
              <div className="flex items-center justify-start space-x-3">
                <button className=" bg-[#E0F5E2] p-2 flex items-center justify-center rounded font-[400]"><FaVideo className="mr-1 text-[#27B737]"></FaVideo><span className="text-sm opacity-90">65 Classes</span></button>
              <button className=" bg-[#EFE1F5] p-2 flex items-center justify-center rounded font-[400]"><FaFileSignature className="mr-1 text-[#8F41B0]"></FaFileSignature><span className="text-sm opacity-90">50 Exams</span></button>
              </div>
              <button className="bg-[#FFEAE3] rounded p-1 px-2 font-semibold">$ <span className="text-[#FF5722] font-bold">500</span></button>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Courses;
