import { Link } from "react-router-dom";
import homeIcon from "/src/assets/home_din_maegler.svg";

export default function Footer() {

    return (
        <>
        <footer className="bg-dinmaegler-grey flex flex-col items-center">
            <div className="p-5 flex flex-col ">
                <div className="max-w-[500px] ">
                    <Link to="/" >
                        <img src={homeIcon} alt="Home" className="w-45 mr-1" />
                    </Link>

                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                </div>
                <div className="flex">
                    <div className="bg-dinmaegler-white p-5">
                        <div className="flex">
                            <figure>
                                <img src="src/assets/phone-round-Icon.png" alt="" />
                            </figure>
                            <div>
                                <p>Ring til os</p>
                                <p>+45 7070 4000</p>
                            </div>
                        </div>

                        <div className="flex">
                            <figure>
                                <img src="src/assets/mail-round-icon.png" alt="" />
                            </figure>
                            <div>
                                <p>Ring til os</p>
                                <p>+45 7070 4000</p>
                            </div>
                        </div>

                        <div className="flex">
                            <figure>
                                <img src="src/assets/map-round-icon.png" alt="" />
                            </figure>
                            <div>
                                <p>Ring til os</p>
                                <p>+45 7070 4000</p>
                            </div>
                        </div>


                    </div>

                    <div className=" p-5 ">
                        <ul className="">
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
                            <li>
                                <Link to="/list-homes" className="flex items-center ml-auto">Log in / bliv bruger</Link>
                            </li>
                        </ul>

                        <div>
                            <p>medlem af</p>
                            <img src="src/assets/DMS.png" alt="" />
                            <p>Dansk Mægler Sammenslutning</p>

                        </div>
                    </div>
                </div>
            </div>
                <div className="bg-dinmaegler-blue w-full">
                    <p className="text-white text-center p-5">Layout By Jit Banik 2020</p>
                </div>
            </footer>
        </>
    )
}