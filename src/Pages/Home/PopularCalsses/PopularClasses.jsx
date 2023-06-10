import grammer from "./../../../assets/popular-classes/grammer.png";
import listening from "./../../../assets/popular-classes/listening.png";
import sentencStucture from "./../../../assets/popular-classes/sentence structure.png";
import speaking from "./../../../assets/popular-classes/speaking.png";
import spelling from "./../../../assets/popular-classes/spelling.png";
import writing from "./../../../assets/popular-classes/writng.png";
const PopularClasses = () => {
  return (
    <div className="py-8 text-center">
      <h2 className=" font-semibold text-slate-500 text-center">
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
              <img
                className=" h-52 "
                src={grammer}
              />
            </figure>
            <div className="card-body">
            
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure >
              <img
                 className=" h-52 "
                src={listening}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure >
              <img
                className=" h-52 "
                src={sentencStucture}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                 className=" h-52 "
                src={writing}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className=" h-52 "
                src={spelling}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure >
              <img
                 className=" h-52 "
                src={speaking}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
