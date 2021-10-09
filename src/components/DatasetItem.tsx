import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 420px;
  height: 240px;
  border-radius: 12px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 8px;
`;

const Padding = styled.div`
  padding: 0 14px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Footer = styled.div`
  width: 100%;
  height: 56px;
  background: rgba(224, 224, 224, 0.5);
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const HeaderItem = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.005em;
  background: #0a2973;
  border-radius: 6px;
  color: #ffffff;
  padding: 2px 6px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #000000;
`;

const Author = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0168em;
  color: #414141;
`;

interface IDatasetItem {
  size: number;
  date: string;
  countOfFiles: number;
  companyLogo: string;
  datasetName: string;
  author: string;
}

const DatasetItem = ({
  size,
  date,
  countOfFiles,
  companyLogo,
  datasetName,
  author,
}: IDatasetItem) => {
  return (
    <Wrap>
      <Padding>
        <Header>
          <HeaderItem>{size} MB</HeaderItem>
          <HeaderItem>{date}</HeaderItem>
          <HeaderItem>{countOfFiles} файлов</HeaderItem>
        </Header>

        <Main>
          <Img src={companyLogo} />
        </Main>
      </Padding>

      <Footer>
        <Title>{datasetName}</Title>
        <Author>{author}</Author>
      </Footer>
    </Wrap>
  );
};

export default DatasetItem;
