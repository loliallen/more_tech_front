import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Login } from "./Login";
import Datasets from "./Datasets";
import AddDataset from "./DatasetAdd";
import { PersonalPage } from "./PersonalPage";
import { SwitchContainer } from "../containers/SwitchContainer";

export const Pages = () => (
  <Switch>
    <Route exact path="/" component={Login} />

    <SwitchContainer>
      <Header />
      <Switch>
        <Route exact path="/datasets" component={Datasets} />
        <Route exact path="/addSet" component={AddDataset} />
        <Route exact path="/personal" component={PersonalPage} />
      </Switch>
    </SwitchContainer>

  </Switch>
);
