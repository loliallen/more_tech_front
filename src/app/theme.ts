import { createTheme, Theme } from "@mui/material";

export type ITheme = Theme

export const theme = createTheme({
    palette: {
        primary: {
            main: "#fff",
            dark: "#d9d9d9"
        },
        secondary: {
            main: '#0062FF'
        },
        text: {
            primary: "#fff",
            secondary: "#000",
        }
    },
})