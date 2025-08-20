import Headline from "../components/layout/Headline"
// import HouseCard from "../components/common/HouseCard"
import HouseDetail from "../components/common/HouseDetail"
import { useLoaderData } from "react-router"
import { type House } from "../Types"

export default function DetailBolig() {
    const { house } = useLoaderData() as { house: House };


    return (
        <>
            <Headline headlineText="Bolig detail" />
            <HouseDetail house={house} />
        </>
    )
}