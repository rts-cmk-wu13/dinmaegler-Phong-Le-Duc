import {Header, Footer } from "./components";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="bg-white min-h-screen">
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}