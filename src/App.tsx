import "./App.css";
import Home from "./Home.tsx";
import {ThemeProvider} from "@mui/material";
import ExtendedTheme from "./ThemeExtensions.ts";

export default function App() {
    return (
        <ThemeProvider theme={ExtendedTheme}>
        <div className="bg-[#343A40] h-full w-full">
            <Home/>
        </div>
        </ThemeProvider>
    );
}
