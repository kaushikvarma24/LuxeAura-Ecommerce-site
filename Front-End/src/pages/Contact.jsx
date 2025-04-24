import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className='p-4'>

      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col justify-center md:flex-row gap-4 my-6'>
        <img src={assets.contact_img} alt="Contact Us" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 items-start text-gray-600'>
          <h3 className='text-3xl text-gray-800'>Our Store</h3>
          <p>Phone: +91 123 456 7890 <br/> Email: Contact@LuxeAura.com</p>
          <p><b>Address:</b> 123 Luxe Street, Luxury City, India <br /> <b>Business Hours:</b> Monday - Friday, 9 AM - 6 PM (IST)</p>
          <p className='font-semibold text-xl text-gray-800'>Careers at LuxeAura</p>
          <p className='text-gray-500'>learn more about our teams and Job Opeanings</p>
          <button className='border border-black font-light px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    <NewsLetterBox />
    </div>
  )
}

export default Contact