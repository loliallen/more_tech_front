import { BrowserRouter } from "react-router-dom";

import { Pages } from "../pages";
import { ThemeProvider } from "@mui/material";
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
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </BrowserRouter>
  );
};
