import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { ITheme } from "../../app/theme";

export const useStyles = makeStyles<ITheme>(t => ({
    container: {
        display: "flex",
        height: "100vh",
        justifyContent: 'center',
        alignItems: 'center'
        // padding: "30% 30% 20% 30%"
    },
    form: {
        width: 555,
        height: 400,
        borderRadius: 10,
        borderColor: t.palette.primary.main,
        borderWidth: 1,
        borderStyle: 'solid',
        padding: "50px 40px"
    },
    form_item: {
        marginBottom: 30
    },
    form_item_last: {
        marginBottom: 18
    },
    img_bl: {
        position: "absolute",
        left: 0,
        bottom: 0
    },
    img_tr: {
        position: "absolute",
        right: 0,
        top: 0
    },
    button_container: {
        width: 160
    },
    label_1: {
        position: "absolute",
        top: "150px",
        left: 0
    },
    label_2: {
        position: "absolute",
        top: "150px",
        right: "200px"
    },
    logo: {
        position: "absolute",
        top: "50px",
        left: "50px"
    }
}))