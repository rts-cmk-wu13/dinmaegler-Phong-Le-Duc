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
        const dialog = dialogRef.current;
        if (showGallery || showPlan || showMap) {
            if (dialog && !dialog.open) {
                dialog.showModal();
            }
        } else {
            dialog?.close();
        }
    }, [showGallery, showPlan, showMap, dialogRef]);

    // Listen for dialog close (Escape or button)
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleClose = () => {
            navigate("#");
        };

        dialog.addEventListener("close", handleClose);
        return () => {
            dialog.removeEventListener("close", handleClose);
        };
    }, [dialogRef, navigate]);

    return (
        <dialog
            className="backdrop:bg-black backdrop:opacity-75 mx-auto my-4 w-[40rem] h-[30rem] bg-transparent border-0"
            ref={dialogRef}
        >
            <button
                className="fixed top-2 right-3 text-white text-4xl"
                aria-label="Close dialog"
                onClick={() => {
                    dialogRef.current?.close();
                    // navigate("#"); // now handled by close event
                }}
            >
                &times;
            </button>
            {showGallery ? (
                <FlickityTest house={house} />
            ) : showPlan ? (
                <img className="max-w-full max-h-[70vh] object-contain block mx-auto" src={house.floorplan && house.floorplan.url ? house.floorplan.url : "/images/placeholder.jpg"} />
            ) : showMap ? (
                <img className="max-w-full max-h-[70vh] object-contain block mx-auto" src="/src/assets/house_lokation.png" />
            ) : (
                <img className="max-w-full max-h-[70vh] object-contain block mx-auto" src="/src/assets/house_lokation.png" />
            )}

            <div className="flex gap-4 justify-center mt-4 absolute left-1/2 transform -translate-x-1/2">
                <Link to="?modal=galleri">
                    <img src={gallery_icon} className="w-8 h-8 img-white" alt="Gallery" />
                </Link>
                <Link to="?modal=plantegning">
                    <img src={plantegning_icon} className="w-8 h-8 img-white object-cover" alt="Plantegning" />
                </Link>
                <Link to="?modal=kort">
                    <img src={map_icon} className="w-8 h-8 img-white" alt="lokation" />
                </Link>
                <img src={favorite_icon} className="w-8 h-8 img-white" alt="Favorite" />
            </div>
        </dialog>
    );
}