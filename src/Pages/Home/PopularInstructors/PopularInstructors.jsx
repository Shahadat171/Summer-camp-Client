import ins1 from "./../../../assets/popular-instructor/ins1.jpg";
import ins2 from "./../../../assets/popular-instructor/ins2.jpg";
import ins3 from "./../../../assets/popular-instructor/ins3.jpg";
import ins4 from "./../../../assets/popular-instructor/ins4.jpg";
import ins5 from "./../../../assets/popular-instructor/ins5.jpg";
import ins6 from "./../../../assets/popular-instructor/ins6.jpg";
const PopularInstructors = () => {
  return (
    <div>
      <h2 className=" font-semibold text-slate-500 text-center pb-12 pt-24">
        {" "}
        <span className="text-4xl">
          {" "}
          Unlock Your Potential
          <br />
        </span>{" "}
        <span className="text-3xl">
          Join Our Inspiring Community of Teachers and Students
        </span>{" "}
      </h2>
      <div className="grid grid-cols-3 gap-y-5">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img className=" opacity-40 z-10" src={ins1} alt="Shoes" />
            </figure>
            <div className="card-body relative">
              <h2 className="my-auto absolute bottom-5 left-10 text-slate-300 text-3xl font-bold">
                7k+ Enrolled
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img className=" opacity-40 z-10" src={ins6} alt="Shoes" />
              </figure>
              <div className="card-body relative">
                <h2 className="my-auto absolute bottom-5 left-10 text-slate-300 text-3xl font-bold">
                  6k+ Enrolled
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img className=" opacity-40 z-10" src={ins2} alt="Shoes" />
              </figure>
              <div className="card-body relative">
                <h2 className="my-auto absolute bottom-5 left-10 text-slate-300 text-3xl font-bold">
                  5k+ Enrolled
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img className=" opacity-40 z-10" src={ins3} alt="Shoes" />
              </figure>
              <div className="card-body relative">
                <h2 className="my-auto absolute bottom-5 left-10 text-slate-300 text-3xl font-bold">
                  4k+ Enrolled
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img className=" opacity-40 z-10" src={ins4} alt="Shoes" />
              </figure>
              <div className="card-body relative">
                <h2 className="my-auto absolute bottom-5 left-10 text-slate-300 text-3xl font-bold">
                  3k+ Enrolled
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img className=" opacity-40 z-10" src={ins5} alt="Shoes" />
              </figure>
              <div className="card-body relative">
                <h2 className="my-auto absolute bottom-5 left-10 text-slate-300 text-3xl font-bold">
                  2k+ Enrolled
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
