import { BrowserRouter } from "react-router-dom";


import Datasets from "../pages/Datasets";
import {Header} from "../components/Header";
import {ThemeProvider} from "@mui/material";
import GlobalStyle from "../globalStyles";
import { Pages } from "../pages";
import { theme } from "./theme";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IReduxStore, AppState } from "../store/interfaces";

const datasetItem = {
  size: 1.2,
  date: "4 октября",
  countOfFiles: 512,
  companyLogo: "",
  datasetName: "Название датасета",
  author: "Автор или компания",
};

export const App = () => {
  const { authorizeStatus, authorized } = useSelector<IReduxStore, AppState>(s => s.app)

  useEffect(() => {
    if (authorizeStatus === 'done') {
      if (authorized) {
        //redirect
      } else {
        console.log('Not authed')
      }
    }
  }, [authorizeStatus, authorized])
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </BrowserRouter>
  );
};
