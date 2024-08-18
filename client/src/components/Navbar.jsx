import React from 'react'
import { menuLinks } from '../helper/helper'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex w-full justify-between py-6 px-[5%] bgmain items-center'>
            <div className='flex text-h4 items-center gap-2'>
                <i className="fa-solid fa-book-bookmark"></i>
                <h3 className=''>ListBook</h3>
            </div>
            <div className='flex gap-6'>
                {menuLinks.map((links, index) => {
                    return (
                        <div key={index}>
                            <Link className='hover:text-sky-500 text-h4 duration-300' to={links.href}>{links.name}</Link>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar