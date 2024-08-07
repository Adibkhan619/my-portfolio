import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Certification = () => {
    return (
        <div className="lg:my-24 my-5 mx-5"  >
              <div className=" border-dotted border-orange-400 border-y-4 my-10" data-aos="flip-down">
                <h1 className="lg:text-6xl text-4xl font-bold text-center py-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-700 to-gray-900" >My Achievements</h1>
            </div>
            <img className="w-[800px] mx-auto shadow-2xl" data-aos="fade-down"
        data-aos-duration="1000" src="/Capture.PNG" alt="" />
        </div>
    );
};

export default Certification;