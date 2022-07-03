import Link from "../../node_modules/next/link"
import { AiOutlineMenu, AiOutlineClose } from '../../node_modules/react-icons/ai/index'
export default function Navbar() {
    return (
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
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
                <div className="black sm:hidden z-10">
                    <AiOutlineMenu size={20} />
                </div>
                {/* Mobile Menu */}
                <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-red text-center ease-in duration-300"> 
                    <ul>
                        <li>
                            <Link href='/'>Homepage</Link>
                        </li>
                        <li>
                            <Link href='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link href='/services'>Services</Link>
                        </li>
                        <li>
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link href='/external'>External</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}