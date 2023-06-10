import { Carousel } from "react-responsive-carousel";
import img1 from './../../../assets/slider-image/english1.jpg'
import img2 from './../../../assets/slider-image/english2.jpg'
import img3 from './../../../assets/slider-image/english3.jpg'
const Slider = () => {
    return (
        <Carousel>
            <div className="h-[90vh]">
                <img src={img2} />
            </div >
            <div className="h-[90vh]">
                <img src={img1} />
            </div>
            <div className="h-[90vh]">
                <img src={img3} />
            </div>
        </Carousel>
    );
};

export default Slider;