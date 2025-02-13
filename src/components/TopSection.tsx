import Avatar from "./Avatar.tsx";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Button, IconButton} from "@mui/material";

export default function TopSection() {
    return (
        <section className="h-screen flex flex-col justify-center">
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-6xl">Elliott DuCharme</h1>
                <p className="text-2xl">Software Engineer, Web Developer</p>
                <Avatar/>

                <div className="flex flex-row items-center gap-4">
                    <Button variant="contained" color="primary" href="https://github.com/ellman12/ellman12/blob/main/Elliott%20DuCharme%20Resume.pdf" startIcon={<DescriptionIcon/>}>Resume</Button>
                    <Button variant="contained" color="error" href="mailto:ellduc4@gmail.com" startIcon={<EmailIcon/>}>Email</Button>
                    <Button variant="contained" color="info" href="https://www.linkedin.com/in/elliott-ducharme/" startIcon={<LinkedInIcon/>}>LinkedIn</Button>
                    <Button variant="contained" color="GitHub" href="https://github.com/ellman12/" startIcon={<GitHubIcon/>}>GitHub</Button>
                </div>

                <IconButton size="large" color="White" onClick={() => document.getElementById("about-me")!.scrollIntoView({behavior: "smooth", block: "start"})}>
                    <ExpandMoreIcon fontSize="large"/>
                </IconButton>
            </div>
        </section>
    );
}