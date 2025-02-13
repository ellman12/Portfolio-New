import {createTheme} from "@mui/material";

declare module "@mui/material/styles" {
    interface Palette {
        GitHub?: Palette["primary"];
        White?: Palette["primary"];
    }

    interface PaletteOptions {
        GitHub?: PaletteOptions["primary"];
        White?: PaletteOptions["primary"];
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        GitHub: true;
        White: true;
    }
}

declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides {
        GitHub: true;
        White: true;
    }
}

const ExtendedTheme = createTheme({
    palette: {
        GitHub: {
            main: "#141414",
            light: "#181818",
            dark: "#000000",
            contrastText: "#ffffff"
        },
        White: {
            main: "#ffffff",
            contrastText: "#ffffff"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({theme, ownerState}) => ({
                    ...(ownerState.color === "GitHub" && {
                        backgroundColor: theme.palette.GitHub?.main,
                        color: theme.palette.GitHub?.contrastText,
                        "&:hover": {
                            backgroundColor: theme.palette.GitHub?.dark
                        },
                        "&:active": {
                            backgroundColor: theme.palette?.GitHub?.dark
                        },
                        "&.Mui-disabled": {
                            backgroundColor: theme.palette.GitHub?.light,
                            color: theme.palette.GitHub?.contrastText,
                            opacity: 0.5
                        }
                    })
                })
            }
        }
    }
});

export default ExtendedTheme;