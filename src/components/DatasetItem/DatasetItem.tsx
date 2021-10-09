import React from "react"
import { useStyles } from "./style"

type Props = {
    size: number;
    date: string;
    countOfFiles: number;
    companyLogo: string;
    datasetName: string;
    author: string;
}

export const DatasetItem:React.FC<Props> = ({
    size,
    date,
    countOfFiles,
    companyLogo,
    datasetName,
    author
}) => {
    const classes = useStyles()
    return (
        <div className={classes.wrap}>
            <div className={classes.padding}>
                <div className={classes.header}>
                    <p className={classes.header_item}>{size} MB</p>
                    <p className={classes.header_item}>{date}</p>
                    <p className={classes.header_item}>{countOfFiles} файлов</p>
                </div>
                <div className={classes.main}>
                    <img src={companyLogo} alt="companyLogo" className={classes.img}/>
                </div>
                <div className={classes.footer}>
                    <p className={classes.title}>{datasetName}</p>
                    <p className={classes.author}>{author}</p>
                </div>
            </div>
        </div>
    )
}
