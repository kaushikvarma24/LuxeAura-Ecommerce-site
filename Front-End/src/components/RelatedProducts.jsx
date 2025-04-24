import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    useEffect(() => {
        if (products && products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.Category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productsCopy.slice(0, 5)); // Limit to 5 related products
        }
    }, [category, subCategory, products]);

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1="RELATED" text2="PRODUCTS" />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        <ProductItem key={index} id={item._id} name={item.name}  price={Math.floor(item.price * 45.67)} image={item.image} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RelatedProducts;