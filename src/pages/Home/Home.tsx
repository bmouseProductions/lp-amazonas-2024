import SectionOneHome from "./Sections/SectionOne/SectionOne";
import SectionTwoHome from "./Sections/SectionTwo/SectionTwo";
import SectionThreeHome from "./Sections/SectionThree/SectionThree";
import SectionFourHome from "./Sections/SectionFour/SectionFour";
import SectionFiveHome from "./Sections/SecionFive/SectionFive";
import SectionSixHome from "./Sections/SectionSix/SectionSix";
import SectionSevenHome from "./Sections/SectionSeven/SectionSeven";
import Footer from "../../components/Footer/Footer";



export default function Home() {
    return (
        <div className="bg-gradient-to-b from-[#102619] via-[#115b2f] to-[#102619]">
            <SectionOneHome />
            <SectionTwoHome />
            <SectionThreeHome />
            <SectionFourHome />
            <SectionFiveHome />
            <SectionSixHome />
            <SectionSevenHome />
            <Footer />
        </div>
    )
}