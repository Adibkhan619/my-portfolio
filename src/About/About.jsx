

const About = () => {
    return (
        <div  className="pt-24 lg:mx-24 text-lg lg:flex lg:flex-row flex-col mx-7 gap-16">
            <img src="../../public/1714645679948.jpg" className="w-96 h-96 rounded-lg shadow-md mb-10"  alt="" />
            <div className="space-y-8">
                <h1><span className="text-4xl font-bold ">Hello!</span></h1>
                  <h1>
             I am Md Ibrahim Khan Adib, a passionate web developer from Dhaka, Bangladesh. I am 27 years old and have one year of experience working in the web development field. I have completed my web development course from Programming Hero and am now looking for exciting work opportunities to further hone my skills and contribute to innovative projects.
            </h1>
        <div className="divider"></div>
{/* experiences */}
        <div>
        <div >
        <div className="space-y-3">
            <h2 className="text-3xl font-bold">Experience</h2>

            <h3 className="text-xl font-bold pt-10">Mavenir, Texas, USA — Analyst</h3>
            <p>November 2022 - April 2023 (Remote office)</p>
            <ul className="list-disc">
                <li>Fraud prevention and management for mobile network operators like Grameenphone, Robi and Banglalink in Bangladesh.</li>
                <li>Monitoring and identifying potential fraud senders via text messages, investigating the numbers, blocking the sender, and storing the data.</li>
                <li>Reporting fraudulent activities to a team and supervisor on a daily basis.</li>
                <li>Generating weekly metrics health check reports in Excel.</li>
            </ul>

            <h3   className="text-xl font-bold pt-10">Esperer Global, Banani, Dhaka — Auditor</h3>
            <p>January 2022 - October 2022</p>
            <ul className="list-disc">
                <li>Verify the accuracy of financial records on warehouses.</li>
                <li>Identify potential issues in warehouses across the country and recommend solutions.</li>
                <li>Collect overdue payments, investigate theft and robbery cases and report to law enforcement.</li>
            </ul>
        </div>

        <div className="divider my-10">   </div>
        <div >
            <h2 className="text-3xl font-bold">Education</h2>

            <h3 className="text-xl font-bold pt-10">Programming Hero, Dhaka — Web development</h3>
            <p>November 2023 - June 2024</p>
            <p>Score: Above 95%<br/>Full Stack Web Development</p>

            <h3 className="text-xl font-bold pt-10">Mahsa International University, Selengor, Malaysia — Diploma in Hotel Management</h3>
            <p>October 2019 - July 2021</p>
            <p>CGPA: 3.20 out of 4.00<br/>Major in Hospitality management.</p>

            <h3 className="text-xl font-bold pt-10">University of Liberal Arts (ULAB), Dhaka — Computer Science and Engineering (CSE)</h3>
            <p>September 2014 - July 2016</p>
            <p>CGPA: 2.85 out of 4.00<br/>Incomplete.</p>

            <h3 className="text-xl font-bold pt-10">Bir Sreshtho Noor Mohammad Public College, Pilkhana, Dhaka — HSC</h3>
            <p>Passing year: 2014</p>
            <p>GPA: 3.95 out of 5.00<br/>Major in Science.</p>

            <h3 className="text-xl font-bold pt-10">Bir Sreshtho Noor Mohammad Public College, Pilkhana, Dhaka — SSC</h3>
            <p>Passing year: 2012</p>
            <p>GPA: 4.88 out of 5.00<br/>Major in Science.</p>
        </div>

      
    </div>
        </div>
















            <h1 className="text-3xl font-bold">My Skills</h1>
            <ul className="space-y-3 list-disc">
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
          


            <div className="card bg-orange-200 p-8 shadow-md h-fit text-sm my-5">
            <h2 className="text-xl font-bold pb-5">Contact</h2>
            <p>9/A Dhanmondi, Dhaka</p>
            <p>Phone: +880 1875 957 809</p>
            <p>Email: <a href="mailto:work.adibkhan@gmail.com">work.adibkhan@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/adibkhan101" target="_blank">www.linkedin.com/in/adibkhan101</a></p>
            <p>GitHub: <a href="https://github.com/Adibkhan619" target="_blank">https://github.com/Adibkhan619</a></p>
        </div>
        </div>
    );
};

export default About;