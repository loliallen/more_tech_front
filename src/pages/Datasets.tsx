import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { DatasetItem } from "../components/DatasetItem";
import { IDataset } from "../interfaces/dataset";
import datasetActions from "../store/actions/dataset.actions";
import { IReduxStore } from "../store/interfaces";

const Datasets = () => {
  const history = useHistory()
  const datasets = useSelector<IReduxStore, IDataset[]>(s => s.dataset.list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(datasetActions.get())
  }, [])
  useEffect(() => {
    console.log(datasets)
  }, [datasets])
  const handleClick = (ds: IDataset) => {
    history.push('/dataset/'+ds.id)
  }
  return <div>
    <Grid container spacing={2}>
      {datasets.map(d => <DatasetItem
        onClick={()=>handleClick(d)}
        datasetName={d.name}
        author={d.owner.name}
        date={d.modified_at as string}
        companyLogo={d.logo}
      />)}
    </Grid>
  </div>
};

export default Datasets;
