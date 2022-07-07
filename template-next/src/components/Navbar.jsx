import Link from "next/link"
import React, { useState, useEffect } from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }
    console.log(nav)

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('bg-slate-600')
                setTextColor('#000000')
            } else {
                setColor('transparent')
                setTextColor('#000000')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


    return (
        <div className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${color}`}>
            <div className="max-w-[1240px] m-auto flex justify-center items-center p-4 h-[70px] ">
                <ul className="hidden sm:flex text-sm">
                    <li className="px-5 py-[9px] border mx-2 hover:bg-slate-500 text-slate-300 mt-[-10px]">
                        <Link href='/'>Homepage</Link>
                    </li>
                    <li className="px-5 py-[9px] border mx-2 hover:bg-slate-500 text-slate-300 mt-[-10px] ">
                        <Link href='/about'>About Us</Link>
                    </li>
                    <li className="px-5 py-[9px] border mx-2 hover:bg-slate-500 text-slate-300 mt-[-10px] ">
                        <Link href='/services'>Services</Link>
                    </li>
                    <li className="px-5 py-[9px] border mx-2 hover:bg-slate-500 text-slate-300 mt-[-10px] ">
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li className="px-5 py-[9px] border mx-2 hover:bg-slate-500 text-slate-300 mt-[-10px] ">
                        <Link href='/external'>External</Link>
                    </li>
                </ul>
                {/* Mobile Button */}
                <div className="absolute right-3">
                    <div onClick={handleNav} className="black sm:hidden z-10">
                        {nav ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={nav ? 'sm:hidden absolute top-20 left-[0%] right-0 bottom-0 flex justify-center  w-full h-screen bg-red text-center ease-in duration-300' : 'absolute top-20 left-[-100%] right-0 bottom-0 flex justify-center w-full h-screen bg-red text-center ease-in duration-300'}>
                    <ul className="w-full mx-5">
                        <li className="my-[-5px] p-4 bg-slate-600 border border-slate-200 text-slate-200 hover:bg-slate-500">
                            <Link href='/'>Homepage</Link>
                        </li>
                        <li className="my-[-5px] p-4 bg-slate-600 border border-slate-200 text-slate-200 hover:bg-slate-500">
                            <Link href='/about'>About Us</Link>
                        </li>
                        <li className="my-[-5px] p-4 bg-slate-600 border border-slate-200 text-slate-200 hover:bg-slate-500">
                            <Link href='/services'>Services</Link>
                        </li>
                        <li className="my-[-5px] p-4 bg-slate-600 border border-slate-200 text-slate-200 hover:bg-slate-500">
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li className="my-[-5px] p-4 bg-slate-600 border border-slate-200 text-slate-200 hover:bg-slate-500">
                            <Link href='/external'>External</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Navbar