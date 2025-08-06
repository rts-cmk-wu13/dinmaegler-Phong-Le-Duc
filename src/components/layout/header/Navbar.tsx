import { Link } from "react-router-dom";
import homeIcon from "/src/assets/home_din_maegler.svg";

export default function Navbar() {

    return (
        <>
            <div className="flex border-b shadow p-5" >

                <Link to="/" >
                    <img src={homeIcon} alt="Home" className="w-45 mr-1" />
                </Link>

                <ul className="flex items-center space-x-4 bg-dinmaegler-white ml-auto">
                    <li>
                        <Link to="/list-homes">Boliger til salg</Link>
                    </li>
                    <li>
                        <Link to="/list-Maeglere">Mæglere</Link>
                    </li>
                    <li>
                        <Link to="/favorite-homes">Mine favoritter</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Kontakt os</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}