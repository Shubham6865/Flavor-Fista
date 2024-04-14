import React, { useState } from 'react';
import MenuCards from '../../Components/MenuCards/MenuCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import VegThali from '../../Assets/Menu/NorthIndian.png';
import NorthIndian from '../../Assets/Menu/NorthIndian.png';
import Pizza from '../../Assets/Menu/Pizza.png';
import Biryani from '../../Assets/Menu/Biryani.png';
import Noodels from '../../Assets/Menu/Noodels.png';
import Burger from '../../Assets/Menu/Burger.png';
import Rolls from '../../Assets/Menu/Rolls.png';
import Paratha from '../../Assets/Menu/Paratha.png';
import PavBhaji from '../../Assets/Menu/PavBhaji.png';
import Khichdi from '../../Assets/Menu/Khichdi.png';
import PuriBhaji from '../../Assets/Menu/PuriBhaji.png';
import { Link } from 'react-router-dom';



const Menu = () => {



    const MenuOptions = [
        { title: "North Indian Thali", url: NorthIndian },
        { title: "Pizza", url: Pizza },
        { title: "Biryani", url: Biryani },
        { title: "Noodels", url: Noodels },
        { title: "Burger", url: Burger },
        { title: "Rolls", url: Rolls },
        { title: "Paratha", url: Paratha },
        { title: "Pav Bhaji", url: PavBhaji },
        { title: "Khichdi", url: Khichdi },
        { title: "Puri Bhaji", url: PuriBhaji },
        { title: "Veg Thali", url: VegThali }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 5;

    const handleLeftSlide = () => {
        const newStartIndex = Math.max(0, startIndex - 2);
        setStartIndex(newStartIndex);
    };

    const handleRightSlide = () => {
        const newStartIndex = Math.min(MenuOptions.length - cardsPerPage, startIndex + 2);
        setStartIndex(newStartIndex);
    };

    return (
        <>
            <div className="flex justify-between md:px-20 px-7 items-center ">
                <h1 className=' text-black font-[Poppins] font-bold md:text-2xl text-xl '>
                    What's on your mind?

                </h1>
                <div className="flex justify-end  items-center ">
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='text-3xl p-2' onClick={handleLeftSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='text-3xl p-2' onClick={handleRightSlide} />
                </div>
            </div>
            <div className="flex justify-center md:mx-5 mx-0" >

                <div className='flex flex-row  overflow-x-scroll overflow-y-hidden container md:px-10 px-0'>
                    {MenuOptions.slice(startIndex, startIndex + cardsPerPage).map((option, index) => (
                        <MenuCards key={index} title={option.title} url={option.url} />
                    ))}
                </div>
            </div>


        </>
    );
}

export default Menu;
