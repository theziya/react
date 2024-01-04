import React from 'react'

function NewsLetter() {
  return (
    <div className='bg-[#243c5a] p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
            <div className='m-2'>
                <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
                <spam className='text-white'>Sign up to our NewsLetter and stay up to date.</spam>
        </div>
        <div className='m-2'>
            <input type='text' className='sm-w-full rounded mr-1 p-3 text-slate-600' placeholder='Email'></input>
            <button className='bg-black text-white p-3 mx-0.5 rounded'>Notify Me</button>
            <br/>
            <p className='text-white'>We can bout the protection of your data. Read our<br/> <a href='' className='text-black'>Privacy Policy</a>
            </p>

        </div>
        </div>
    </div>
  )
}

export default NewsLetter
