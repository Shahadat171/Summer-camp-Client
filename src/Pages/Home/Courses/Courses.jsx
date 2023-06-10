import IELTS from "./../../../assets/courses/IELTS.png";
import speaking from "./../../../assets/courses/speaking.png";
import tofel from "./../../../assets/courses/tofel.png";
import Writing from "./../../../assets/courses/Writing.webp";

const Courses = () => {
  return (
    <div className="grid grid-cols-2 gap-y-0 pt-24 pb-8">
      <div className="pr-16">
        <h1 className="text-5xl text-slate-950 font-semibold pb-12">
          Most trending online courses
        </h1>
        <p className="text-lg ">
          Explore a diverse range of cutting-edge courses on our EdTech
          platform, designed to enhance your skills and knowledge in educational
          technology. Our carefully curated selection offers practical, hands-on
          learning experiences that empower you to thrive in the digital age of
          education.Join our community of
          passionate learners, unlock new possibilities, and embark on a
          transformative learning journey that equips you with the skills to
          revolutionize education.
        </p>
        <div className="mt-12">
          <button className="btn btn-primary text-white">View More</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-0 gap-y-7 ">
        <div className="card w-72 h-52 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={IELTS} alt="Shoes" />
          </figure>
          <div className="card-body relative">
            <div className="card-actions justify-end absolute bottom-2 left-24 ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-72 h-52 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={speaking} alt="Shoes" />
          </figure>
          <div className="card-body relative">
            
            <div className="card-actions justify-end absolute bottom-2 left-24 ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-72 h-52 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={tofel} alt="Shoes" />
          </figure>
          <div className="card-body relative">
           
            <div className="card-actions justify-end absolute bottom-2 left-24 ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-72 h-52 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={Writing} alt="Shoes" />
          </figure>
          <div className="card-body relative">
           
            <div className="card-actions justify-end absolute bottom-2 left-24 ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
