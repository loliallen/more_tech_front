import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Login } from "./Login";
import Datasets from "./Datasets";

export const Pages = () => (
    <Switch>
        <Route exact path="/" component={Login} />

        <Switch>
            <Header />
            <Route exact path="/datasets" component={Datasets} />
        </Switch>
    </Switch>
)