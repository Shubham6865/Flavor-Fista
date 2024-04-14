import React from 'react';

import './cardanimation.css';

const RestaurantCardLoading = () => {


    return (


        <div className="p-1 inline-block border border-gray-300 mt-2 text-gray-800 " style={{ width: '204px' }}>
            <div style={{ width: '196px', height: '150px' }} className="bg-gray-200 border border-gray-400 rounded-md"></div>
            <div className="mt-1 overflow-hidden text-ellipsis ">
                <h4 className="bg-gray-200 text-gray-200 m-1">Placeholder Title</h4>
                <div className="flex justify-between overflow-hidden text-ellipsis font-light">
                    <p className="bg-gray-200 text-gray-200 m-1">Placeholder Rating</p>
                    <p className="bg-gray-200 text-gray-200 m-1">Placeholder Time</p>
                </div>
                <p className="bg-gray-200 text-gray-200 m-1">Placeholder Food Options</p>
                <p className="bg-gray-200 text-gray-200 m-1">Placeholder Location Icon</p>
            </div>
        </div>
    );
};

export default RestaurantCardLoading;
