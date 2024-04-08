import React, { useState } from 'react';
import './Landing.css';
import Pizza from '../../Assets/Landing/LAnding/img1.JPEG';
import Pasta from '../../Assets/Landing/LAnding/img2.JPEG'; // Check this import path
import bg2 from '../../Assets/Landing/LAnding/img3.JPEG';
import Biryani from '../../Assets/Landing/LAnding/img4.JPEG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faBowlRice, faLeaf, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
    const [bgState, setBgState] = useState({
        image: Pizza,
        text: 'Taste the Difference: Flavour Fista’s Signature Slices!'
    });

    const landingPageArr = [
        { name: Pizza, text: 'Taste the Difference: Flavour Fista’s Signature Slices!', icon: faPizzaSlice },
        { name: Pasta, text: 'Discover Pasta Paradise at Flavour Fista!', icon: faBowlFood },

        { name: bg2, text: 'Green Goodness Galore:Flavour Fistas Salad Selections!', icon: faLeaf },
        { name: Biryani, text: 'Biryani Heaven: Flavour Fista Delights!', icon: faBowlRice }
    ];

    const handleLandingPageImg = (newImage, newText) => {
        setBgState({ image: newImage, text: newText });
    };

    return (
        <div className="landingpage">
            <div className="row">


                <div className=" flex items-center">
                    <div style={{
                        backgroundImage: `url(${bgState.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '90vh'

                    }} className='flex flex-col items-center justify-center m-0 '>
                        <h1 className='font-[Poppins] font-extrabold text-5xl md:text-7xl text-center text-amber-700 bg-white md:bg-opacity-30 bg-opacity-40  p-4 hover:bg-black hover:text-white hover:bg-opacity-40 duration-700'>{bgState.text}</h1>
                        <div className='flex justify-center'>
                            {landingPageArr.map((item, index) => (
                                <button key={index} onClick={() => handleLandingPageImg(item.name, item.text)} className='my-4 mx-1 md:mx-4  text-white bg-black  px-4 py-2 rounded hover:text-red-900 duration-500 '>     <FontAwesomeIcon icon={item.icon} /></button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Landing;
