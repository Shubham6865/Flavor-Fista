// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { removeFromCart } from '../../Redux/Cartslice';

// const Cart = () => {

//     const cartItems = useSelector((state) => state.cart)
//     const dispatch = useDispatch();

//     const handleRemoveItem = (id) => {

//         dispatch(removeFromCart(id))
//     }
//     return (
//         <>
//             <h1>My Cart</h1>

//             <div >
//                 {
//                     cartItems.map((item) => (
//                         <div className='bg-gray-300 m-5 px-5 py-2 flex justify-between items-center' key={item.id}>
//                             <img src={item.image} alt="img" style={{ width: '75px', height: '75px' }} className=' object-cover' />
//                             <h5>{item.title}</h5>
//                             <h5>{item.price}</h5>
//                             <button className='bg-red-600 p-2  rounded hover:bg-red-500' onClick={() => handleRemoveItem(item.id)}>Remove</button>
//                         </div>
//                     ))
//                 }
//             </div>

//             {/* <div className='bg-gray-300 m-5 px-5 py-2 flex justify-between items-center'>

//                 <img src={img} alt="img" style={{ width: '75px', height: '75px' }} className=' object-cover' />
//                 <h5>Hello title</h5>
//                 <h5>5211 rs</h5>
//                 <button className='bg-red-600 p-2  rounded hover:bg-red-500'>Remove</button>

//             </div> */}

//         </>
//     )
// }


// export default Cart

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, decreaseQuantity, addToCart } from '../../Redux/Cartslice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id));
    };

    return (
        <div>
            <h1>My Cart</h1>

            <div>
                {cartItems.map((item) => (
                    <div className='bg-gray-300 m-2 md:m-5  px-1 md:px-5 py-2 flex justify-between items-center' key={item.id}>
                        <img src={item.image} alt={item.title} style={{ width: '75px', height: '75px' }} className='object-cover' />
                        <div>
                            <h5>{item.title}</h5>
                            <p>${item.price}</p>
                        </div>
                        <div className='flex flex-col'>

                            <div className="flex items-center m-1">
                                <button className='bg-red-600 p-2 rounded hover:bg-red-500' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                <p className="mx-2">{item.quantity}</p>
                                <button className='bg-green-600 p-2 rounded hover:bg-green-500' onClick={() => dispatch(addToCart(item))}>+</button>
                            </div>
                            <button className='bg-red-600 p-2 rounded hover:bg-red-500' onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
