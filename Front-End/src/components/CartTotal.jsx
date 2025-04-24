import React, { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext'; // Ensure this is the correct path

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    if (!getCartAmount) {
        console.error('getCartAmount function is not defined in ShopContext');
        return null;
    }

    const cartAmount = getCartAmount() || 0; // Ensure cartAmount is 0 if getCartAmount returns a falsy value

    if (cartAmount <= 0 || !currency || isNaN(delivery_fee)) {
        return null; // Don't render anything if the cart is empty or values are invalid
    }

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'Cart'} text2={'Totals'} />
            </div>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{cartAmount}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency}{Math.floor(delivery_fee)}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Total</p>
                <p>{currency}{cartAmount + Math.floor(delivery_fee)}.00</p>
            </div>
        </div>
    );
};

export default CartTotal;