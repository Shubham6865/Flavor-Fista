import React, { useState } from 'react'
import Button from '../Buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const links = [
        { name: "HOME", link: "/" },
        { name: "MENU", link: "/about" },
        { name: "OFFERS", link: "/offers" },
        { name: "FOOD GALLARY", link: "/foodgallary" },
        { name: "ABOUT", link: "/about" }
    ]

    const [menubtn, setMenubtn] = useState(false)


    return (
        <div className='shadow-md w-full sticky top-0 left-0  z-50'>
            <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7 ">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    Flavor Fista
                </div>
                <div className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden" onClick={() => setMenubtn(!menubtn)}>
                    <FontAwesomeIcon icon={menubtn ? faXmark : faBars} />

                </div>
                <ul className={`  md:flex md:items-center absolute md:static bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${menubtn ? 'top-10 opacity-100' : 'top-[-490px] md:opacity-100'}`}>
                    {links.map((i) => (
                        <li key={i.name} className='md:ml-5 text-xl md:my-0 my-5 '>
                            <a href={i.link} className='text-gray-800 hover:text-gray-400 duration-500'>{i.name}</a>
                        </li>
                    ))}

                    <Button>
                        Get Started
                    </Button>

                </ul>
            </div>
        </div>
    )
}

export default Navbar;