// In src/Loaders/HouseDetailLoader.tsx
import { type House } from "../Types.ts";
import { type LoaderFunctionArgs } from "react-router";

// this loader fetches a single house by ID
export async function HouseDetailLoader({ params }: LoaderFunctionArgs): Promise<{ house: House }> {
    console.log('House ID:', params.id);

    const response = await fetch(`https://dinmaegler.onrender.com/homes/${params.id}`);

    if (!response.ok) {
        throw new Error("House not found");
    }

    const house = await response.json();
    return { house };  // Single house, not array
}