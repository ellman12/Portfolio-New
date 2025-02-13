import PersonIcon from "@mui/icons-material/Person";
import Section from "./Section.tsx";
import Tidbit from "./Tidbit.tsx";
import ChatIcon from "@mui/icons-material/Chat";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export default function AboutMeSection() {
    return (
        <Section icon={<PersonIcon/>} title="About Me">
            <div className="grid grid-cols-2 gap-4 sm:px-8">
                <Tidbit icon={<WorkIcon/>} text="KBR — Software Engineer"/>
                <Tidbit icon={<PlaceIcon/>} text="Sioux Falls, SD"/>
                <Tidbit icon={<SchoolIcon/>} text="Dakota State University"/>
                <Tidbit icon={<ChatIcon/>} text="He/him"/>
            </div>

            <p className="mt-8">My name is Elliott DuCharme. I have been working as a software engineer for KBR in Sioux Falls, SD since June 2023. Previously, I interned as a software engineer at Daktronics. I earned my B.S. in Computer Science from Dakota State University, where I studied from August 2020 to May 2023. I was the lead programmer on my high school's FRC team, which led to my love of robotics. My hobbies include archery, cooking, D&amp;D, exercise, gaming, and working on personal projects, usually ones that enhance quality of life. Through several projects over the years, I have developed a love for automation, databases, and game design, as well as a love for learning new technologies.</p>
        </Section>
    );
}