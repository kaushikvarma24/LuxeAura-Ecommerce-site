import React from 'react'

const Login = () => {

  const [currentState, setCurrentState] = React.useState('Login'); 
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] bg-gray-800 w-8' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800 ' required /> }
      <input type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800 ' required/>
      <input type="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-800 ' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='text-gray-500'>Forgot Password?</p>
        {currentState === 'Login' ? <p onClick={() => setCurrentState('Sign Up')} className='text-gray-500 cursor-pointer'>Create Account</p> : <p onClick={() => setCurrentState('Login')} className='text-gray-500 cursor-pointer'>Login</p>}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In': 'Sign Up'}</button>
    </form>
  )
}

export default Login