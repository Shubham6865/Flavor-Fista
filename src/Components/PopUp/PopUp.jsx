import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>
            {isOpen ? (
                <div className='mt-32 flex justify-center  '>
                    <div className='p-5 w-full md:w-1/3'>

                        <p className='text-end text-2xl hover:text-xl duration-300 h-6 '>  <FontAwesomeIcon onClick={() => setIsOpen(false)} icon={faXmark} className='cursor-pointer ' /></p>
                        <p className='text-center'>You don't have access to this page.</p>
                        <p className='text-center'>Please contact your administrator for assistance.</p>
                        <div className='flex justify-center mt-5'>
                            <button className='bg-black p-1 px-3 text-white rounded hover:text-orange-500' onClick={() => setIsOpen(false)}>Close</button>
                        </div>

                    </div>
                </div>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
}

export default PopUp
