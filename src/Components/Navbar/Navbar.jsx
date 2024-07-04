import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    const links = (
        <>
            <li className="">
                <Link to="/">Portfolio</Link>
            </li>
            <li className="">
                <Link to="/about">About Me</Link>{" "}
            </li>
            <li className="">
                <Link to="/contact">Contact me</Link>
            </li>
            <li className="">
            <a href="../../assets/Md. Ibrahim Khan Adib - Resume .docx.pdf" download="Md_Ibrahim_Khan_Adib_Resume.pdf" className="">Resume <IoMdDownload ></IoMdDownload></a>
            </li>
        </>
    );

    return (
        <div className="navbar fixed bg-opacity-5 bg-black z-[9]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">{links}</ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    );
};

export default Navbar;
