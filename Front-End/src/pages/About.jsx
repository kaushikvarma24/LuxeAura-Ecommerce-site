import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>

      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img src={assets.about_img} alt="About Us" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col  justify-center gap-6 md:w-2/4 text-gray-600'>
          <h3 className='text-3xl text-gray-800'>Welcome to LuxeAura</h3>
          <p>Discover the epitome of luxury and elegance with LuxeAura, your ultimate destination for premium lifestyle products. Our brand is dedicated to offering an exquisite collection of high-end items that cater to the discerning tastes of our esteemed clientele.</p>
          <h3 className='text-3xl text-gray-800'>Our Collection</h3>
          <p>At LuxeAura, we pride ourselves on curating a diverse range of products that embody sophistication and quality. From timeless fashion pieces and bespoke jewelry to state-of-the-art gadgets and opulent home decor, every item in our collection is meticulously selected to ensure it meets the highest standards of excellence.</p>
          <b className='text-gray-800'>Join the LuxeAura family and indulge in luxury. Follow us on social media and subscribe to our newsletter for the latest trends and exclusive offers</b>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Unparalleled Quality</b>
          <p className='text-gray-600'>We source our products from the most reputable brands and artisans around the world, ensuring that each piece is crafted with precision and care.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exclusive Designs</b>
        <p className='text-gray-600'>Our collection features unique and limited-edition items that you won't find anywhere else, making LuxeAura the perfect choice for those who seek exclusivity.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Service</b>
          <p className='text-gray-600'>Our commitment to customer satisfaction is unwavering. We offer personalized shopping experiences, dedicated customer support, and seamless delivery services to ensure your journey with LuxeAura is nothing short of extraordinary.</p>
        </div>
      </div>

      <NewsLetterBox />



    </div>
  )
}

export default About