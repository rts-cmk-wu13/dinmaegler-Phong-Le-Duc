
import HomeListSection from "../components/sections/HomeListSection";
import AgentListSection from "../components/sections/AgentListSection";
import NewsletterSection from "../components/sections/NewsletterSection";
import HoldDigOpdateretSection from "../components/sections/HoldDigOpdateretSection";
import HeroSection from "../components/sections/HeroSection";
import CompanyAddSection from "../components/sections/CompanyAddSection";


export default function Home() {
    return (
        <>
            {/* HERO and search homes */}
            <HeroSection />

            {/* CONTENT 1 company add */}
            <CompanyAddSection />

            {/* CONTENT 2 highlighted homes, go to home list */}
            <HomeListSection />


            {/* CONTENT 3 newsletter */}
            <NewsletterSection />

            {/* CONTENT 4 highlighted agents, go to agent list */}
            <AgentListSection />

            {/* CONTENT 5HOLD DIG OPDATERET SECTION */}
            <HoldDigOpdateretSection />
        </>
    );
}