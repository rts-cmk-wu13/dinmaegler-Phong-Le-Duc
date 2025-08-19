export default function HoldDigOpdateretSection () {

return (
       <section className="bg-dinmaegler-blue flex items-center justify-center relative">
                <div className="content-width flex py-10">
                    <div>
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
                    <div className="flex">
                        <figure><img src="src/assets/phone1.png" alt="" /></figure>
                        <figure><img src="src/assets/phone2.png" alt="" /></figure>
                    </div>
                </div>
            </section>
)
}