import React from 'react'



const MenuCards = ({ title, url }) => {
    return (

        <div className='cursor-pointer bg-white m-5 mt-0 text-center rounded hover:scale-105 flex-none '>
            <img src={url} alt="Northindian" className='rounded' style={{
                width: '144px',
            }} />
            <h1 className='text-gray-400 my-2  hover:text-gray-950 hover:font-semibold italic'>{title}</h1>

        </div>


    )
}

export default MenuCards
