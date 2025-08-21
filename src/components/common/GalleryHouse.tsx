import React, { useEffect } from "react";
import { type House } from "../../Types";
import { Link } from "react-router";

type GalleryHouseProps = {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    gallery_icon: string;
    plantegning_icon: string;
    map_icon: string;
    favorite_icon: string;
    showGallery: boolean;
    house: House;
};

export default function GalleryHouse({ dialogRef, showGallery, house, gallery_icon, plantegning_icon, map_icon, favorite_icon }: GalleryHouseProps) {
    useEffect(() => {
        if (showGallery) {
            setTimeout(() => {
                dialogRef.current?.showModal();
                console.log("Gallery is open");
            }, 100);
        } else {
            dialogRef.current?.close();
        }
    }, [showGallery, dialogRef]);

    return (
        <dialog
            className="gallery-modal backdrop:bg-black backdrop:opacity-90 mx-auto my-4 w-fit h-fit pb-15 bg-transparent overflow-hidden"
            ref={dialogRef}
        >
            <img
                className="max-w-full max-h-[80vh] object-contain block"
                src={house.images ? house.images[0].url : '/images/placeholder.jpg'}
                alt={`${house.type} i ${house.city}`}
            />
          
            <div className="flex gap-4 justify-center mt-4">
                <Link to="?gallery=true">
                    <img src={gallery_icon} className="w-10 h-10" alt="Gallery" />
                </Link>
                <img src={plantegning_icon} className="w-10 h-10" alt="Plantegning" />
                <img src={map_icon} className="w-10 h-10" alt="lokation" />
                <img src={favorite_icon} className="w-10 h-10" alt="Favorite" />
            </div>

        </dialog>
    );
}