import HomeFetchShell from "../common/HouseFetchShell";
import { Link, useLocation } from "react-router";

export default function HomeListSection() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <section className="bg-dinmaegler-grey">
            <div className="content-width pb-30 ">
                <header className=" pt-30 pb-10 text-center">
                    <h2 className="h2">Udvalgte Boliger</h2>
                    <p>There are many variations of passages of Lorem Ipsum available but the this in <br />majority have suffered alteration in some</p>
                </header>

                <HomeFetchShell />

                {isHomePage && (
                    <div className="text-center mt-10">
                        <Link
                            to="/list-homes"
                            className="inline-block px-6 py-2 mx-auto rounded bg-dinmaegler-blue text-white mt-4 hover:bg-dinmaegler-blue/90 transition"
                        >
                            Se alle boliger
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}