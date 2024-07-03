import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


const Root = () => {
    return (
        <div style={{
            backgroundImage: "url(https://i.postimg.cc/XNgrH41G/blue-border-abstract-gradient-background.jpg)",
          }} className="bg-cover min-h-screen ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;