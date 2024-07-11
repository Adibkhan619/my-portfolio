import icon1 from "../../../public/Icons/pngwing.com (12).png";
import icon2 from "../../../public/Icons/pngwing.com (13).png";
import icon3 from "../../../public/Icons/pngwing.com (15).png";
import icon4 from "../../../public/Icons/pngwing.com (16).png";
import icon5 from "../../../public/Icons/pngwing.com (17).png";
import icon6 from "../../../public/Icons/pngwing.com (18).png";
import icon7 from "../../../public/Icons/pngwing.com (19).png";
import icon8 from "../../../public/Icons/pngwing.com (20).png";
import pin from "../../../public/Icons/pin.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Skills = () => {
    return (
        
      <div>
        <div className=" text-center mx-auto lg:my-16 my-8">
        <div className=" border-dotted mx-5 border-y-4 border-orange-500 " data-aos="flip-down"
        data-aos-duration="1000">
                <h1 className="lg:text-6xl text-4xl font-bold text-center  py-6 poppins text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-700 to-gray-900" >Technologies I Use</h1>
            </div>
           
        </div>
          <>
        <div className="mx-2 my-8">
            <div className="grid lg:grid-cols-4 grid-cols-4 lg:max-w-3xl gap-10 mx-auto " data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="1500">
                <img src={icon1} alt="Shoes" className="lg:w-36 lg:h-36 mr-5" />
                <img src={icon2} alt="Shoes" className="lg:w-32 lg:h-36" />
                <img src={icon3} alt="Shoes" className="lg:w-36 lg:h-36 mr-5" />
                <img src={icon4} alt="Shoes" className="lg:w-36 lg:h-36 mr-5" />
                <img src={icon5} alt="Shoes" className="lg:w-36 lg:h-32 mr-5" />
                <img src={icon6} alt="Shoes" className="lg:w-36 lg:h-36 mr-5" />
                <img src={icon7} alt="Shoes" className="lg:w-36 lg:h-36 mr-5" />
                <img src={icon8} alt="Shoes" className="lg:w-32 lg:h-24 mt-5 mr-5" />
            </div>
            <p className="max-w-3xl mt-10 mx-auto  text-center poppins bg-orange-100 bg-opacity-60 text-lg font-semibold rounded-xl border-dotted p-8 shadow-xl" data-aos="zoom-in-down">
                <img className="w-16 h-16 -top-8 -left-5 absolute " src={pin} alt="" />
                As a dedicated Frontend Developer with a passion for problem-solving, I specialize in JavaScript, React, and Node.js, creating dynamic and responsive web applications. My expertise extends to utilizing Tailwind CSS for sleek, modern designs, and leveraging MongoDB and Express.js to develop robust back-end solutions. I am a passionate learner, continually enhancing my skills to become a proficient MERN Stack Developer. </p>
        </div>
        </>
      </div>
    );
};

export default Skills;
