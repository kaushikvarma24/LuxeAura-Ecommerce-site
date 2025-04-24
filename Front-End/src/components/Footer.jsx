import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm mt-20'>
            
            <div>
            <img className='mb-5 w-32' src={assets.logo} alt='' />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error at cumque quaerat, quas aspernatur delectus facilis laboriosam earum tempore sed unde? Vero necessitatibus officia quos itaque cumque quas eos fugiat?</p>
            </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>DElIVERY</li>
                <li>PRIVACY POLICY </li>

            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 1234567890</li>
                <li>Contact@luxeAura.com</li>
            </ul>
        </div>

    </div>
    <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ LuxeAura.com - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer