import React, { useState } from 'react'
import Button from '../Buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ currentUserType }) => {

    // const links = [
    //     { name: "HOME", link: "/" },
    //     { name: "MENU", link: "/about" },
    //     { name: "OFFERS", link: "/offers" },
    //     { name: "FOOD GALLARY", link: "/foodgallary" },
    //     { name: "ABOUT", link: "/about" }
    // ]

    const [menubtn, setMenubtn] = useState(false)
    const items = useSelector((state) => state.cart);

    return (
        <div className='shadow-md w-full sticky top-0 left-0  z-50'>
            <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7 ">
                <Link to={'/'} className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    Flavor Fista
                </Link>
                <div className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden" onClick={() => setMenubtn(!menubtn)}>
                    <FontAwesomeIcon icon={menubtn ? faXmark : faBars} />

                </div>
                <ul className={`  md:flex md:items-center absolute md:static bg-white   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${menubtn ? 'top-10 opacity-100' : 'top-[-490px] md:opacity-100'}`}>
                    {/* {links.map((i) => (
                        <li key={i.name} className='md:ml-5 text-xl md:my-0 my-5 '>
                            <a href={i.link} className='text-gray-800 hover:text-gray-400 duration-500'>{i.name}</a>
                        </li>
                    ))} */}

                    <li className='md:ml-5 text-xl md:my-0 my-5 '>
                        <Link to="/" className='text-gray-800 hover:text-gray-400 duration-500 md:ml-5 text-xl md:my-0 my-5 '>HOME</Link>
                    </li>
                    <li className='md:ml-5 text-xl md:my-0 my-5 '>
                        <Link to="/foodgallary" className='text-gray-800 hover:text-gray-400 duration-500'>GALLARY</Link>
                    </li>
                    {currentUserType === 'Admin User' || currentUserType === 'Normal User' ? <>
                        <li className='md:ml-5 text-xl md:my-0 my-5 '>
                            <Link to="/user" className='text-gray-800 hover:text-gray-400 duration-500'>USERS</Link>
                        </li>
                    </> : null}
                    {currentUserType === 'Admin User' ? <>
                        <li className='md:ml-5 text-xl md:my-0 my-5 '>
                            <Link to="/admin" className='text-gray-800 hover:text-gray-400 duration-500'>ADMIN</Link>
                        </li>
                    </> : null}

                    <li className='md:ml-5 text-xl md:my-0 my-5 '>
                        <Link to="/about" className='text-gray-800 hover:text-gray-400 duration-500'>ABOUT</Link>
                    </li>



                    <Button >
                        Get Started
                    </Button>


                    {/* <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                            2
                        </span>
                    </button> */}

                    <Link to={'/cart'} className=" relative ml-5 " >
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="absolute top-0 right-0 transform translate-x-5 tran  -translate-y-5 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
                            {items.length}

                        </span>
                    </Link>



                </ul>
            </div>
        </div>
    )
}

export default Navbar;