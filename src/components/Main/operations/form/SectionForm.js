import React, { Fragment, useState } from "react"

import DialogActions from "@material-ui/core/DialogActions"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"

import ImageUpload from "./ImageUpload"

const useStyles = makeStyles(() => ({
    form:{
        marginLeft: 20,
        width: 400,
        height: 400,
    },
    nameField:{
        width: 350,
    },
    descriptionField:{
        width: 350,
    }
}))

function SectionForm(props){
    const [name, setName] = useState(props.section ? props.section.name : "")
    const [description, setDescription] = useState(props.section ? props.section.description : "")

    function handleSubmit(){
        props.handleSubmit(name, description)
    }

    function handleChange(event){
        switch (event.target.name){
            case 'name':
                setName(event.target.value)
                break
            case 'description':
                setDescription(event.target.value)
                break
            default:
                break
        }
    }

    const classes = useStyles()
    return (
        <Fragment>
            <form className={classes.form}>
                <TextField 
                    required
                    label="Name"
                    name="name"
                    value={name}
                    className={classes.nameField}
                    onChange={handleChange}
                />
                <br/>
                <br/>
                <TextField
                    label="Description"
                    name="description"
                    value={description}
                    multiline
                    rows={15}
                    variant="outlined"
                    className={classes.descriptionField}
                    onChange={handleChange}
                />
                {props.section ? <ImageUpload section_id={props.section._id.$oid} /> : null}
                
            </form>
            <DialogActions>
                <Button autoFocus onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Fragment>
    )
}

export default SectionForm