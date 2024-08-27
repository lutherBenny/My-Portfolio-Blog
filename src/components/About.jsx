import React from 'react';

function About() {
    return (
        <div className="about-container py-10 px-5" style={{ backgroundColor: '#F9F9F9' }}>
            <h1 className="text-5xl font-bold text-center mt-10" style={{ color: '#FF6B35' }}>About Me</h1>
            <p className="text-xl mt-4 text-center max-w-2xl mx-auto" style={{ color: '#4A4A4A' }}>
                Hi, I’m <span className="font-semibold" style={{ color: '#FF6B35' }}>Luther Benny</span>! 
                I am a passionate web developer with a strong foundation in full-stack development. 
                I completed my <span className="font-semibold" style={{ color: '#FF6B35' }}>MERN stack web development course </span> 
                 at <span className="font-semibold" style={{ color: '#FF6B35' }}>Error Makes Clever Academy</span>.
            </p>
            <p className="text-xl mt-4 text-center max-w-2xl mx-auto" style={{ color: '#4A4A4A' }}>
                I specialize in creating efficient, scalable, and visually appealing web applications. 
                My goal is to deliver high-quality projects that meet the needs of users and clients alike.
            </p>
            <h3 className="text-3xl font-semibold text-center mt-8" style={{ color: '#FF6B35' }}>Career Gap Reason</h3>
<p className="text-xl mt-4 text-center max-w-2xl mx-auto" style={{ color: '#4A4A4A' }}>
    During my MCA final year in 2013, I faced a significant setback due to a bike accident, which prevented me from attending my exams. 
    As a result, I completed my degree in 2016 but initially pursued a financial business instead of my true passion for IT.
</p>
<p className="text-xl mt-4 text-center max-w-2xl mx-auto" style={{ color: '#4A4A4A' }}>
    The accident affected my confidence, but joining a gym played a crucial role in helping me regain it. 
    The gym not only restored my physical fitness but also boosted my confidence by 200%.
</p>
<p className="text-xl mt-4 text-center max-w-2xl mx-auto" style={{ color: '#4A4A4A' }}>
    With renewed determination, I enrolled in <span className="font-semibold" style={{ color: '#FF6B35' }}>Error Makes Clever Academy</span>, 
    where I completed my <span className="font-semibold" style={{ color: '#FF6B35' }}>MERN full-stack development course</span>. 
    This journey has allowed me to update my skills and fully embrace my passion for a career in the IT field.
</p>

           
            <h3 className="text-3xl font-semibold text-center mt-8" style={{ color: '#FF6B35' }}>Education</h3>
            <ul className="education-list text-center mt-4">
                <li className="mb-4">
                    <h4 className="font-bold" style={{ color: '#FF6B35' }}>Master of Computer Applications</h4>
                    <p>Madras University, 2010-2013</p>
                </li>
                <li className="mb-4">
                    <h4 className="font-bold" style={{ color: '#FF6B35' }}>Bachelor of Computer Science</h4>
                    <p>Thiruvalluvar University, 2007-2010</p>
                </li>
            </ul>

            <h3 className="text-3xl font-semibold text-center mt-8" style={{ color: '#FF6B35' }}>Certification</h3>
            <div className="certification-list text-center mt-4">
                <div className="mb-4">
                    <h4 className="font-bold" style={{ color: '#FF6B35' }}>MERN Full Stack Development</h4>
                    <p>Institute:- Error Makes Clever</p>
                    <p>Certification No:- XXXXX</p>
                    <p>Status:- Completed, 2024</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-center mt-8" style={{ color: '#FF6B35' }}>Skills</h2>
<div className="mt-4 max-w-xl mx-auto" style={{ color: '#4A4A4A', textAlign: 'center' }}>
    <div>CSS</div>
    <div>HTML</div>
    <div>JavaScript</div>
    <div>React.js</div>
    <div>Tailwind CSS</div>
    <div>Redux</div>
    <div>Node.js</div>
    <div>Express.js</div>
    <div>MongoDB</div>
    <div>Firebase</div>
    <div>GitHub</div>
</div>



         

            <p className="text-xl text-center mt-6" style={{ color: '#4A4A4A' }}>
                I am dedicated to continually improving my skills and creating impactful web applications. 
                I believe in learning by doing and am always open to new challenges that help me grow.
            </p>
            
            <h3 className="text-2xl font-bold text-center mt-8" style={{ color: '#FF6B35' }}>Let’s Connect!</h3>
            <p className="text-lg text-center mt-4" style={{ color: '#4A4A4A' }}>
                If you’re interested in collaborating or have any questions, feel free to reach out!
            </p>
        </div>
    );
}

export default About;
