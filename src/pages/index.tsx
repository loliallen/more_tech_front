import {Switch} from "react-router";
import {Route} from "react-router-dom";
import {Header} from "../components/Header";
import {Login} from "./Login";
import Datasets from "./Datasets";
import AddDataset from "./DatasetAdd";
import Dataset from "./Dataset";

export const Pages = () => (
  <Switch>
    <Route exact path="/" component={Login} />

    <Switch>
      <Route exact path="/datasets" component={Datasets} />
      <Route exact path="/addSet" component={AddDataset} />
      <Route exact path="/dataset/:datasetId" component={Dataset} />
    </Switch>
  </Switch>
);
