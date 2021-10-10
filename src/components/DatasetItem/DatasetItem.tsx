import { Grid } from "@mui/material"
import React from "react"
import { useStyles } from "./style"

type Props = {
    date: string;
    companyLogo?: string;
    datasetName: string;
    author: string;
    onClick: () => void
}

export const DatasetItem: React.FC<Props> = ({
    date,
    companyLogo,
    datasetName,
    author,
    onClick
}) => {
    const classes = useStyles()
    return (
        <Grid item>
            <div className={classes.wrap} onClick={onClick}>
                <div className={classes.padding}>
                    <div className={classes.header}>
                        <p className={classes.header_item}>{date}</p>
                    </div>
                    <div className={classes.main}>
                        {companyLogo && <img src={companyLogo} alt="companyLogo" className={classes.img} />}
                    </div>
                    <div className={classes.footer}>
                        <p className={classes.title}>{datasetName}</p>
                        <p className={classes.author}>{author}</p>
                    </div>
                </div>
            </div>
        </Grid>
    )
}
