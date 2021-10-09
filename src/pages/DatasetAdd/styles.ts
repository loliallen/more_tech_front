import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(t => ({
  dropZone: {
    border: "1px dashed #B1B5BB",
    boxSizing: "border-box",
    width: "384px",
    height: "98px",
    cursor: "pointer",
    padding: "12px 22px",
  },
  dropZoneText: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#FFFFFF",
  },
  container: {
    padding: "0 50px",
    marginTop: "46px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "60px",
    lineHeight: "75px",
    color: "#ffffff",
  },
  inputTitle: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#ffffff",
    marginBottom: "8px",
  },
  inputWrap: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    minWidth: "320px",
    display: "flex",
    flexDirection: "column",
    rowGap: "30px",
  },
  wrap: {
    marginTop: "30px",
    display: "flex",
    columnGap: "135px",
  },
  textareaLength: {
    marginTop: "8px",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
    textAlign: "right",
    color: "#ffffff",
  },
  fileWrap: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
  },
  iconWrap: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
  },
  fileTitle: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#FFFFFF",
  },
  loadFileText: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#FFFFFF",
    opacity: 0.5,
    marginBottom: "8px",
  },
  huy: {
    display: "flex",
    alignItems: "center",
    columnGap: "34px",
  },
  paper: {
    display: "none",
  },
}));
