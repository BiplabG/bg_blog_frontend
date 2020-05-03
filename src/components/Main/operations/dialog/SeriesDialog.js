import React from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import { makeStyles } from "@material-ui/core/styles"

import SeriesForm from "../form/SeriesForm"

const useStyles = makeStyles(()=>({

}))

function CreateSeriesDialog(props){
    const classes = useStyles()
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogTitle>
                Create/Edit New Series
            </DialogTitle>
            <SeriesForm
                series={props.series}
                handleSubmit={props.handleSubmit}
                handleClose={props.handleClose}
            />
        </Dialog>
    )
}

export default CreateSeriesDialog

