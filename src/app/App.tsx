import DatasetItem from "../components/DatasetItem";

const datasetItem = {
  size: 1.2,
  date: "4 октября",
  countOfFiles: 512,
  companyLogo: "",
  datasetName: "Название датасета",
  author: "Автор или компания",
};

export const App = () => {
  return <DatasetItem {...datasetItem} />;
};
