import { NavLink } from "react-router-dom"
import { useStyles } from "./style"

import logo from "../../assets/logo.svg";

export const Header = () => {
    const classes = useStyles()

    return (
        <header className={classes.wrap}>
            <img src={logo} alt="logo" className={classes.logo} />
            <div className={classes.menu}>
                <NavLink to="/addSet">
                    <p className={classes.menu_item}>Добавить сет</p>
                </NavLink>
                <p className={classes.menu_item}>Пункт меню</p>
                <p className={classes.menu_item}>Пункт меню</p>
                <p className={classes.menu_item}>Пункт меню</p>
            </div>
        </header>
    )
}
