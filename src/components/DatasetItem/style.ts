import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((t) => ({
    wrap: {
        width: "420px",
        height: "240px",
        borderRadius: "12px",
        background: "#fff",
        borderEndEndRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "8px",
    },
    padding: {
        padding: "0px 14px"
    },
    main: {
        display: "flex",
        alignItems: "center"
    },
    img: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    },
    footer: {
        width: "100%",
        height: "56px",
        background: "rgba(224, 224, 224, 0.5)",
        padding: "8px 12px",
        display: "flex",
        flexDirection: "column"
    },
    header: {
        display: "flex",
        alignItems: "center",
        columnGap: 10
    },
    header_item: {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "0.005em",
        background: "#0a2973",
        borderRadius: "6px",
        color: "#ffffff",
        padding: "2px 6px"
    },
    title: {
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: "0.005em",
        color: "#000000"
    },
    author: {
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: "0.0168em",
        color: "#414141"
    }
}))