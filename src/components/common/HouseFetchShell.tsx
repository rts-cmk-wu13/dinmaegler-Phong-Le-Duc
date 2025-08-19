import { useLoaderData } from "react-router";

import { type House } from "../../Types";
import HouseCard from "./HouseCard";


export default function HouseFetchShell() {
    const { houses } = useLoaderData() as { houses: House[] };
   
    if (!houses || houses.length === 0) {
        return <div>No houses found</div>;
    }

    console.log("houses", houses);

    return (
        <div className="grid grid-cols-2 gap-6">
            {houses.map(house => (
                <HouseCard key={house.id} house={house} />
            ))}
        </div>
    );
}