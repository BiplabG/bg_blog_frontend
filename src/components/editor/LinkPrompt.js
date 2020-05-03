import React from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles=makeStyles(()=>({
    dialog:{
    }
}))

function LinkPrompt(props){
    function handleKeyPress(event){
        if (event.key==="Enter"){
            props.confirmLink(event)
        }
    }

    const classes=useStyles()
    return (
        <Dialog open={true} className={classes.dialog}>
        <DialogContent>
            <Typography variant="body1">Enter the Link</Typography>
            <form method='dialog'>
                <input 
                    type='text' 
                    onChange={(event) => props.setUrlValue(event.target.value)} 
                    value={props.urlValue}
                    onKeyPress={handleKeyPress}
                    />
                <br/>
                <Button variant="outlined" onMouseDown={props.confirmLink}>
                    Confirm
                </Button>
                <Button variant="outlined" onMouseDown={()=>props.setShowURLInput(false)}>
                    Cancel
                </Button>
            </form>
        </DialogContent>
        </Dialog>
    )
}

export default LinkPrompt