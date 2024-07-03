

const About = () => {
    return (
        <div  className="pt-24 lg:mx-24 text-lg flex gap-16">
            <img src="../../public/1714645679948.jpg" className="w-96 h-96 rounded-lg shadow-md"  alt="" />
            <div className="space-y-8">
                <h1><span className="text-3xl font-bold">Hello!</span></h1>
                  <h1>
             I am Md Ibrahim Khan Adib, a passionate web developer from Dhaka, Bangladesh. I am 27 years old and have one year of experience working in the web development field. I have completed my web development course from Programming Hero and am now looking for exciting work opportunities to further hone my skills and contribute to innovative projects.
            </h1>

            <h1 className="text-3xl font-bold">My Skills</h1>
            <ul className="space-y-3">
                <li><span  className="font-bold">JavaScript :</span> Proficient in JavaScript, I build interactive and dynamic web applications with ease, ensuring a smooth user experience.</li>
                <li><span  className="font-bold">React:</span> Utilizing the power of React, I create responsive and efficient user interfaces, emphasizing component-based architecture and state management.</li>
                <li> <span  className="font-bold">Node.js: </span>With Node.js, I develop scalable back-end solutions, focusing on creating server-side applications and APIs.</li>
                <li><span  className="font-bold">Tailwind CSS:</span> I design sleek and modern user interfaces using Tailwind CSS, bringing a unique and professional look to my projects.</li>
                <li><span  className="font-bold">MongoDB: </span>Skilled in MongoDB, I manage data efficiently, employing a flexible NoSQL database to handle diverse data requirements.</li>
                <li><span  className="font-bold">Express.js:</span> Leveraging Express.js, I build robust back-end frameworks that ensure fast and secure server-side operations.</li>
                <li><span  className="font-bold">Programming:</span> I have a solid foundation in programming principles, enabling me to tackle complex problems and implement efficient solutions.</li>
                <li><span  className="font-bold">Problem Solving:</span> I enjoy solving problems and thrive on finding innovative solutions to challenging tasks.</li>
                <li><span  className="font-bold">Passionate Learner: </span>Committed to continuous learning, I stay updated with the latest technologies and trends in web development to keep my skills sharp and relevant.</li>
            </ul>
            <p>With my diverse skill set and a strong foundation in web development, I am excited to take on new challenges and contribute to impactful projects. Let us connect and create something amazing together!</p>
            </div>
          
        </div>
    );
};

export default About;