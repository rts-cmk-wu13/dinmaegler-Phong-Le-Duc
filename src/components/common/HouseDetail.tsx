// import { Link } from "react-router";
import { type House } from "../../Types";
import gallery_icon from "/src/assets/gallery_icon.png";
import plantegning_icon from "/src/assets/plantegning_icon.png";
import map_icon from "/src/assets/map_icon.png";
import favorite_icon from "/src/assets/favorite_icon.png";


type HouseCardProps = {
    house: House;
}


export default function HouseDetail({ house }: HouseCardProps) {
    console.log("Full house object:", house);
    console.log("House images array:", house.images);


    return (
        <>
            <article className="">
                <figure className="full-w">
                    <img
                        className="object-cover h-auto w-full"
                        src={house.images ? house.images[0].url : '/images/placeholder.jpg'}
                        alt={`${house.type} i ${house.city}`}
                    />
                </figure>
                <section className="content-width">

                    <div className="flex justify-between my-6 border-b-2 border-gray-300 pb-4 items-center">
                        <div className="">

                            <p>{house.adress1}</p>
                            <p>{house.postalcode} {house.city}</p>
                        </div>

                        <div className="flex gap-4">
                            <img src={gallery_icon} className="w-10 h-10" alt="Gallery" />
                            <img src={plantegning_icon} className="w-10 h-10" alt="Plantegning" />
                            <img src={map_icon} className="w-10 h-10" alt="lokation" />
                            <img src={favorite_icon} className="w-10 h-10" alt="Favorite" />
                        </div>

                        <p>Kr. {house.price?.toLocaleString('da-DK')}</p>

                    </div>

                    <div className="">
                        <table className="w-full">
                            <tbody className="">
                                <tr className="">
                                    <td className="py-1">Sagsnummer:</td>
                                    <td className="py-1">123456789</td>
                                    <td className="py-1">Kælder:</td>
                                    <td className="py-1">{house.basementsize > 0 ? 'Ja' : 'Nej'}</td>
                                    <td className="py-1">Udbetaling:</td>
                                    <td className="py-1">Kr. {house.payment?.toLocaleString('da-DK')}</td>
                                </tr>
                                <tr className="">
                                    <td className="py-1">Boligareal:</td>
                                    <td className="py-1">{house.livingspace} m²</td>
                                    <td className="py-1">Byggeår:</td>
                                    <td className="py-1">{house.built}</td>
                                    <td className="py-1">Brutto ex ejerudgift:</td>
                                    <td className="py-1">Kr. {house.gross?.toLocaleString('da-DK')}</td>
                                </tr>
                                <tr className="">
                                    <td className="py-1">Grundareal:</td>
                                    <td className="py-1">{house.lotsize} m²</td>
                                    <td className="py-1">Ombygget:</td>
                                    <td className="py-1">{house.remodel}</td>
                                    <td className="py-1">Netto ex ejerudgift:</td>
                                    <td className="py-1">Kr. {house.netto?.toLocaleString('da-DK')}</td>
                                </tr>
                                <tr className="">
                                    <td className="py-1">Rum/værelser:</td>
                                    <td className="py-1">{house.rooms}</td>
                                    <td className="py-1">Energimærke:</td>
                                    <td className="py-1">{house.energylabel}</td>
                                    <td className="py-1">Ejerudgifter:</td>
                                    <td className="py-1">Kr. {house.cost?.toLocaleString('da-DK')}</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Antal plan:</td>
                                    <td className="py-1">??</td>
                                    <td className="py-1"></td>
                                    <td className="py-1"></td>
                                    <td className="py-1"></td>
                                    <td className="py-1"></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </section>
            </article>
        </>
    )
}