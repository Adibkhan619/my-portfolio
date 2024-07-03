
import Certification from "./Certification/Certification";
import Hero from "./Hero/Hero";
import MyProjects from "./MyProjects/MyProjects";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div  >
            {/* <h1 className="">Md Ibrahim Khan Adib</h1> */}
            <Hero></Hero>
            <div className="lg:mx-24">
                <Skills></Skills>
                <MyProjects></MyProjects>
                <Certification></Certification>
            </div>

           
        </div>
    );
};

export default Home;
