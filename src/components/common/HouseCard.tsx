import { Link } from "react-router";
import { type House } from "../../Types";

type HouseCardProps = {
    house: House;
}

export default function HouseCard({ house }: HouseCardProps) {
    // console.log("House ID:", house.id);

    return (
        <Link to={`/detail-homes/${house.id}`} className="block">
            <article className="bg-dinmaegler-white hover:shadow-lg transition-shadow cursor-pointer">
                <figure>
                    <img
                        src={house.images ? house.images[0].url : '/images/placeholder.jpg'}
                        alt={`${house.type} i ${house.city}`}
                    />
                </figure>
                <div className="p-4">
                    <h3>{house.adress1}</h3>
                    <h3>{house.type}</h3>
                    <p>{house.size} m²</p>
                    <p>Energy label: {house.energylabel}</p>
                </div>
            </article>
        </Link>
    );
}