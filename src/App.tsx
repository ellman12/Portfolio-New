import "./App.css";
import Portfolio from "./Pages/Portfolio/Portfolio.tsx";
import Resume from "./Pages/Resume/Resume.tsx";
import {ThemeProvider} from "@mui/material";
import ExtendedTheme from "./ThemeExtensions.ts";
import {Route, Routes, BrowserRouter} from "react-router-dom";

export default function App() {
    return (
        <div className="bg-[#343A40] h-full w-full">
            <ThemeProvider theme={ExtendedTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/Portfolio" element={<Portfolio/>}/>
                        <Route path="/Portfolio/Resume" element={<Resume/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}
