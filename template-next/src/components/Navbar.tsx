export default function Navbar() {
    return (
        <div>
            <ul className={`
             bg-slate-700 h-20 flex justify-center
              items-center text-slate-200 fixed w-full
            `}>
                <li className="bg-slate-600 py-3 px-7 border mx-2 mb-3"><a href="">Homepage</a></li>
                <li className="py-3 px-7 border mx-2 mb-3"><a href="">About Us</a></li>
                <li className="py-3 px-7 border mx-2 mb-3"><a href="">Services</a></li>
                <li className="py-3 px-7 border mx-2 mb-3"><a href="">Contact</a></li>
                <li className="py-3 px-7 border mx-2 mb-3"><a href="">External</a></li>
            </ul>
        </div>
    )
}