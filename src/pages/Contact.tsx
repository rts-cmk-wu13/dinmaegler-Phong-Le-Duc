import WriteUsForm from "../components/common/WriteUsForm"
import Headline from "../components/layout/Headline"


export default function Contact() {

    return (
        <>


            <div className="">
                <Headline headlineText="Kontakt os" />
            </div>

            <div className=" grid grid-cols-2 content-width gap-10">
                <div className="p-2 max-w-lg mt-10">
                    <h3 className="h3 mb-4">Vi sidder klar til at besvare dine spørgsmål</h3>
                    <p>Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
                </div>

                <div></div>

                <div className="flex gap-5 justify-center">
                    <WriteUsForm />
                </div>


                <div className="flex border border-gray-300 p-10 rounded-[3px]  w-80 ">
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
                </div>

            </div >
                {/* STORE LOCATION MAP */}
                <section>
<h3 className="h3 w-full h-80 bg-amber-300">MAP PLACEHOLDER</h3>
                </section>
        </>
    )
}