import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';

const RestaurantDetails = ({ restaurant, onClose }) => {
    const { title, rating, time, foodavailable, location, menu } = restaurant;

    return (
        <div className="md:px-20 px-0 mt-3">
            <h1 className="text-black font-bold md:text-2xl text-xl md:px-0 px-7">
                {title}
            </h1>
            <div className="w-full text-xl text font-bold flex-wrap gap-2 flex justify-center py-5">
                <div className="p-1 inline-block border border-gray-300 mt-2 text-gray-800">
                    <div style={{ width: '196px', height: '150px' }}>
                        <img src={restaurant.name} alt={title} className="rounded-lg shadow" />
                    </div>
                    <div className="mt-1 overflow-hidden text-ellipsis p-1">
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
                        <h2>Menu:</h2>
                        {Array.isArray(menu) && menu.length > 0 ? (
                            <ul>
                                {menu.map((menuItem, index) => (
                                    <li key={index}>{menuItem}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No menu available</p>
                        )}
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;
