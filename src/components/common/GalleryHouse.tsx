import React, { useEffect } from "react";
import { Link } from "react-router";
import type { House } from "../../Types";
import { useNavigate } from "react-router";
import FlickityTest from "./FlickityTest";


type GalleryHouseProps = {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    gallery_icon: string;
    plantegning_icon: string;
    map_icon: string;
    favorite_icon: string;
    showGallery: boolean;
    showPlan: boolean;
    showMap: boolean;
    house: House;

};



export default function GalleryHouse({
    dialogRef,
    showGallery,
    showPlan,
    showMap,
    gallery_icon,
    plantegning_icon,
    map_icon,
    favorite_icon,
    house

}: GalleryHouseProps) {

    const navigate = useNavigate();

    useEffect(() => {
        if (showGallery || showPlan || showMap) {
            setTimeout(() => {
                dialogRef.current?.showModal();
            }, 50);



        }
    }, [showGallery, showPlan, showMap, dialogRef]);

    return (
        <dialog
            className="gallery-modal backdrop:bg-black backdrop:opacity-90 mx-auto my-4 w-[50rem] h-[30rem] p-0 bg-transparent overflow-hidden"
            ref={dialogRef}
        >
            <button className="fixed top-2 right-3 text-white text-4xl" aria-label="Close dialog" onClick={() => {
                dialogRef.current?.close()
                navigate("#")
            }}>&times;</button>
            {showGallery ? (
                <FlickityTest house={house} />
            ) : showPlan ? (
                <img src={house.floorplan && house.floorplan.url ? house.floorplan.url : "/images/placeholder.jpg"} />
            ) : showMap ? (
                <img src="/src/assets/house_lokation.png" />
            ) : (
                <img src="/src/assets/house_lokation.png" />
            )}




            <div className="flex gap-4 justify-center mt-4">
                <Link to="?modal=galleri">
                    <img src={gallery_icon} className="w-10 h-10" alt="Gallery" />
                </Link>
                <Link to="?modal=plantegning">
                    <img src={plantegning_icon} className="w-10 h-10" alt="Plantegning" />
                </Link>
                <Link to="?modal=kort">
                    <img src={map_icon} className="w-10 h-10" alt="lokation" />
                </Link>
                <img src={favorite_icon} className="w-10 h-10" alt="Favorite" />
            </div>
        </dialog>
    );
}