import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((t) => ({
    wrap: {
        background: "#0d2663",
        width: "100%",
        height: 90,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    menu: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 40
    },
    menu_item: {
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 20,
        color: "#ffffff"
    },
    logo: {
        position: "absolute",
        left: 50,
        top: 27
    }
}))