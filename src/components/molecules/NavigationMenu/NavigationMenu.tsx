import { FC } from "react"
import { Link } from "react-router-dom";
import "./NavigationMenu.scss"


const NavigationMenuList: { link: string, label: string }[] = [
    { link: "dashbaord", label: "DashBaord" },
    { link: "todolendar", label: "TodoLendar" },
]

const NavigationMenu: FC = () => {
    return (
        <nav id="nav">
            <ul>
                {NavigationMenuList.map(({ link, label }) => {
                    return <li key={link}><Link to={link}>{label}</Link></li>
                })}
            </ul>
        </nav>
    )

}
export default NavigationMenu