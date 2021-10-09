import { StyledTextField } from "../StyledTextField/StyledTextField"
import { useStyles } from "./styles"

export const LoginComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <StyledTextField variant="outlined"/>
        </div>
    )
}
