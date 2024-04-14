import React, { useEffect, useState } from 'react'
import { addToCart } from '../../Redux/Cartslice';
import { useDispatch } from 'react-redux';

const User = () => {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchproduct = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            // console.log(data);
            setProducts(data);
        }
        fetchproduct();
    }, [])


    const handleAddToCart = (product) => {

        dispatch(addToCart(product));
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {products.map((product) => (

                <div className='bg-gray-300 m-5 flex flex-col items-center' key={product.id} style={{ width: '200px', }}>
                    <img src={product.image} alt="img" className=' w-1/2 border border-red-900' />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='bg-green-300 p-2' onClick={() => handleAddToCart(product)}>Add To Cart</button>
                </div>
            ))}
        </div>
    );
};

export default User
