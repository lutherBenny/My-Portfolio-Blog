import React from 'react';
import Navbar from './common/Navbar';
import BlogProfileImage from "../assets/Blog Website Design.jpg";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.jpg";  // or whatever the correct path and file name is
import P5 from "../assets/p5.jpg.jpg"
import P6 from "../assets/p6.jpg"
import P7 from "../assets/p7.jpg"
import P8 from "../assets/p8.jpg"
import P9 from "../assets/p9.jpg"
import luther00 from "../assets/luther00.jpg"; // Ensure this path is correct
import udemy from "../assets/udemy.jpg"
<<<<<<< HEAD

=======
import { useEffect } from 'react';
>>>>>>> 65f4a9544155fde48dad2bcae59d10a19ecc5501




import BlogImage from "../assets/blogImage.png";
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer';

import './common/Navbar.css'; // Use the exact casing






function Home() {
    const navigate = useNavigate();
   
  

    const handleViewResume = () => {
        navigate('/resume');
    };
     

   
    return (
        <div>
            <div className='flex items-center justify-center mt-11'>
                <div className="w-full sm:w-1/2 flex-col justify-center">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>Hy! I Am</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Luther Benny</h2>
                    <h3 className='text-blue-500 font-semibold blinking-text'>MERN FULL STACK DEVELOPER</h3>
                    
                   
                    <img src={luther00} className='w-60 md:w-66 rounded-2xl  block sm:hidden' alt="Blog Profile Image" />
                    <p className='py-2'>I can create stunning website for your company, Do check my works. I won't disappoint you. Try me for 7 Days before you decide anything.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/contact")}>Hire Me</button>
 

                </div>
                <div className='justify-center hidden sm:block'>
                <img src={luther00} className='w-60 md:w-66 rounded-2xl' alt="luther00" />

                    
                </div>
            </div>

            <div className='flex justify-evenly py-6 mt-10'>
                <img src={HTML} style={{ width: "50px" }} />
                <img src={CSS} style={{ width: "50px" }} />
                <img src={JS} style={{ width: "50px" }} />
                <img src={REACTICON} style={{ width: "50px" }} />
                <img src={DB} style={{ width: "50px" }} />
                <img src={NODE} style={{ width: "50px" }} />
            </div>

            <div className='flex flex-col mt-10 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'>6</div>
                        <p className='text-center font-medium'>Projects Completed</p>
                    </div>
                    <div className='mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'>6</div>
                        <p className='text-center font-medium'>Months of Experience</p>
                    </div>
                </div>

                <div className='ml-4 mt-4 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold'>My Awesome</h2>
                    <h2 className='text-3xl sm:text-7xl font-bold text-orange-400'>Services</h2>
                    <p className='my-2'>I have attached my Resume here for your Reference</p>

                    <button className='button-style mt-2' onClick={handleViewResume}>
                        Donwload CV
                    </button>
                   
                </div>
            </div>

            <div>
                <h2 className='text-center text-5xl my-14 font-bold'>Checkout My Live <span className='text-orange-400'>Projects</span> Here</h2>
                <div className='flex justify-around my-5 flex-col sm:flex-row gap-8'>

                <div className="overflow-x-auto flex space-x-8 py-5">
              

            <a href="https://lnkd.in/eBUyRScZ" target="_blank" rel="noopener noreferrer" className="scroll-animation scroll-animation-delay-1" >
        
               <img src={P4} className='w-80 h-60   border rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-50' alt="Project 4" />
               <h4 className="text-1xl text-blue-400 text-center my-2 font-bold uppercase shadow-lg tracking-wide">
               My Greenden 
    
               <a href='https://github.com/lutherBenny/Greenden.Tailwind.git'>
                <button className='bg-orange-400 text-white hover:bg-orange-200 rounded px-1 py-1  pl-2 pr-1 text-sm'>
                 View Code 
                </button></a></h4>
            </a>

            <a href="https://lnkd.in/d6HaYBcT" target="_blank" rel="noopener noreferrer" className="scroll-animation scroll-animation-delay-2">
        
               <img src={udemy} className='w-80 h-60   border rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-50' alt="Project 4" />
               <h4 className="text-1xl text-blue-400 text-center my-2 font-bold uppercase shadow-lg tracking-wide">
                Udemy <br></br>
               <a href='https://github.com/lutherBenny/udemy-clone.git' >
               <button className='bg-orange-400 text-white hover:bg-orange-200 rounded px-1 py-1  pl-2 pr-1 text-sm'>
                View Code 
               </button></a></h4>
            </a>

             
            <a href="https://lnkd.in/dUyx7fpA" target="_blank" rel="noopener noreferrer" className="scroll-animation scroll-animation-delay-3">
        
               <img src={P6} className='w-80 h-60   border rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-50' alt="Project 4" />
               <h4 className="text-1xl text-blue-400 text-center my-2 font-bold uppercase shadow-lg tracking-wide">
               Nostra <br></br>
               <a href='https://github.com/lutherBenny/Nostra.git' >
               <button className='bg-orange-400 text-white hover:bg-orange-200 rounded px-1 py-1  pl-2 pr-1 text-sm'>
               View Code 
               </button></a></h4>
            </a>

            <a href="https://lnkd.in/d73U2htZ" target="_blank" rel="noopener noreferrer"  className="scroll-animation scroll-animation-delay-4">
        
               <img src={P7} className='w-80 h-60   border rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-50' alt="Project 4" />
               <h4 className="text-1xl text-blue-400 text-center my-2 font-bold uppercase shadow-lg tracking-wide">
               Actodo <br></br>
               <a href='https://github.com/lutherBenny/actodo.git' className=''>
               <button className='bg-orange-400 text-white hover:bg-orange-200 rounded px-1 py-1  pl-2 pr-1 text-sm'>
               View Code 
               </button></a></h4>
            </a>

            <a href="https://lnkd.in/erqtVYxf" target="_blank" rel="noopener noreferrer"  className="scroll-animation scroll-animation-delay-5">
        
               <img src={P8} className='w-80 h-60   border rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-50' alt="Project 4" />
               <h4 className="text-1xl text-blue-400 text-center my-2 font-bold uppercase shadow-lg tracking-wide">
                Weather App <br></br>
                <a href='https://github.com/lutherBenny/weather-app.git' className=''>
                <button className='bg-orange-400 text-white hover:bg-orange-200 rounded px-1 py-1  pl-2 pr-1 text-sm'>
                 View Code 
                </button></a></h4>
            </a>

            <a href="https://lnkd.in/eNnx4HRf" target="_blank" rel="noopener noreferrer"  className="scroll-animation scroll-animation-delay-6">
        
               <img src={P9} className='w-80 h-60   border rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-50' alt="Project 4" />
               <h4 className="text-1xl text-blue-400 text-center my-2 font-bold uppercase shadow-lg tracking-wide">
                Get Joke <br></br>
                <a href='https://github.com/lutherBenny/get-jokes.git' className=''>
                <button className='bg-orange-400 text-white hover:bg-orange-200 rounded px-1 py-1  pl-2 pr-1 text-sm'>
                 View Code 
                </button></a></h4>
            </a>

    
                </div>
            </div>

            <div className='flex items-center justify-center my-14'>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogImage} className='w-60 md:w-96' alt="Blog Profile Image" />
                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>I like to Write</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Blogs about tech</h2>
                    <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
