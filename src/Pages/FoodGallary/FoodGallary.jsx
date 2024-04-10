import React, { useState } from 'react'
import img1 from '../../Assets/RestaurantCard/Bg4.jpg'
import img2 from '../../Assets/RestaurantCard/Bg5.jpg'
import img3 from '../../Assets/RestaurantCard/Bg6.jpg'
import img4 from '../../Assets/RestaurantCard/Bg7.jpg'
import img5 from '../../Assets/RestaurantCard/Bg8.jpg';
import img6 from '../../Assets/RestaurantCard/Bg2.jpg';
import Gallaryimg1 from '../../Assets/Gallary/gallaryimg1.jpg';
import Gallaryimg2 from '../../Assets/Gallary/gallaryimg2.jpg';
import Gallaryimg3 from '../../Assets/Gallary/gallaryimg3.jpg';
import Gallaryimg4 from '../../Assets/Gallary/gallaryimg4.jpg';
import Gallaryimg5 from '../../Assets/Gallary/gallaryimg5.jpg';



const Gallaryimgs = [
    {
        id: 1,
        url: img1,
        catagory: 'breakfast'
    },
    {
        id: 2,
        url: Gallaryimg1,
        catagory: 'lunch'
    },
    {
        id: 3,
        url: img2,
        catagory: 'breakfast'
    },
    {
        id: 4,
        url: Gallaryimg2,
        catagory: 'breakfast'
    },

    {
        id: 6,
        url: Gallaryimg3,
        catagory: 'breakfast'
    },
    {
        id: 7,
        url: img4,
        catagory: 'breakfast'
    },

    {
        id: 8,
        url: Gallaryimg4,
        catagory: 'breakfast'
    },
    {
        id: 5,
        url: img3,
        catagory: 'breakfast'
    },
    {
        id: 9,
        url: img5,
        catagory: 'lunch'
    },
    {
        id: 10,
        url: Gallaryimg5,
        catagory: 'breakfast'
    },
    {
        id: 11,
        url: img6,
        catagory: 'dinner'
    },
    {
        id: 12,
        url: Gallaryimg5,
        catagory: 'breakfast'
    },
]



const FoodGallary = () => {
    const [items, setItems] = useState(Gallaryimgs)

    const handelfilter = (cate) => {
        const updatedItems = Gallaryimgs.filter((item) => {
            return item.catagory === cate;
        });
        setItems(updatedItems);

    }
    return (
        <div>


            <div className=' flex justify-center mt-5'>
                <button className='mx-1 md:mx-3 bg-black border-black border cursor-pointer px-4 text-white hover:text-gray-300 hover:border-gray-500' onClick={() => setItems(Gallaryimgs)} >All </button>
                <button className='mx-1 md:mx-3 bg-black border-black border cursor-pointer px-4 text-white hover:text-gray-300 hover:border-gray-500' onClick={() => handelfilter('breakfast')} >Breakfast </button>
                <button className='mx-1 md:mx-3 bg-black border-black border cursor-pointer px-4 text-white hover:text-gray-300 hover:border-gray-500' onClick={() => handelfilter('lunch')} >Lunch </button>
                <button className='mx-1 md:mx-3 bg-black border-black border cursor-pointer px-4 text-white hover:text-gray-300 hover:border-gray-500' onClick={() => handelfilter('dinner')} >Dinner </button>
            </div>
            <div className="p-5 md:p-10">
                <div className="columns-1 gap-5 lg:gap-y-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8:">


                    {items.map((img) => (
                        <img key={img.id} src={img.url} alt={img.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FoodGallary
