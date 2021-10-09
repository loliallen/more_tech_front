import {BrowserRouter} from "react-router-dom";

import Datasets from "../pages/Datasets";
import {Header} from "../components/Header";
import {Pages} from "../pages";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

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
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </BrowserRouter>
  );
};
