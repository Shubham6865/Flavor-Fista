import React from 'react'

const Button = (props) => {
    return (
        <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 mb-5 md:mb-0'>
            {props.children}
        </button>
    )
}

export default Button
