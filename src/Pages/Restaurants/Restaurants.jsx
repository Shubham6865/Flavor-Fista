import React from 'react'
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard'
import CardImg1 from '../../Assets/RestaurantCard/Bg1.jpg';
import CardImg2 from '../../Assets/RestaurantCard/Bg2.jpg';
import CardImg3 from '../../Assets/RestaurantCard/Bg3.jpg';
import CardImg4 from '../../Assets/RestaurantCard/Bg4.jpg';
import CardImg5 from '../../Assets/RestaurantCard/Bg5.jpg';
import CardImg6 from '../../Assets/RestaurantCard/Bg6.jpg';
import CardImg7 from '../../Assets/RestaurantCard/Bg7.jpg';
import CardImg8 from '../../Assets/RestaurantCard/Bg8.jpg';
import CardImg9 from '../../Assets/RestaurantCard/Bg9.jpg';
import CardImg10 from '../../Assets/RestaurantCard/Bg10.jpg';
import CardImg11 from '../../Assets/RestaurantCard/Bg11.jpg';
import CardImg12 from '../../Assets/RestaurantCard/Bg12.jpg';

const Restaurants = () => {

    const RestaurantData = [
        {
            name: CardImg1, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes', location: 'kharadi'
        },
        {
            name: CardImg2, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg3, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg4, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg5, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg6, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg7, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg8, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg9, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg10, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg11, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },
        {
            name: CardImg12, title: 'Pizza Hut', rating: '4.4', time: '20-25', foodavailable: 'Pizzas, Burgers ,cokes',
            location: 'kharadi'
        },

    ]

    return (
        <div className="md:px-20 px-0 mt-3  " >
            <h1 className='text-black font-[Poppins] font-bold md:text-2xl text-xl md:px-0 px-7'>
                Deal of the Day...
            </h1>
            <div className=" w-full   text-xl text  font-[Poppins] font-bold flex-wrap gap-2 flex  justify-center py-5">

                {RestaurantData.map((item, index) => (
                    <RestaurantCard key={index} item={item} />
                ))}

            </div>
        </div>
    )
}



export default Restaurants
