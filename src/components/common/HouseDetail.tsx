import { Link, useSearchParams } from "react-router";
import { useRef } from "react";
import { type House } from "../../Types";
import gallery_icon from "/src/assets/gallery_icon.png";
import plantegning_icon from "/src/assets/plantegning_icon.png";
import map_icon from "/src/assets/map_icon.png";
import favorite_icon from "/src/assets/favorite_icon.png";
import GalleryHouse from "./GalleryHouse";

type HouseCardProps = {
    house: House;
}


export default function HouseDetail({ house }: HouseCardProps) {

    const [searchParams] = useSearchParams();
    const showGallery = searchParams.get("gallery") === "true";
    const dialogRef = useRef<HTMLDialogElement>(null); //react querySelector


    

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
                            <Link to="?gallery=true">
                                <img src={gallery_icon} className="w-10 h-10" alt="Gallery" />
                            </Link>
                            <img src={plantegning_icon} className="w-10 h-10" alt="Plantegning" />
                            <img src={map_icon} className="w-10 h-10" alt="lokation" />
                            <img src={favorite_icon} className="w-10 h-10" alt="Favorite" />
                        </div>

                        <p>Kr. {house.price?.toLocaleString('da-DK')}</p>

                    </div>

                    <div className="mb-12">
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

                    <section className="grid grid-cols-2 content-width gap-4">

                        <h3 className="font-bold">Beskrivelse</h3>
                        <h3 className="font-bold">Ansvarlig mægler</h3>
                        <div>
                            <p>{house.description}</p>
                        </div>

                        <div className="flex border border-gray-300 p-4 items-center gap-6 h-60">
                            <div>


                                <figure>
                                    <img
                                        src={
                                            house.agent?.image?.url ||
                                            "/images/placeholder.jpg"
                                        }
                                        alt={house.agent?.name || "Agent"}
                                        className="w-40 h-40 object-cover border border-gray-300"
                                    />
                                </figure>
                            </div>

                            {/* agent info */}
                            <div className="flex flex-col justify-center">
                                <p className="font-bold">{house.agent?.name}</p>
                                <p className="mb-2">{house.agent?.title}</p>
                                <div className="flex items-center gap-2">
                                    <img src="/src/assets/phone_icon.svg" alt="Telefon" className="w-4 h-4 img-black" />
                                    <p>{house.agent?.phone}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/src/assets/mail_icon.svg" alt="Email" className="w-4 h-4 img-black" />
                                    <p>
                                        <a href={`mailto:${house.agent?.email}`} className="text-blue-600 underline">
                                            {house.agent?.email}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
            </article >


         <GalleryHouse
            dialogRef={dialogRef}
            gallery_icon={gallery_icon}
            plantegning_icon={plantegning_icon}
            map_icon={map_icon}
            favorite_icon={favorite_icon}
            showGallery={showGallery}
            house={house}
         />

        </>
    )
}