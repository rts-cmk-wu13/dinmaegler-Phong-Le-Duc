// import { LoginBtn } from "../components"
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>
            {/* HERO and search homes */}
            <section className="relative w-full">
                <img
                    src="src/assets/homepage_hero.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className=" h1 text-white m-4">Søg efter din drømmebolig</h1>
                    <div className="bg-white p-5 min-w-[300px] max-w-[600px] w-full">
                        <p className="font-bold">Søg blandt 158 boliger til salg i 74 butikker</p>
                        <p>Hvad skal din næste bolig indeholde</p>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Hvad skal din næste bolig indeholde"
                                className="p-2 rounded border border-gray-300 min-w-[300px] max-w-[600px] w-full"
                            />
                            <button className="bg-dinmaegler-blue text-white p-2 rounded">Søg</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT 1 company add */}
            <section className="content-width mb-10 p-4 ">

                <div className="mx-auto p-4 grid grid-cols-2 gap-6 max-w-[1000px]max-w-[1000px] border-solid border-b border-gray-500 pb-20 mb-20 ">
                    <div className="relative h-[310px]">
                        <figure className="w-full h-full">
                            <img
                                src="src/assets/family-moving-using-boxes 1.png"
                                alt="family moving"
                                className="w-80 h-full object-cover"
                            />
                        </figure>

                        {/* Blue border */}
                        <div className="absolute w-80 h-80 top-5 left-5 border-[10px] border-dinmaegler-blue pointer-events-none">

                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-dinmaegler-blue text-white flex flex-col items-center justify-center text-center px-2">
                                <p className="text-3xl font-bold leading-none">38+</p>
                                <p className="text-sm leading-tight">års mægler-<br />erfaring</p>
                            </div>

                        </div>

                        {/* Text box anchored to border */}
                    </div>


                    <div className=" max-w-[400px] ">
                        <h2 className="font-bold text-2xl mb-4">
                            Vi har fulgt danskerne hjem <br />i snart 4 årtier
                        </h2>
                        <p className="font-bold mb-2">Det synes vi siger noget om os!</p>
                        <p className="mb-2">
                            It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has normal distribution.
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout.
                        </p>

                        <div className="flex mt-4 self-center gap-8">
                            <div className="flex">
                                <figure className="mr-2 bg-dinmaegler-blue-light p-2">
                                    <img src="src/assets/house1.png" alt="house" className="w-10 h-auto" />
                                </figure>
                                <div className="flex flex-col justify-center">
                                    <p className="font-bold">4829</p>
                                    <p>boliger solgt</p>
                                </div>
                            </div>

                            <div className="flex">
                                <figure className="mr-2 bg-dinmaegler-blue-light p-2">
                                    <img src="src/assets/house2.png" alt="house" className="w-10 h-auto" />
                                </figure>
                                <div>
                                    <p className="font-bold">158</p>
                                    <p>boliger til salg</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="grid grid-cols-3 gap-6 ">

                    <div className="flex">
                        <figure className="mr-2 bg-dinmaegler-blue-light p-2 self-start">
                            <img src="src/assets/property1.png" alt="house" className="w-20 h-auto" />
                        </figure>
                        <div>
                            <p className="font-bold mb-2">Bestil et salgstjek</p>
                            <p>Med et Din Mægler Salgstjek
                                bliver du opdateret på værdien
                                af din bolig.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <figure className="mr-2 bg-dinmaegler-blue-light p-2 self-start">
                            <img src="src/assets/maps-and-flags1.png" alt="house" className="w-20 h-auto" />
                        </figure>
                        <div>
                            <p className="font-bold mb-2">74 butikker</p>
                            <p>Hos Din Mægler er din bolig
                                til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
                        </div>
                    </div>


                    <div className="flex">
                        <figure className="mr-2 bg-dinmaegler-blue-light p-2 self-start">
                            <img src="src/assets/customer1.png" alt="house" className="w-20 h-auto" />
                        </figure>
                        <div className="flex flex-col justify-center">
                            <p className="font-bold mb-2">Tilmeld køberkartotek</p>
                            <p>Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT 2 highlighted homes, go to home list */}
            <section className="bg-dinmaegler-grey  ">
                <div className="content-width">
                    <div className="text-center pt-30 pb-10">
                        <h2 className="h2">Udvalgte Boliger</h2>
                        <p>There are many variations of passages of Lorem Ipsum available but the this in <br />majority have suffered alteration in some</p>
                    </div>
                    <div className="content-width bg-amber-500 pb-100 mb-100">
                        HOME LIST PLACEHOLDER

                        <Link to="/list-homes" className="text-center p-2 bg-dinmaegler-blue text-white ">Se alle boliger</Link>
                    </div>

                </div>
            </section>

            {/* CONTENT 3 newsletter */}
            <section className="relative w-full mb-20">
                <figure className="z-0">
                    <img src="src/assets/building.png" alt="" className="w-full" />
                </figure>

                <div className="absolute inset-0 bg-dinmaegler-blue/85 z-10"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex z-20 ">
                    <div className="w-100">
                        <h3 className="h3 text-white">Tilmeld dig vores nyhedsbrev og <br />
                            hold dig opdateret på boligmarkedet</h3>
                    </div>

                    <div>
                        <form className="relative flex gap-2 self-start my-auto z-30">
                            <input
                                type="email"
                                placeholder="Indtast din email"
                                className="p-2 rounded border border-gray-300 bg-dinmaegler-white min-w-[300px] max-w-[600px] w-full"
                            />
                            <button type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-dinmaegler-white text-dinmaegler-blue p-2 rounded"><img src="src/assets/arrow-right.svg" alt="submit button" /></button>
                        </form>
                    </div>
                </div>

            </section>

            {/* CONTENT 4 highlighted agents, go to agent list */}
            <section className="bg-dinmaegler-grey  ">
                <div className="content-width">
                    <div className="text-center pt-30 pb-10">
                        <h2 className="h2">Mød vores engagerede medarbejdere</h2>
                        <p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
                    </div>
                    <div className="content-width bg-amber-500 pb-100 mb-100">
                        AGENT LIST PLACEHOLDER

                        <Link to="/list-maeglere" className="text-center p-2 bg-dinmaegler-blue text-white ">Se alle mæglere</Link>
                    </div>
                </div>

            </section>

            {/* HOLD DIG OPDATERET SECTION */}
            <section className="bg-dinmaegler-blue flex items-center justify-center relative">

                <div className="content-width flex py-10">
                    <div className="">
                        <div className="text-white">
                            <h2 className="h2">Hold dig opdateret
                                på salgsprocessen</h2>
                            <p>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <button className="bg-dinmaegler-white flex px-5 py-3"><img src="src/assets/play-store.png" alt="Google Play" className="w-4 h-4" /><p>Google Play</p></button>
                            <button className="bg-transparent border border-white py-3"><img className="w-4 h-4" src="src/assets/apple.png" alt="Apple Store" /><p className="text-white">Apple Store</p></button>
                        </div>
                    </div>
                    <div className="flex ">
                        <figure className=""><img src="src/assets/phone1.png" alt="" /></figure>
                        <figure className="" ><img src="src/assets/phone2.png" alt="" /></figure>
                    </div>
                </div>

            </section>
        </>

    );
}   