/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="pt-24 items-center lg:gap-10 lg:mx-24 lg:justify-around flex flex-col lg:flex-row-reverse " >
            <div className="lg:w-1/2 space-y-5 mx-5" data-aos="flip-down" data-aos-duration="2000">
                <h1 className="text-4xl font-bold">Get in Touch</h1>
                <p>
                    I'd love to hear from you! Whether you have a project in
                    mind, need assistance with web development, or just want to
                    connect, feel free to reach out. I'm always open to
                    discussing new opportunities and collaborations. Let us work
                    together to bring your ideas to life and create something
                    amazing. Looking forward to connecting with you!
                </p>
            </div>
            <div className="my-12 flex flex-col" data-aos="zoom-out-up" data-aos-duration="1000">
                     <Link to="https://www.linkedin.com/in/adibkhan101/" >
                     <div className=" flex  items-center gap-3 ">
                    <img className="w-12 h-12 ml-3" src="/Icons/linkedin.png" alt="" />
                    <p>Adib Khan</p>
                    </div>
                    </Link>

                     <Link to="https://www.facebook.com/adib.khan.619/" ><div className="flex items-center gap-3">
                    <img className="w-16 h-16" src="/Icons/github.png" alt="" />
                    <p>adibkhan619</p>
                    </div></Link>

                    <Link to="https://www.facebook.com/adib.khan.619/">
                    <div className="flex items-center gap-3">
                    <img className="w-14 h-14" src="/Icons/facebook.png" alt="" />
                    <p>Adib Khan</p>
                    </div>
                    </Link>
                     
                     <div className="flex items-center gap-3">
                    <img className="w-14 h-14" src="/Icons/whatsapp.png" alt="" />
                    <p>+880 1875 957 809</p>
                    </div>
                     <div className="flex mt-2 items-center gap-4">
                    <img className="w-10 h-8 ml-2" src="/Icons/pngwing.com (14).png" alt="" />
                    <p>work.adibkhan@gmail.com</p>
                    </div>
            </div>
        </div>
    );
};

export default Contact;
