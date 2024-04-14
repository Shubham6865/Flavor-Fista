import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import './cardanimation.css'

const RestaurantCard = ({ item, onClick }) => {
    const { name, title, rating, time, foodavailable, location } = item;

    return (

        <>

            <div
                className="p-1 hover:scale-90 hover:shadow-lg hover:border-0 hover:bg-gray-50 hover:text-gray-950 inline-block border border-gray-300 mt-2 text-gray-800 card_animation "
                style={{ width: '204px' }}
                onClick={onClick} >
                <div style={{ width: '196px', height: '150px' }}>
                    <img src={name} alt={title} className="rounded-lg shadow" />
                </div>
                <div className="mt-1 overflow-hidden text-ellipsis p-1">
                    <h4 className="overflow-hidden uppercase text-ellipsis">{title}</h4>
                    <div className="flex justify-between overflow-hidden text-ellipsis font-light">
                        <p>
                            <FontAwesomeIcon icon={faStar} className="mr-1" />
                            {rating}
                        </p>
                        <p>{time}mins</p>
                    </div>
                    <p className="overflow-hidden text-ellipsis font-light text-sm">{foodavailable}</p>
                    <p className="overflow-hidden text-ellipsis font-light">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
                        {location}
                    </p>
                </div>
            </div>





        </>
    );
};

export default RestaurantCard;
