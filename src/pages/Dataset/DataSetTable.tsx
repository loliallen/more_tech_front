//@ts-ignore
import DataTable from "react-data-table-component";

interface DataSetTableProps {
  features: Array<string>;
  values: any;
}

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  table:{
    style: {
        paddingLeft: "15px", 
        paddingRight: "15px"// override the row height: ;
      },
  },
  headCells: {
    style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      fontFamily: "IBM Plex Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: "24px",
      fontFeatureSettings: "'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on",
      color: "#22242A",
      margin: "0px 0px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

export const DataSetTable: React.FC<DataSetTableProps> = ({
  features,
  values,
}) => {
  const columns = features.map((feature) => {
    return {
      name: feature,
      selector: (row: any) => row[feature],
    };
  });

  return (
    <>
      <DataTable customStyles={customStyles} columns={columns} data={values} />
    </>
  );
};
