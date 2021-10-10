import { Header } from "../../components/Header";
import { PageSubHeader } from "../../components/PageSubHeader/PageSubHeader";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { useStyles } from "../DatasetAdd/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import styled from "styled-components";
import { DataSetTable } from "./DataSetTable";
import { PriceTagsRow } from "./PriceTagsRow";
import { Feature, FeatureHeader } from "./Feature";
import { Button } from "../../components/Button/Button";
import { DataSetCorTable } from "./DataSetCorrelations";
import { Calculator } from "./Calculator";
import Divider from "@mui/material/Divider";

const data = {
  children: [],
  parents: [],
  tags: ["test1", "test2"],
  status: "ready",
  price: 12000,
  price_per_row: 12,
  created_at: "21.02.2020",
  updated_at: "21.02.2020",
  description:
    "DNA codon usage frequencies of a large sample of diverse biological organisms ",
  name: "Condon Usage Dataset",
  Features: [],
  analytics: {
    features: {
      PassengerId: {
        count: 891.0,
        mean: 446.0,
        std: 257.3538420152301,
        min: 1.0,
        "25%": 223.5,
        "50%": 446.0,
        "75%": 668.5,
        max: 891.0,
        type: "numeric",
        memory_usage: 7256,
        missing_values: 0,
      },
      Survived: {
        count: 891.0,
        mean: 0.3838383838383838,
        std: 0.4865924542648585,
        min: 0.0,
        "25%": 0.0,
        "50%": 0.0,
        "75%": 1.0,
        max: 1.0,
        type: "numeric",
        memory_usage: 7256,
        missing_values: 0,
      },
      Pclass: {
        count: 891.0,
        mean: 2.308641975308642,
        std: 0.8360712409770513,
        min: 1.0,
        "25%": 2.0,
        "50%": 3.0,
        "75%": 3.0,
        max: 3.0,
        type: "numeric",
        memory_usage: 7256,
        missing_values: 0,
      },
      Name: {
        count: 891,
        unique: 891,
        top: "Taussig, Miss. Ruth",
        freq: 1,
        type: "categorical",
        memory_usage: 7256,
        missing_values: 0,
        graphics: {
          most_common: {
            labels: [
              "Taussig, Miss. Ruth",
              "Mack, Mrs. (Mary)",
              "Zimmerman, Mr. Leo",
              "Tomlin, Mr. Ernest Portage",
              'Kelly, Mrs. Florence "Fannie"',
              "Edvardsson, Mr. Gustaf Hjalmar",
              'Mullens, Miss. Katherine "Katie"',
              "Denkoff, Mr. Mitto",
              "Panula, Mrs. Juha (Maria Emilia Ojala)",
              "Sage, Mr. George John Jr",
            ],
            values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          },
        },
      },
      Sex: {
        count: 891,
        unique: 2,
        top: "male",
        freq: 577,
        type: "categorical",
        memory_usage: 7256,
        missing_values: 0,
        graphics: {
          most_common: { labels: ["male", "female"], values: [577, 314] },
        },
      },
      Age: {
        count: 714.0,
        mean: 29.69911764705882,
        std: 14.526497332334044,
        min: 0.42,
        "25%": 20.125,
        "50%": 28.0,
        "75%": 38.0,
        max: 80.0,
        type: "numeric",
        memory_usage: 7256,
        missing_values: 177,
      },
      SibSp: {
        count: 891.0,
        mean: 0.5230078563411896,
        std: 1.1027434322934275,
        min: 0.0,
        "25%": 0.0,
        "50%": 0.0,
        "75%": 1.0,
        max: 8.0,
        type: "numeric",
        memory_usage: 7256,
        missing_values: 0,
      },
      Parch: {
        count: 891.0,
        mean: 0.38159371492704824,
        std: 0.8060572211299559,
        min: 0.0,
        "25%": 0.0,
        "50%": 0.0,
        "75%": 0.0,
        max: 6.0,
        type: "numeric",
        memory_usage: 7256,
        missing_values: 0,
      },
      Ticket: {
        count: 891,
        unique: 681,
        top: "347082",
        freq: 7,
        type: "categorical",
        memory_usage: 7256,
        missing_values: 0,
        graphics: {
          most_common: {
            labels: [
              "347082",
              "CA. 2343",
              "1601",
              "347088",
              "CA 2144",
              "3101295",
              "S.O.C. 14879",
              "382652",
              "113781",
              "17421",
            ],
            values: [7, 7, 7, 6, 6, 6, 5, 5, 4, 4],
          },
        },
      },
      Fare: {
        count: 891.0,
        mean: 32.2042079685746,
        std: 49.693428597180905,
        min: 0.0,
        "25%": 7.9104,
        "50%": 14.4542,
        "75%": 31.0,
        max: 512.3292,
        type: "numeric",
        memory_usage: 7256,
        missing_values: 0,
      },
      Cabin: {
        count: 204,
        unique: 147,
        top: "G6",
        freq: 4,
        type: "categorical",
        memory_usage: 7256,
        missing_values: 687,
        graphics: {
          most_common: {
            labels: [
              "G6",
              "C23 C25 C27",
              "B96 B98",
              "E101",
              "F2",
              "D",
              "F33",
              "C22 C26",
              "D36",
              "B5",
            ],
            values: [4, 4, 4, 3, 3, 3, 3, 3, 2, 2],
          },
        },
      },
      Embarked: {
        count: 889,
        unique: 3,
        top: "S",
        freq: 644,
        type: "categorical",
        memory_usage: 7256,
        missing_values: 2,
        graphics: {
          most_common: { labels: ["S", "C", "Q"], values: [644, 168, 77] },
        },
      },
    },
    insights: {
      rows_count: 891,
      memory_usage: 85664,
      missing_rows: 708,
      duplicated_rows: 891,
      duplicated_rows_percents: 1.0,
      correlations: [
        {
          PassengerId: 1.0,
          Survived: -0.005006660767066476,
          Pclass: -0.03514399403037967,
          Age: 0.03684719786132784,
          SibSp: -0.057526833784441705,
          Parch: -0.0016520124027188286,
          Fare: 0.01265821928749123,
        },
        {
          PassengerId: -0.005006660767066476,
          Survived: 1.0,
          Pclass: -0.33848103596101586,
          Age: -0.07722109457217737,
          SibSp: -0.03532249888573588,
          Parch: 0.08162940708348222,
          Fare: 0.2573065223849618,
        },
        {
          PassengerId: -0.03514399403037967,
          Survived: -0.33848103596101586,
          Pclass: 1.0,
          Age: -0.36922601531551574,
          SibSp: 0.0830813628456866,
          Parch: 0.01844267131074835,
          Fare: -0.5494996199439061,
        },
        {
          PassengerId: 0.03684719786132784,
          Survived: -0.07722109457217737,
          Pclass: -0.36922601531551574,
          Age: 1.0,
          SibSp: -0.3082467589236574,
          Parch: -0.18911926263203518,
          Fare: 0.09606669176903881,
        },
        {
          PassengerId: -0.057526833784441705,
          Survived: -0.03532249888573588,
          Pclass: 0.0830813628456866,
          Age: -0.3082467589236574,
          SibSp: 1.0,
          Parch: 0.41483769862015263,
          Fare: 0.15965104324216103,
        },
        {
          PassengerId: -0.0016520124027188286,
          Survived: 0.08162940708348222,
          Pclass: 0.01844267131074835,
          Age: -0.18911926263203518,
          SibSp: 0.41483769862015263,
          Parch: 1.0,
          Fare: 0.21622494477076254,
        },
        {
          PassengerId: 0.01265821928749123,
          Survived: 0.2573065223849618,
          Pclass: -0.5494996199439061,
          Age: 0.09606669176903881,
          SibSp: 0.15965104324216103,
          Parch: 0.21622494477076254,
          Fare: 1.0,
        },
      ],
      correlations_names: [
        "PassengerId",
        "Survived",
        "Pclass",
        "Age",
        "SibSp",
        "Parch",
        "Fare",
      ],
      features_df: [
        "PassengerId",
        "Survived",
        "Pclass",
        "Name",
        "Sex",
        "Age",
        "SibSp",
        "Parch",
        "Ticket",
        "Fare",
        "Cabin",
        "Embarked",
      ],
      head: [
        {
          PassengerId: 1,
          Survived: 0,
          Pclass: 3,
          Name: "Braund, Mr. Owen Harris",
          Sex: "male",
          Age: 22.0,
          SibSp: 1,
          Parch: 0,
          Ticket: "A/5 21171",
          Fare: 7.25,
          Cabin: "Nan",
          Embarked: "S",
        },
        {
          PassengerId: 2,
          Survived: 1,
          Pclass: 1,
          Name: "Cumings, Mrs. John Bradley (Florence Briggs Thayer)",
          Sex: "female",
          Age: 38.0,
          SibSp: 1,
          Parch: 0,
          Ticket: "PC 17599",
          Fare: 71.2833,
          Cabin: "C85",
          Embarked: "C",
        },
        {
          PassengerId: 3,
          Survived: 1,
          Pclass: 3,
          Name: "Heikkinen, Miss. Laina",
          Sex: "female",
          Age: 26.0,
          SibSp: 0,
          Parch: 0,
          Ticket: "STON/O2. 3101282",
          Fare: 7.925,
          Cabin: "Nan",
          Embarked: "S",
        },
        {
          PassengerId: 4,
          Survived: 1,
          Pclass: 1,
          Name: "Futrelle, Mrs. Jacques Heath (Lily May Peel)",
          Sex: "female",
          Age: 35.0,
          SibSp: 1,
          Parch: 0,
          Ticket: "113803",
          Fare: 53.1,
          Cabin: "C123",
          Embarked: "S",
        },
        {
          PassengerId: 5,
          Survived: 0,
          Pclass: 3,
          Name: "Allen, Mr. William Henry",
          Sex: "male",
          Age: 35.0,
          SibSp: 0,
          Parch: 0,
          Ticket: "373450",
          Fare: 8.05,
          Cabin: "Nan",
          Embarked: "S",
        },
      ],
    },
  },
};

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
  const [tabId, setTabId] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabId(newValue);
  };

  const styles = useStyles();
  return (
    <>
      <Header />
      <div className={styles.container}>
        <PageTitle>{data.name}</PageTitle>
        <PageSubHeader>{data.description}</PageSubHeader>
        <PriceTagsRow
          price_all={data.price}
          price_row={data.price_per_row}
          tags={data.tags}
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
