
import Headline from "../components/layout/Headline";
import HomeListSection from "../components/sections/HomeListSection";
import SearchHouse from "../components/common/DropDownHouse";

export default function ListBolig() {
    // This page is used to list all houses
    return (
        <>

            <Headline headlineText="Bolig liste" />

            <SearchHouse />
            {/* CONTENT 2 highlighted homes, go to home list */}

            <HomeListSection />

        </>
    )
}