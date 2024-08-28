import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../config/firebase';
import { signOut } from 'firebase/auth';

function Navbar() {
    const navigate = useNavigate();
    const [log, setlog] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
                setlog(true);
                console.log("User Logged In");
            } else {
                setlog(false);
                console.log("User Logged Out");
            }
        });
    }, []);

    function logout() {
        signOut(auth);
    }

    return (
        <div className='py-5 flex justify-between items-center'>
            <h2 className=' text-sm md:text-lg   lg:text-2xl font-bold flex-grow flex-shrink-0  '>Welcome to My Portfolio</h2>
            <div className='flex items-center'>
                <Link className='list-none px-5' to={"/home"}>Home</Link>
                <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
                <Link className='list-none px-5' to={"/about"}>About</Link>

                {log ? (
                    <button className='button-style hidden md:block' onClick={logout}>Logout</button>
                ) : (
                    <button className='button-style hidden md:block' onClick={() => navigate("/login")}>Login</button>
                )}
            </div>
        </div>
    );
}

export default Navbar;
