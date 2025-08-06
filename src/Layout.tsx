import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

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