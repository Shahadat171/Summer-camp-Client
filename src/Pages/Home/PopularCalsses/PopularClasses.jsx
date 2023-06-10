import grammer from "./../../../assets/popular-classes/grammer.png";
import listening from "./../../../assets/popular-classes/listening.png";
import sentencStucture from "./../../../assets/popular-classes/sentence structure.png";
import speaking from "./../../../assets/popular-classes/speaking.png";
import spelling from "./../../../assets/popular-classes/spelling.png";
import writing from "./../../../assets/popular-classes/writng.png";
import { FaEye } from "react-icons/fa";
const PopularClasses = () => {
  return (
    <div className="py-8 text-center">
      <h2 className=" font-semibold text-slate-500 text-center py-8">
        {" "}
        <span className="text-4xl">
          {" "}
          Exlpore Some of our <br />
        </span>{" "}
        <span className="text-3xl"> Extraordinary classes</span>{" "}
      </h2>
      <div className="grid grid-cols-3 gap-y-5">
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className=" h-52 " src={grammer} />
            </figure>
            <div className="card-body">
              <div className="flex justify-between ">
              <h2 className="text-xl font-semibold">Basic grammar class</h2>
              <div className="flex items-center gap-x-2">
                <FaEye></FaEye>
                <h1>1053</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className=" h-52 " src={listening} alt="Shoes" />
            </figure>
            <div className="card-body">
            <div className="flex justify-between ">
              <h2 className="text-xl font-semibold">Basic grammar class</h2>
              <div className="flex items-center gap-x-2">
                <FaEye></FaEye>
                <h1>958</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className=" h-52 " src={sentencStucture} alt="Shoes" />
            </figure>
            <div className="card-body">
            <div className="flex justify-between ">
              <h2 className="text-xl font-semibold">Basic sentence making class</h2>
              <div className="flex items-center gap-x-2">
                <FaEye></FaEye>
                <h1>875</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className=" h-52 " src={writing} alt="Shoes" />
            </figure>
            <div className="card-body">
            <div className="flex justify-between ">
              <h2 className="text-xl font-semibold">Basic writing class</h2>
              <div className="flex items-center gap-x-2">
                <FaEye></FaEye>
                <h1>821</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className=" h-52 " src={spelling} alt="Shoes" />
            </figure>
            <div className="card-body">
            <div className="flex justify-between ">
              <h2 className="text-xl font-semibold">Basic spelling class</h2>
              <div className="flex items-center gap-x-2">
                <FaEye></FaEye>
                <h1>798</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className=" h-52 " src={speaking} alt="Shoes" />
            </figure>
            <div className="card-body">
            <div className="flex justify-between ">
              <h2 className="text-xl font-semibold">Basic speaking class</h2>
              <div className="flex items-center gap-x-2">
                <FaEye></FaEye>
                <h1>765</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
