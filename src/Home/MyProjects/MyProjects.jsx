import img1 from "../../../public/projectImg/project1/BannerJPG.jpg";
import img2 from "../../../public/projectImg/project1/dashboard- surveyor.jpg";
import img3 from "../../../public/projectImg/project1/admin - all surveys.jpg";
import img4 from "../../../public/projectImg/project1/how.jpg";
import img5 from "../../../public/projectImg/project2/Capture1.jpg";
import img6 from "../../../public/projectImg/project2/Capture6.jpg";
import img7 from "../../../public/projectImg/project2/Capture4JPG.jpg";
import img8 from "../../../public/projectImg/project2/Capture8.jpg";
import img9 from "../../../public/projectImg/project3/Capturesd.jpg";
import img10 from "../../../public/projectImg/project3/Capture.jpg";
import img11 from "../../../public/projectImg/project3/screencapture-tourism-management-4fb05-web-app-addTouristSpot-2024-05-03-15_26_29.jpg";
import img12 from "../../../public/projectImg/project3/screencapture-tourism-management-4fb05-web-app-login-2024-05-03-15_24_49.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowForward,  IoMdSettings } from "react-icons/io";

const MyProjects = () => {
    return (
        <div className="lg:space-y-16 space-y-4 lg:mt-24 mt-10">
            <div className=" border-y-4 border-dotted border-orange-500">
                <h1 className="lg:text-6xl text-4xl font-bold text-center py-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-700 to-gray-900">My Projects</h1>
            </div>
            <div className="card lg:p-8 p-4 flex justify-center gap-10 lg:card-side bg-sky-50 bg-opacity-70 shadow-xl">
                <div className="grid gap-5 grid-cols-2">
                    <img className="lg:w-72 border rounded-xl shadow-lg" src={img1} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" src={img2} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" src={img3} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg"src={img4} alt="Album" />
                </div>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-3xl font-bold">Feedback Pro <span className="text-xl"> (Survey Management Website)</span></h2>
                    <p className="mt-5">Feedback Pro is a simple, elegant and easy to use website to conduct personalized survey. A surveyor can post a survey or question in the website and monitor feedback from the users. The website is structured for 4 types of users : 1) Admin 2) Surveyor 3) User 4)Pro-user each having different access permissions and roles.</p>

                    <ul className=" lg:flex gap-5 space-x-4">
                            <li className="flex items-center gap-2"><IoMdSettings className="text-sky-400"></IoMdSettings> Javascript</li>
                            <li className="flex items-center gap-2"><IoMdSettings></IoMdSettings>Node.js</li>
                            <li className="flex items-center gap-2"><IoMdSettings className="text-sky-400"></IoMdSettings>React</li>
                            <li className="flex items-center gap-2"><IoMdSettings></IoMdSettings>MongoDB</li>
                            <li className="flex items-center gap-2"><IoMdSettings className="text-sky-400"></IoMdSettings>TailwindCSS</li>
                        </ul>
                    <div className="card-actions justify-end">
                       
                        <Link to="https://survey-application-1c5a9.web.app/"><button className="btn mt-5 bg-sky-300 shadow-sm">Go to webpage<IoIosArrowForward></IoIosArrowForward></button></Link>
                        
                    </div>
                </div>
            </div>
            <div className="card p-4 lg:p-8  justify-center gap-10 lg:card-side bg-green-50 bg-opacity-70 shadow-xl">
                <div className="grid gap-5 grid-cols-2">
                    <img className="lg:w-72 border rounded-xl shadow-lg" src={img5} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" src={img6} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" src={img7} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg"src={img8} alt="Album" />
                </div>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-3xl font-bold">Flavor Paradise <span className="text-xl">(Restaurant Management Website)</span></h2>
                    <p className="mt-5">                     
                        This website serves as a management platform of a restaurant, a glossary for the cooking enthusiasts, and a marketplace for the customers. Registered Users can add their unique food items with personalized recipe and publish them in the website.
                        </p>

                        <ul className=" lg:flex gap-5 space-x-4">
                            <li className="flex items-center gap-2"><IoMdSettings className="text-green-500"></IoMdSettings> Javascript</li>
                            <li className="flex items-center gap-2"><IoMdSettings></IoMdSettings>Node.js</li>
                            <li className="flex items-center gap-2"><IoMdSettings className="text-green-500"></IoMdSettings>React</li>
                            <li className="flex items-center gap-2"><IoMdSettings></IoMdSettings>MongoDB</li>
                            <li className="flex items-center gap-2"><IoMdSettings className="text-green-500"></IoMdSettings>TailwindCSS</li>
                        </ul>
                    <div className="card-actions justify-end"></div>

                    <div className="card-actions justify-end">
                        <Link to="https://restaurant-management-we-b1988.web.app/"><button className="btn mt-5 bg-green-300 shadow-sm">Go to webpage<IoIosArrowForward></IoIosArrowForward></button></Link>
                        
                    </div>
                </div>
            </div>
            <div className="card p-4 lg:p-8  justify-center gap-10 lg:card-side bg-red-50 bg-opacity-70 shadow-xl">
                <div className="grid gap-5 grid-cols-2">
                    <img className="lg:w-72 border rounded-xl shadow-lg" src={img9} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" src={img10} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" src={img11} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg"src={img12} alt="Album" />
                </div>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-3xl font-bold">Wonder Seeker <span className="text-xl">(Tourism Management Website)</span></h2>
                    <p className="mt-5">
                    This website is a good place for travel enthusiasts who want to learn about popular tourist destinations across 6 countries of South East Asia including Bangladesh, Malaysia, Indonesia, Bhutan, Cambodia and Philippines. 
                    </p>

                    <ul className=" lg:flex gap-5 space-x-4">
                            <li className="flex items-center gap-2"><IoMdSettings className="text-red-500"></IoMdSettings> Javascript</li>
                            <li className="flex items-center gap-2"><IoMdSettings></IoMdSettings>Node.js</li>
                            <li className="flex items-center gap-2"><IoMdSettings className="text-red-500"></IoMdSettings>React</li>
                            <li className="flex items-center gap-2"><IoMdSettings></IoMdSettings>MongoDB</li>
                            <li className="flex items-center gap-2"><IoMdSettings className="text-red-500"></IoMdSettings>TailwindCSS</li>
                        </ul>
                    <div className="card-actions justify-end">

                    </div>
                    <div className="card-actions justify-end">
                        <Link to="https://restaurant-management-we-b1988.web.app/"><button className="btn mt-5 bg-red-400 shadow-sm">Go to webpage<IoIosArrowForward></IoIosArrowForward></button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
