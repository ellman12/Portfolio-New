import TopSection from "./components/TopSection.tsx";
import AboutMeSection from "./components/AboutMeSection.tsx";

export default function Home() {
    return (
        <div className="bg-[#212529] mx-auto max-w-5xl py-4" style={{boxShadow: "0 0 1em 1em #292E33"}}>
            <TopSection/>

            <main>
                <AboutMeSection/>
            </main>
        </div>
    );
}