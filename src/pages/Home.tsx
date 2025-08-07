// import { LoginBtn } from "../components"

export default function Home() {

    return (
        <>
            {/* HERO and search homes */}
            <section className="relative w-full">
                <img src="src/assets/homepage_hero.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover" />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-3xl font-bold m-2">Søg efter din drømmebolig</h1>
                    <div className="bg-white p-5 min-w-[300px] max-w-[600px] w-full">
                        <p className="font-bold"> Søg blandt 158 boliger til salg i 74 butikker </p>
                        <p>Hvad skal din næste bolig indeholde</p>

                        <div className="flex gap-2">
                            <input type="text" placeholder="Hvad skal din næste bolig indeholde" className="p-2 rounded border border-gray-300 min-w-[300px] max-w-[600px] w-full" />
                            <button className="bg-dinmaegler-blue text-white p-2 rounded">Søg</button>
                        </div>
                    </div>
                </div>
            </section>




            {/* CONTENT 1 company add */}
            <section className="container mx-auto my-15 p-4 grid grid-cols-2 gap-6 ">
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <figure className="w-[400px] h-[300px] relative">
                            <img
                                src="src/assets/family-moving-using-boxes 1.png"
                                alt="family moving"
                                className="w-full h-full object-cover"
                            />
                        </figure>

                        <div className="absolute top-10 left-10 w-[410px] h-[310px] border-[10px] border-solid border-dinmaegler-blue pointer-events-none"></div>
                    </div>
                </div>

                <div className="my-auto">
                    <div>
                        <h2 className="font-bold text-2xl mb-4">Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                        <p className="font-bold mb-2">Det synes vi siger noget om os!</p>
                        <p className="mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                        <p className="mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    </div>

                    <div className="flex ">

                        <div className="flex ">
                            <figure className="">
                                <img src="src/assets/house1.png" alt="house" />
                            </figure>
                            <div>
                                <p>4829</p>
                                <p>boliger solgt</p>
                            </div>
                        </div>

                        <div className="flex">
                            <figure>
                                <img src="src/assets/house2.png" alt="house" />
                            </figure>
                            <div>
                                <p>158</p>
                                <p>boliger til salg</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CONTENT 2 highlighted homes, go to home list*/}
            <section></section>

            {/* CONTENT 3 newsletter */}
            <section></section>

            {/* CONTENT 4 higlighted agents, go to agent list */}
            <section></section>
        </>
    )
}