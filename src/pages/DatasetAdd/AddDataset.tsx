import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import {useDropzone} from "react-dropzone";
import Button from "@mui/material/Button";

import {Header} from "../../components/Header";
import {StyledTextField} from "../../components/StyledTextField/StyledTextField";

import Link from "../../assets/link.svg";
import Subtract from "../../assets/Subtract.svg";
import Union from "../../assets/Union.svg";

import {useStyles} from "./styles";

const AddDataset = () => {
  const [datasetFile, setDatasetFile] = useState<any>([]);
  const onDropAccepted = (files: any) => {
    setDatasetFile(files);
  };

  const {getRootProps, getInputProps} = useDropzone({
    multiple: false,
    accept: "text/csv",
    onDropAccepted,
  });
  const styles = useStyles();

  const [datasetName, setDatasetName] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [price, setPrice] = useState("");
  const [linkOnDataset, setLinkOnDataset] = useState("");

  const createDatasetHandler = () => {
    const data = {
      datasetName,
      desc,
      tags,
      price,
      linkOnDataset,
      datasetFile,
    };
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.title}>Загрузка датасета</h1>

        <div className={styles.wrap}>
          <div className={styles.row}>
            <div className={styles.inputWrap}>
              <p className={styles.inputTitle}>Название датасета</p>

              <StyledTextField
                placeholder="Новый сет"
                value={datasetName}
                onChange={(e: {
                  target: {value: React.SetStateAction<string>};
                }) => setDatasetName(e.target.value)}
              />
            </div>

            <div className={styles.inputWrap}>
              <p className={styles.inputTitle}>Описание датасета</p>

              <StyledTextField
                multiline
                value={desc}
                onChange={(e: {
                  target: {value: React.SetStateAction<string>};
                }) => setDesc(e.target.value)}
                inputProps={{maxLength: 999}}
              />

              <p className={styles.textareaLength}>{desc.length} / 999</p>
            </div>

            <Autocomplete
              freeSolo
              style={{width: 320}}
              multiple
              options={tags}
              value={tags}
              classes={{paper: styles.paper}}
              renderInput={params => (
                <StyledTextField
                  {...params}
                  label="Fixed tag"
                  placeholder="tag"
                />
              )}
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip label={option} {...getTagProps({index})} />
                ))
              }
              onChange={(_, newValue) => {
                setTags(newValue);
              }}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputWrap}>
              <p className={styles.inputTitle}>Цена за строку</p>

              <StyledTextField
                placeholder="5141"
                value={price}
                onChange={(e: {
                  target: {value: React.SetStateAction<string>};
                }) => setPrice(e.target.value)}
              />
            </div>
            <div className={styles.huy}>
              <div className={styles.inputWrap}>
                <p style={{marginBottom: "2px"}} className={styles.inputTitle}>
                  Подгрузите файлы датасета
                </p>
                <p className={styles.loadFileText}>
                  Формат csv, exls. Максимальный размер 500Kb.
                </p>

                <section className={styles.dropZone}>
                  <div {...getRootProps({className: "dropzone"})}>
                    <input {...getInputProps()} />
                    <p className={styles.dropZoneText}>
                      Перетащите файлы в эту область или нажмите для загрузки
                    </p>
                  </div>
                </section>

                {datasetFile.map((file: any) => (
                  <div key={file.name} className={styles.fileWrap}>
                    <p className={styles.fileTitle}>{file.name}</p>

                    <div className={styles.iconWrap}>
                      <img src={Subtract} alt="" />

                      <img
                        style={{cursor: "pointer"}}
                        onClick={() => setDatasetFile([])}
                        src={Union}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{width: "356px", marginTop: "38px"}}
                className={styles.inputWrap}
              >
                <p
                  style={{display: "flex", alignItems: "cneter"}}
                  className={styles.inputTitle}
                >
                  <img style={{marginRight: "12px"}} src={Link} alt="" /> Или
                  вставьте ссылку на файл
                </p>

                <StyledTextField
                  multiline
                  maxRows={1}
                  value={linkOnDataset}
                  onChange={(e: {
                    target: {value: React.SetStateAction<string>};
                  }) => setLinkOnDataset(e.target.value)}
                  placeholder="https://"
                />
              </div>
            </div>

            <Button style={{width: 320}} variant="outlined">
              Отправить на проверку
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDataset;
