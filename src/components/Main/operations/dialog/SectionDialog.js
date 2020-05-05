import React from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"

import SectionForm from "../form/SectionForm"

function SectionDialog(props){
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogTitle>
                Create New Section
            </DialogTitle>
            <SectionForm
                section={props.section}
                handleSubmit={props.handleSubmit}
                handleClose={props.handleClose}
            />
        </Dialog>
    )
}

export default SectionDialog

