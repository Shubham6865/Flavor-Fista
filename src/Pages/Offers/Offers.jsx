import React, { useState } from 'react';

import sliderimg1 from '../../Assets/Slider/Slider1.png';
import sliderimg2 from '../../Assets/Slider/Slider2.png';
import sliderimg3 from '../../Assets/Slider/Slider3.png';
import './Offers.css';
const Offers = () => {


    const [hiddenImg, setHiddenImg] = useState({ img1: true, img2: false, img3: false });

    const handelHiddenImg1 = () => {
        setHiddenImg({ img1: true, img2: false, img3: false });
    }
    const handelHiddenImg2 = () => {
        setHiddenImg({ img1: false, img2: true, img3: false });
    }
    const handelHiddenImg3 = () => {
        setHiddenImg({ img1: false, img2: false, img3: true });
    }
    return (
        <>

            <div className="md:px-20 px-0  " >
                <h1 className='text-black font-[Poppins] font-bold md:text-2xl text-xl md:px-0 px-7'>
                    Deal of the Day...
                </h1>
                <div className=" w-full bg-black  md:flex justify-end flex-row-reverse items-start text-xl text uppercase font-[Poppins] font-bold text-white divshadow ">

                    <div className='p-2  cursor-pointer hover:text-gray-500 border-l border-gray-300 vertical-text md:text-xl text-sm' onClick={() => handelHiddenImg2()}>Offer On Deserts</div>
                    <div className={`border-l border-gray-300 bg-white ${hiddenImg.img2 ? '' : 'hidden'}`}>
                        <img src={sliderimg2} alt="" />
                    </div>
                    <div className='p-2  cursor-pointer hover:text-gray-500  border-l border-gray-300 vertical-text md:text-xl text-sm' onClick={() => handelHiddenImg1()}>Offer On Drinks</div>
                    <div className={`border-l border-gray-300 bg-white ${hiddenImg.img1 ? '' : 'hidden'}`}> <img src={sliderimg1} alt="" /></div>
                    <div className='p-2 cursor-pointer hover:text-gray-500 border-l border-gray-300 vertical-text md:text-xl text-sm' onClick={() => handelHiddenImg3()}>Offer On Pizza</div>
                    <div className={`border-l border-gray-300 bg-white ${hiddenImg.img3 ? '' : 'hidden'}`}> <img src={sliderimg3} alt="" /></div>

                </div>
            </div>






        </>
    );
};



export default Offers;


