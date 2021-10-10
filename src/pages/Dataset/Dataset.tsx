import { Header } from "../../components/Header";
import { PageSubHeader } from "../../components/PageSubHeader/PageSubHeader";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { useStyles } from "../DatasetAdd/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import styled from "styled-components";
import { DataSetTable } from "./DataSetTable";
import { PriceTagsRow } from "./PriceTagsRow";
import { Feature, FeatureHeader } from "./Feature";
import { Button } from "../../components/Button/Button";
import { DataSetCorTable } from "./DataSetCorrelations";
import { Calculator } from "./Calculator";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";
import { IReduxStore } from "../../store/interfaces";
import { IDataset } from "../../interfaces/dataset";
import { useRouteMatch } from "react-router";
import datasetActions from '../../store/actions/dataset.actions'

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const BottomLine = styled.div`
  height: 2px;
  margin-top: -2px;
  background-color: #fff;
  border-radius: 22px;
`;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const DSHeader = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  margin-top: 15px;
  margin-bottom: 20px;
  line-height: 125%;
  /* identical to box height, or 30px */

  color: #ffffff;
`;

const DsPropName = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  line-height: 125%;
  /* identical to box height, or 30px */

  color: #ffffff;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ColData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  align-self: center;
  margin-right: 30px;
`;

const FeatureGenerationCard = styled.div`

height: 270px;


background: #FFFFFF;
box-shadow: 10.312px 14.7534px 80px rgba(0, 0, 0, 0.07), 2.0624px 2.95068px 13px rgba(0, 0, 0, 0.035);
border-radius: 4px;
`

const ColGraphics = styled.div`
  flex: 10;
  text-align: center;
`;

const Dataset: React.FC = () => {
  const { params } = useRouteMatch<{ id: string }>();
  const id = params.id
  const dispatch = useDispatch()
  const data = useSelector<IReduxStore, IDataset | null>(s => s.dataset.current)
  const [tabId, setTabId] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabId(newValue);
  };

  const styles = useStyles();
  console.log(data)
  useEffect(() => {
    dispatch(datasetActions.getc(id))
  }, [id])
  if (!data)
    return null
  return (
    <>
      <div className={styles.container}>
        <PageTitle>{data.name}</PageTitle>
        <PageSubHeader>{data.description}</PageSubHeader>
        <PriceTagsRow
          price_all={data.price}
          price_row={data.price_per_row}
          tags={data.tags.map(t => t.name)}
        ></PriceTagsRow>
        <br></br>
        <Button>Купить датасет</Button>
        <div className={styles.wrap}>
          <Box sx={{ width: "80%" }}>
            <Tabs
              value={tabId}
              onChange={handleTabChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  height: "2px",
                  backgroundColor: "#0062FF",
                  borderRadius: "22px",
                },
              }}
            >
              <Tab label="Данные" {...a11yProps(0)} />
              <Tab label="Столбцы" {...a11yProps(1)} />
              <Tab label="Другие датасеты" {...a11yProps(2)} />
            </Tabs>
            <BottomLine></BottomLine>
            <TabPanel value={tabId} index={0}>
              <DSHeader>Превью:</DSHeader>
              {
                //@ts-ignore}
                <DataSetTable
                  features={data.analytics.insights.features_df}
                  values={data.analytics.insights.head}
                />
              }
              <br />
              <DSHeader>Генерация фичи:</DSHeader>

              <Calculator features={data.analytics.insights.features_df}>

              </Calculator>

              <br></br>
              <DSHeader>Общие сведения:</DSHeader>
              <Row>
                <ColData>
                  <Row>
                    <DsPropName>Всего строк:</DsPropName>
                    <DsPropName>
                      {data.analytics.insights["rows_count"]}
                    </DsPropName>
                  </Row>
                  <Row>
                    <DsPropName>Занимает памяти:</DsPropName>
                    <DsPropName>
                      {data.analytics.insights["memory_usage"]}
                    </DsPropName>
                  </Row>
                  <Row>
                    <DsPropName>Строк содержат Nan:</DsPropName>
                    <DsPropName>
                      {data.analytics.insights["missing_rows"]}
                    </DsPropName>
                  </Row>
                  <Row>
                    <DsPropName>Строк дублируются:</DsPropName>
                    <DsPropName>
                      {data.analytics.insights["duplicated_rows"]}
                    </DsPropName>
                  </Row>
                  <Row>
                    <DsPropName>Строк дублируются( в %):</DsPropName>
                    <DsPropName>
                      {data.analytics.insights["duplicated_rows_percents"] +
                        "%"}
                    </DsPropName>
                  </Row>
                </ColData>
                <ColGraphics>
                  <DSHeader>Корреляции:</DSHeader>
                  <DataSetCorTable
                    features={data.analytics.insights.correlations_names}
                    values={data.analytics.insights.correlations}
                  />
                </ColGraphics>
              </Row>
            </TabPanel>
            <TabPanel value={tabId} index={1}>
              {Object.keys(data.analytics.features).map((key: any) => {
                return <>
                  <Feature
                    feature={{
                      name: key,
                      //@ts-ignore
                      feature: data.analytics.features[key],
                    }}
                  />
                  <br></br>
                  <Divider light={true} />

                </>;
              })}
            </TabPanel>
            <TabPanel value={tabId} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Dataset;
