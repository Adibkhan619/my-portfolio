import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const Root = () => {
    return (
        <div
            style={{
                backgroundImage:
                    "url(https://i.postimg.cc/fL6JmgkZ/73896781-malmm-9.jpg)",
            }}
            className=" h-full w-full bg-cover bg-fixed bg-no-repeat "
        >
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-308px)]">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;
