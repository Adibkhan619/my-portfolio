import { IoMdDownload } from "react-icons/io";
import resume from '../../assets/Md. Ibrahim Khan Adib - Resume .docx.pdf'
const Hero = () => {
    return (
        <div>
                        <div className="hero bg-opacity-0 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24 ">
    <img
      src="./../../public/1714714186487.jpg"
      className="max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold ">Md Ibrahim Khan Adib</h1>
      <h1 className="text-7xl font-bold">Frontend Developer</h1>
      <p className="py-6 poppins">
      As a dedicated Frontend Developer with a passion for problem-solving, I specialize in JavaScript, React, and Node.js, creating dynamic and responsive web applications. My expertise extends to utilizing Tailwind CSS for sleek, modern designs, and leveraging MongoDB and Express.js to develop robust back-end solutions. 
      </p>
      <button className="btn btn-ghost border-gray-500">          
        <a href={resume} download="Md_Ibrahim_Khan_Adib_Resume.pdf" className="flex items-center gap-3 text-lg font-bold">Resume<IoMdDownload className="text-2xl playwrite"></IoMdDownload></a>
        </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;