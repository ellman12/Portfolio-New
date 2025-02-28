import H2 from "../H2.tsx";
import Avatar from "../Avatar.tsx";
import {Button, IconButton} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionIcon from "@mui/icons-material/Description";
import Title from "../../../components/Title.tsx";

export default function TopSection() {
    return (
        <header className="h-screen flex flex-col justify-center">
            <div className="flex flex-col items-center gap-8">
                <Title/>
                <H2>Software Engineer, Web Developer</H2>
                <Avatar/>

                <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center gap-4 mt-4 mb-0 md:mb-4">
                    <Button variant="contained" color="primary" href="https://github.com/ellman12/ellman12/blob/main/Elliott%20DuCharme%20Resume.pdf" startIcon={<DescriptionIcon/>}>Resume</Button>
                    <Button variant="contained" color="error" href="mailto:ellduc4@gmail.com" startIcon={<EmailIcon/>}>Email</Button>
                    <Button variant="contained" color="info" href="https://www.linkedin.com/in/elliott-ducharme/" startIcon={<LinkedInIcon/>}>LinkedIn</Button>
                    <Button variant="contained" color="GitHub" href="https://github.com/ellman12/" startIcon={<GitHubIcon/>}>GitHub</Button>
                </div>

                <IconButton size="large" color="White" onClick={() => document.getElementById("about-me")!.scrollIntoView({behavior: "smooth", block: "start"})}>
                    <ExpandMoreIcon fontSize="large"/>
                </IconButton>
            </div>
        </header>
    );
}