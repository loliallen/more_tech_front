import {DatasetItem} from "../components/DatasetItem";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Datasets from "../pages/Datasets";
import {Header} from "../components/Header";

const datasetItem = {
  size: 1.2,
  date: "4 октября",
  countOfFiles: 512,
  companyLogo: "",
  datasetName: "Название датасета",
  author: "Автор или компания",
};

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <p>Login</p>} />

        <Switch>
          <Header />
          <Route exact path="/datasets" component={Datasets} />
        </Switch>
      </Switch>
    </BrowserRouter>
  );
};
