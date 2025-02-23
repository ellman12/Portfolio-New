import H3 from "../H3.tsx";
import Section from "./Section.tsx";
import Tidbit from "../Tidbit.tsx";
import ChatIcon from "@mui/icons-material/Chat";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import CasinoIcon from '@mui/icons-material/Casino';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import HikingIcon from '@mui/icons-material/Hiking';
import ScrollOnceAnimation from "../ScrollOnceAnimation.tsx";

export default function AboutMeSection() {
    return (
        <Section icon={<PersonIcon/>} title="About Me">
            <div className="flex flex-col gap-4">
                <ScrollOnceAnimation>
                    <div className="grid grid-cols-2 gap-4 sm:px-8 mb-4">
                        <Tidbit icon={<WorkIcon/>} text="KBR — Software Engineer"/>
                        <Tidbit icon={<PlaceIcon/>} text="Sioux Falls, SD"/>
                        <Tidbit icon={<SchoolIcon/>} text="B.S. Computer Science, Dakota State University"/>
                        <Tidbit icon={<ChatIcon/>} text="He/him"/>
                    </div>
                </ScrollOnceAnimation>

                <ScrollOnceAnimation>
                    <H3 className="pl-4">Hobbies</H3>

                    <ScrollOnceAnimation>
                        <div className="mt-6 grid grid-cols-2 gap-4 sm:px-8 mb-4">
                            <Tidbit icon={<AdsClickIcon/>} text="Archery"/>
                            <Tidbit icon={<PedalBikeIcon/>} text="Biking"/>
                            <Tidbit icon={<OutdoorGrillIcon/>} text="Cooking"/>
                            <Tidbit icon={<CodeIcon/>} text="Coding"/>
                            <Tidbit icon={<CasinoIcon/>} text="D&D"/>
                            <Tidbit icon={<FitnessCenterIcon/>} text="Exercise"/>
                            <Tidbit icon={<SportsEsportsIcon/>} text="Gaming"/>
                            <Tidbit icon={<HikingIcon/>} text="Hiking"/>
                            <Tidbit icon={<PrecisionManufacturingIcon/>} text="Robotics"/>
                        </div>
                    </ScrollOnceAnimation>
                </ScrollOnceAnimation>
            </div>
        </Section>
    );
}