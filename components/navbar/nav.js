import React, { useState } from "react";
import Image from 'next/image';

import { useUserContext } from "../../services/userContext";
import { useRouter } from "next/router";

export default function NavBar() {
    const [active, setActive] = useState(false);

    const { user, logOutUser } = useUserContext();
    const router = useRouter();

    const redirectToLogin = () => {
        window.localStorage.clear();
        logOutUser(router);
    }

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-black p-3 sm:px-10 '>

                <a href='/' className='inline-flex items-center p-2 mr-4 '>
                    
                    <span className='text-xl text-white font-bold hover:text-primary-400 uppercase tracking-wide'>
                        CRESCENDO
                    </span>
                </a>
                <button
                    className=' inline-flex p-3 hover:bg-secondary-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-center  flex flex-col lg:h-auto'>

                        <a href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-center text-white font-bold items-center justify-center hover:bg-primary-500 hover:text-white'>
                            Home
                        </a>
                        <a href='/events' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-center text-white font-bold items-center justify-center hover:bg-primary-500 hover:text-white'>
                            Events
                        </a>

                        <a href='/about' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-center text-white font-bold items-center justify-center hover:bg-primary-500 hover:text-white'>
                            About
                        </a>
                        {user ?
                            <>
                                <a href='/profile' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-center text-white font-bold items-center justify-center hover:bg-primary-500 hover:text-white '>
                                    Profile
                                </a>
                                <button onClick={() => redirectToLogin()}>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-center text-white font-bold items-center justify-center hover:bg-primary-500 hover:text-white '>
                                        Logout
                                    </a>
                                </button>
                            </>
                            :
                            <a href='/login' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-center text-white font-bold items-center justify-center hover:bg-primary-500 hover:text-white '>
                                Login
                            </a>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};