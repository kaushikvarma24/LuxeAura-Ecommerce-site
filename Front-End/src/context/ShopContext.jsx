import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 100;
    const [search, setSearch] = useState('');
    const [showsearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    async function addToCart(itemId, size) {
        if (!size) {
            toast.error('Please select a size'); // Show toast if size is not selected
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalcount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalcount += cartItems[items][item];
                        
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalcount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (!cartData[itemId][size]) {
            cartData[itemId][size] = 0;
        }

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

    }

    const getCartAmount = async => {
    
        let totalAmount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        const productData = products.find((product) => product._id === items);
                        totalAmount += Math.floor(productData.price * 45.67) * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount + delivery_fee;
    
    }


    const value = {
        products,
        currency, 
        delivery_fee,
        search,
        setSearch,
        showsearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
