
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <div className=''><Outlet></Outlet></div>
         <div className=' bg-gradient-to-r from-[#03387B] to-[#048F87] w-full'><Footer></Footer></div>
        </div>
    );
};

export default Main;