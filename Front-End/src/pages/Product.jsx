import { useParams } from 'react-router-dom' 
import { ShopContext } from '../context/ShopContext';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  
  const { productId } = useParams();
  const {products, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [Size, setSize] = useState('');

  const fetchProductData = () => {
  products.map((item) => {
    if (item._id === productId) {
    setProductData(item);
    setImage(item.image[0]);
    return null;
    }
  })  
  }

  useEffect(() => { 
  if (products && products.length > 0) {
    fetchProductData();
  }
  }, [productId, products])

  return productData ? (
  <>
  <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
    {/* Product Data */}
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
    {/* ---------------Product Images------------------- */}
    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>  
      <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
      {productData.image.map((item, index) => (
        <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
      ))}
      </div>
      <div className='w-full sm:w-[80%]'>
      <img src={image} className='w-full h-auto' alt="" />
      </div>
    </div>
    {/* ---------------Product Details------------------- */}
    <div className='flex-1 flex flex-col gap-3'>
      <h1 className='text-2xl font-bold'>{productData.name}</h1>
      <div className=' flex items-center gap-1 mt-2'>
      <img src={assets.star_icon} alt="" className="w-3 5" />
      <img src={assets.star_icon} alt="" className="w-3 5" />
      <img src={assets.star_icon} alt="" className="w-3 5" /> 
      <img src={assets.star_icon} alt="" className="w-3 5" />
      <img src={assets.star_dull_icon} alt="" className="w-3 5" />
      <p className='pl-2'>(122)</p>
      </div>
      <div className='flex items-center gap-2'>
      <span className='text-lg font-semibold'>₹{Math.floor(productData.price * 45.67)}</span>
      <span className='text-sm text-gray-500 line-through'>{productData.oldPrice}</span>
      </div>
      <p className='text-sm text-gray-500'>{productData.description}</p>
      <div className='flex flex-col gap-4 my-8'> 
      <p>Select Size</p> 
      <div className='flex gap-2'>
        {productData.sizes.map((item, index) => (
        <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === Size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
        ))}
      </div>
      </div>
      <button onClick={()=>addToCart(productData._id,Size)} className='bg-black text-white py-2 px-4 rounded-md'>Add to Cart</button>
      <hr className='mt-5 sm:w-5/5' />
      <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
      <p>100% Original product.</p>
      <p>Cash on delivery is available on this product.</p>
      <p>Easy return and exchange policy within 7 Days</p>
      </div>
     </div> 
  </div>
  {/* ---------------DESCRIPTION & REVIEW SECTION------------------- */}
  <div className='mt-20'>
 
    <div className='flex'>
    <b className='border px-5 py-3 text-sm'>Description</b>
    <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
    </div>
  
    <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
    <p>At LuxeAura, we believe in the art of luxury living. Our company was founded with a vision to bring the finest and most exclusive products to those who appreciate the finer things in life. We meticulously curate our collection from the world's most renowned brands and artisans, ensuring that each item reflects our commitment to quality, craftsmanship, and timeless elegance. Our passion for excellence drives us to constantly seek out new and innovative products that set trends and redefine luxury.</p>
    <p>Our dedication to customer satisfaction is at the heart of everything we do. We strive to provide an unparalleled shopping experience, from personalized service to seamless delivery. Our team of experts is always on hand to assist you in finding the perfect piece that complements your lifestyle. At LuxeAura, we are more than just a brand; we are a community of like-minded individuals who share a love for sophistication and style. Join us on this journey and discover the true essence of luxury.</p>
    </div>
  
  </div>
  {/* ---------------DISPLAY RELATED PRODUCTS------------------- */}
  <RelatedProducts category={productData.Category} subCategory={productData.subCategory} />
  </div>
  </>
  ) : (
  <div className='opacity-0'>Loading...</div>
  );
};

export default Product;
