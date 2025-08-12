import mailto from "/src/assets/mail_icon.svg"
import phoneIcon from "/src/assets/phone_icon.svg";
import loginIcon from "/src/assets/login_icon.svg";
import { Link } from "react-router-dom";


export default function Topbar() {
    return (
        <>
            <div className="bg-dinmaegler-blue">
                <div className="header-width flex items-center justify-between  p-5 gap-4">
                    <a
                        href="mailto:4000@dinmaegler.com"
                        className="flex items-center text-white hover:underline"
                    >
                        <img src={mailto} alt="Home" className="w-5 h-5 mr-1" />
                        4000@dinmaegler.com
                    </a>

                    <a href="tel:+45 7070 4000" className="flex items-center text-white hover:underline">
                        <img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-1" />
                        +45 7070 4000
                    </a>

                    <Link to="/login" className="flex items-center ml-auto"><img src={loginIcon} alt="login" /><p className="text-white">Log in</p></Link>
                </div>
            </div>
        </>
    )
}