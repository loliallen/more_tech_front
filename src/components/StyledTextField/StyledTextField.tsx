import { TextField } from "@mui/material"
import { withStyles } from "@mui/styles"




export const StyledTextField = withStyles(t => ({
    root: {
        "& input": {
            backgroundColor: t.palette.primary.main,
            borderRadius: 4,
            zIndex: 0,
            color: t.palette.text.secondary
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {

                borderWidth: 2,
                borderColor: "white"
            },
            "&:hover fieldset": {
                borderColor: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#0062FF"
            }
        }
    },
    label: {
        background: "transparent"
    }
}))(TextField)
