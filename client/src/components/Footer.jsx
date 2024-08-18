import React from 'react'
import { tecIcons } from '../helper/helper'


const Footer = () => {
    return (
        <footer className='bgmain py-10 flex flex-col items-center'>
        <p>Powered by</p>
            <div className='flex gap-2'>
                {tecIcons.map((icon, index) => {
                    return (
                        <div key={index} className=' p-1 hover:scale-150 duration-300 hover:bg-slate-200'>
                            <img className='w-8' src={icon.image} alt='icons' />
                        </div>
                    )
                })}
            </div>
            <p>copyright &copy; a Fihr Site made with <span className='text-red-500'>♥</span> and React</p>
        </footer>
    )
}

export default Footer