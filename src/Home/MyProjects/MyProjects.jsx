import img1 from "../../../public/projectImg/project1/Capture1.jpg";
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
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const MyProjects = () => {
    return (
        <div className="lg:space-y-16 space-y-4 lg:mt-24 mt-10">
            <div data-aos="flip-down"
        data-aos-duration="1000" className=" border-y-4 border-dotted border-orange-500 mx-5">
                <h1 className="lg:text-6xl text-4xl font-bold text-center py-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-700 to-gray-900">My Projects</h1>
            </div>
            <div className="card lg:p-8 p-4 flex justify-center  lg:card-side bg-sky-50 bg-opacity-70 shadow-xl gap-1 lg:gap-10
            "
            data-aos="fade-up">
                <div className="lg:grid gap-5 lg:grid-cols-2 flex flex-col">
                    <img className="lg:w-72 border rounded-xl shadow-lg" data-aos="flip-up"  src={img1} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" data-aos="flip-up"  src={img2} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" data-aos="flip-up"  src={img3} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg hidden lg:flex" data-aos="flip-up" src={img4} alt="Album" />
                </div>
                <div className="card-body lg:w-1/2">
                    <h2 className=" text-3xl font-bold ">Feedback Pro <span className="text-xl"> (Survey Management Website)</span></h2>
                    <p className="mt-5" data-aos="flip-up">Feedback Pro is a simple, elegant and easy to use website to conduct personalized survey. A surveyor can post a survey or question in the website and monitor feedback from the users. The website is structured for 4 types of users : 1) Admin 2) Surveyor 3) User 4)Pro-user each having different access permissions and roles.</p>

                    <ul className=" lg:flex gap-5 lg:space-x-4 ">
                            <li className="flex  items-center gap-2" data-aos="flip-up"><IoMdSettings className="text-sky-400"></IoMdSettings> Javascript</li>
                            <li className="flex  items-center gap-2" data-aos="flip-up"><IoMdSettings></IoMdSettings>Node.js</li>
                            <li className="flex  items-center gap-2" data-aos="flip-up"><IoMdSettings className="text-sky-400"></IoMdSettings>React</li>
                            <li className="flex  items-center gap-2" data-aos="flip-up"><IoMdSettings></IoMdSettings>MongoDB</li>
                            <li className="flex justify-start items-center gap-2" data-aos="flip-up"><IoMdSettings className="text-sky-400"></IoMdSettings>TailwindCSS</li>
                        </ul>
                    <div className="card-actions justify-end ">
                       
                        <Link to="https://survey-application-1c5a9.web.app/"><button className="btn mt-5 bg-sky-300 shadow-sm" data-aos="fade-right"
        data-aos-duration="1000">Go to webpage<IoIosArrowForward></IoIosArrowForward></button></Link>
                        
                    </div>
                </div>
            </div>
            <div className="card p-4 lg:p-8  justify-center gap-2 lg:gap-10 lg:card-side bg-green-50 bg-opacity-70 shadow-xl"  data-aos="fade-up">
                <div className="lg:grid gap-5 lg:grid-cols-2 flex flex-col">
                    <img className="lg:w-72 border rounded-xl shadow-lg"  data-aos="flip-up" src={img5} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" data-aos="flip-up" src={img6} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" data-aos="flip-up" src={img7} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg hidden lg:flex" data-aos="flip-up" src={img8} alt="Album" />
                </div>
                <div className="card-body lg:w-1/2">
                    <h2 className=" text-3xl font-bold">Flavor Paradise <span className="text-xl">(Restaurant Management Website)</span></h2>
                    <p className="mt-5" data-aos="flip-up">                     
                        This website serves as a management platform of a restaurant, a glossary for the cooking enthusiasts, and a marketplace for the customers. Registered Users can add their unique food items with personalized recipe and publish them in the website.
                        </p>

                        <ul className=" lg:flex gap-5 lg:space-x-4">
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings className="text-green-500"></IoMdSettings> Javascript</li>
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings></IoMdSettings>Node.js</li>
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings className="text-green-500"></IoMdSettings>React</li>
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings></IoMdSettings>MongoDB</li>
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings className="text-green-500"></IoMdSettings>TailwindCSS</li>
                        </ul>
                    <div className="card-actions justify-end"></div>

                    <div className="card-actions justify-end">
                        <Link to="https://restaurant-management-we-b1988.web.app/"><button className="btn mt-5 bg-green-300 shadow-sm" data-aos="fade-right"
        data-aos-duration="1000">Go to webpage<IoIosArrowForward></IoIosArrowForward></button></Link>
                        
                    </div>
                </div>
            </div>
            <div className="card p-4 lg:p-8  justify-center gap-1 lg:gap-12 lg:card-side bg-red-50 bg-opacity-70 shadow-xl"  data-aos="fade-up">
                <div className="lg:grid gap-5 lg:grid-cols-2 flex flex-col">
                    <img className="lg:w-72 border rounded-xl shadow-lg" data-aos="flip-up"  src={img9} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" data-aos="flip-up"  src={img10} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg hidden lg:flex" data-aos="flip-up"  src={img11} alt="Album" />
                    <img className="lg:w-72 border rounded-xl shadow-lg" data-aos="flip-up" src={img12} alt="Album" />
                </div>
                <div className="card-body lg:w-1/2">
                    <h2 className=" text-3xl font-bold">Wonder Seeker <span className="text-xl">(Tourism Management Website)</span></h2>
                    <p className="mt-5" data-aos="flip-up">
                    This website is a good place for travel enthusiasts who want to learn about popular tourist destinations across 6 countries of South East Asia including Bangladesh, Malaysia, Indonesia, Bhutan, Cambodia and Philippines. 
                    </p>

                    <ul className=" lg:flex gap-5 lg:space-x-4">
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings className="text-red-500"></IoMdSettings> Javascript</li>
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings></IoMdSettings>Node.js</li>
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings className="text-red-500"></IoMdSettings>React</li>
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings></IoMdSettings>MongoDB</li>
                            <li data-aos="flip-up" className="flex items-center gap-2"><IoMdSettings className="text-red-500"></IoMdSettings>TailwindCSS</li>
                        </ul>
                    <div className="card-actions justify-end">

                    </div>
                    <div className="card-actions justify-end">
                        <Link to="https://restaurant-management-we-b1988.web.app/"><button className="btn mt-5 bg-red-400 shadow-sm" data-aos="fade-right"
        data-aos-duration="1000">Go to webpage<IoIosArrowForward></IoIosArrowForward></button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
