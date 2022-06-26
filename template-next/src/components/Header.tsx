import buttons from "./button"
import Menu from "./Menu"

interface HeaderProps{
    cor?: 'green'
}

export default function Header(props: HeaderProps) {
    return (
        <div className="header">
            <Menu></Menu>
        </div>
    )
}