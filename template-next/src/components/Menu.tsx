

export default function Menu(props) {
    return (
        <nav>
            <ul className={`
              flex justify-center my-2
            
            `}>
                <li><a className="bg-slate-10" href="">Homepage</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">External</a></li>
            </ul>
        </nav>
    )
}