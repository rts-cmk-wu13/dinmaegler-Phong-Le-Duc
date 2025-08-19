


export default function NewsletterSection () {

return (
      <section className="relative w-full mb-20">
                <figure className="z-0">
                    <img src="src/assets/building.png" alt="" className="w-full" />
                </figure>

                <div className="absolute inset-0 bg-dinmaegler-blue/85 z-10"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 w-full">
                    <div className="w-100">
                        <h3 className="h3 text-white text-center">Tilmeld dig vores nyhedsbrev og <br />
                            hold dig opdateret på boligmarkedet</h3>
                    </div>

                    <div className="w-full flex justify-center mt-4">
                        <form className="relative flex gap-2 w-full max-w-[600px] z-30">
                            <input
                                type="email"
                                placeholder="Indtast din email"
                                className="p-2 rounded border border-gray-300 bg-dinmaegler-white min-w-[300px] max-w-[600px] w-full"
                            />
                            <button type="submit"
                                className="bg-dinmaegler-white text-dinmaegler-blue p-2 rounded">
                                <img src="src/assets/arrow-right.svg" alt="submit button" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
)
}