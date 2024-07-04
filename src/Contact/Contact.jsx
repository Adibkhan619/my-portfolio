/* eslint-disable react/no-unescaped-entities */

const Contact = () => {
    return (
        <div className="pt-24 items-center lg:gap-10 lg:mx-24 justify-around flex flex-col lg:flex-row-reverse ">
            <div className="lg:w-1/2 space-y-5 mx-5">
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
            <div className="my-10">
                     <div className="flex items-center gap-3">
                    <img className="w-12 h-12 ml-3" src="../../public/Icons/linkedin.png" alt="" />
                    <p><a href="https://www.linkedin.com/in/adibkhan101/">adibkhan101</a></p>
                    </div>
                     <div className="flex items-center gap-3">
                    <img className="w-16 h-16" src="../../public/Icons/github.png" alt="" />
                    <p><a href="https://www.facebook.com/adib.khan.619/">adibkhan619</a></p>
                    </div>
                     <div className="flex items-center gap-3">
                    <img className="w-16 h-16" src="../../public/Icons/facebook.png" alt="" />
                    <p><a href="https://www.facebook.com/adib.khan.619/">Adib Khan</a></p>
                    </div>
                     <div className="flex items-center gap-3">
                    <img className="w-16 h-16" src="../../public/Icons/whatsapp.png" alt="" />
                    <p>+880 1875 957 809</p>
                    </div>
                     <div className="flex items-center gap-3">
                    <img className="w-10 h-10 ml-3" src="../../public/Icons/pngwing.com (14).png" alt="" />
                    <p>work.adibkhan@gmail.com</p>
                    </div>
            </div>
        </div>
    );
};

export default Contact;
