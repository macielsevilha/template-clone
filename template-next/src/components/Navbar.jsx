import Link from "next/link"
import React, { useState, useEffect } from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

 const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('red')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }
    
    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#FFFFFF')
                setTextColor('#000000')
            } else {
                setColor('red')
                setTextColor('#FFFFFF')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


    return (
        <div style={{background: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-slate-600">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <ul className="hidden sm:flex">
                    <li className="">
                        <Link href='/'>Homepage</Link>
                    </li>
                    <li className="">
                        <Link href='/about'>About Us</Link>
                    </li>
                    <li className="">
                        <Link href='/services'>Services</Link>
                    </li>
                    <li className="">
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li className="">
                        <Link href='/external'>External</Link>
                    </li>
                </ul>
                {/* Mobile Button */}
                <div onClick={handleNav} className="black sm:hidden z-10">
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
                </div>
                {/* Mobile Menu */}
                <div className={nav ? 'sm:hidden absolute top-20 left-100px right-0 bottom-0 flex justify-center  w-full h-screen bg-red text-center ease-in duration-300': 'absolute top-20 left-[-100%] right-0 bottom-0 flex justify-center w-full h-screen bg-red text-center ease-in duration-300'}> 
                    <ul  className="w-full mx-5">
                        <li className="p-4 bg-slate-700 border border-slate-200 text-slate-200 hover:bg-slate-600">
                            <Link href='/'>Homepage</Link>
                        </li>
                        <li className="p-4 bg-slate-700 border border-slate-200 text-slate-200 hover:bg-slate-500">
                            <Link href='/about'>About Us</Link>
                        </li>
                        <li className="p-4 bg-slate-700 border border-slate-200 text-slate-200 hover:bg-slate-500">
                            <Link href='/services'>Services</Link>
                        </li>
                        <li className="p-4 bg-slate-700 border border-slate-200 text-slate-200 hover:bg-slate-500">
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li className="p-4 bg-slate-700 border-2 border-slate-200 text-slate-200 hover:bg-slate-500">
                            <Link href='/external'>External</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Navbar