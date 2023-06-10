import Courses from "../Courses/Courses";
import PopularClasses from "../PopularCalsses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Courses></Courses>
        </div>
    );
};

export default Home;