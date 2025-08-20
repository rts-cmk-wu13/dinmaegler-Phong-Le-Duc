import heroimg from "/src/assets/homepage_hero.jpg";


export default function HeroSection() {

    return (
        <section className="relative w-full">
            <img
                src={heroimg}
                alt="hero image"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="h1 text-white m-4">Søg efter din drømmebolig</h1>
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
    )
}