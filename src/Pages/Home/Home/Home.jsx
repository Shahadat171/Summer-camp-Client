import PopularClasses from "../PopularCalsses/PopularClasses";
import Slider from "../Slider/Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;