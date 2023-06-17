
import img1 from "./../../../assets/slider-image/english1.jpg";
import img2 from "./../../../assets/slider-image/english2.jpg";
import img3 from "./../../../assets/slider-image/english3.jpg";
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item h-[90vh] w-full">
          <img src={img2} className="w-full" />
        </div>
        <div id="item2" className="carousel-item h-[90vh] w-full">
          <img src={img1} className="w-full" />
        </div>
        <div id="item3" className="carousel-item h-[90vh] w-full">
          <img src={img3} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Slider;
