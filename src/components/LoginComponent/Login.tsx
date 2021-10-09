import { TextField } from "@mui/material"
import { useStyles } from "./styles"

export const LoginComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <TextField label="some"/>
        </div>
    )
}
