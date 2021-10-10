import { Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import useInput from "../../hooks/useInput"
import appActions from "../../store/actions/app.actions"
import { StyledTextField } from "../StyledTextField/StyledTextField"
import { useStyles } from "./styles"
import tr from "./images/top_right.png"
import bl from "./images/bottom_left.png"
import l1 from "./images/label_1.png"
import l2 from "./images/label_2.png"
import logo from "../../assets/logo.svg"
import { AppState, IReduxStore } from "../../store/interfaces"
import { useEffect } from "react"
import { useHistory } from "react-router"


type ImagesProps = {
    classNames: {
        tr: string
        bl: string
        logo: string
        l1: string
        l2: string
    }
}
const Images = ({ classNames }: ImagesProps) => {
    return <>
        <img src={bl} alt="bl" className={classNames.bl} />
        <img src={l1} alt="l1" className={classNames.l1} />
        <img src={l2} alt="l2" className={classNames.l2} />
        <img src={tr} alt="tr" className={classNames.tr} />
        <img src={logo} alt="logo" className={classNames.logo} />
    </>
}

export const LoginComponent = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const authorized = useSelector<IReduxStore, boolean>(s => s.app.authorized)
    
    const classes = useStyles()
    const login = useInput<string>("")
    const password = useInput<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(appActions.login(login.value, password.value))
    }
    useEffect(()=>{
        if(authorized)
            history.push('/datasets')
    },[authorized])
    return (
        <div className={classes.container}>
            <Images classNames={{
                tr: classes.img_tr,
                bl: classes.img_bl,
                l1: classes.label_1,
                l2: classes.label_2,
                logo: classes.logo,
            }} />
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.form_item}>
                    <Typography variant="h5" color="white">Вход</Typography>
                </div>
                <div className={classes.form_item}>
                    <Typography variant="body1" color="white">Логин</Typography>
                    <StyledTextField variant="outlined" fullWidth color="secondary" {...login.bind} />
                </div>
                <div className={classes.form_item_last}>
                    <Typography variant="body1" color="white">Пароль</Typography>
                    <StyledTextField variant="outlined" fullWidth color="secondary" {...password.bind} />
                </div>
                <div className={classes.button_container}>
                    <Button type="submit" variant="outlined" color="primary" size="large" fullWidth>Войти</Button>
                </div>
            </form>
        </div>
    )
}
